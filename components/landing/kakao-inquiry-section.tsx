"use client"

import Image from "next/image"
import { CircleCheck, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

/** QR 이미지와 동일한 오픈채팅 링크. `NEXT_PUBLIC_KAKAO_CHAT_URL`로 덮어쓸 수 있습니다. */
const DEFAULT_KAKAO_CHAT_URL = "https://open.kakao.com/o/s9X6Fm7g"

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

const benefits = ["1:1 확인", "무료 검토", "빠른 답변"] as const

export function KakaoInquirySection() {
  const chatUrl =
    process.env.NEXT_PUBLIC_KAKAO_CHAT_URL?.trim() || DEFAULT_KAKAO_CHAT_URL
  const hasValidUrl = /^https?:\/\//i.test(chatUrl)

  return (
    <section
      id="kakao-inquiry"
      className="border-b border-[#E5E7EB] bg-[#F9FAFB] px-5 py-8 sm:px-5 sm:py-10"
    >
      <div className="mx-auto min-w-0 max-w-[576px]">
        <div className="rounded-[13px] border-2 border-[#FDE68A] bg-[#FFFBEB] px-4 py-5 shadow-sm sm:px-6 sm:py-6">
          <div className="flex flex-col items-center text-center">
            <div
              className="mb-3 flex h-11 w-11 items-center justify-center rounded-full"
              style={{ backgroundColor: KAKAO_YELLOW }}
            >
              <KakaoBubbleIcon className="h-6 w-6" />
            </div>

            <h2 className="text-[16px] font-bold leading-snug text-[#1F2937]">
              카카오톡 1:1 문의
            </h2>
            <p className="mt-1.5 text-[11px] leading-relaxed text-[#6B7280] sm:text-[12px]">
              전화보다 편하게 메시지 한 줄이면 가능합니다
            </p>

            <ul className="mt-4 flex w-full flex-wrap items-center justify-center gap-x-3 gap-y-1.5 sm:gap-x-5">
              {benefits.map((label) => (
                <li
                  key={label}
                  className="flex items-center gap-1 text-[11px] font-medium text-[#374151] sm:text-[12px]"
                >
                  <CircleCheck
                    className="h-3.5 w-3.5 shrink-0 text-[#CA8A04]"
                    strokeWidth={2.5}
                  />
                  {label}
                </li>
              ))}
            </ul>

            <div className="mt-5 w-full rounded-[11px] border border-[#E5E7EB] bg-white px-3 py-4">
              <p className="mb-2 text-[11px] font-medium text-[#6B7280] sm:text-[12px]">
                아래 QR코드를 스캔하세요
              </p>
              <div className="mx-auto flex h-[160px] w-[160px] items-center justify-center rounded-lg bg-white">
                <Image
                  src="/kakao-qr.png"
                  alt="카카오톡 오픈채팅 QR 코드"
                  width={160}
                  height={160}
                  className="h-[160px] w-[160px] object-contain"
                />
              </div>
            </div>

            <a
              href={hasValidUrl ? chatUrl : "#kakao-inquiry"}
              target={hasValidUrl ? "_blank" : undefined}
              rel={hasValidUrl ? "noopener noreferrer" : undefined}
              className={cn(
                "mt-5 flex min-h-[42px] w-full max-w-[320px] items-center justify-center gap-1.5 rounded-[10px] px-3 text-[12px] font-bold text-[#3C1E1E] transition-[transform,opacity] active:scale-[0.99] sm:min-h-[44px] sm:text-[13px]",
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
              카카오로 내 상황 확인하기
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
