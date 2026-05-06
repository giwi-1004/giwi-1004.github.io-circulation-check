"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { LANDING_CTA_BUTTON_BASE } from "@/lib/landing-cta"

const questions = [
  "어지럼·두통을 자주 느낀다",
  "가슴 답답함·두근거림이 있다",
  "가족 중 뇌·심장 질환 병력이 있다",
  "내 보험에\n뇌·심장 치료비 보장이 있는지 모른다",
  "진단금은 있지만 치료비 보장은 모른다",
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
      className="bg-[#FFFFFF] px-4 py-5 sm:px-5 sm:py-8"
    >
      <div className="mx-auto min-w-0 max-w-[720px]">
        <h2 className="mb-2 flex flex-col font-normal text-foreground sm:mb-2.5">
          <span className="block text-[17px] font-bold leading-[1.38] tracking-tight text-foreground sm:text-[18px] sm:leading-[1.42]">
            뇌·심장 치료가 반복될 때
          </span>
          <span className="mt-1.5 block text-[17px] font-bold leading-[1.38] tracking-tight text-foreground sm:mt-2 sm:text-[18px] sm:leading-[1.42]">
            내 보험도 대비되어 있을까요?
          </span>
          <span className="mt-1 block text-[14px] font-normal leading-snug text-foreground sm:mt-1.5 sm:text-[15px] sm:leading-relaxed">
            아래 항목 중 해당되는 내용을 선택해주세요
          </span>
          <span className="mt-0.5 block text-[12px] leading-snug text-[#6B7280] sm:mt-1 sm:text-[13px] sm:leading-relaxed">
            <span className="block">2개 이상 해당된다면</span>
            <span className="mt-1 block sm:mt-1.5">
              보장 점검이 필요할 수 있습니다
            </span>
          </span>
        </h2>

        <div className="mt-1.5 space-y-1 sm:mt-2 sm:space-y-2.5">
          {questions.map((question, index) => (
            <button
              key={question}
              type="button"
              onClick={() => handleSelect(index)}
              className={cn(
                "box-border w-full min-w-0 rounded-[12px] border-2 border-solid px-3 py-[8.5px] text-left transition-all sm:px-4 sm:py-3.5",
                selectedAnswers[index]
                  ? "border-[#1D4ED8] bg-[#DBEAFE] shadow-[0_2px_8px_rgba(29,78,216,0.18)] ring-1 ring-[#3B82F6]/35"
                  : "border-[#E5E7EB] bg-[#F9FAFB] hover:border-[#D1D5DB]"
              )}
            >
              <div className="flex min-w-0 items-start gap-1 sm:gap-2 sm:items-center md:gap-2.5">
                <div
                  className={cn(
                    "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-solid transition-all sm:mt-0 sm:h-[22px] sm:w-[22px]",
                    selectedAnswers[index]
                      ? "border-[#1E40AF] bg-[#1D4ED8] shadow-[0_1px_4px_rgba(30,64,175,0.35)]"
                      : "border-[#E5E7EB] bg-transparent"
                  )}
                >
                  {selectedAnswers[index] && (
                    <svg
                      className="h-3 w-3 text-white sm:h-3.5 sm:w-3.5"
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
                <span className="line-clamp-2 min-w-0 flex-1 whitespace-pre-line text-left text-[14px] leading-[1.28] text-foreground sm:text-[15px] sm:leading-relaxed">
                  {question}
                </span>
              </div>
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className={cn(LANDING_CTA_BUTTON_BASE, "mt-4 w-full sm:mt-6")}
        >
          내 보험 보장 구조 확인하기
        </button>
      </div>
    </section>
  )
}
