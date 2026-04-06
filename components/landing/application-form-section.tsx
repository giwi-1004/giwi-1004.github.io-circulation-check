"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { PRIVACY_CONSENT_FULL_TEXT } from "@/lib/privacy-consent-full-text"
import { LANDING_CTA_BUTTON_CLASS } from "@/lib/landing-cta"
import { normalizeKoreanPhoneToDigits } from "@/lib/normalize-kr-phone"

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
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), phone: phone.trim() }),
      })
      const data = (await res.json().catch(() => ({}))) as { message?: string }
      if (!res.ok) {
        setFormError(data.message ?? "저장에 실패했습니다. 잠시 후 다시 시도해주세요.")
        return
      }
      onSubmit()
    } catch {
      setFormError("네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.")
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
      className="bg-[#F2F2F2] px-5 py-10 sm:px-5 sm:py-10"
    >
      <div className="mx-auto min-w-0 max-w-[720px]">
        <h2 className="mb-2 text-[20px] font-bold leading-[1.4] text-foreground">
          무료 확인 요청
        </h2>

        <p className="mb-6 text-[14px] leading-relaxed text-muted-foreground">
          보험 가입 권유가 아닌
          <br />
          현재 보장 확인 목적입니다
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="mb-2 block text-[14px] text-foreground">
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
              className="h-12 rounded-[12px] border-[#B7B9BC] text-[16px]"
            />
          </div>

          <div>
            <label htmlFor="phone" className="mb-2 block text-[14px] text-foreground">
              전화번호
            </label>
            <Input
              id="phone"
              type="tel"
              placeholder="010-0000-0000"
              value={phone}
              onChange={handlePhoneChange}
              className="h-12 rounded-[12px] border-[#B7B9BC] text-[16px]"
              maxLength={22}
              inputMode="tel"
              autoComplete="tel"
            />
          </div>

          <div>
            <div className="flex flex-row items-start justify-between gap-4">
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
                  className="mt-0.5 border-[#A5A7A9] data-[state=checked]:border-[#2563EB] data-[state=checked]:bg-[#2563EB]"
                />
                <span className="text-left text-[14px] leading-relaxed text-foreground">
                  [필수] 개인정보 수집 및 이용에 동의합니다
                </span>
              </label>
              <button
                type="button"
                className="shrink-0 text-[14px] font-medium text-[#6B7280] underline-offset-4 hover:underline"
                aria-expanded={privacyDetailOpen}
                onClick={() => setPrivacyDetailOpen((o) => !o)}
              >
                [내용 보기]
              </button>
            </div>

            <div
              className={cn(
                "overflow-hidden transition-[max-height] duration-300 ease-in-out",
                privacyDetailOpen && "mt-4"
              )}
              style={{ maxHeight: privacyDetailOpen ? 200 : 0 }}
              aria-hidden={!privacyDetailOpen}
            >
              <div className="max-h-[200px] overflow-y-auto bg-[#F9FAFB] p-3 text-[12px] leading-[1.6] text-foreground">
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
            className={cn(LANDING_CTA_BUTTON_CLASS)}
          >
            {isSubmitting ? "요청 중..." : "보상 가능성 확인하기"}
          </Button>
        </form>
      </div>
    </section>
  )
}
