"use client"

import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"

interface ResultSectionProps {
  selectedCount: number
  onCtaClick: () => void
}

export function ResultSection({ selectedCount, onCtaClick }: ResultSectionProps) {
  const needsCheck = selectedCount >= 2

  return (
    <section
      id="result"
      className="bg-accent px-4 py-10 text-accent-foreground sm:px-5 sm:py-12"
    >
      <div className="mx-auto min-w-0 max-w-[720px] text-center">
        <div className="w-16 h-16 rounded-full bg-accent-foreground/10 flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="w-8 h-8" />
        </div>

        {needsCheck ? (
          <>
            <h2 className="text-[22px] font-bold leading-[1.4] mb-4">
              순환계 보장 점검이
              <br />
              필요할 가능성이 있습니다
            </h2>
            
            <p className="text-[15px] opacity-90 leading-relaxed mb-8">
              현재 보험 구조에 따라
              <br />
              보장이 부족할 수 있습니다
            </p>
          </>
        ) : (
          <>
            <h2 className="text-[22px] font-bold leading-[1.4] mb-4">
              현재 상태는 양호하지만
              <br />
              점검을 권장합니다
            </h2>
            
            <p className="text-[15px] opacity-90 leading-relaxed mb-8">
              정확한 보장 내용을
              <br />
              확인해보시는 것이 좋습니다
            </p>
          </>
        )}

        <Button
          onClick={onCtaClick}
          className="h-[44.8px] w-full rounded-[9.6px] text-[13px] font-bold shadow-[0px_3.2px_9.6px_rgba(0,0,0,0.1)] bg-primary-foreground hover:bg-primary-foreground/90 text-accent"
        >
          무료 확인하기
        </Button>
      </div>
    </section>
  )
}
