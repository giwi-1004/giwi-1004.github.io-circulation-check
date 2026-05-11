"use client"

import type { CSSProperties } from "react"

import { cn } from "@/lib/utils"

interface ResultSectionProps {
  selectedCount: number
  onCtaClick: () => void
}

const resultCtaClassName =
  "box-border flex min-h-[57.6px] w-full touch-manipulation items-center justify-center rounded-xl border-0 px-4 text-center text-[16px] leading-tight shadow-[0_4px_18px_rgba(232,89,26,0.35)] transition-[opacity,transform] hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8591A] disabled:pointer-events-none disabled:opacity-50 active:scale-[0.99]"

const resultCtaStyle: CSSProperties = {
  backgroundColor: "#E8591A",
  color: "#FFFFFF",
  fontWeight: 700,
}

export function ResultSection({ selectedCount, onCtaClick }: ResultSectionProps) {
  const needsCheck = selectedCount >= 2

  return (
    <section
      id="result"
      className="bg-[#F7F7F7] px-4 py-4 text-foreground sm:px-5 sm:py-5"
    >
      <div className="mx-auto min-w-0 max-w-[720px]">
        <div className="rounded-[16px] border border-[#E5E7EB] bg-[#FFFFFF] px-4 py-5 text-center shadow-[0_2px_12px_rgba(0,0,0,0.06)] sm:px-6 sm:py-6">
          {needsCheck ? (
            <>
              <p className="m-0 mb-2 inline-flex items-center justify-center rounded-full bg-[#FFF0E8] px-3 py-1 text-[12px] font-semibold leading-none text-[#E8591A]">
                확인 필요
              </p>
              <h2 className="mb-2 text-[19px] font-bold leading-snug text-foreground sm:mb-3 sm:text-[22px] sm:leading-[1.35]">
                치료비 보장 구조 점검이 필요합니다
              </h2>

              <div className="mx-auto mb-3 max-w-[26rem] space-y-0 text-[14px] leading-snug text-muted-foreground sm:text-[15px] sm:leading-relaxed">
                <p className="m-0">
                  현재 보험이 진단금 중심이라면
                  <br />
                  재입원·재시술·재활치료비는
                  <br />
                  본인이 부담해야 할 수 있습니다
                </p>
              </div>

              <div className="mx-auto mb-3 max-w-[26rem] rounded-[12px] border border-[#FED7AA] bg-[#FFF7ED] px-3 py-2.5 text-[14px] font-semibold leading-snug text-[#C2410C] sm:px-4 sm:py-3">
                치료할 때마다 보험금이 나오는 구조인지
                <br />
                지금 바로 확인해보세요
              </div>

              <button
                type="button"
                onClick={onCtaClick}
                className={cn(resultCtaClassName, "max-w-[26rem] sm:max-w-none")}
                style={resultCtaStyle}
              >
                내 보험 구조 확인 요청하기
              </button>
            </>
          ) : (
            <>
              <p className="m-0 mb-2 inline-flex items-center justify-center rounded-full bg-[#ECFDF5] px-3 py-1 text-[12px] font-semibold leading-none text-[#047857]">
                확인 권장
              </p>
              <h2 className="mb-2 text-[19px] font-bold leading-snug text-foreground sm:mb-3 sm:text-[22px] sm:leading-[1.35]">
                현재 상태는 양호할 수 있습니다
              </h2>

              <div className="mx-auto mb-3 max-w-[26rem] text-[14px] leading-snug text-muted-foreground sm:mb-4 sm:text-[15px] sm:leading-relaxed">
                <p className="m-0">
                  증상이 없더라도
                  <br />
                  보장 구조는 보험증권을 확인해야 알 수 있습니다
                </p>
              </div>

              <button
                type="button"
                onClick={onCtaClick}
                className={cn(resultCtaClassName, "max-w-[26rem] sm:max-w-none")}
                style={resultCtaStyle}
              >
                내 보험 구조 확인 요청하기
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
