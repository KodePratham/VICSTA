'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  DIVISIONS,
  GAMES,
  computeTotals,
  gameLabel,
  type Division,
  type GameId,
} from '@/lib/orientation'
import { useScoreEntries } from './useScoreEntries'

export function AdminPanel() {
  const router = useRouter()
  const { entries, loading, error: loadError, refresh } = useScoreEntries()

  const [game, setGame] = useState<GameId>(GAMES[0].id)
  const [division, setDivision] = useState<Division>('A')
  const [points, setPoints] = useState('')
  const [note, setNote] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: 'ok' | 'error'; text: string } | null>(null)

  const totals = computeTotals(entries)

  // Session expired or cookie removed: go back to the login screen.
  const handleUnauthorized = () => router.refresh()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage(null)

    const value = Number(points)
    if (!Number.isInteger(value) || value === 0) {
      setMessage({ type: 'error', text: 'Enter a non-zero whole number (negative to subtract).' })
      return
    }

    setSubmitting(true)
    try {
      const res = await fetch('/api/orientation/scores', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ game, division, points: value, note }),
      })
      if (res.status === 401) return handleUnauthorized()
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setMessage({ type: 'error', text: data.error || 'Failed to add points' })
        return
      }
      setMessage({
        type: 'ok',
        text: `${value > 0 ? '+' : ''}${value} to Division ${division} (${gameLabel(game)})`,
      })
      setPoints('')
      setNote('')
      refresh()
    } catch {
      setMessage({ type: 'error', text: 'Network error' })
    } finally {
      setSubmitting(false)
    }
  }

  const handleDelete = async (id: number) => {
    if (!window.confirm('Delete this entry?')) return
    const res = await fetch(`/api/orientation/scores?id=${id}`, { method: 'DELETE' })
    if (res.status === 401) return handleUnauthorized()
    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      setMessage({ type: 'error', text: data.error || 'Failed to delete entry' })
      return
    }
    refresh()
  }

  const handleLogout = async () => {
    await fetch('/api/orientation/login', { method: 'DELETE' })
    router.refresh()
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="pixel-text text-xl sm:text-3xl text-blue-400">ORIENTATION ADMIN</h1>
        <button
          onClick={handleLogout}
          className="pixel-text text-xs text-white border-2 border-white px-3 py-2 hover:bg-white hover:text-navy transition-colors"
        >
          LOGOUT
        </button>
      </div>

      {/* Current totals */}
      <div className="grid grid-cols-3 gap-3">
        {DIVISIONS.map((d) => (
          <div key={d} className="bg-navy/80 border-2 border-blue-400 p-3 text-center">
            <p className="pixel-text text-xs text-blue-400/80">DIV {d}</p>
            <p className="pixel-text text-2xl text-white">{totals.overall[d]}</p>
          </div>
        ))}
      </div>

      {/* Add points */}
      <form onSubmit={handleSubmit} className="bg-navy/80 border-4 border-blue-400 p-4 sm:p-6 space-y-5">
        <h2 className="pixel-text text-sm sm:text-lg text-blue-400">ADD POINTS</h2>

        <div>
          <p className="pixel-text text-xs text-white/70 mb-2">GAME</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {GAMES.map((g) => (
              <button
                type="button"
                key={g.id}
                onClick={() => setGame(g.id)}
                className={`pixel-text text-xs py-3 border-2 transition-colors ${
                  game === g.id
                    ? 'bg-blue-400 text-navy border-blue-400'
                    : 'text-blue-400 border-blue-400/50 hover:border-blue-400'
                }`}
              >
                {g.icon} {g.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="pixel-text text-xs text-white/70 mb-2">DIVISION</p>
          <div className="grid grid-cols-3 gap-2">
            {DIVISIONS.map((d) => (
              <button
                type="button"
                key={d}
                onClick={() => setDivision(d)}
                className={`pixel-text text-lg py-3 border-2 transition-colors ${
                  division === d
                    ? 'bg-blue-400 text-navy border-blue-400'
                    : 'text-blue-400 border-blue-400/50 hover:border-blue-400'
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <input
            type="number"
            step={1}
            inputMode="numeric"
            placeholder="Points (e.g. 10 or -5)"
            value={points}
            onChange={(e) => setPoints(e.target.value)}
            required
            className="sm:col-span-1 bg-black/50 border-2 border-blue-400 text-white px-4 py-3 outline-none focus:border-white"
          />
          <input
            type="text"
            maxLength={200}
            placeholder="Note (optional)"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="sm:col-span-2 bg-black/50 border-2 border-blue-400 text-white px-4 py-3 outline-none focus:border-white"
          />
        </div>

        {message && (
          <p className={`pixel-text text-xs ${message.type === 'ok' ? 'text-green-400' : 'text-red-400'}`}>
            {message.text}
          </p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="w-full pixel-text text-blue-400 border-2 border-blue-400 py-3 hover:bg-blue-400 hover:text-navy transition-colors disabled:opacity-50"
        >
          {submitting ? 'SAVING...' : 'ADD POINTS'}
        </button>
      </form>

      {/* Recent entries */}
      <div className="bg-navy/80 border-4 border-blue-400 p-4 sm:p-6">
        <h2 className="pixel-text text-sm sm:text-lg text-blue-400 mb-4">RECENT ENTRIES</h2>
        {loading ? (
          <p className="pixel-text text-xs text-blue-400 animate-blink">LOADING...</p>
        ) : loadError ? (
          <p className="pixel-text text-xs text-red-400">{loadError}</p>
        ) : entries.length === 0 ? (
          <p className="pixel-text text-xs text-white/60">No entries yet.</p>
        ) : (
          <ul className="divide-y divide-white/10 max-h-96 overflow-y-auto">
            {entries.slice(0, 50).map((entry) => (
              <li key={entry.id} className="flex items-center justify-between gap-3 py-3">
                <div className="min-w-0">
                  <p className="text-sm text-white">
                    <span
                      className={`font-bold ${entry.points > 0 ? 'text-green-400' : 'text-red-400'}`}
                    >
                      {entry.points > 0 ? '+' : ''}
                      {entry.points}
                    </span>{' '}
                    to Division {entry.division} &middot; {gameLabel(entry.game)}
                  </p>
                  <p className="text-xs text-white/50 truncate">
                    {new Date(entry.created_at).toLocaleString()}
                    {entry.note ? ` - ${entry.note}` : ''}
                  </p>
                </div>
                <button
                  onClick={() => handleDelete(entry.id)}
                  className="pixel-text text-[10px] text-red-400 border border-red-400 px-2 py-1 hover:bg-red-400 hover:text-navy transition-colors shrink-0"
                >
                  DELETE
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
