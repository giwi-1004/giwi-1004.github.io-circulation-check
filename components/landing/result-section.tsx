"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { LANDING_CTA_BUTTON_BASE } from "@/lib/landing-cta"

interface ResultSectionProps {
  selectedCount: number
  onCtaClick: () => void
}

export function ResultSection({ selectedCount, onCtaClick }: ResultSectionProps) {
  const needsCheck = selectedCount >= 2

  return (
    <section
      id="result"
      className="bg-[#F7F7F7] px-4 py-8 text-foreground sm:px-5 sm:py-10"
    >
      <div className="mx-auto min-w-0 max-w-[720px]">
        <div className="rounded-[16px] border border-[#E5E7EB] bg-[#FFFFFF] px-4 py-5 text-center shadow-[0_2px_12px_rgba(0,0,0,0.06)] sm:px-6 sm:py-6">
          {needsCheck ? (
            <>
              <p className="m-0 mb-2 inline-flex items-center justify-center rounded-full bg-[#EFF6FF] px-3 py-1 text-[12px] font-semibold leading-none text-[#1D4ED8]">
                확인 필요
              </p>
              <h2 className="mb-2 text-[19px] font-bold leading-snug text-foreground sm:mb-3 sm:text-[22px] sm:leading-[1.35]">
                보장 구조 확인이 필요한 상태입니다
              </h2>

              <div className="mx-auto mb-3 max-w-[26rem] space-y-0 text-[14px] leading-snug text-muted-foreground sm:text-[15px] sm:leading-relaxed">
                <p className="m-0">
                  현재 보험이
                  <br />
                  진단금 1회 중심인지,
                  <br />
                  치료비 반복 보장 구조인지 확인이 필요합니다
                </p>
              </div>

              <div className="mx-auto mb-3 max-w-[26rem] rounded-[12px] border border-[#FED7AA] bg-[#FFF7ED] px-3 py-2.5 text-[14px] font-semibold leading-snug text-[#C2410C] sm:px-4 sm:py-3">
                지금 확인하지 않으면
                <br />
                실제 치료 상황에서 보장 차이를
                <br />
                뒤늦게 알게 될 수 있습니다
              </div>

              <Button
                onClick={onCtaClick}
                className={cn(
                  LANDING_CTA_BUTTON_BASE,
                  "w-full max-w-[26rem] shadow-[0_4px_18px_rgba(29,78,216,0.38)] sm:max-w-none"
                )}
              >
                내 보험 구조 확인 요청하기
              </Button>
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

              <Button
                onClick={onCtaClick}
                className={cn(
                  LANDING_CTA_BUTTON_BASE,
                  "w-full max-w-[26rem] shadow-[0_4px_18px_rgba(29,78,216,0.38)] sm:max-w-none"
                )}
              >
                내 보험 구조 확인 요청하기
              </Button>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
