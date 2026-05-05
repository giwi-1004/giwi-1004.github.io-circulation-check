"use client"

import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { LANDING_CTA_BUTTON_CLASS } from "@/lib/landing-cta"

interface ResultSectionProps {
  selectedCount: number
  onCtaClick: () => void
}

export function ResultSection({ selectedCount, onCtaClick }: ResultSectionProps) {
  const needsCheck = selectedCount >= 2

  return (
    <section
      id="result"
      className="bg-[#F7F7F7] px-5 py-10 text-foreground sm:px-5 sm:py-10"
    >
      <div className="mx-auto min-w-0 max-w-[720px] text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#93C5FD]/25">
          <AlertCircle className="h-8 w-8 text-[#93C5FD]" strokeWidth={2} />
        </div>

        {needsCheck ? (
          <>
            <h2 className="mb-4 text-[22px] font-bold leading-[1.4] text-foreground">
              보장 구조 확인이 필요한 상태입니다
            </h2>

            <div className="mb-8 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>현재 상태라면</p>
              <p>치료비 대비가 부족할 가능성이 있습니다</p>
              <p>
                순환계 질환은
                <br />
                치료가 여러 번 이어질 수 있기 때문에
              </p>
              <p>
                보험 구조에 따라
                <br />
                금액 차이가 발생할 수 있습니다
              </p>
              <p>
                지금 확인하지 않으면
                <br />
                예상치 못한 비용 부담이 생길 수 있습니다
              </p>
            </div>
          </>
        ) : (
          <>
            <h2 className="mb-4 text-[22px] font-bold leading-[1.4] text-foreground">
              현재 상태는 양호할 수 있습니다
            </h2>

            <div className="mb-8 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>증상이 없더라도</p>
              <p>보장 구조는 확인이 필요합니다</p>
              <p>
                내 보험이
                <br />
                치료 기준 보장인지 확인해보세요
              </p>
            </div>
          </>
        )}

        <Button
          onClick={onCtaClick}
          className={cn(LANDING_CTA_BUTTON_CLASS)}
        >
          무료로 보장 구조 확인하기
        </Button>
      </div>
    </section>
  )
}
