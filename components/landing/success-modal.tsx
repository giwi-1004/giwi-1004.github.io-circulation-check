"use client"

import { IconCircleCheck, IconClock } from "@tabler/icons-react"

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

      <div className="relative w-full max-w-[320px] rounded-[16px] bg-white p-6 text-center shadow-xl">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#F5EDD6]">
          <IconCircleCheck className="h-6 w-6 text-[#C9A84C]" stroke={2} aria-hidden />
        </div>

        <h3 className="mb-2 text-center text-[18px] font-bold leading-snug text-[#0D1B2A]">
          상담 신청이 완료됐습니다
        </h3>

        <p className="mb-4 text-center text-[14px] leading-relaxed text-[#666]">
          입력하신 번호로 담당 설계사가
          <br />
          직접 연락드립니다
        </p>

        <div className="mb-4 rounded-[10px] bg-[#F8F9FC] px-4 py-3 text-left">
          <div className="flex items-center gap-1.5">
            <IconClock className="h-[14px] w-[14px] shrink-0 text-[#C9A84C]" stroke={2} aria-hidden />
            <span className="text-[12px] font-semibold text-[#0D1B2A]">상담 가능 시간</span>
          </div>
          <p className="mt-1 text-[13px] text-[#444]">평일 오전 9시 ~ 오후 6시</p>
          <p className="mt-1 text-[11px] leading-relaxed text-[#888]">
            신청 시간에 따라 다음 영업일에
            <br />
            연락드릴 수 있습니다
          </p>
        </div>

        <p className="mb-3 text-center text-[12px] leading-relaxed text-[#888]">
          빠른 확인은 카카오톡으로 먼저
          <br />
          문의하실 수 있습니다
        </p>

        <button
          type="button"
          onClick={onClose}
          className="w-full rounded-[10px] border-none bg-gradient-to-br from-[#C9A84C] to-[#B8922E] p-[13px] text-[15px] font-bold text-[#0D1B2A]"
        >
          확인
        </button>
      </div>
    </div>
  )
}
