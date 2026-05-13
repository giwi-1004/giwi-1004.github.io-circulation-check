const rows = [
  { general: "진단 시 1회 지급", premium: "치료마다 반복 지급" },
  { general: "재치료비 미보장", premium: "재발 시 재지급 가능" },
  { general: "재활비 미보장", premium: "재활치료 연간 보장" },
] as const

export function CompareSection() {
  return (
    <section className="bg-[#FAF7F0] px-7 py-[60px]">
      <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#C9A84C]">
        보장 구조 비교
      </p>
      <h2 className="mb-8 font-sans text-[22px] font-bold leading-[1.4] text-[#0D1B2A]">
        보장 구조,
        <br />
        이렇게 다릅니다
      </h2>

      <div className="overflow-hidden rounded-lg border border-[rgba(201,168,76,0.25)] bg-white">
        <div className="grid grid-cols-2">
          <div className="compare-head-cell general border-r border-[rgba(201,168,76,0.25)] bg-[#4573AC] px-3 py-3 text-center text-[12px] font-semibold tracking-[0.03em] text-white/60">
            일반 보험
          </div>
          <div className="bg-[#0D1B2A] px-3 py-3 text-center text-[12px] font-semibold tracking-[0.03em] text-[#E2C97E]">
            순환계 통합치료비
          </div>
        </div>

        {rows.map((row) => (
          <div key={row.general} className="grid grid-cols-2 border-t border-black/[0.06]">
            <div className="compare-cell general flex items-center gap-1.5 border-r border-black/[0.06] bg-[#D4DCE3] px-2.5 py-3 text-[12px] leading-none whitespace-nowrap text-[#1A3050]">
              <span className="shrink-0 text-[12px] text-[#C0392B]">✕</span>
              {row.general}
            </div>
            <div className="compare-cell premium flex items-center gap-1.5 px-2.5 py-3 text-[12px] font-medium leading-none whitespace-nowrap text-[#0D1B2A]">
              <span className="shrink-0 text-[12px] text-[#1A6B4A]">✓</span>
              {row.premium}
            </div>
          </div>
        ))}
      </div>

      <div className="highlight-bar mt-5 rounded-md bg-gradient-to-br from-[#1C5290] to-[#2762A3] px-5 py-5 text-center">
        <strong className="mb-1 block font-sans text-[19px] font-bold text-[#E2C97E]">
          혈전용해치료 최대 2,500만원
        </strong>
        <span className="text-[11px] tracking-[0.04em] text-white/45">
          약관 조건 충족 시 &nbsp;/&nbsp; 연간 한도 내 반복 지급
        </span>
      </div>
    </section>
  )
}
