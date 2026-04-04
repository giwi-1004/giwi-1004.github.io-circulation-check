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
    <section className="bg-secondary px-4 py-10 sm:px-5 sm:py-12">
      <div className="mx-auto min-w-0 max-w-[720px]">
        <h2 className="text-center text-[20px] font-bold text-foreground mb-6 leading-[1.4]">
          혹시 이런 경험 있으신가요?
        </h2>
        
        <ul className="space-y-4">
          {checkItems.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-primary" />
              </div>
              <span className="text-[15px] text-foreground leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
