"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

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
      className="bg-secondary px-4 py-10 sm:px-5 sm:py-12"
    >
      <div className="mx-auto min-w-0 max-w-[720px]">
        <h2 className="mb-6 flex flex-col gap-3 text-[15px] font-normal leading-relaxed text-foreground">
          <span>
            내 보험,
            <br />
            제대로 준비되어 있을까요?
          </span>
          <span className="font-bold">1분이면 확인 가능합니다</span>
          <span>아래 항목 중 해당되는 내용을 선택해주세요</span>
        </h2>
        
        <div className="space-y-3 mb-6">
          {questions.map((question, index) => (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              className={cn(
                "w-full min-w-0 rounded-xl border-2 p-3 text-left transition-all sm:p-4",
                selectedAnswers[index]
                  ? "bg-primary/10 border-primary"
                  : "bg-background border-border hover:border-primary/50"
              )}
            >
              <div className="flex min-w-0 items-start gap-2.5 sm:items-center sm:gap-3">
                <div
                  className={cn(
                    "w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all",
                    selectedAnswers[index]
                      ? "bg-primary border-primary"
                      : "border-border"
                  )}
                >
                  {selectedAnswers[index] && (
                    <svg
                      className="w-3.5 h-3.5 text-primary-foreground"
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

        <p className="mb-6 text-center text-[15.96px] leading-relaxed">
          <span className="font-bold text-accent">2개 이상 해당되면</span>
          <br />
          <span className="text-muted-foreground">보험 점검이 필요할 수 있습니다</span>
        </p>

        <button
          onClick={handleSubmit}
          className="h-[44.8px] w-full rounded-[9.6px] text-[13px] font-bold shadow-[0px_3.2px_9.6px_rgba(0,0,0,0.1)] bg-primary hover:bg-primary/90 text-primary-foreground transition-colors"
        >
          결과 확인하기
        </button>
      </div>
    </section>
  )
}
