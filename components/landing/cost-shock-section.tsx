"use client"

const costItems = [
  {
    title: "스텐트 삽입술 (PCI)",
    costHighlight: "최소 1,000만원 이상 발생",
    note: "갑작스럽게 발생합니다",
  },
  {
    title: "심장 수술 (개심술 등)",
    costHighlight: "최소 4,000만원 이상 발생",
    note: "대부분 대비 없이 맞이합니다",
  },
  {
    title: "뇌혈관 수술",
    costHighlight: "최소 2,000만원 이상 발생",
    note: "치료 이후 비용이 더 늘어납니다",
  },
] as const

export function CostShockSection() {
  return (
    <section className="bg-[#F7F7F7] px-5 py-10 sm:px-5 sm:py-10">
      <div className="mx-auto min-w-0 max-w-[720px]">
        <div className="grid grid-cols-1 gap-4">
          {costItems.map((item, index) => (
            <div
              key={index}
              className="group rounded-[12px] border border-[#E5E7EB] bg-[#E0E0E0] p-5 transition-shadow hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
            >
              <p className="mb-2 text-[14px] leading-snug text-[#525252]">
                {item.title}
              </p>
              <p
                className={
                  index === 0
                    ? "mb-2 text-[18px] font-bold leading-snug text-[#9B340A]"
                    : "mb-2 text-[18px] font-semibold leading-snug text-[#9B340A]"
                }
              >
                <span className="mr-1.5 inline-block" aria-hidden>
                  👉
                </span>
                {item.costHighlight}
              </p>
              <p className="text-[14px] leading-relaxed text-[#525252]">
                <span className="mr-1.5 inline-block text-[#474747]" aria-hidden>
                  →
                </span>
                {item.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
