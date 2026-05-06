"use client"

import Image from "next/image"

import { cn } from "@/lib/utils"
import { LANDING_CTA_BUTTON_BASE } from "@/lib/landing-cta"

interface HeroSectionProps {
  onCtaClick: () => void
}

export function HeroSection({ onCtaClick }: HeroSectionProps) {
  return (
    <section
      className={cn(
        "box-border flex w-full min-w-0 max-w-[720px] flex-col bg-[#FFFFFF] px-4 text-left sm:mx-auto sm:px-5",
        "pt-[max(20px,calc(14px+env(safe-area-inset-top,0px)))] pb-[max(16px,calc(10px+env(safe-area-inset-bottom,0px)))]",
        "sm:pt-[max(32px,calc(24px+env(safe-area-inset-top,0px)))] sm:pb-[max(28px,calc(16px+env(safe-area-inset-bottom,0px)))]"
      )}
    >
      <h1 className="order-1 m-0 mb-1 text-left font-normal sm:mb-2">
        <span className="block text-[18px] font-bold leading-[1.22] text-[#C2410C] sm:text-[21px] sm:leading-[1.28]">
          뇌·심장 보험,
        </span>
        <span className="mt-0.5 block text-[18px] font-bold leading-[1.22] text-[#C2410C] sm:mt-1 sm:text-[21px] sm:leading-[1.28]">
          진단금만으로 충분하신가요?
        </span>
        <span className="mt-1 block text-[16px] font-medium leading-[1.35] text-[#1E293B] sm:mt-2 sm:text-[18px] sm:leading-[1.4]">
          치료는
        </span>
        <span className="mt-0.5 block text-[16px] font-medium leading-[1.35] text-[#1E293B] sm:text-[18px] sm:leading-[1.4]">
          한 번으로 끝나지 않을 수 있습니다
        </span>
      </h1>

      <div className="relative order-2 mt-1 h-[102px] w-full min-w-0 overflow-hidden rounded-[16px] sm:mt-2 sm:h-[162px]">
        <Image
          src="/images/hero-heart-pain.png"
          alt="심장 통증으로 가슴을 움켜쥔 남성"
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 768px) 335px, 672px"
        />
      </div>

      <button
        type="button"
        onClick={onCtaClick}
        className={cn(
          LANDING_CTA_BUTTON_BASE,
          "order-3 mt-1.5 w-full min-w-0 shrink-0 touch-manipulation sm:mt-2.5"
        )}
      >
        내 보험 보장 구조 확인하기
      </button>
    </section>
  )
}
