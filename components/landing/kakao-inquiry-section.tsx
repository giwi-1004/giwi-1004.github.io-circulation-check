"use client"

const DEFAULT_KAKAO_CHAT_URL = "https://open.kakao.com/o/scS4vMoi"
const KAKAO_QR =
  "https://giwi-1004-github-io-circulation-che.vercel.app/kakao-qr.png"

const chips = ["1:1 확인", "무료 확인", "빠른 답변"] as const

export function KakaoInquirySection() {
  const chatUrl =
    process.env.NEXT_PUBLIC_KAKAO_CHAT_URL?.trim() || DEFAULT_KAKAO_CHAT_URL
  const hasValidUrl = /^https?:\/\//i.test(chatUrl)

  return (
    <section
      id="kakao-inquiry"
      className="border-t border-[rgba(201,168,76,0.25)] bg-[#F0EBE0] px-7 py-14"
    >
      <div className="rounded-[10px] border border-[rgba(254,211,2,0.5)] bg-[#FFFDE7] px-6 py-9 text-center">
        <div className="mx-auto mb-[18px] flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#FEE500] text-2xl">
          💬
        </div>
        <h2 className="mb-2 font-sans text-[20px] font-bold text-[#0D1B2A]">
          카카오톡 1:1 문의
        </h2>
        <p className="mb-5 text-[13px] leading-[1.8] text-[#6B7A8D]">
          전화보다 편하게
          <br />
          카카오톡으로 확인 가능합니다
        </p>
        <div className="mb-2 flex flex-wrap justify-center gap-2">
          {chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-[rgba(254,211,2,0.6)] bg-[rgba(254,211,2,0.3)] px-3 py-1 text-[11px] text-[#5C4800]"
            >
              {chip}
            </span>
          ))}
        </div>
        <p className="my-4 text-[12px] leading-[1.7] text-[#6B7A8D]">
          가입 내역이 있다면
          <br />
          함께 보내주세요
        </p>
        <div className="mb-6 inline-block rounded-lg border border-[rgba(254,211,2,0.4)] bg-white p-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={KAKAO_QR} alt="카카오톡 오픈채팅 QR 코드" width={120} height={120} />
          <p className="mt-2.5 text-[11px] tracking-[0.04em] text-[#6B7A8D]">
            아래 QR코드를 스캔하세요
          </p>
        </div>
        <a
          href={hasValidUrl ? chatUrl : "#kakao-inquiry"}
          target={hasValidUrl ? "_blank" : undefined}
          rel={hasValidUrl ? "noopener noreferrer" : undefined}
          className="flex w-full items-center justify-center gap-2 rounded bg-[#FEE500] px-4 py-4 text-[15px] font-bold text-[#3C1E00] transition-[filter] hover:brightness-95"
          onClick={(e) => {
            if (!hasValidUrl) e.preventDefault()
          }}
        >
          <span className="text-xl">💬</span>
          카카오톡으로 간편하게 확인하기
        </a>
      </div>
    </section>
  )
}
