"use client"

import { useState, useCallback } from "react"
import { HeroSection } from "@/components/landing/hero-section"
import { SelfAwarenessSection } from "@/components/landing/self-awareness-section"
import { ImportanceSection } from "@/components/landing/importance-section"
import { CostShockSection } from "@/components/landing/cost-shock-section"
import { InsuranceConnectionSection } from "@/components/landing/insurance-connection-section"
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
      
      {/* 2. 자기 인식 */}
      <SelfAwarenessSection />
      
      {/* 3. 순환계 중요성 */}
      <ImportanceSection />
      
      {/* 4. 비용 충격 */}
      <CostShockSection />
      
      {/* 5. 보험 연결 */}
      <InsuranceConnectionSection />
      
      {/* 6. CTA (체크 유도) */}
      <CtaCheckSection onCtaClick={() => scrollToSection("check-questions")} />
      
      {/* 7. 체크 질문 */}
      <CheckQuestionsSection onComplete={handleCheckComplete} />
      
      {/* 8. 결과 페이지 */}
      {showResult && (
        <ResultSection 
          selectedCount={selectedCount} 
          onCtaClick={() => scrollToSection("application-form")} 
        />
      )}
      
      {/* 9. 신청 폼 */}
      <ApplicationFormSection onSubmit={handleFormSubmit} />
      
      {/* 10. 카카오톡 1:1 문의 */}
      <KakaoInquirySection />

      {/* 11. FAQ */}
      <FAQSection />

      {/* Footer */}
      <footer className="border-t border-[#E5E7EB] bg-[#F7F7F7] px-5 py-10 sm:px-5">
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
