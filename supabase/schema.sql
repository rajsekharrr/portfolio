create table if not exists public.visitor_sessions (
  visitor_id text primary key,
  last_seen_at timestamptz not null default now()
);

create table if not exists public.visitors (
  visitor_id text primary key,
  first_seen_at timestamptz not null default now()
);

alter table public.visitor_sessions enable row level security;
alter table public.visitors enable row level security;

create or replace function public.record_visitor(p_visitor_id text)
returns json
language plpgsql
security definer
set search_path = public
as $$
declare
  active_count integer;
  total_count integer;
begin
  insert into public.visitor_sessions (visitor_id, last_seen_at)
  values (p_visitor_id, now())
  on conflict (visitor_id)
  do update set last_seen_at = now();

  insert into public.visitors (visitor_id)
  values (p_visitor_id)
  on conflict (visitor_id) do nothing;

  delete from public.visitor_sessions
  where last_seen_at < now() - interval '90 seconds';

  select count(*) into active_count
  from public.visitor_sessions;

  select count(*) into total_count
  from public.visitors;

  return json_build_object(
    'activeVisitors', active_count,
    'totalVisitors', total_count
  );
end;
$$;
