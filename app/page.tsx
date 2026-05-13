"use client"

import { useCallback, useState } from "react"

import { ApplicationFormSection } from "@/components/landing/application-form-section"
import { CheckQuestionsSection } from "@/components/landing/check-questions-section"
import { CompareSection } from "@/components/landing/compare-section"
import { FAQSection } from "@/components/landing/faq-section"
import { HeroSection } from "@/components/landing/hero-section"
import { KakaoInquirySection } from "@/components/landing/kakao-inquiry-section"
import { SuccessModal } from "@/components/landing/success-modal"

export default function LandingPage() {
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [])

  const scrollToForm = useCallback(() => {
    scrollToSection("application-form")
  }, [scrollToSection])

  return (
    <main className="mx-auto min-h-screen w-full max-w-[480px] overflow-x-hidden bg-[#FAF7F0]">
      <HeroSection onCtaClick={scrollToForm} />
      <CompareSection />
      <CheckQuestionsSection onCtaClick={scrollToForm} />
      <ApplicationFormSection onSubmit={() => setShowSuccessModal(true)} />
      <KakaoInquirySection />
      <FAQSection />

      <footer className="footer bg-[#0A2448] px-6 py-8">
        <p className="mb-5 font-sans text-[13px] tracking-[0.06em] text-[#C9A84C]">
          순환계 치료비 보장 점검
        </p>
        <p className="footer-text text-left text-[11px] leading-[2] text-white/28">
          본 페이지는 보험 상담 서비스를 안내하며,
          <br />
          특정 보험 상품 가입을 권유하지 않습니다.
          <br />
          <br />
          보험계약 체결 전 상품설명서 및 약관을
          <br />
          반드시 읽어보시기 바랍니다.
          <br />
          이 페이지는 보험 상담 서비스 안내를 목적으로 하며
          <br />
          실제 보험금 지급은 약관 조건에 따라 상이할 수 있습니다.
          <br />※ 치료비 수치는 실제 사례 참고 예시입니다.
        </p>
      </footer>

      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      />
    </main>
  )
}
