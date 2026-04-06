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

type PublicClientConfig = { url: string; anonKey: string }

/** 빌드에 NEXT_PUBLIC_* 가 없을 때, 서버 환경 변수만으로 런타임 조회 */
async function fetchRuntimePublicConfig(): Promise<PublicClientConfig | null> {
  if (typeof window === "undefined") return null
  try {
    const res = await fetch("/api/lead-supabase-public")
    const data = (await res.json()) as {
      ok?: boolean
      url?: string
      anonKey?: string
    }
    if (!data?.ok || !data.url?.trim() || !data.anonKey?.trim()) return null
    return { url: data.url.trim(), anonKey: data.anonKey.trim() }
  } catch {
    return null
  }
}

async function resolvePublicClientConfig(): Promise<PublicClientConfig | null> {
  const u = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim()
  const k = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim()
  if (u && k) return { url: u, anonKey: k }
  return fetchRuntimePublicConfig()
}

async function tryAnonInsertWithConfig(
  name: string,
  phoneStored: string,
  pub: PublicClientConfig,
): Promise<SubmitLeadResult> {
  const supabase = createClient(pub.url, pub.anonKey, {
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
 * 1) anon 저장: NEXT_PUBLIC_* 또는 /api/lead-supabase-public(서버의 SUPABASE_URL+SUPABASE_ANON_KEY)
 * 2) /api/leads 백업(Secret 있을 때)
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

  const pub = await resolvePublicClientConfig()
  if (pub) {
    const early = await tryAnonInsertWithConfig(trimmedName, phoneStored, pub)
    if (early.ok) return { ok: true }
  }

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
    else if (res.status === 503 && pub) useAnonFallback = true
    else {
      return {
        ok: false,
        message: apiMessage ?? "저장에 실패했습니다. 잠시 후 다시 시도해주세요.",
      }
    }
  } catch {
    if (pub) useAnonFallback = true
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

  if (pub) {
    const late = await tryAnonInsertWithConfig(trimmedName, phoneStored, pub)
    if (late.ok) return { ok: true }
    if (!late.ok) return late
  }

  return {
    ok: false,
    message:
      "접수 서버에 연결할 수 없습니다. 사이트 관리자에게 문의하거나 잠시 후 다시 시도해주세요.",
  }
}
