"use client"

import { useState, useCallback } from "react"
import { HeroSection } from "@/components/landing/hero-section"
import { CostShockSection } from "@/components/landing/cost-shock-section"
import { CtaCheckSection } from "@/components/landing/cta-check-section"
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

      {/* 3. 치료비 이미지 */}
      <CostShockSection />

      {/* 4. CTA (문항으로 유도) */}
      <CtaCheckSection onCtaClick={() => scrollToSection("check-questions")} />

      {/* 5. 신청 폼 */}
      <ApplicationFormSection onSubmit={handleFormSubmit} />

      {/* 6. 결과 (체크 완료 후 표시) */}
      {showResult && (
        <ResultSection
          selectedCount={selectedCount}
          onCtaClick={() => scrollToSection("application-form")}
        />
      )}

      {/* 7. 카카오 */}
      <KakaoInquirySection />

      {/* 8. FAQ */}
      <FAQSection />

      {/* Footer */}
      <footer className="border-t border-[#E5E7EB] bg-[#F7F7F7] px-4 py-6 sm:px-5 sm:py-10">
        <div className="mx-auto max-w-[720px] min-w-0 text-center">
          <p className="text-[13px] text-muted-foreground">
            본 페이지는 보험 상담 서비스를 안내하며,
            <br />
            특정 보험 상품 가입을 권유하지 않습니다.
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
