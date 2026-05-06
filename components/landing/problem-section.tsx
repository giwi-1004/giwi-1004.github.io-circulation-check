"use client"

export function ProblemSection() {
  return (
    <section className="bg-[#FFFFFF] px-4 py-8 sm:px-5 sm:py-8">
      <div className="mx-auto min-w-0 max-w-[720px] space-y-3">
        <p className="m-0 text-[15px] font-normal leading-snug text-foreground sm:text-[16.5px] sm:leading-relaxed">
          문제는
          <br />
          <span className="font-semibold text-[#C2410C]">
            치료가 계속 이어질 수 있다는 점입니다
          </span>
        </p>

        <div className="flex flex-col gap-3">
          <div className="rounded-[12px] border border-[#E5E7EB] bg-[#FAFAFA] px-3 py-2.5 sm:px-4 sm:py-3">
            <p className="m-0 text-[14px] leading-snug sm:text-[15px]">
              <span className="font-semibold text-[#C2410C]">진단금 받고</span>
              <br />
              <span className="font-semibold text-[#C2410C]">끝나는 경우</span>
            </p>
          </div>

          <div className="rounded-[12px] border border-[#E5E7EB] bg-[#FAFAFA] px-3 py-2.5 sm:px-4 sm:py-3">
            <p className="m-0 text-[14px] leading-snug sm:text-[15px]">
              <span className="font-semibold text-[#C2410C]">치료가 이어져도</span>
              <br />
              <span className="font-semibold text-[#C2410C]">계속 보장되는지</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
