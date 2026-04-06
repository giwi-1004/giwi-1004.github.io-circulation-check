"use client"

import { Check } from "lucide-react"

const checkItems = [
  "최근 어지럼을 느낀 적이 있다",
  "가슴이 답답한 느낌이 든 적 있다",
  "가슴 통증을 경험한 적이 있다",
  "심장이 두근거린 적이 있다",
  "숨이 차는 경우가 종종 있다",
  "보험 보장을 확인해본 적이 없다",
]

export function SelfAwarenessSection() {
  return (
    <section className="bg-[#F7F7F7] px-5 py-10 sm:px-5 sm:py-10">
      <div className="mx-auto min-w-0 max-w-[720px]">
        <h2 className="mb-6 text-left text-[20px] font-bold leading-[1.4] text-foreground">
          혹시 이런 경험 있으신가요?
        </h2>

        <ul className="space-y-4">
          {checkItems.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#93C5FD]/25">
                <Check className="h-3 w-3 text-[#93C5FD]" strokeWidth={2.5} />
              </div>
              <span className="text-[15px] font-[480] leading-relaxed text-foreground">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
