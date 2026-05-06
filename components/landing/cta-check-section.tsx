"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { LANDING_CTA_BUTTON_BASE } from "@/lib/landing-cta"

interface CtaCheckSectionProps {
  onCtaClick: () => void
}

export function CtaCheckSection({ onCtaClick }: CtaCheckSectionProps) {
  return (
    <section className="bg-[#F7F7F7] px-4 pb-3 pt-1 sm:px-5 sm:pb-5 sm:pt-2">
      <div className="mx-auto min-w-0 max-w-[720px] text-center">
        <Button
          onClick={onCtaClick}
          className={cn(LANDING_CTA_BUTTON_BASE, "w-full")}
        >
          내 보험 보장 구조 확인하기
        </Button>
      </div>
    </section>
  )
}
