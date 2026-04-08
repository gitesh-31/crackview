-- ============================================
-- Interview Preparation Management System
-- Supabase Database Schema
-- ============================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- ============================================
-- Companies
-- ============================================
create table public.companies (
  id text primary key,
  name text not null,
  type text not null check (type in ('product', 'service')),
  description text,
  logo text,
  industry text,
  created_at timestamptz default now()
);

-- ============================================
-- Roles
-- ============================================
create table public.roles (
  id text primary key,
  name text not null,
  icon text,
  description text,
  created_at timestamptz default now()
);

-- ============================================
-- Questions
-- ============================================
create table public.questions (
  id text primary key,
  company_id text references public.companies(id) on delete cascade,
  role_id text references public.roles(id) on delete cascade,
  text text not null,
  category text,
  difficulty text check (difficulty in ('Easy', 'Medium', 'Hard')),
  created_at timestamptz default now()
);

create index idx_questions_company_role on public.questions(company_id, role_id);

-- ============================================
-- User Profiles
-- ============================================
create table public.user_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  avatar_url text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- ============================================
-- User Progress (question completion tracking)
-- ============================================
create table public.user_progress (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references public.user_profiles(id) on delete cascade,
  question_id text references public.questions(id) on delete cascade,
  completed boolean default false,
  completed_at timestamptz,
  created_at timestamptz default now(),
  unique(user_id, question_id)
);

create index idx_user_progress_user on public.user_progress(user_id);

-- ============================================
-- Tests
-- ============================================
create table public.tests (
  id text primary key,
  company_id text references public.companies(id) on delete cascade,
  role_id text references public.roles(id) on delete cascade,
  title text not null,
  duration integer not null, -- in minutes
  questions jsonb not null, -- array of test questions with options
  created_at timestamptz default now()
);

-- ============================================
-- Test Results
-- ============================================
create table public.test_results (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references public.user_profiles(id) on delete cascade,
  test_id text references public.tests(id) on delete cascade,
  score integer not null,
  total integer not null,
  completed_at timestamptz default now()
);

create index idx_test_results_user on public.test_results(user_id);

-- ============================================
-- Friendships
-- ============================================
create table public.friendships (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references public.user_profiles(id) on delete cascade,
  friend_id uuid references public.user_profiles(id) on delete cascade,
  status text default 'pending' check (status in ('pending', 'accepted', 'rejected')),
  created_at timestamptz default now(),
  unique(user_id, friend_id)
);

-- ============================================
-- Learning Topics
-- ============================================
create table public.learning_topics (
  id text primary key,
  name text not null,
  icon text,
  description text,
  category text,
  created_at timestamptz default now()
);

-- ============================================
-- Learning Resources
-- ============================================
create table public.learning_resources (
  id text primary key,
  topic_id text references public.learning_topics(id) on delete cascade,
  title text not null,
  url text not null,
  platform text,
  type text check (type in ('Article', 'Video', 'Course', 'Practice', 'Documentation')),
  difficulty text check (difficulty in ('Beginner', 'Intermediate', 'Advanced')),
  created_at timestamptz default now()
);

create index idx_learning_resources_topic on public.learning_resources(topic_id);

-- ============================================
-- Row Level Security
-- ============================================
alter table public.user_profiles enable row level security;
alter table public.user_progress enable row level security;
alter table public.test_results enable row level security;
alter table public.friendships enable row level security;

-- Users can read/update their own profile
create policy "Users can view own profile" on public.user_profiles
  for select using (auth.uid() = id);
create policy "Users can update own profile" on public.user_profiles
  for update using (auth.uid() = id);
create policy "Users can insert own profile" on public.user_profiles
  for insert with check (auth.uid() = id);

-- Users can manage their own progress
create policy "Users can view own progress" on public.user_progress
  for select using (auth.uid() = user_id);
create policy "Users can insert own progress" on public.user_progress
  for insert with check (auth.uid() = user_id);
create policy "Users can update own progress" on public.user_progress
  for update using (auth.uid() = user_id);

-- Users can view their own test results
create policy "Users can view own test results" on public.test_results
  for select using (auth.uid() = user_id);
create policy "Users can insert own test results" on public.test_results
  for insert with check (auth.uid() = user_id);

-- Public read access for companies, roles, questions, tests, topics, resources
alter table public.companies enable row level security;
create policy "Public read access" on public.companies for select to anon, authenticated using (true);

alter table public.roles enable row level security;
create policy "Public read access" on public.roles for select to anon, authenticated using (true);

alter table public.questions enable row level security;
create policy "Public read access" on public.questions for select to anon, authenticated using (true);

alter table public.tests enable row level security;
create policy "Public read access" on public.tests for select to anon, authenticated using (true);

alter table public.learning_topics enable row level security;
create policy "Public read access" on public.learning_topics for select to anon, authenticated using (true);

alter table public.learning_resources enable row level security;
create policy "Public read access" on public.learning_resources for select to anon, authenticated using (true);

-- Friendships: users can see their own friendships
create policy "Users can view own friendships" on public.friendships
  for select using (auth.uid() = user_id or auth.uid() = friend_id);
create policy "Users can create friendships" on public.friendships
  for insert with check (auth.uid() = user_id);
create policy "Users can update friendships" on public.friendships
  for update using (auth.uid() = friend_id);
