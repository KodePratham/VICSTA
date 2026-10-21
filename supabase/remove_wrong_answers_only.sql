-- Removes the "Wrong Answers Only" game and all of its score entries.
-- If you are setting up fresh, just run schema.sql, which no longer includes this game.

begin;

delete from score_entries where game = 'wrong_answers_only';

alter table score_entries drop constraint if exists score_entries_game_check;

alter table score_entries
  add constraint score_entries_game_check
  check (game in ('guess_the_meme', 'paper_cup_stacking', 'dance_passing_chain'));

commit;
