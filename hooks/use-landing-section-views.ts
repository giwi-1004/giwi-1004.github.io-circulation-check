"use client"

import { useEffect } from "react"

import { trackSectionView } from "@/lib/gtag"

const LANDING_SECTIONS = [
  { id: "hero", sectionName: "히어로" },
  { id: "compare", sectionName: "보장구조비교" },
  { id: "check-questions", sectionName: "자가체크" },
  { id: "application-form", sectionName: "신청폼" },
  { id: "kakao-inquiry", sectionName: "카카오" },
  { id: "faq", sectionName: "FAQ" },
] as const

export function useLandingSectionViews() {
  useEffect(() => {
    const seen = new Set<string>()
    const observers: IntersectionObserver[] = []

    for (const { id, sectionName } of LANDING_SECTIONS) {
      const element = document.getElementById(id)
      if (!element) continue

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting && !seen.has(id)) {
              seen.add(id)
              trackSectionView(sectionName)
            }
          }
        },
        { threshold: 0.3 },
      )

      observer.observe(element)
      observers.push(observer)
    }

    return () => {
      for (const observer of observers) {
        observer.disconnect()
      }
    }
  }, [])
}
