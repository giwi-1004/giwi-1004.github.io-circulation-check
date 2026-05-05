"use client"

import Image from "next/image"

import { LANDING_CTA_BUTTON_CLASS } from "@/lib/landing-cta"

interface HeroSectionProps {
  onCtaClick: () => void
}

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
        <span className="mb-0.5 mt-0.5 block text-[26px] font-bold leading-[1.3] text-[#C2410C]">
          뇌·심장 혈관 질환은
        </span>
        <span className="mb-0.5 mt-0.5 block text-[26px] font-bold leading-[1.3] text-[#C2410C]">
          갑작스럽게 발생하고
        </span>
        <span className="mb-0.5 mt-0.5 block text-[26px] font-bold leading-[1.3] text-[#C2410C]">
          수술이나 중환자실 치료로
        </span>
        <span className="mb-0.5 mt-0.5 block text-[26px] font-bold leading-[1.3] text-[#C2410C]">
          수천만원 비용이 발생할 수 있습니다
        </span>
        <span className="mt-px block text-[0.9625rem] font-[440] leading-[1.3] text-[#848b97]">
          보험은 있지만,
        </span>
        <span className="mt-px block text-[0.9625rem] font-[440] leading-[1.3] text-[#848b97]">
          이 비용까지 대비되어 있는지는
        </span>
        <span className="mt-px block text-[0.9625rem] font-[440] leading-[1.3] text-[#848b97]">
          구조를 확인해야 알 수 있습니다
        </span>
        <span className="mt-2 block text-[13px] font-[440] leading-relaxed text-[#9CA3AF]">
          일반 질병수술 보장과는
          <br />
          구조가 다를 수 있습니다
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
        내 보험, 치료비 보장 구조 확인하기
      </button>
    </section>
  )
}
