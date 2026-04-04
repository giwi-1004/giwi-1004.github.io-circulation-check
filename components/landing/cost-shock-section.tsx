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
    <section className="bg-secondary px-4 py-10 sm:px-5 sm:py-12">
      <div className="mx-auto min-w-0 max-w-[720px]">
        <div className="grid grid-cols-1 gap-4">
          {costItems.map((item, index) => (
            <div
              key={index}
              className="bg-background rounded-xl border border-border p-5"
            >
              <p className="mb-2 text-[14px] text-muted-foreground leading-snug">
                {item.title}
              </p>
              <p className="mb-2 text-[18px] font-bold leading-snug text-accent">
                <span className="mr-1.5 inline-block" aria-hidden>
                  👉
                </span>
                {item.costHighlight}
              </p>
              <p className="text-[14px] leading-relaxed text-muted-foreground">
                <span className="mr-1.5 inline-block text-foreground/70" aria-hidden>
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
