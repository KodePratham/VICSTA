-- Only run this if you ALREADY ran the original schema.sql (before the 4th game was added).
-- If you are setting up fresh, just run schema.sql, which already includes this game.

alter table score_entries drop constraint if exists score_entries_game_check;

alter table score_entries
  add constraint score_entries_game_check
  check (game in ('wrong_answers_only', 'guess_the_meme', 'paper_cup_stacking', 'dance_passing_chain'));
