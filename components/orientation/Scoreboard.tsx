'use client'

import { useMemo } from 'react'
import { DIVISIONS, GAMES, computeTotals, type ScoreEntry } from '@/lib/orientation'

export function Scoreboard({ entries }: { entries: ScoreEntry[] }) {
  const totals = useMemo(() => computeTotals(entries), [entries])

  const maxOverall = Math.max(...DIVISIONS.map((d) => totals.overall[d]))
  const hasLeader = maxOverall > 0

  return (
    <div className="w-full">
      {/* Overall standings */}
      <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-8">
        {DIVISIONS.map((d) => {
          const isLeader = hasLeader && totals.overall[d] === maxOverall
          return (
            <div
              key={d}
              className={`relative p-4 sm:p-6 text-center bg-navy/80 border-4 ${
                isLeader ? 'border-yellow-300 shadow-[0_0_30px_rgba(253,224,71,0.5)]' : 'border-blue-400'
              }`}
            >
              {isLeader && <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-2xl">👑</div>}
              <p className="pixel-text text-xs sm:text-sm text-blue-400/80 mb-2">DIVISION</p>
              <p className="pixel-text text-3xl sm:text-5xl text-white mb-3">{d}</p>
              <p
                className={`pixel-text text-xl sm:text-3xl ${
                  isLeader ? 'text-yellow-300' : 'text-blue-400'
                }`}
              >
                {totals.overall[d]}
              </p>
              <p className="pixel-text text-[10px] sm:text-xs text-blue-400/60 mt-1">TOTAL PTS</p>
            </div>
          )
        })}
      </div>

      {/* Per game breakdown */}
      <div className="space-y-4">
        {GAMES.map((game) => {
          const row = totals.perGame[game.id]
          const best = Math.max(...DIVISIONS.map((d) => row[d]))
          return (
            <div key={game.id} className="bg-navy/80 border-4 border-blue-400 p-4 sm:p-6">
              <h3 className="pixel-text text-sm sm:text-lg text-blue-400 mb-4 flex items-center gap-3">
                <span className="text-2xl sm:text-3xl">{game.icon}</span>
                {game.label}
              </h3>
              <div className="grid grid-cols-3 gap-3 sm:gap-6">
                {DIVISIONS.map((d) => {
                  const isBest = best > 0 && row[d] === best
                  return (
                    <div
                      key={d}
                      className={`text-center py-3 border-2 ${
                        isBest ? 'border-yellow-300 bg-yellow-300/10' : 'border-white/30'
                      }`}
                    >
                      <p className="pixel-text text-[10px] sm:text-xs text-white/70 mb-1">DIV {d}</p>
                      <p
                        className={`pixel-text text-lg sm:text-2xl ${
                          isBest ? 'text-yellow-300' : 'text-white'
                        }`}
                      >
                        {row[d]}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
