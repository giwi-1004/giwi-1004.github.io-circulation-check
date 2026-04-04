"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { LANDING_CTA_BUTTON_CLASS } from "@/lib/landing-cta"

const questions = [
  "보험 가입 후 5년 이상 점검하지 않음",
  "심장·뇌 보장 여부를 정확히 모름",
  "가입한 특약 내용을 제대로 모름",
  "가족력 또는 건강 문제가 있어 걱정됨",
  "보험료 대비 보장이 적절한지 모름",
]

interface CheckQuestionsSectionProps {
  onComplete: (count: number) => void
}

export function CheckQuestionsSection({ onComplete }: CheckQuestionsSectionProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<boolean[]>(
    new Array(questions.length).fill(false)
  )

  const handleSelect = (index: number) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[index] = !newAnswers[index]
    setSelectedAnswers(newAnswers)
  }

  const selectedCount = selectedAnswers.filter(Boolean).length

  const handleSubmit = () => {
    onComplete(selectedCount)
  }

  return (
    <section
      id="check-questions"
      className="bg-[#FFFFFF] px-5 py-10 sm:px-5 sm:py-10"
    >
      <div className="mx-auto min-w-0 max-w-[720px]">
        <h2 className="mb-6 flex flex-col gap-3 text-[15px] font-normal leading-relaxed text-foreground">
          <span>
            내 보험,
            <br />
            <span className="font-bold">제대로 준비되어 있을까요?</span>
          </span>
          <span className="font-medium text-foreground">1분이면 확인 가능합니다</span>
          <span>아래 항목 중 해당되는 내용을 선택해주세요</span>
        </h2>

        <div className="mb-6 space-y-3">
          {questions.map((question, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleSelect(index)}
              className={cn(
                "w-full min-w-0 rounded-[12px] border border-solid p-4 text-left transition-all",
                selectedAnswers[index]
                  ? "border-2 border-[#2563EB] bg-[#F9FAFB]"
                  : "border-[#E5E7EB] bg-[#F9FAFB] hover:border-[#D1D5DB]"
              )}
            >
              <div className="flex min-w-0 items-start gap-2.5 sm:items-center sm:gap-3">
                <div
                  className={cn(
                    "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-solid transition-all",
                    selectedAnswers[index]
                      ? "border-[#1D4ED8] bg-[#1D4ED8]"
                      : "border-[#E5E7EB] bg-transparent"
                  )}
                >
                  {selectedAnswers[index] && (
                    <svg
                      className="h-3.5 w-3.5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
                <span className="min-w-0 flex-1 text-left text-[15px] leading-relaxed text-foreground">
                  {question}
                </span>
              </div>
            </button>
          ))}
        </div>

        <p className="mb-6 text-center text-[15.96px] leading-relaxed text-[#6B7280]">
          <span className="font-medium">2개 이상 해당되면</span>
          <br />
          <span>보험 점검이 필요할 수 있습니다</span>
        </p>

        <button
          type="button"
          onClick={handleSubmit}
          className={LANDING_CTA_BUTTON_CLASS}
        >
          결과 확인하기
        </button>
      </div>
    </section>
  )
}
