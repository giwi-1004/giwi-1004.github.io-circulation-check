"use client"

const compareCards: { title: string; lines: string[] }[] = [
  {
    title: "기존 보험",
    lines: ["진단 시", "1회 지급 중심"],
  },
  {
    title: "확인이 필요한 부분",
    lines: ["치료가 반복될 때", "계속 대응 가능한 구조인지"],
  },
]

export function SolutionStructureSection() {
  return (
    <section className="bg-[#FFFFFF] px-4 py-8 sm:px-5 sm:py-8">
      <div className="mx-auto min-w-0 max-w-[720px]">
        <ul className="grid list-none grid-cols-1 gap-3 p-0 text-center sm:grid-cols-2">
          {compareCards.map((item) => (
            <li
              key={item.title}
              className="rounded-[12px] border border-[#E5E7EB] bg-[#FAFAFA] px-3 py-3 sm:px-4 sm:py-3.5"
            >
              <p className="mb-2 text-[17px] font-bold leading-snug text-[#C2410C] sm:text-[18px]">
                {item.title}
              </p>
              <p className="text-[14px] font-semibold leading-[1.45] text-[#374151] sm:text-[15px]">
                {item.lines[0]}
                <br />
                {item.lines[1]}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
