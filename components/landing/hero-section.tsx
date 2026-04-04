"use client"

import Image from "next/image"

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
      className="box-border w-full min-w-0 max-w-[720px] bg-[#FFFFFF] text-left sm:mx-auto"
      style={{
        paddingTop: "calc(32px + env(safe-area-inset-top, 0px))",
        paddingBottom: "calc(20px + env(safe-area-inset-bottom, 0px))",
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
      <h1 className="m-0 text-left font-normal">
        <span className="block text-base font-normal leading-[1.3] text-[#6B7280]">
          보험은 다들 있습니다
        </span>
        <span className="mt-px block text-base font-normal leading-[1.3] text-[#6B7280]">
          하지만
        </span>
        <span className="mb-0.5 mt-0.5 block text-[26px] font-bold leading-[1.3] text-[#193695]">
          뇌·심장 치료비는 빠져 있는 경우가 많습니다
        </span>
        <span className="mt-px block text-sm font-normal leading-[1.3] text-[#939aa8]">
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
        className="mx-auto mt-3 box-border flex h-[40.3px] w-[72%] min-w-0 shrink-0 touch-manipulation items-center justify-center rounded-[8.6px] border-0 bg-[#295ccb] p-0 text-center text-[13px] font-bold leading-none text-white shadow-[0_1.44px_4.32px_rgba(41,92,203,0.12)] transition-[transform,filter] duration-100 hover:brightness-[1.05] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#295ccb] active:scale-[0.97]"
      >
        빠진 보장 확인하기
      </button>
    </section>
  )
}
