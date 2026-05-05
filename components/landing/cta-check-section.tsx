"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { LANDING_CTA_BUTTON_CLASS } from "@/lib/landing-cta"

interface CtaCheckSectionProps {
  onCtaClick: () => void
}

export function CtaCheckSection({ onCtaClick }: CtaCheckSectionProps) {
  return (
    <section className="bg-[#F7F7F7] px-5 py-10 sm:px-5 sm:py-10">
      <div className="mx-auto min-w-0 max-w-[720px] text-center">
        <p className="mb-6 text-[15px] leading-relaxed text-foreground">
          1분이면, 상담 없이 확인 가능합니다
        </p>

        <Button
          onClick={onCtaClick}
          className={cn(LANDING_CTA_BUTTON_CLASS)}
        >
          내 보험, 치료비 보장 구조 확인하기
        </Button>
      </div>
    </section>
  )
}
