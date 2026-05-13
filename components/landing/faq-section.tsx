"use client"

import { useState } from "react"

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
  {
    question: "치료비 보장과 진단금은 어떻게 다른가요?",
    answer:
      "진단금은 진단 시 1회 지급되는 구조입니다.\n치료비 보장은 실제 치료가 발생할 때마다\n연간 한도 내에서 보험금이 지급되는 구조로,\n재입원·재시술·재활치료 등\n반복 치료 상황에서 실질적인 보장을 받을 수 있습니다.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="faq-section bg-white px-6 py-9">
      <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#C9A84C]">
        자주 묻는 질문
      </p>
      <h2 className="mb-8 font-sans text-[22px] font-bold text-[#0D1B2A]">FAQ</h2>

      <div>
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index
          return (
            <div key={faq.question} className="border-b border-black/[0.07]">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="faq-q flex w-full items-center justify-between gap-3 py-[13px] text-left text-[14px] font-medium text-[#0D1B2A]"
              >
                {faq.question}
                <span
                  className="h-[18px] w-[18px] shrink-0 border-b-[1.5px] border-r-[1.5px] border-[#6B7A8D] transition-transform"
                  style={{
                    transform: isOpen
                      ? "rotate(-135deg) translate(-3px, -3px)"
                      : "rotate(45deg) translate(-3px, -3px)",
                  }}
                />
              </button>
              {isOpen ? (
                <p className="whitespace-pre-line pb-[18px] text-[13px] leading-[1.9] text-[#6B7A8D]">
                  {faq.answer}
                </p>
              ) : null}
            </div>
          )
        })}
      </div>
    </section>
  )
}
