"use client"

import { useState } from "react"

import { trackCtaClick } from "@/lib/gtag"
import { LANDING_CTA_BUTTON_BASE } from "@/lib/landing-cta"
import { cn } from "@/lib/utils"

const questions = [
  "어지럼·두통을 자주 느낀다",
  "가슴 답답함·두근거림이 있다",
  "가족 중 뇌·심장 질환 병력이 있다",
  "보험 가입 후 한 번도 점검한 적 없다",
  "진단금은 있지만 치료비 보장인지 모른다",
]

interface CheckQuestionsSectionProps {
  onCtaClick: () => void
}

export function CheckQuestionsSection({ onCtaClick }: CheckQuestionsSectionProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<boolean[]>(
    new Array(questions.length).fill(false),
  )

  const handleSelect = (index: number) => {
    const next = [...selectedAnswers]
    next[index] = !next[index]
    setSelectedAnswers(next)
  }

  const selectedCount = selectedAnswers.filter(Boolean).length
  const urgent = selectedCount >= 2
  const ctaLabel = urgent
    ? "⚠ 지금 바로 확인이 필요합니다 →"
    : "내 보험 순환계 공백 지금 확인하기"

  return (
    <section id="check-questions" className="bg-[#0F3460] px-7 py-[60px]">
      <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#C9A84C]">
        보장 점검
      </p>
      <h2 className="mb-1.5 font-sans text-[22px] font-bold leading-[1.4] text-white">
        내 보험,
        <br />
        치료비까지 준비되어 있을까요?
      </h2>
      <p className="mb-2 text-[13px] leading-[1.7] text-white/45">
        아래 항목 중 해당되는 내용을 선택해주세요
      </p>
      <span className="mb-7 inline-block rounded-[3px] border border-[rgba(201,168,76,0.25)] bg-[rgba(201,168,76,0.12)] px-3 py-1 text-[11px] tracking-[0.03em] text-[#C9A84C]">
        2개 이상이면 보장 점검이 필요합니다
      </span>

      <div className="mb-8 flex flex-col gap-2.5">
        {questions.map((question, index) => (
          <button
            key={question}
            type="button"
            onClick={() => handleSelect(index)}
            className={cn(
              "flex min-h-[48px] items-center gap-2.5 rounded-md border px-3 py-3 text-left transition-all",
              selectedAnswers[index]
                ? "border-[rgba(201,168,76,0.4)] bg-[rgba(201,168,76,0.1)]"
                : "border-white/[0.08] bg-white/[0.05] hover:border-[rgba(201,168,76,0.4)] hover:bg-[rgba(201,168,76,0.1)]",
            )}
          >
            <span
              className={cn(
                "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-[1.5px] transition-all",
                selectedAnswers[index]
                  ? "border-[#C9A84C] bg-[#C9A84C] after:h-[9px] after:w-[5px] after:translate-x-[-1px] after:translate-y-[-1px] after:rotate-[40deg] after:border-b-2 after:border-r-2 after:border-[#0D1B2A] after:content-['']"
                  : "border-white/25",
              )}
            />
            <span className="check-label break-keep text-[13px] leading-none text-white/85">{question}</span>
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={() => {
          trackCtaClick(ctaLabel, "자가체크")
          onCtaClick()
        }}
        className={LANDING_CTA_BUTTON_BASE}
        style={
          urgent
            ? {
                background: "linear-gradient(135deg, #F6A51C 0%, #DC8117 100%)",
                boxShadow: "0 6px 20px rgba(246,165,28,0.4)",
                color: "#1A1A1A",
              }
            : {
                background: "",
                boxShadow: "",
                color: "",
              }
        }
      >
        {ctaLabel}
      </button>
    </section>
  )
}
