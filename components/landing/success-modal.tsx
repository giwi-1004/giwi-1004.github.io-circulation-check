"use client"

import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

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
      />

      <div className="relative max-h-[min(90dvh,calc(100dvh-2rem))] w-full max-w-sm overflow-y-auto rounded-2xl bg-background p-6 text-center shadow-xl sm:p-8">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        
        <h3 className="text-[20px] font-bold text-foreground mb-2">
          요청이 완료되었습니다
        </h3>
        
        <p className="text-[15px] text-muted-foreground mb-6 leading-relaxed">
          입력하신 번호로
          <br />
          빠른 시일 내 연락드리겠습니다
        </p>
        
        <Button
          onClick={onClose}
          className="h-[38.4px] w-full rounded-[9.6px] text-[13px] font-medium bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          확인
        </Button>
      </div>
    </div>
  )
}
