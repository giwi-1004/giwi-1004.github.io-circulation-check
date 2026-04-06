import { createClient } from "@supabase/supabase-js"

import {
  formatKoreanPhoneForStorage,
  normalizeKoreanPhoneToDigits,
} from "@/lib/normalize-kr-phone"

export function isPublicSupabaseLeadConfigured(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() &&
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim(),
  )
}

export type SubmitLeadResult = { ok: true } | { ok: false; message: string }

async function tryAnonInsert(
  name: string,
  phoneStored: string,
): Promise<SubmitLeadResult | null> {
  if (!isPublicSupabaseLeadConfigured()) return null

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!.trim()
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!.trim()
  const supabase = createClient(url, anonKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  })

  const { error } = await supabase.from("lead_requests").insert({
    name,
    phone: phoneStored,
  })

  if (error) {
    console.error("[submit-landing-lead] Supabase anon insert:", error.message)
    return { ok: false, message: "저장에 실패했습니다. 잠시 후 다시 시도해주세요." }
  }

  return { ok: true }
}

/**
 * 배포 서버에 Secret 키가 없어도(503), NEXT_PUBLIC_* 가 빌드에 있으면 브라우저 anon으로 먼저 저장.
 * 그다음 /api/leads 백업(서버 Secret 있을 때).
 * 정적 호스팅(404)은 anon 재시도.
 */
export async function submitLandingLead(
  name: string,
  phoneInput: string,
): Promise<SubmitLeadResult> {
  const trimmedName = name.trim()
  const trimmedPhone = phoneInput.trim()
  if (!trimmedName || !trimmedPhone) {
    return { ok: false, message: "이름과 전화번호를 입력해주세요." }
  }

  const phoneDigits = normalizeKoreanPhoneToDigits(trimmedPhone)
  if (phoneDigits.length < 10 || phoneDigits.length > 11) {
    return { ok: false, message: "전화번호를 올바르게 입력해주세요." }
  }

  const phoneStored = formatKoreanPhoneForStorage(phoneDigits)
  const payload = { name: trimmedName, phone: trimmedPhone }

  const early = await tryAnonInsert(trimmedName, phoneStored)
  if (early?.ok === true) return { ok: true }

  let useAnonFallback = false
  let apiMessage: string | undefined

  try {
    const res = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })

    const ct = res.headers.get("content-type") ?? ""
    let data: { ok?: unknown; message?: string } | null = null
    if (ct.includes("application/json")) {
      data = (await res.json().catch(() => null)) as { ok?: unknown; message?: string } | null
    }

    const apiAccepted =
      res.status === 201 &&
      data != null &&
      typeof data === "object" &&
      data.ok === true

    if (apiAccepted) return { ok: true }

    apiMessage = data?.message
    const spaOrMissingApi =
      res.status === 404 ||
      res.status === 405 ||
      (res.ok && !apiAccepted)

    if (spaOrMissingApi) useAnonFallback = true
    else if (res.status === 503 && isPublicSupabaseLeadConfigured()) {
      useAnonFallback = true
    } else {
      return {
        ok: false,
        message: apiMessage ?? "저장에 실패했습니다. 잠시 후 다시 시도해주세요.",
      }
    }
  } catch {
    if (isPublicSupabaseLeadConfigured()) useAnonFallback = true
    else {
      return {
        ok: false,
        message: "네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.",
      }
    }
  }

  if (!useAnonFallback) {
    return {
      ok: false,
      message: apiMessage ?? "저장에 실패했습니다. 잠시 후 다시 시도해주세요.",
    }
  }

  const late = await tryAnonInsert(trimmedName, phoneStored)
  if (late?.ok === true) return { ok: true }
  if (late?.ok === false) return late

  return {
    ok: false,
    message:
      "접수 서버에 연결할 수 없습니다. 사이트 관리자에게 문의하거나 잠시 후 다시 시도해주세요.",
  }
}
