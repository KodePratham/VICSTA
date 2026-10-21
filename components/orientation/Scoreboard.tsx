'use client'

import { useMemo } from 'react'
import { GAMES, computeTotals, rankDivisions, type ScoreEntry } from '@/lib/orientation'

const RANK_LABELS = ['1ST', '2ND', '3RD']

const BAR_SEGMENTS = {
  backgroundImage: 'repeating-linear-gradient(90deg, transparent 0 6px, rgba(0, 0, 0, 0.6) 6px 8px)',
}

function Panel({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative border-2 border-blue-400/70 bg-navy/80">
      <span className="absolute -left-0.5 -top-0.5 h-3 w-3 border-l-2 border-t-2 border-white" />
      <span className="absolute -right-0.5 -top-0.5 h-3 w-3 border-r-2 border-t-2 border-white" />
      <span className="absolute -bottom-0.5 -left-0.5 h-3 w-3 border-b-2 border-l-2 border-white" />
      <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 border-b-2 border-r-2 border-white" />
      {children}
    </div>
  )
}

export function Scoreboard({ entries }: { entries: ScoreEntry[] }) {
  const totals = useMemo(() => computeTotals(entries), [entries])

  const overall = rankDivisions(totals.overall)
  const top = overall[0].points
  const hasScores = overall.some((s) => s.points !== 0)

  return (
    <div className="space-y-10">
      <section>
        <h2 className="pixel-text mb-3 text-xs text-blue-400">OVERALL STANDINGS</h2>
        <Panel>
          <ol className="divide-y divide-blue-400/20">
            {overall.map(({ division, points, rank }) => {
              const leading = hasScores && rank === 1
              const width = top > 0 ? (Math.max(0, points) / top) * 100 : 0
              return (
                <li key={division} className="px-4 py-4 sm:px-6 sm:py-5">
                  <div className="flex items-center gap-4">
                    <span
                      className={`pixel-text w-10 shrink-0 text-[10px] sm:text-xs ${
                        leading ? 'text-yellow-300' : 'text-blue-400/60'
                      }`}
                    >
                      {hasScores ? RANK_LABELS[rank - 1] : '---'}
                    </span>
                    <span className="pixel-text flex-1 text-sm text-white sm:text-base">DIV {division}</span>
                    <span
                      className={`pixel-text text-xl sm:text-2xl ${
                        leading ? 'text-yellow-300' : 'text-white'
                      }`}
                    >
                      {points}
                    </span>
                  </div>
                  <div className="relative mt-3 h-2 bg-white/10">
                    <div
                      className={`h-full transition-[width] duration-500 ${
                        leading ? 'bg-yellow-300' : 'bg-blue-400'
                      }`}
                      style={{ width: `${width}%` }}
                    />
                    <div className="absolute inset-0" style={BAR_SEGMENTS} />
                  </div>
                </li>
              )
            })}
          </ol>
        </Panel>
      </section>

      <section>
        <h2 className="pixel-text mb-3 text-xs text-blue-400">STANDINGS BY GAME</h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-4">
          {GAMES.map((game) => {
            const standings = rankDivisions(totals.perGame[game.id])
            const played = standings.some((s) => s.points !== 0)
            return (
              <Panel key={game.id}>
                <h3 className="border-b-2 border-blue-400/30 px-4 py-3 text-sm font-medium text-white/90">
                  {game.label}
                </h3>
                <ol className="divide-y divide-blue-400/20">
                  {standings.map(({ division, points, rank }) => {
                    const leading = played && rank === 1
                    return (
                      <li key={division} className="flex items-center gap-3 px-4 py-3">
                        <span
                          className={`pixel-text w-8 shrink-0 text-[10px] ${
                            leading ? 'text-yellow-300' : 'text-blue-400/60'
                          }`}
                        >
                          {played ? RANK_LABELS[rank - 1] : '---'}
                        </span>
                        <span className="pixel-text flex-1 text-[10px] text-white/80 sm:text-xs">
                          DIV {division}
                        </span>
                        <span
                          className={`pixel-text text-xs sm:text-sm ${
                            leading ? 'text-yellow-300' : 'text-white/60'
                          }`}
                        >
                          {points}
                        </span>
                      </li>
                    )
                  })}
                </ol>
              </Panel>
            )
          })}
        </div>
      </section>
    </div>
  )
}
