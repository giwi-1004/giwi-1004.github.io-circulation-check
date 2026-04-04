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
              순환계 보장 점검이
              <br />
              필요할 가능성이 있습니다
            </h2>

            <p className="mb-8 text-[15px] leading-relaxed text-muted-foreground">
              현재 보험 구조에 따라
              <br />
              보장이 부족할 수 있습니다
            </p>
          </>
        ) : (
          <>
            <h2 className="mb-4 text-[22px] font-bold leading-[1.4] text-foreground">
              현재 상태는 양호하지만
              <br />
              점검을 권장합니다
            </h2>

            <p className="mb-8 text-[15px] leading-relaxed text-muted-foreground">
              정확한 보장 내용을
              <br />
              확인해보시는 것이 좋습니다
            </p>
          </>
        )}

        <Button
          onClick={onCtaClick}
          className={cn(LANDING_CTA_BUTTON_CLASS)}
        >
          무료 확인하기
        </Button>
      </div>
    </section>
  )
}
