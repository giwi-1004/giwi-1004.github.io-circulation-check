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
        "pt-[max(24px,calc(18px+env(safe-area-inset-top,0px)))] pb-[max(20px,calc(12px+env(safe-area-inset-bottom,0px)))]",
        "sm:pt-[max(32px,calc(24px+env(safe-area-inset-top,0px)))] sm:pb-[max(28px,calc(16px+env(safe-area-inset-bottom,0px)))]"
      )}
    >
      <h1 className="order-1 m-0 mb-1.5 text-left font-normal sm:mb-2">
        <span className="block text-[18px] font-bold leading-[1.22] text-[#C2410C] sm:text-[21px] sm:leading-[1.28]">
          뇌·심장 보험,
        </span>
        <span className="mt-0.5 block text-[18px] font-bold leading-[1.22] text-[#C2410C] sm:mt-1 sm:text-[21px] sm:leading-[1.28]">
          진단금만으로 충분하신가요?
        </span>
        <span className="mt-1.5 block text-[16px] font-medium leading-[1.35] text-[#1E293B] sm:mt-2 sm:text-[18px] sm:leading-[1.4]">
          치료는
        </span>
        <span className="mt-0.5 block text-[16px] font-medium leading-[1.35] text-[#1E293B] sm:text-[18px] sm:leading-[1.4]">
          한 번으로 끝나지 않을 수 있습니다
        </span>
        <span className="mt-1.5 block text-[16px] font-normal leading-[1.42] text-[#334155] sm:mt-2 sm:text-[17px] sm:leading-[1.46]">
          내 보험 구조,
        </span>
        <span className="mt-0.5 block text-[16px] font-normal leading-[1.42] text-[#334155] sm:text-[17px] sm:leading-[1.46]">
          1분 안에 확인해보세요
        </span>
      </h1>

      <div className="relative order-2 mt-1.5 h-[114px] w-full min-w-0 overflow-hidden rounded-[16px] sm:mt-2 sm:h-[162px]">
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
          "order-3 mx-auto mt-2 w-[72%] min-w-0 shrink-0 touch-manipulation sm:mt-2.5"
        )}
      >
        내 보험 보장 구조 확인하기
      </button>
    </section>
  )
}
