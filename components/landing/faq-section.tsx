"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "정말 무료인가요?",
    answer: "네, 보장 확인은 완전 무료입니다. 보험 가입 권유 없이 현재 보장 상태만 확인해드립니다.",
  },
  {
    question: "어떤 서류가 필요한가요?",
    answer: "보험증권이나 보험 앱 화면만 있으면 됩니다. 없으시면 보험사 조회를 도와드립니다.",
  },
  {
    question: "상담 시간은 얼마나 걸리나요?",
    answer: "전화 상담 기준 약 10~15분 정도 소요됩니다.",
  },
  {
    question: "가입 권유를 받게 되나요?",
    answer: "아니요. 현재 보장 상태 확인이 목적이며, 원하지 않으시면 추가 연락을 드리지 않습니다.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-secondary px-4 py-10 sm:px-5 sm:py-12">
      <div className="mx-auto min-w-0 max-w-[720px]">
        <h2 className="text-[20px] font-bold text-foreground mb-6 leading-[1.4]">
          자주 묻는 질문
        </h2>
        
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-background rounded-xl border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-4 flex items-center justify-between text-left"
              >
                <span className="text-[15px] font-medium text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>
              
              <div
                className={cn(
                  "grid transition-all duration-200",
                  openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-4 pb-4 text-[14px] text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
