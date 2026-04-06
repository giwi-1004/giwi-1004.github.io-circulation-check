"use client"

import Image from "next/image"

import { LANDING_CTA_BUTTON_CLASS } from "@/lib/landing-cta"

interface HeroSectionProps {
  onCtaClick: () => void
}

/**
 * 모바일 375 기준 전환형 Hero — 단일 세로 플로우 (텍스트 → 이미지 → CTA).
 * min-height 100vh / space-between 미사용.
 */
export function HeroSection({ onCtaClick }: HeroSectionProps) {
  return (
    <section
      className="box-border w-full min-w-0 max-w-[720px] bg-[#FFFFFF] px-5 py-10 text-left sm:mx-auto"
      style={{
        paddingTop: "max(40px, calc(32px + env(safe-area-inset-top, 0px)))",
        paddingBottom: "max(40px, calc(20px + env(safe-area-inset-bottom, 0px)))",
      }}
    >
      <h1 className="m-0 text-left font-normal">
        <span className="block text-[1.1rem] font-[440] leading-[1.3] text-[#606773]">
          보험은 다들 있습니다
        </span>
        <span className="mt-px block text-[1.1rem] font-[440] leading-[1.3] text-[#606773]">
          하지만
        </span>
        <span className="mb-0.5 mt-0.5 block text-[26px] font-bold leading-[1.3] text-[#C2410C]">
          뇌·심장 치료비는 빠져 있는 경우가 많습니다
        </span>
        <span className="mt-px block text-[0.9625rem] font-[440] leading-[1.3] text-[#848b97]">
          내 보험에 있는지 1분 안에 확인해보세요
        </span>
      </h1>

      <div className="relative mt-[14px] h-[165px] w-full min-w-0 overflow-hidden rounded-[16px]">
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
        className={`${LANDING_CTA_BUTTON_CLASS} mx-auto w-[72%] min-w-0 shrink-0 touch-manipulation`}
      >
        빠진 보장 확인하기
      </button>
    </section>
  )
}
