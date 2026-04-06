import { createClient, type SupabaseClient } from "@supabase/supabase-js"

/**
 * 서버 전용. SUPABASE_SERVICE_ROLE_KEY 는 브라우저에 노출하면 안 됩니다.
 *
 * URL: SUPABASE_URL 또는 NEXT_PUBLIC_SUPABASE_URL (둘 중 하나)
 * 키: SUPABASE_SERVICE_ROLE_KEY (Project Settings → API → service_role secret)
 */
export function getSupabaseAdmin(): SupabaseClient {
  const url =
    process.env.SUPABASE_URL?.trim() ||
    process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() ||
    ""
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim() || ""

  if (!url || !serviceRoleKey) {
    throw new Error("SUPABASE_URL 또는 SUPABASE_SERVICE_ROLE_KEY 가 설정되지 않았습니다.")
  }

  return createClient(url, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  })
}

export function isSupabaseConfigured(): boolean {
  const url =
    process.env.SUPABASE_URL?.trim() ||
    process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() ||
    ""
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim() || ""
  return Boolean(url && key)
}
