// HackArena Action Buttons – Registration & PPT Download
// Placed at the top after the heading section
'use client'

import React from 'react'

interface ActionButtonsProps {
  playSound: () => void
}

export function HackArenaActionButtons({ playSound }: ActionButtonsProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-6 my-12">

      {/* ═══════════ PPT SUBMISSION CLOSED BANNER ═══════════ */}
      <div className="relative w-full max-w-2xl border-2 border-red-500 bg-red-500/10 px-8 py-6 flex flex-col items-center gap-3 shadow-[0_0_30px_rgba(239,68,68,0.3)]">
        {/* Corner accents */}
        <span className="absolute top-0 left-0 w-5 h-5 border-t-4 border-l-4 border-red-500"></span>
        <span className="absolute top-0 right-0 w-5 h-5 border-t-4 border-r-4 border-red-500"></span>
        <span className="absolute bottom-0 left-0 w-5 h-5 border-b-4 border-l-4 border-red-500"></span>
        <span className="absolute bottom-0 right-0 w-5 h-5 border-b-4 border-r-4 border-red-500"></span>

        {/* Status tag */}
        <span className="font-mono text-[10px] font-bold bg-red-500 text-white px-3 py-1 tracking-widest">
          ● SUBMISSION CLOSED
        </span>

        {/* Main message */}
        <p className="pixel-text text-lg sm:text-2xl text-red-400 text-center leading-snug">
          PPT SUBMISSION OVER
        </p>
        <p className="font-mono text-xs sm:text-sm text-white/50 text-center">
          Round 1 submissions closed on 28th February, 5:00 PM.
        </p>

        {/* Divider */}
        <div className="h-px w-full bg-red-500/30 my-1"></div>

        {/* Next step hint */}
        <p className="font-mono text-xs text-red-400/70 text-center tracking-wide">
          ⏳ SHORTLISTING &amp; EVALUATION IN PROGRESS — Results on 2nd March
        </p>
      </div>

      {/* ═══════════ PPT TEMPLATE DOWNLOAD ═══════════ */}
    </div>
  )
}
