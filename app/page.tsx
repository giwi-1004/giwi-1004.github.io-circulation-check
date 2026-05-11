"use client"

import { useCallback, useState } from "react"

import { HeroSection } from "@/components/landing/hero-section"
import { CheckQuestionsSection } from "@/components/landing/check-questions-section"
import { ResultSection } from "@/components/landing/result-section"
import { ApplicationFormSection } from "@/components/landing/application-form-section"
import { KakaoInquirySection } from "@/components/landing/kakao-inquiry-section"
import { FAQSection } from "@/components/landing/faq-section"
import { SuccessModal } from "@/components/landing/success-modal"

export default function LandingPage() {
  const [showResult, setShowResult] = useState(false)
  const [selectedCount, setSelectedCount] = useState(0)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [])

  const handleCheckComplete = (count: number) => {
    setSelectedCount(count)
    setShowResult(true)
    setTimeout(() => {
      scrollToSection("result")
    }, 100)
  }

  const handleFormSubmit = () => {
    setShowSuccessModal(true)
  }

  return (
    <main className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-background">
      {/* 1. Hero */}
      <HeroSection onCtaClick={() => scrollToSection("check-questions")} />

      {/* 2. 선택 문항 (히어로 직후) */}
      <CheckQuestionsSection onComplete={handleCheckComplete} />

      {/* 3. 결과 (체크 완료 후 표시) */}
      {showResult && (
        <ResultSection
          selectedCount={selectedCount}
          onCtaClick={() => scrollToSection("application-form")}
        />
      )}

      {/* 4. 신청 폼 */}
      <ApplicationFormSection onSubmit={handleFormSubmit} />

      {/* 5. 카카오 */}
      <KakaoInquirySection />

      {/* 6. FAQ */}
      <FAQSection />

      {/* Footer */}
      <footer className="border-t border-[#1B2A4A] bg-[#1B2A4A] px-4 py-4 sm:px-5 sm:py-5">
        <div className="mx-auto max-w-[720px] min-w-0 text-center">
          <p className="text-[13px] text-[#8899BB]">
            본 페이지는 보험 상담 서비스를 안내하며,
            <br />
            특정 보험 상품 가입을 권유하지 않습니다.
          </p>
          <p className="mt-4 text-[11px] leading-[1.6] text-[#8899BB]">
            보험계약 체결 전 상품설명서 및 약관을
            <br />
            반드시 읽어보시기 바랍니다.
            <br />
            이 페이지는 보험 상담 서비스 안내를 목적으로 하며
            <br />
            실제 보험금 지급은 약관 조건에 따라 상이할 수 있습니다.
            <br />※ 치료비 수치는 실제 사례 참고 예시입니다.
          </p>
        </div>
      </footer>

      {/* Success Modal */}
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      />
    </main>
  )
}
