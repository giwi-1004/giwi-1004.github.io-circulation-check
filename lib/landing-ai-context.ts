/**
 * ChatGPT·기타 LLM이 페이지 목적·구조·문구를 파악하기 위한 구조화 데이터.
 * UI 컴포넌트와 동일한 정보를 유지하도록 주기적으로 맞춰 주세요.
 */
export const LANDING_AI_CONTEXT = {
  documentType: "landing_page_ai_context",
  version: 1,
  locale: "ko-KR",
  meta: {
    title: "내 보험 순환계 보장 확인 | 무료 점검",
    description:
      "내 보험에 순환계 보장이 빠져 있을 수 있습니다. 1분 안에 무료로 확인해보세요.",
    theme: "뇌·심장 관련 보험 보장 구조(진단금 vs 치료비·반복 치료) 무료 점검 안내",
  },
  pagePurpose:
    "방문자가 자가 체크 문항으로 보장 구조 점검 필요성을 인지하고, 이름·전화로 상담/확인을 요청하거나 카카오톡으로 문의할 수 있도록 안내한다. 특정 보험 상품 가입을 직접 권유하는 페이지가 아니라 보장 구조 확인을 돕는 랜딩이다.",
  targetAudience:
    "뇌·심장 질환 가능성이 걱정되거나, 기존 보험이 진단금 위주인지 치료비 보장이 있는지 불확실한 사용자.",
  sectionOrder: [
    "hero",
    "check_questions",
    "cta_repeat",
    "application_form",
    "result_conditional",
    "kakao_inquiry",
    "faq",
    "footer_disclaimer",
  ],
  sections: [
    {
      id: "hero",
      title: "히어로",
      tag: "순환계 치료비 보장 무료 점검",
      headings: [
        "내 보험, (기본 흰색)",
        "뇌·심장 치료비까지 / 대비됐나요? (강조 #E2C97E)",
        "연간 한도·약관 조건 내에서 치료비 기준으로 보장받는 구조가 있습니다",
      ],
      comparisonTitle: "일반 보험과 이렇게 다릅니다",
      comparisonItems: [
        { icon: "✕", iconColor: "#E8591A", text: "일반 보험 진단금 — 진단 시 1회만 지급" },
        { icon: "✕", iconColor: "#E8591A", text: "재입원·재시술·재활치료비는 본인 부담" },
        {
          icon: "✓",
          iconColor: "#1D9E75",
          text: "순환계 통합치료비 — 치료할 때마다 연간 한도 내 반복 지급",
        },
      ],
      comparisonEmphasis:
        "중환자실·수술·재활까지\n치료 단계별로 보험금이 지급됩니다",
      statCards: [
        { value: "최대 2,500만원", label: "혈전용해치료 1회 지급액" },
        { value: "연간 반복", label: "재치료 시 매년 지급 가능" },
      ],
      statFootnote: "치료가 반복될수록 보장이 작동하는 구조입니다",
      reassuranceBelowCta: "무료 · 가입 권유 없음 · 1분이면 완료",
      primaryCta: { label: "내 보험 보장 구조 확인하기", scrollTargetId: "check-questions" },
      media: [{ type: "image", path: "/images/hero-main.png", alt: "심장 통증으로 가슴을 움켜쥔 남성" }],
    },
    {
      id: "check-questions",
      title: "자가 체크 문항",
      headings: [
        "내 보험, 치료비까지 준비되어 있을까요?",
        "아래 항목 중 해당되는 내용을 선택해주세요",
      ],
      rule:
        "2개 이상 해당 시 ‘보장 구조 확인이 필요한 상태’로 간주하고 결과 섹션에서 ‘확인 필요’ 분기를 보여준다.",
      questions: [
        "어지럼·두통을 자주 느낀다",
        "가슴 답답함·두근거림이 있다",
        "가족 중 뇌·심장 질환 병력이 있다",
        "보험 가입 후 한 번도 점검한 적 없다",
        "진단금은 있지만 치료비 보장인지 모른다",
      ],
      primaryCta: { label: "내 보험 보장 구조 확인하기", action: "submit_selection_count" },
    },
    {
      id: "cta-repeat",
      title: "문항 유도 CTA",
      primaryCta: { label: "내 보험 보장 구조 확인하기", scrollTargetId: "check-questions" },
    },
    {
      id: "application-form",
      title: "상담·확인 요청 폼",
      headings: [
        "치료비 보장 구조 무료 확인",
        "순환계 치료비 보장이 있는지\n1분이면 무료로 확인됩니다",
      ],
      trustBadges: ["가입 권유 없음", "완전 무료", "10분이면 완료"],
      fields: [
        { name: "name", label: "이름", type: "text", placeholder: "이름을 입력해주세요", required: true },
        {
          name: "phone",
          label: "전화번호",
          type: "tel",
          placeholder: "010-0000-0000",
          required: true,
          validation: "한국 전화번호 10~11자리(숫자)",
        },
      ],
      consent: {
        required: true,
        label: "[필수] 개인정보 수집 및 이용에 동의합니다",
        detailSource:
          "components/landing/application-form-section.tsx (PRIVACY_CONSENT_FULL_TEXT)",
      },
      submitButton: { label: "치료비 보장 구조 지금 확인하기", loadingLabel: "요청 중..." },
      footnote: "입력하신 정보는 보장 확인 목적에만 사용됩니다",
      backendNote: "제출 시 submitLandingLead(name, phone) 호출",
    },
    {
      id: "result",
      title: "체크 결과 (문항 제출 후 표시)",
      visibility: "사용자가 체크 문항에서 확인 버튼을 누른 뒤에만 표시",
      logic: {
        if_selected_count_gte_2: {
          badge: "확인 필요",
          headline: "치료비 보장 구조 점검이 필요합니다",
          body: [
            "현재 보험이 진단금 중심이라면",
            "재입원·재시술·재활치료비는",
            "본인이 부담해야 할 수 있습니다",
          ],
          highlight:
            "치료할 때마다 보험금이 나오는 구조인지\n지금 바로 확인해보세요",
          cta: { label: "내 보험 구조 확인 요청하기", scrollTargetId: "application-form" },
        },
        else: {
          badge: "확인 권장",
          headline: "현재 상태는 양호할 수 있습니다",
          body: ["증상이 없더라도 보장 구조는 보험증권을 확인해야 알 수 있습니다"],
          cta: { label: "내 보험 구조 확인 요청하기", scrollTargetId: "application-form" },
        },
      },
    },
    {
      id: "kakao-inquiry",
      title: "카카오톡 1:1 문의",
      benefits: ["1:1 확인", "무료 확인", "빠른 답변"],
      note: "가입 내역이 있다면 함께 보내주세요",
      qr: { path: "/kakao-qr.png", alt: "카카오톡 오픈채팅 QR 코드" },
      link: {
        label: "카카오톡으로 간편하게 확인하기",
        defaultUrl: "https://open.kakao.com/o/scS4vMoi",
        envOverride: "NEXT_PUBLIC_KAKAO_CHAT_URL",
      },
    },
    {
      id: "faq",
      title: "자주 묻는 질문",
      items: [
        { q: "가입 권유를 받게 되나요?", a: "원하지 않으시면 진행하지 않습니다." },
        { q: "정말 무료인가요?", a: "네. 보장 구조 확인은 무료입니다." },
        { q: "무엇을 확인하나요?", a: "진단금 중심인지 치료비 구조인지 확인합니다." },
        {
          q: "기존 보험을 해지해야 하나요?",
          a: "기존 보험 해지 여부와는 별개로,\n현재 보장 구조를 먼저 확인하는 과정입니다.",
        },
        { q: "보험증권 없어도 되나요?", a: "가능합니다. 앱 화면으로도 확인 가능합니다." },
        {
          q: "치료비 보장과 진단금은 어떻게 다른가요?",
          a:
            "진단금은 진단 시 1회 지급되는 구조입니다.\n치료비 보장은 실제 치료가 발생할 때마다\n연간 한도 내에서 보험금이 지급되는 구조로,\n재입원·재시술·재활치료 등\n반복 치료 상황에서 실질적인 보장을 받을 수 있습니다.",
        },
      ],
    },
    {
      id: "footer",
      disclaimer:
        "본 페이지는 보험 상담 서비스를 안내하며, 특정 보험 상품 가입을 권유하지 않습니다.",
    },
  ],
  analysisHintsForLLM: [
    "CTA는 반복적으로 ‘내 보험 보장 구조 확인하기’와 폼 제출로 이어진다.",
    "결과 문구는 의학적 진단이 아니라 보험 구조 확인 필요성에 대한 안내이다.",
    "법적·의료적 효력이 있는 진단을 제공한다고 보기 어렵고, 보장 내용은 증권·상담으로 확인해야 한다는 취지가 포함된다.",
  ],
} as const

export type LandingAiContext = typeof LANDING_AI_CONTEXT
