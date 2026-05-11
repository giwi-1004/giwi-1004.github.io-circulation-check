import { LANDING_AI_CONTEXT } from "@/lib/landing-ai-context"

/** ChatGPT 등에서 구조화 데이터를 그대로 가져갈 때 사용 (GET). */
export async function GET() {
  return Response.json(LANDING_AI_CONTEXT, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
