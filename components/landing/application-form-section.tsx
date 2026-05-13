"use client"

import { useState } from "react"

import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { LANDING_CTA_BUTTON_BASE } from "@/lib/landing-cta"
import { normalizeKoreanPhoneToDigits } from "@/lib/normalize-kr-phone"
import { submitLandingLead } from "@/lib/submit-landing-lead"
import { cn } from "@/lib/utils"

const PRIVACY_CONSENT_FULL_TEXT = `개인정보 수집 및 이용 동의

1. 수집 목적
순환계 보험 보장 구조 확인 상담 연결

2. 수집 항목
성명, 전화번호

3. 보유 및 이용 기간
상담 완료 후 즉시 파기
(단, 관계 법령에 따라 보존이 필요한 경우
해당 기간까지 보관)

4. 동의 거부 권리
개인정보 수집·이용에 동의하지 않을
권리가 있습니다.
단, 동의 거부 시 상담 신청 서비스
이용이 제한됩니다.

5. 제3자 제공
상담 연결을 위해 제휴 보험설계사에게
성명·전화번호가 제공될 수 있습니다.

※ 수집된 정보는 보장 확인 상담 목적 외에
사용되지 않습니다.`

interface ApplicationFormSectionProps {
  onSubmit: () => void
}

export function ApplicationFormSection({ onSubmit }: ApplicationFormSectionProps) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formError, setFormError] = useState("")
  const [privacyAgreed, setPrivacyAgreed] = useState(false)
  const [privacyDetailOpen, setPrivacyDetailOpen] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormError("")
    if (!privacyAgreed) {
      setFormError("개인정보 수집 및 이용에 동의해주세요.")
      return
    }
    if (!name.trim() || !phone.trim()) {
      setFormError("이름과 전화번호를 모두 입력해주세요.")
      return
    }
    const phoneDigits = normalizeKoreanPhoneToDigits(phone)
    if (phoneDigits.length < 10 || phoneDigits.length > 11) {
      setFormError("전화번호를 올바르게 입력해주세요.")
      return
    }

    setIsSubmitting(true)
    try {
      const result = await submitLandingLead(name, phone)
      if (!result.ok) {
        setFormError(result.message)
        return
      }
      onSubmit()
    } finally {
      setIsSubmitting(false)
    }
  }

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, "")
    if (numbers.length <= 3) return numbers
    if (numbers.length <= 7) return `${numbers.slice(0, 3)}-${numbers.slice(3)}`
    return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`
  }

  return (
    <section id="application-form" className="bg-[#FAF7F0] px-7 py-[60px]">
      <div className="rounded-[10px] border border-[rgba(201,168,76,0.25)] bg-white px-6 py-8">
        <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#C9A84C]">
          무료 보장 점검
        </p>
        <h2 className="mb-1.5 font-sans text-[20px] font-bold leading-[1.4] text-[#0D1B2A]">
          치료비 보장 구조
          <br />
          무료 확인
        </h2>
        <p className="mb-7 text-[13px] leading-[1.8] text-[#6B7A8D]">
          순환계 치료비 보장이 있는지
          <br />
          1분이면 무료로 확인됩니다
        </p>

        <div className="expert-badge mb-7 flex items-center gap-2.5 rounded-md border border-[rgba(201,168,76,0.3)] bg-[#F5EDD6] px-3.5 py-3">
          <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#0D1B2A]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#C9A84C"
              strokeWidth="1.8"
              aria-hidden
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <div className="expert-info min-w-0 text-[12px]">
            <strong className="block whitespace-nowrap text-[12px] font-semibold text-[#0D1B2A]">
              전문 보험설계사가 직접 확인합니다
            </strong>
            <span className="whitespace-nowrap text-[#6B7A8D]">
              보험설계사 자격 보유 &nbsp;·&nbsp; 상담 강요 없음
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="mb-[18px]">
            <label
              htmlFor="name"
              className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.08em] text-[#6B7A8D]"
            >
              이름
            </label>
            <Input
              id="name"
              type="text"
              placeholder="이름을 입력해주세요"
              value={name}
              onChange={(e) => {
                setFormError("")
                setName(e.target.value)
              }}
              className="h-auto rounded border-black/10 bg-[#FAF7F0] px-4 py-3.5 text-[14px] focus-visible:border-[#C9A84C] focus-visible:bg-white focus-visible:ring-0"
            />
          </div>

          <div className="mb-[18px]">
            <label
              htmlFor="phone"
              className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.08em] text-[#6B7A8D]"
            >
              전화번호
            </label>
            <Input
              id="phone"
              type="tel"
              placeholder="010-0000-0000"
              value={phone}
              onChange={(e) => {
                setFormError("")
                setPhone(formatPhoneNumber(e.target.value))
              }}
              className="h-auto rounded border-black/10 bg-[#FAF7F0] px-4 py-3.5 text-[14px] focus-visible:border-[#C9A84C] focus-visible:bg-white focus-visible:ring-0"
              maxLength={22}
              inputMode="tel"
              autoComplete="tel"
            />
          </div>

          <div className="mb-2 rounded-md bg-[#F0EBE0] p-4">
            <div className="flex items-start gap-2.5">
              <Checkbox
                id="privacy-consent"
                checked={privacyAgreed}
                onCheckedChange={(v) => {
                  setFormError("")
                  setPrivacyAgreed(v === true)
                }}
                className="mt-0.5 border-[#94A3B8] data-[state=checked]:border-[#C9A84C] data-[state=checked]:bg-[#C9A84C]"
              />
              <label htmlFor="privacy-consent" className="consent-text flex-1 text-[12px] font-medium text-[#0D1B2A]">
                [필수] 개인정보 수집 및 이용에 동의합니다
              </label>
              <button
                type="button"
                className="consent-link shrink-0 border-0 bg-transparent p-0 text-[11px] text-[#0D1B2A] underline"
                onClick={() => setPrivacyDetailOpen((o) => !o)}
              >
                [내용 보기]
              </button>
            </div>
            <div
              className={cn(
                "mt-3 whitespace-pre-line rounded border border-[rgba(201,168,76,0.25)] bg-white p-3.5 text-[12px] leading-[1.8] text-[#6B7A8D]",
                !privacyDetailOpen && "hidden",
              )}
            >
              {PRIVACY_CONSENT_FULL_TEXT}
            </div>
          </div>

          <p className="mb-6 text-[11px] text-[#6B7A8D]">
            입력하신 정보는 보장 확인 목적에만 사용됩니다
          </p>

          {formError ? (
            <p className="mb-3 text-[14px] text-destructive" role="alert">
              {formError}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className={cn(LANDING_CTA_BUTTON_BASE, "disabled:opacity-50")}
          >
            {isSubmitting ? "요청 중..." : "치료비 보장 구조 지금 확인하기"}
          </button>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            <span className="text-[11px] text-[#6B7A8D] before:mr-1 before:text-[#C9A84C] before:content-['✓']">
              가입 권유 없음
            </span>
            <span className="text-[rgba(201,168,76,0.25)]">|</span>
            <span className="text-[11px] text-[#6B7A8D] before:mr-1 before:text-[#C9A84C] before:content-['✓']">
              완전 무료
            </span>
            <span className="text-[rgba(201,168,76,0.25)]">|</span>
            <span className="text-[11px] text-[#6B7A8D] before:mr-1 before:text-[#C9A84C] before:content-['✓']">
              10분이면 완료
            </span>
            <p className="mt-2 w-full text-center text-[11px] text-[#6B7A8D]">
              담당 설계사가 직접 연락드립니다
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}
