'use client'

import Link from 'next/link'
import { Scoreboard } from '@/components/orientation/Scoreboard'
import { useScoreEntries } from '@/components/orientation/useScoreEntries'

export default function OrientationPage() {
  const { entries, loading, error } = useScoreEntries()

  return (
    <div className="min-h-screen w-full relative bg-black overflow-x-hidden">
      <div className="fixed inset-0 bg-gradient-to-b from-navy via-black to-navy opacity-90" />
      <div className="fixed inset-0 scanline-effect pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 py-8 sm:py-12 max-w-4xl">
        <Link
          href="/"
          className="pixel-text text-xs sm:text-sm text-blue-400 hover:text-white transition-colors"
        >
          &lt; BACK
        </Link>

        <div className="text-center my-8 sm:my-12">
          <h1 className="pixel-game-text text-3xl sm:text-5xl md:text-6xl font-bold text-blue-400 mb-4">
            ORIENTATION
          </h1>
          <p className="pixel-text text-xs sm:text-sm text-blue-400/70 mb-4">LIVE SCOREBOARD</p>
          <div className="h-1 w-32 mx-auto bg-blue-400 animate-pulse-glow" />
        </div>

        {loading ? (
          <p className="pixel-text text-center text-blue-400 animate-blink">LOADING...</p>
        ) : error ? (
          <p className="pixel-text text-center text-red-400 text-xs sm:text-sm">{error}</p>
        ) : (
          <Scoreboard entries={entries} />
        )}
      </div>
    </div>
  )
}
