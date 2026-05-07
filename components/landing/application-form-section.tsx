"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { PRIVACY_CONSENT_FULL_TEXT } from "@/lib/privacy-consent-full-text"
import { LANDING_CTA_BUTTON_BASE } from "@/lib/landing-cta"
import { normalizeKoreanPhoneToDigits } from "@/lib/normalize-kr-phone"
import { submitLandingLead } from "@/lib/submit-landing-lead"

interface ApplicationFormSectionProps {
  /** 서버 저장 성공 후 호출 (개인정보는 콜백으로 넘기지 않음) */
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

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormError("")
    const formatted = formatPhoneNumber(e.target.value)
    setPhone(formatted)
  }

  return (
    <section
      id="application-form"
      className="bg-[#F2F2F2] px-4 py-6 sm:px-5 sm:py-8"
    >
      <div className="mx-auto min-w-0 max-w-[720px]">
        <div className="mb-3 sm:mb-5">
          <h2 className="m-0 text-[19px] font-bold leading-[1.28] tracking-tight text-foreground sm:text-[20px] sm:leading-[1.35]">
            상담 강요 없이
          </h2>
          <p className="mt-1 text-[13px] leading-[1.4] text-muted-foreground sm:mt-2 sm:text-[14px] sm:leading-relaxed">
            부담 없이 확인 가능합니다
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
          <div className="flex flex-col gap-2.5">
            <div>
              <label htmlFor="name" className="mb-0.5 block text-[13px] text-foreground sm:mb-1 sm:text-[14px]">
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
                className="h-10 min-h-[40px] rounded-[12px] border-[#B7B9BC] px-3.5 text-[16px] sm:h-11 sm:min-h-[44px]"
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-0.5 block text-[13px] text-foreground sm:mb-1 sm:text-[14px]">
                전화번호
              </label>
              <Input
                id="phone"
                type="tel"
                placeholder="010-0000-0000"
                value={phone}
                onChange={handlePhoneChange}
                className="h-10 min-h-[40px] rounded-[12px] border-[#B7B9BC] px-3.5 text-[16px] sm:h-11 sm:min-h-[44px]"
                maxLength={22}
                inputMode="tel"
                autoComplete="tel"
              />
            </div>
          </div>

          <div className="rounded-[12px] border border-[#D1D5DB] bg-white px-3 py-2 shadow-sm sm:px-4 sm:py-3">
            <div className="flex flex-row items-start justify-between gap-3">
              <label
                htmlFor="privacy-consent"
                className="flex min-w-0 flex-1 cursor-pointer items-start gap-2"
              >
                <Checkbox
                  id="privacy-consent"
                  checked={privacyAgreed}
                  onCheckedChange={(v) => {
                    setFormError("")
                    setPrivacyAgreed(v === true)
                  }}
                  className="mt-0.5 border-[#94A3B8] data-[state=checked]:border-[#2563EB] data-[state=checked]:bg-[#2563EB]"
                />
                <span className="text-left text-[14px] font-medium leading-snug text-[#374151] sm:text-[14px] sm:leading-relaxed">
                  [필수] 개인정보 수집 및 이용에 동의합니다
                </span>
              </label>
              <button
                type="button"
                className="shrink-0 text-[12px] font-semibold text-[#64748B] underline-offset-4 hover:text-[#334155] hover:underline"
                aria-expanded={privacyDetailOpen}
                onClick={() => setPrivacyDetailOpen((o) => !o)}
              >
                [내용 보기]
              </button>
            </div>

            <div
              className={cn(
                "overflow-hidden transition-[max-height] duration-300 ease-in-out",
                privacyDetailOpen && "mt-3"
              )}
              style={{ maxHeight: privacyDetailOpen ? 200 : 0 }}
              aria-hidden={!privacyDetailOpen}
            >
              <div className="max-h-[200px] overflow-y-auto rounded-lg border border-[#E5E7EB] bg-[#F8FAFC] p-3 text-[12px] leading-[1.55] text-[#334155]">
                <pre className="m-0 whitespace-pre-wrap break-words font-sans">
                  {PRIVACY_CONSENT_FULL_TEXT}
                </pre>
              </div>
            </div>
          </div>

          {formError ? (
            <p className="text-[14px] text-destructive" role="alert">
              {formError}
            </p>
          ) : null}

          <Button
            type="submit"
            disabled={isSubmitting || !privacyAgreed}
            className={cn(LANDING_CTA_BUTTON_BASE, "w-full")}
          >
            {isSubmitting ? "요청 중..." : "내 보험 구조 확인 요청하기"}
          </Button>

          <p className="-mt-1 text-center text-[11px] leading-snug text-muted-foreground sm:text-[12px] sm:leading-relaxed">
            입력하신 정보는 보장 확인 목적에만 사용됩니다
          </p>
        </form>
      </div>
    </section>
  )
}
