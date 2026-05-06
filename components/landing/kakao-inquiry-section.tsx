"use client"

import Image from "next/image"
import { CircleCheck, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

/** QR 이미지와 동일한 오픈채팅 링크. `NEXT_PUBLIC_KAKAO_CHAT_URL`로 덮어쓸 수 있습니다. */
const DEFAULT_KAKAO_CHAT_URL = "https://open.kakao.com/o/scS4vMoi"

const KAKAO_YELLOW = "#FEE500"
const KAKAO_BROWN = "#3C1E1E"

function KakaoBubbleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("shrink-0", className)}
      fill={KAKAO_BROWN}
      aria-hidden
    >
      <path d="M12 3C6.48 3 2 6.58 2 11.02c0 2.38 1.16 4.5 2.98 6.05V21l4.25-2.26c.9.25 1.86.38 2.77.38 5.52 0 10-3.58 10-8.1S17.52 3 12 3z" />
    </svg>
  )
}

const benefits = ["1:1 확인", "무료 확인", "빠른 답변"] as const

export function KakaoInquirySection() {
  const chatUrl =
    process.env.NEXT_PUBLIC_KAKAO_CHAT_URL?.trim() || DEFAULT_KAKAO_CHAT_URL
  const hasValidUrl = /^https?:\/\//i.test(chatUrl)

  return (
    <section
      id="kakao-inquiry"
      className="border-b border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3.5 sm:px-5 sm:py-5"
    >
      <div className="mx-auto min-w-0 max-w-[576px]">
        <div className="rounded-[13px] border-2 border-[#FDE68A] bg-[#FFFBEB] px-3 py-2.5 shadow-sm sm:px-4 sm:py-4">
          <div className="flex flex-col items-center text-center">
            <div
              className="mb-1.5 flex h-9 w-9 items-center justify-center rounded-full sm:mb-2 sm:h-10 sm:w-10"
              style={{ backgroundColor: KAKAO_YELLOW }}
            >
              <KakaoBubbleIcon className="h-[18px] w-[18px] sm:h-5 sm:w-5" />
            </div>

            <h2 className="text-[15px] font-bold leading-snug text-[#1F2937] sm:text-[16px]">
              카카오톡 1:1 문의
            </h2>
            <p className="mt-0.5 text-[11px] leading-snug text-[#6B7280] sm:mt-1 sm:text-[12px] sm:leading-relaxed">
              전화보다 편하게
              <br />
              카카오톡으로 확인 가능합니다
            </p>

            <ul className="mt-1.5 flex w-full flex-wrap items-center justify-center gap-x-2 gap-y-0.5 sm:mt-3 sm:gap-x-3">
              {benefits.map((label) => (
                <li
                  key={label}
                  className="flex items-center gap-0.5 text-[11px] font-medium text-[#374151] sm:gap-1 sm:text-[12px]"
                >
                  <CircleCheck
                    className="h-3 w-3 shrink-0 text-[#CA8A04] sm:h-3.5 sm:w-3.5"
                    strokeWidth={2.5}
                  />
                  {label}
                </li>
              ))}
            </ul>

            <p className="mt-1.5 max-w-[320px] text-[11px] leading-relaxed text-[#6B7280] sm:mt-3 sm:text-[12px]">
              보험증권이 있다면 함께 보내주세요
            </p>

            <div className="mt-2.5 w-full rounded-[11px] border border-[#E5E7EB] bg-white px-1.5 py-1 sm:mt-3 sm:px-3 sm:py-2.5">
              <p className="mb-0.5 text-[11px] font-medium text-[#6B7280] sm:mb-1 sm:text-[12px]">
                아래 QR코드를 스캔하세요
              </p>
              <div className="mx-auto flex h-[96px] w-[96px] items-center justify-center rounded-lg bg-white sm:h-[122px] sm:w-[122px]">
                <Image
                  src="/kakao-qr.png"
                  alt="카카오톡 오픈채팅 QR 코드"
                  width={124}
                  height={124}
                  className="h-[96px] w-[96px] object-contain sm:h-[122px] sm:w-[122px]"
                />
              </div>
            </div>

            <a
              href={hasValidUrl ? chatUrl : "#kakao-inquiry"}
              target={hasValidUrl ? "_blank" : undefined}
              rel={hasValidUrl ? "noopener noreferrer" : undefined}
              className={cn(
                "mt-2.5 flex min-h-[38px] w-full max-w-[320px] items-center justify-center gap-1.5 rounded-[10px] px-3 text-[12px] font-bold text-[#3C1E1E] transition-[transform,opacity] active:scale-[0.99] sm:mt-3 sm:min-h-[40px] sm:text-[13px]",
                hasValidUrl
                  ? "shadow-[0_2px_6px_rgba(0,0,0,0.07)] hover:opacity-95"
                  : "cursor-not-allowed opacity-60"
              )}
              style={{ backgroundColor: KAKAO_YELLOW }}
              onClick={(e) => {
                if (!hasValidUrl) e.preventDefault()
              }}
            >
              <MessageCircle className="h-4 w-4 shrink-0" strokeWidth={2.2} />
              카카오톡으로 간편하게 확인하기
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
