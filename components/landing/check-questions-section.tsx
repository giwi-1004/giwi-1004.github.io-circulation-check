"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { LANDING_CTA_BUTTON_BASE } from "@/lib/landing-cta"

const questions = [
  "어지럼·두통을 자주 느낀다",
  "가슴 답답함·두근거림이 있다",
  "가족 중 뇌·심장 질환 병력이 있다",
  "보험 가입 후 한 번도 점검한 적 없다",
  "진단금은 있지만 치료비 보장인지 모른다",
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
      className="bg-[#FFFFFF] px-4 py-4 sm:px-5 sm:py-4"
    >
      <div className="mx-auto min-w-0 max-w-[720px]">
        <h2 className="mb-2 flex flex-col font-normal text-foreground sm:mb-2.5">
          <span className="block text-[17px] font-bold leading-[1.38] tracking-tight text-foreground sm:text-[18px] sm:leading-[1.42]">
            내 보험,
          </span>
          <span className="mt-1.5 block text-[17px] font-bold leading-[1.38] tracking-tight text-foreground sm:mt-2 sm:text-[18px] sm:leading-[1.42]">
            치료비까지 준비되어 있을까요?
          </span>
          <span className="mt-1 block text-[14px] font-normal leading-snug text-foreground sm:mt-1.5 sm:text-[15px] sm:leading-relaxed">
            아래 항목 중 해당되는 내용을 선택해주세요
          </span>
          <span className="mt-1 block text-[13px] leading-snug text-[#888] sm:mt-1.5 sm:leading-relaxed">
            2개 이상이면 보장 점검이 필요합니다
          </span>
        </h2>

        <div className="mt-2 space-y-2 sm:mt-2 sm:space-y-2.5">
          {questions.map((question, index) => (
            <button
              key={question}
              type="button"
              onClick={() => handleSelect(index)}
              className="box-border flex min-h-[56px] w-full min-w-0 items-center rounded-[12px] px-3 py-4 text-left text-[14px] transition-all sm:text-[15px]"
              style={
                selectedAnswers[index]
                  ? {
                      border: "2px solid #E8591A",
                      backgroundColor: "#FFF5F0",
                      color: "#1B2A4A",
                    }
                  : {
                      border: "1px solid #E8E8E8",
                      backgroundColor: "#ffffff",
                      color: "#333333",
                    }
              }
            >
              <div className="flex min-w-0 flex-1 items-center gap-2 md:gap-2.5">
                <div
                  className={cn(
                    "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-solid transition-all sm:h-[22px] sm:w-[22px]",
                    selectedAnswers[index]
                      ? "border-orange-500 bg-orange-500 shadow-[0_1px_4px_rgba(249,115,22,0.25)]"
                      : "border-gray-300 bg-transparent"
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
                <span className="line-clamp-2 min-w-0 flex-1 text-left text-[14px] leading-snug sm:text-[15px] sm:leading-relaxed">
                  {question}
                </span>
              </div>
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className={cn(LANDING_CTA_BUTTON_BASE, "mt-4 w-full sm:mt-4")}
        >
          내 보험 보장 구조 확인하기
        </button>
      </div>
    </section>
  )
}
