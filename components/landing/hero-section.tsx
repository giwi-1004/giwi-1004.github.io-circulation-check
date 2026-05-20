"use client"

import { LANDING_CTA_BUTTON_BASE } from "@/lib/landing-cta"
import { cn } from "@/lib/utils"

interface HeroSectionProps {
  onCtaClick: () => void
}

const HERO_IMAGE =
  "https://giwi-1004-github-io-circulation-che.vercel.app/images/hero-main.png"

export function HeroSection({ onCtaClick }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#0F3460] px-7 pb-[72px] pt-[60px] text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-100px] h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.1)_0%,transparent_65%)]"
      />
      <span className="mb-7 inline-flex items-center gap-1.5 rounded-full border border-[rgba(201,168,76,0.4)] bg-[rgba(201,168,76,0.15)] px-3.5 py-1 text-[11px] font-medium tracking-[0.08em] text-[#E2C97E] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#C9A84C] before:content-['']">
        순환계 치료비 보장 무료 점검
      </span>

      <h1 className="font-sans text-[28px] font-bold leading-[1.35] tracking-[-0.01em] text-white">
        내 보험,
        <br />
        <em className="not-italic text-[#E2C97E]">
          뇌·심장 치료비까지
          <br />
          대비됐나요?
        </em>
      </h1>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={HERO_IMAGE}
        alt="심장 통증으로 가슴을 움켜쥔 남성"
        className="my-7 block w-full rounded-lg opacity-90"
      />

      <p className="mb-8 text-[14px] leading-[1.8] text-white/55">
        연간 한도·약관 조건 내에서
        <br />
        치료비 기준으로 보장받는 구조가 있습니다
      </p>

      <button type="button" onClick={onCtaClick} className={cn(LANDING_CTA_BUTTON_BASE)}>
        내 보험 순환계 공백 지금 확인하기
      </button>

      <p className="mt-3 text-[11px] tracking-[0.05em] text-white/35">
        무료 &nbsp;·&nbsp; 가입 권유 없음 &nbsp;·&nbsp; 1분이면 완료
      </p>
    </section>
  )
}
