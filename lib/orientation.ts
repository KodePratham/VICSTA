export const GAMES = [
  { id: 'guess_the_meme', label: 'Guess the Meme' },
  { id: 'paper_cup_stacking', label: 'Paper Cup Stacking' },
  { id: 'dance_passing_chain', label: 'Dance Passing Chain' },
] as const

export const DIVISIONS = ['A', 'B', 'C'] as const

export type GameId = (typeof GAMES)[number]['id']
export type Division = (typeof DIVISIONS)[number]

export interface ScoreEntry {
  id: number
  game: GameId
  division: Division
  points: number
  note: string | null
  created_at: string
}

export type Totals = {
  perGame: Record<GameId, Record<Division, number>>
  overall: Record<Division, number>
}

export type Standing = {
  division: Division
  points: number
  /** 1-based; tied divisions share a rank. */
  rank: number
}

export function isGameId(value: unknown): value is GameId {
  return GAMES.some((g) => g.id === value)
}

export function isDivision(value: unknown): value is Division {
  return DIVISIONS.some((d) => d === value)
}

export function computeTotals(entries: Pick<ScoreEntry, 'game' | 'division' | 'points'>[]): Totals {
  const perGame = {} as Totals['perGame']
  for (const g of GAMES) {
    perGame[g.id] = { A: 0, B: 0, C: 0 }
  }
  const overall: Totals['overall'] = { A: 0, B: 0, C: 0 }

  for (const e of entries) {
    if (!perGame[e.game] || !isDivision(e.division)) continue
    perGame[e.game][e.division] += e.points
    overall[e.division] += e.points
  }

  return { perGame, overall }
}

export function rankDivisions(scores: Record<Division, number>): Standing[] {
  const sorted = DIVISIONS.map((division) => ({ division, points: scores[division] })).sort(
    (a, b) => b.points - a.points
  )
  return sorted.map((s) => ({ ...s, rank: 1 + sorted.filter((o) => o.points > s.points).length }))
}

export function gameLabel(id: GameId): string {
  return GAMES.find((g) => g.id === id)?.label ?? id
}
