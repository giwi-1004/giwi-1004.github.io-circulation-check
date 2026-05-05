"use client"

const costItems = [
  {
    title: "중환자실 치료",
    costHighlight: "약 2,000만원 이상 발생",
    note: "갑작스럽게 발생할 수 있습니다",
  },
  {
    title: "체외순환 치료",
    costHighlight: "약 1,000만원 이상 발생",
    note: "예측하기 어렵습니다",
  },
  {
    title: "혈전용해 치료",
    costHighlight: "최대 2,500만원 발생",
    note: "치료 상황에 따라 달라집니다",
  },
] as const

export function CostShockSection() {
  return (
    <section className="bg-[#F7F7F7] px-5 py-10 sm:px-5 sm:py-10">
      <div className="mx-auto min-w-0 max-w-[720px]">
        <p className="mb-6 text-[16.5px] font-normal leading-relaxed text-foreground">
          이런 상황이 발생하면
          <br />
          생각보다 큰 치료비가 발생합니다
        </p>
        <div className="grid grid-cols-1 gap-4">
          {costItems.map((item, index) => (
            <div
              key={index}
              className="group rounded-[12px] border border-[#E5E7EB] bg-[#F0F0F0] p-5 transition-shadow hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
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
                {item.costHighlight}
              </p>
              <p className="text-[14px] leading-relaxed text-[#525252]">
                <span className="mr-1.5 inline-block align-top text-[#474747]" aria-hidden>
                  →
                </span>
                <span className="inline-block whitespace-pre-line">{item.note}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
