// HackArena Action Buttons – Registration & PPT Download
// Placed at the top after the heading section
'use client'

import React from 'react'

export function HackArenaActionButtons() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 my-12">

      {/* ═══════════ STATUS ALERT ═══════════ */}
      <div className="relative w-full max-w-2xl border-2 border-yellow-400 bg-yellow-400/10 px-8 py-6 flex flex-col items-center gap-3 shadow-[0_0_30px_rgba(250,204,21,0.25)]">
        {/* Corner accents */}
        <span className="absolute top-0 left-0 w-5 h-5 border-t-4 border-l-4 border-yellow-400"></span>
        <span className="absolute top-0 right-0 w-5 h-5 border-t-4 border-r-4 border-yellow-400"></span>
        <span className="absolute bottom-0 left-0 w-5 h-5 border-b-4 border-l-4 border-yellow-400"></span>
        <span className="absolute bottom-0 right-0 w-5 h-5 border-b-4 border-r-4 border-yellow-400"></span>

        <span className="font-mono text-[10px] font-bold bg-yellow-400 text-black px-3 py-1 tracking-widest">
          ● ALERT
        </span>

        <p className="pixel-text text-lg sm:text-2xl text-yellow-300 text-center leading-snug">
          ALL THE BEST
        </p>
      </div>

      {/* ═══════════ PPT TEMPLATE DOWNLOAD ═══════════ */}

    </div>
  )
}
