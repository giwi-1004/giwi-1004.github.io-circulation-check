"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "가입 권유를 받게 되나요?",
    answer: "원하지 않으시면 진행하지 않습니다.",
  },
  {
    question: "정말 무료인가요?",
    answer: "네. 보장 구조 확인은 무료입니다.",
  },
  {
    question: "무엇을 확인하나요?",
    answer: "진단금 중심인지 치료비 구조인지 확인합니다.",
  },
  {
    question: "기존 보험을 해지해야 하나요?",
    answer:
      "기존 보험 해지 여부와는 별개로,\n현재 보장 구조를 먼저 확인하는 과정입니다.",
  },
  {
    question: "보험증권 없어도 되나요?",
    answer: "가능합니다. 앱 화면으로도 확인 가능합니다.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-[#F9FAFB] px-4 py-5 sm:px-5 sm:py-8">
      <div className="mx-auto min-w-0 max-w-[720px]">
        <h2 className="mb-4 text-[20px] font-semibold leading-[1.4] text-[#6B7280] sm:mb-5">
          자주 묻는 질문
        </h2>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[11px] border border-[#E5E7EB] bg-[#FFFFFF]"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between px-3.5 py-2.5 text-left sm:px-4 sm:py-3.5"
              >
                <span className="pr-3 text-[15px] font-medium leading-snug text-[#6B7280]">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-[#6B7280] transition-transform",
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
                  <p className="whitespace-pre-line px-3.5 pb-2.5 text-[14px] leading-relaxed text-[#6B7280] sm:px-4 sm:pb-3.5">
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
