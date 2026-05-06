/** 랜딩 CTA 본문 (여백 제외 — 모달 등에서 재사용) */
export const LANDING_CTA_BUTTON_BASE =
  "box-border flex min-h-[57.6px] w-full items-center justify-center rounded-[12px] border-0 bg-[#1D4ED8] px-4 text-center text-[16px] font-bold leading-tight text-white shadow-[0_2px_10px_rgba(29,78,216,0.15)] transition-[color,background-color,transform] hover:bg-[#1E40AF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8] disabled:pointer-events-none disabled:opacity-50 active:scale-[0.99]"

/** 랜딩 CTA + 상·하 40px */
export const LANDING_CTA_BUTTON_CLASS = `${LANDING_CTA_BUTTON_BASE} my-10`
