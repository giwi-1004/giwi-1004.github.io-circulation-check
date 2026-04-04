"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { PRIVACY_CONSENT_FULL_TEXT } from "@/lib/privacy-consent-full-text"

interface ApplicationFormSectionProps {
  onSubmit: (name: string, phone: string) => void
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
    const phoneDigits = phone.replace(/\D/g, "")
    if (phoneDigits.length < 10 || phoneDigits.length > 11) {
      setFormError("전화번호를 올바르게 입력해주세요.")
      return
    }

    setIsSubmitting(true)
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 500))
    onSubmit(name, phone)
    setIsSubmitting(false)
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
      className="bg-secondary px-4 py-10 sm:px-5 sm:py-12"
    >
      <div className="mx-auto min-w-0 max-w-[720px]">
        <h2 className="text-[20px] font-bold text-foreground mb-2 leading-[1.4]">
          무료 확인 요청
        </h2>
        
        <p className="text-[14px] text-muted-foreground mb-6 leading-relaxed">
          보험 가입 권유가 아닌
          <br />
          현재 보장 확인 목적입니다
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-[14px] font-medium text-foreground mb-2">
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
              className="h-12 text-[16px] rounded-xl"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-[14px] font-medium text-foreground mb-2">
              전화번호
            </label>
            <Input
              id="phone"
              type="tel"
              placeholder="010-0000-0000"
              value={phone}
              onChange={handlePhoneChange}
              className="h-12 text-[16px] rounded-xl"
              maxLength={13}
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
                  className="mt-0.5"
                />
                <span className="text-left text-[14px] leading-relaxed text-foreground">
                  [필수] 개인정보 수집 및 이용에 동의합니다
                </span>
              </label>
              <button
                type="button"
                className="shrink-0 text-[14px] font-medium text-primary underline-offset-4 hover:underline"
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
            className="h-12 w-full rounded-xl text-[16px] font-bold shadow-[0px_4px_12px_rgba(0,0,0,0.1)] bg-primary hover:bg-primary/90 text-primary-foreground disabled:pointer-events-none disabled:opacity-50"
          >
            {isSubmitting ? "요청 중..." : "보상 가능성 확인하기"}
          </Button>
        </form>
      </div>
    </section>
  )
}
