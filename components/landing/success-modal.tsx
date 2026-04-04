"use client"

import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { LANDING_CTA_BUTTON_BASE } from "@/lib/landing-cta"

interface SuccessModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pt-[max(1rem,env(safe-area-inset-top))] pb-[max(1rem,env(safe-area-inset-bottom))] sm:p-5">
      <div
        className="absolute inset-0 bg-foreground/50 backdrop-blur-sm"
        onClick={onClose}
        onKeyDown={(e) => e.key === "Escape" && onClose()}
        role="presentation"
      />

      <div className="relative max-h-[min(90dvh,calc(100dvh-2rem))] w-full max-w-sm overflow-y-auto rounded-2xl bg-background p-6 text-center shadow-xl sm:p-8">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#93C5FD]/25">
          <CheckCircle className="h-8 w-8 text-[#93C5FD]" strokeWidth={2} />
        </div>

        <h3 className="mb-2 text-[20px] font-bold text-foreground">
          요청이 완료되었습니다
        </h3>

        <p className="mb-6 text-[15px] leading-relaxed text-muted-foreground">
          입력하신 번호로
          <br />
          빠른 시일 내 연락드리겠습니다
        </p>

        <Button
          onClick={onClose}
          className={cn(LANDING_CTA_BUTTON_BASE, "my-6")}
        >
          확인
        </Button>
      </div>
    </div>
  )
}
