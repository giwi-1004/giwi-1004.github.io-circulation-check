"use client"

import { Button } from "@/components/ui/button"

interface CtaCheckSectionProps {
  onCtaClick: () => void
}

export function CtaCheckSection({ onCtaClick }: CtaCheckSectionProps) {
  return (
    <section className="bg-accent/5 px-4 py-10 sm:px-5 sm:py-12">
      <div className="mx-auto min-w-0 max-w-[720px] text-center">
        <p className="text-[15px] text-foreground leading-relaxed mb-6">
          1분이면, 상담 없이 확인 가능합니다
        </p>

        <Button
          onClick={onCtaClick}
          className="h-[44.8px] w-full rounded-[9.6px] text-[13px] font-bold shadow-[0px_3.2px_9.6px_rgba(0,0,0,0.1)] bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          내 보험 체크하기
        </Button>
      </div>
    </section>
  )
}
