"use client"

import { useState } from "react"
import { UserCheck } from "lucide-react"

import { cn } from "@/lib/utils"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { normalizeKoreanPhoneToDigits } from "@/lib/normalize-kr-phone"
import { submitLandingLead } from "@/lib/submit-landing-lead"

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
      className="bg-[#FFF5F0] px-4 py-4 sm:px-5 sm:py-4"
    >
      <div className="mx-auto min-w-0 max-w-[720px]">
        <div className="mb-4 flex items-center gap-3 rounded-[10px] bg-[#F8F9FC] px-4 py-3">
          <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-[#FFF0E8]">
            <UserCheck className="size-[20px] text-[#E8591A]" aria-hidden />
          </div>
          <div className="min-w-0 flex-1">
            <p className="m-0 text-[13px] font-bold leading-snug text-[#1B2A4A]">
              전문 보험설계사가 직접 확인합니다
            </p>
            <p className="m-0 mt-[3px] text-[11px] leading-snug text-[#888]">
              보험설계사 자격 보유 · 상담 강요 없음
            </p>
          </div>
        </div>

        <div className="mb-3 sm:mb-4">
          <h2 className="m-0 text-[19px] font-bold leading-[1.28] tracking-tight text-foreground sm:text-[20px] sm:leading-[1.35]">
            치료비 보장 구조 무료 확인
          </h2>
          <p className="mt-1.5 text-[13px] leading-snug text-muted-foreground sm:mt-2 sm:text-[14px] sm:leading-relaxed">
            순환계 치료비 보장이 있는지
            <br />
            1분이면 무료로 확인됩니다
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="flex flex-col gap-3">
            <div>
              <label htmlFor="name" className="mb-1 block text-[13px] text-foreground sm:text-[14px]">
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
                className="h-11 min-h-[44px] rounded-[12px] border-[#B7B9BC] px-3.5 text-[16px]"
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-1 block text-[13px] text-foreground sm:text-[14px]">
                전화번호
              </label>
              <Input
                id="phone"
                type="tel"
                placeholder="010-0000-0000"
                value={phone}
                onChange={handlePhoneChange}
                className="h-11 min-h-[44px] rounded-[12px] border-[#B7B9BC] px-3.5 text-[16px]"
                maxLength={22}
                inputMode="tel"
                autoComplete="tel"
              />
            </div>
          </div>

          <div className="rounded-[12px] border border-[#D1D5DB] bg-white px-3 py-2.5 shadow-sm sm:px-4 sm:py-3">
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
                  className="mt-0.5 border-[#94A3B8] data-[state=checked]:border-[#E8591A] data-[state=checked]:bg-[#E8591A]"
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
              style={{ maxHeight: privacyDetailOpen ? 380 : 0 }}
              aria-hidden={!privacyDetailOpen}
            >
              <div className="max-h-[360px] overflow-y-auto rounded-lg border border-[#E5E7EB] bg-[#F8FAFC] p-3 pb-4 text-[12px] leading-[1.55] text-[#334155]">
                <pre className="m-0 whitespace-pre-wrap break-words font-sans">
                  {PRIVACY_CONSENT_FULL_TEXT}
                </pre>
              </div>
            </div>

            <p className="mt-2.5 text-center text-[11px] leading-snug text-[#888]">
              입력하신 정보는 보장 확인 목적에만 사용됩니다
            </p>
          </div>

          {formError ? (
            <p className="text-[14px] text-destructive" role="alert">
              {formError}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={isSubmitting || !privacyAgreed}
            className="box-border flex min-h-[57.6px] w-full touch-manipulation items-center justify-center rounded-xl border-0 px-4 text-center text-[16px] leading-tight shadow-[0_2px_10px_rgba(232,89,26,0.22)] transition-[opacity,transform] hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8591A] disabled:pointer-events-none disabled:opacity-50 active:scale-[0.99]"
            style={{
              backgroundColor: "#E8591A",
              color: "#FFFFFF",
              fontWeight: 700,
            }}
          >
            {isSubmitting ? "요청 중..." : "치료비 보장 구조 지금 확인하기"}
          </button>

          <div className="flex flex-col items-center gap-2">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[11px] leading-snug text-[#666]">
              <span className="inline-flex items-center gap-0.5">✓ 가입 권유 없음</span>
              <span className="inline-flex items-center gap-0.5">✓ 완전 무료</span>
              <span className="inline-flex items-center gap-0.5">✓ 10분이면 완료</span>
            </div>
            <p className="m-0 w-full text-center text-[11px] leading-snug text-[#888]">
              담당 설계사가 직접 연락드립니다
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}
