"use client"

export function InsuranceConnectionSection() {
  return (
    <section className="px-4 py-10 sm:px-5 sm:py-12">
      <div className="mx-auto min-w-0 max-w-[720px] space-y-3 text-[15px] font-normal leading-relaxed text-foreground">
        <p>
          문제는
          <br />
          기존 보험처럼{" "}
          <span className="font-semibold text-accent">진단금·수술비만으로는</span>
        </p>
        <p>
          실제 치료 과정에서 발생하는 비용을
          <br />
          충분히 대비하기 어렵다는 점입니다
        </p>
        <p>
          순환계 주요치료비 보장은
          <br />
          <span className="font-semibold text-accent">
            치료 내용에 따라 보험금이 지급되는 구조로
          </span>
        </p>
        <p>
          치료 단계에 맞춰
          <br />
          실질적인 보장을 받을 수 있습니다
        </p>
      </div>
    </section>
  )
}
