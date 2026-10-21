'use client'

import Link from 'next/link'
import { Scoreboard } from '@/components/orientation/Scoreboard'
import { useScoreEntries } from '@/components/orientation/useScoreEntries'

export default function OrientationPage() {
  const { entries, loading, error } = useScoreEntries()

  const lastUpdated = entries[0]
    ? new Date(entries[0].created_at).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
    : null

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-black">
      <div className="fixed inset-0 bg-gradient-to-b from-navy via-black to-navy opacity-90" />

      <div className="relative z-10 mx-auto w-full max-w-2xl px-5 pb-16 pt-6 sm:px-8 sm:pt-10">
        <Link
          href="/"
          className="pixel-text -ml-1 inline-block p-1 text-xs text-blue-400 transition-colors hover:text-white"
        >
          &lt; BACK
        </Link>

        <header className="mb-10 mt-8 text-center sm:mb-12 sm:mt-10">
          <h1 className="pixel-game-text text-2xl text-blue-400 sm:text-5xl">ORIENTATION</h1>
          <div className="mx-auto mt-4 h-1 w-24 bg-blue-400" />
          <p className="pixel-text mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[10px] text-blue-400/70 sm:text-xs">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 bg-green-400 animate-blink" aria-hidden />
              LIVE SCOREBOARD
            </span>
            {lastUpdated && <span className="uppercase text-blue-400/50">UPDATED {lastUpdated}</span>}
          </p>
        </header>

        {loading ? (
          <p className="pixel-text animate-blink text-center text-xs text-blue-400">LOADING...</p>
        ) : error ? (
          <p className="pixel-text text-center text-xs text-red-400">{error}</p>
        ) : (
          <Scoreboard entries={entries} />
        )}
      </div>
    </main>
  )
}
