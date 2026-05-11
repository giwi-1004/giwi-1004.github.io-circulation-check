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
        "box-border flex w-full min-w-0 max-w-[720px] flex-col bg-[#FFFFFF] px-0 text-left sm:mx-auto",
        "pt-[max(24px,calc(18px+env(safe-area-inset-top,0px)))] pb-[max(12px,calc(10px+env(safe-area-inset-bottom,0px)))]",
        "sm:pt-[max(24px,calc(18px+env(safe-area-inset-top,0px)))] sm:pb-[max(14px,calc(10px+env(safe-area-inset-bottom,0px)))]"
      )}
    >
      <div
        className="order-1"
        style={{ paddingLeft: 16, paddingRight: 16 }}
      >
        <span
          style={{ display: "inline-block" }}
          className="mb-2 w-fit max-w-none rounded-[4px] bg-[#FFF0E8] px-[10px] py-[3px] text-[12px] font-semibold text-[#C44D0F]"
        >
          순환계 치료비 보장 무료 점검
        </span>

        <h1 className="m-0 mb-1.5 text-left font-normal sm:mb-2">
          <span className="block text-[24px] font-bold leading-[1.35] text-[#1B2A4A]">
            뇌·심장 치료비,
          </span>
          <span className="mt-0.5 block text-[24px] font-bold leading-[1.35] text-[#E8591A] sm:mt-1">
            진단금 받고도 부족했다면?
          </span>
        </h1>

        <p className="m-0 mb-1.5 text-[13px] leading-[1.35] text-[#666] sm:mb-2">
          연간 한도·약관 조건 내에서
          <br />
          치료비 기준으로 보장받는 구조가 있습니다
        </p>
      </div>

      <div className="relative order-2 mt-1.5 h-[114px] w-full min-w-0 overflow-hidden rounded-[16px] sm:mt-2 sm:h-[162px]">
        <Image
          src="/images/hero-main.png"
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

      <p className="order-4 mt-2 w-full text-center text-[12px] leading-snug text-[#888]">
        무료 · 가입 권유 없음 · 1분이면 완료
      </p>

      <div className="order-5 w-full px-4 pt-0 pb-0">
        <div className="mt-4 w-full rounded-[12px] bg-[#F8F9FC] p-4">
          <p className="mb-[14px] text-center text-[15px] font-bold leading-snug text-[#1B2A4A]">
            보장 구조, 이렇게 다릅니다
          </p>

          <div className="overflow-hidden rounded-[8px] bg-[#ffffff]">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-[#F0F0F0]">
                  <th
                    scope="col"
                    className="break-keep bg-[#FEE2E2] py-2 pl-[12px] pr-2 text-[13px] font-bold text-[#991B1B]"
                  >
                    일반 보험
                  </th>
                  <th
                    scope="col"
                    className="break-keep bg-[#E8591A] py-2 pl-[12px] pr-2 text-[13px] font-bold text-[#ffffff]"
                  >
                    순환계 통합치료비
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#F0F0F0] bg-[#ffffff]">
                  <td className="break-keep py-[10px] pl-[12px] pr-2 text-[13px] text-[#991B1B]">
                    ✕ 진단 시 1회 지급
                  </td>
                  <td className="break-keep py-[10px] pl-[12px] pr-2 text-[13px] font-semibold text-[#166534]">
                    ✓ 치료마다 반복 지급
                  </td>
                </tr>
                <tr className="border-b border-[#F0F0F0] bg-[#FFF5F0]">
                  <td className="break-keep py-[10px] pl-[12px] pr-2 text-[13px] text-[#991B1B]">
                    ✕ 재치료비 미보장
                  </td>
                  <td className="break-keep py-[10px] pl-[12px] pr-2 text-[13px] font-semibold text-[#166534]">
                    ✓ 재발 시 재지급 가능
                  </td>
                </tr>
                <tr className="border-b border-[#F0F0F0] bg-[#ffffff]">
                  <td className="break-keep py-[10px] pl-[12px] pr-2 text-[13px] text-[#991B1B]">✕ 재활비 미보장</td>
                  <td className="break-keep py-[10px] pl-[12px] pr-2 text-[13px] font-semibold text-[#166534]">
                    ✓ 재활치료 연간 보장
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-3 text-center">
            <p className="m-0 text-[14px] font-bold text-[#E8591A]">혈전용해치료 최대 2,500만원</p>
            <p className="mt-1 text-[11px] leading-snug text-[#888]">
              약관 조건 충족 시 / 연간 한도 내 반복 지급
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
