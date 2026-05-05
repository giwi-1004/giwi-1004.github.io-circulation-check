"use client"

export function ProblemSection() {
  return (
    <section className="bg-[#FFFFFF] px-5 py-10 sm:px-5 sm:py-10">
      <div className="mx-auto min-w-0 max-w-[720px] space-y-3 text-[16.5px] font-normal leading-relaxed text-foreground">
        <p>순환계 질환은</p>
        <p>한 번의 진단으로 끝나지 않고</p>
        <p>
          재치료, 입원, 시술 등
          <br />
          여러 단계로 이어질 수 있습니다
        </p>
        <p>문제는</p>
        <p>치료가 반복될 수 있는데</p>
        <p>
          기존 보험은
          <br />
          <span className="font-semibold text-[#C2410C]">
            진단금 1회 지급 구조가 중심이라는 점입니다
          </span>
        </p>
      </div>
    </section>
  )
}
