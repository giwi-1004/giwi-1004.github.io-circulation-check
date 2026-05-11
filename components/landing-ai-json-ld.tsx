import { LANDING_AI_CONTEXT } from "@/lib/landing-ai-context"

function buildJsonLd() {
  const faqSection = LANDING_AI_CONTEXT.sections.find((s) => s.id === "faq")
  const faqItems =
    faqSection && "items" in faqSection
      ? faqSection.items.map((item) => ({
          "@type": "Question" as const,
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        }))
      : []

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: LANDING_AI_CONTEXT.meta.title,
        description: LANDING_AI_CONTEXT.meta.description,
        inLanguage: LANDING_AI_CONTEXT.locale,
      },
      ...(faqItems.length
        ? [
            {
              "@type": "FAQPage",
              mainEntity: faqItems,
            },
          ]
        : []),
    ],
  }
}

/** 검색·스크립트 도구가 FAQ·페이지 요약을 파싱하기 쉽도록 메타데이터를 보강합니다. */
export function LandingAiJsonLd() {
  const json = JSON.stringify(buildJsonLd())

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  )
}
