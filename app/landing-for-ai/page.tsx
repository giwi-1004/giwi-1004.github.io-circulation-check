import type { Metadata } from "next"
import { LANDING_AI_CONTEXT } from "@/lib/landing-ai-context"

export const metadata: Metadata = {
  title: "랜딩 페이지 AI 분석용 내보내기",
  description:
    "동일 사이트의 히어로·문항·FAQ 등 구조화 요약(JSON). ChatGPT 등에 붙여 분석할 때 사용합니다.",
  robots: { index: false, follow: false },
}

export default function LandingForAiPage() {
  const payload = JSON.stringify(LANDING_AI_CONTEXT, null, 2)

  return (
    <main className="min-h-dvh bg-background px-4 py-6 text-foreground sm:px-6">
      <div className="mx-auto max-w-[960px]">
        <h1 className="mb-2 text-lg font-semibold tracking-tight">
          랜딩 페이지 · AI 분석용 데이터
        </h1>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          아래 JSON은 메인 랜딩과 같은 정보를 구조화한 것입니다. 복사하여 ChatGPT에 붙여 넣거나,
          <code className="rounded bg-muted px-1 py-0.5 text-xs">/api/landing-ai-context</code>
          로 받을 수 있습니다.
        </p>
        <pre className="max-h-[min(70vh,720px)] overflow-auto rounded-lg border border-border bg-muted/40 p-4 text-[13px] leading-snug">
          {payload}
        </pre>
      </div>
    </main>
  )
}
