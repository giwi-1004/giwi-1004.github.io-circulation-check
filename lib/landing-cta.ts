/** 랜딩 CTA 본문 (여백 제외 — 모달 등에서 재사용) */
export const LANDING_CTA_BUTTON_BASE =
  "box-border flex min-h-[57.6px] w-full items-center justify-center rounded-xl border-0 bg-[#E8591A] px-4 text-center text-[16px] font-bold leading-tight text-[#FFFFFF] shadow-[0_2px_10px_rgba(232,89,26,0.22)] transition-[color,background-color,transform] hover:bg-[#CF4F17] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8591A] disabled:pointer-events-none disabled:opacity-50 active:scale-[0.99]"

/** 랜딩 CTA + 상·하 40px */
export const LANDING_CTA_BUTTON_CLASS = `${LANDING_CTA_BUTTON_BASE} my-10`
