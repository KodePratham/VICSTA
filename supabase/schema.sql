-- Run this in the SQL editor of the NEW Supabase project.

create table if not exists score_entries (
  id bigint generated always as identity primary key,
  game text not null check (game in ('wrong_answers_only', 'guess_the_meme', 'paper_cup_stacking')),
  division text not null check (division in ('A', 'B', 'C')),
  points integer not null,
  note text,
  created_at timestamptz not null default now()
);

alter table score_entries enable row level security;

-- Public can only read. All writes go through the server using the service role key.
create policy "public read" on score_entries for select using (true);

-- Enable realtime updates for the public scoreboard.
alter publication supabase_realtime add table score_entries;
