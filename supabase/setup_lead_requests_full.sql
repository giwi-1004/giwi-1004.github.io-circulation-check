-- =============================================================================
-- 랜딩 신청: 이름(name) + 전화번호(phone) 저장
-- 새 Supabase 프로젝트 만든 뒤 → SQL Editor에 붙여넣고 한 번 실행
-- =============================================================================

create table if not exists public.lead_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(trim(name)) > 0),
  phone text not null check (char_length(trim(phone)) > 0),
  created_at timestamptz not null default now()
);

comment on table public.lead_requests is '랜딩 무료 확인 요청 (이름, 전화번호)';

create index if not exists lead_requests_created_at_idx
  on public.lead_requests (created_at desc);

alter table public.lead_requests enable row level security;

-- ---------------------------------------------------------------------------
-- 접근 분리
-- · Secret 키(서버만): Next /api/leads → RLS 우회하여 insert (권장 경로)
-- · Publishable 키(브라우저): PC·모바일에서 API가 없을 때 insert만 허용
--   anon 은 SELECT/UPDATE/DELETE 정책 없음 → 다른 사람 행 조회 불가
-- ---------------------------------------------------------------------------
grant insert on public.lead_requests to anon;

drop policy if exists "lead_requests_anon_insert" on public.lead_requests;

create policy "lead_requests_anon_insert"
  on public.lead_requests
  for insert
  to anon
  with check (true);
