// HackArena Action Buttons – Registration & PPT Download
// Placed at the top after the heading section
'use client'

import React from 'react'

interface ActionButtonsProps {
  playSound: () => void
}

export function HackArenaActionButtons({ playSound }: ActionButtonsProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 my-12">
      {/* ═══════════ REGISTER BUTTON ═══════════ */}
      <button
        onClick={() => {
          playSound()
          window.open('https://forms.gle/pTqDabNQq9pM5PaB7', '_blank')
        }}
        className="game-button-blue group relative px-10 sm:px-16 py-5 sm:py-7 text-sm sm:text-base md:text-xl font-bold transition-all duration-300 hover:scale-110"
      >
        {/* Button decorative corners */}
        <span className="absolute top-0 left-0 w-4 h-4 sm:w-5 sm:h-5 border-t-2 sm:border-t-4 border-l-2 sm:border-l-4 border-green"></span>
        <span className="absolute top-0 right-0 w-4 h-4 sm:w-5 sm:h-5 border-t-2 sm:border-t-4 border-r-2 sm:border-r-4 border-green"></span>
        <span className="absolute bottom-0 left-0 w-4 h-4 sm:w-5 sm:h-5 border-b-2 sm:border-b-4 border-l-2 sm:border-l-4 border-green"></span>
        <span className="absolute bottom-0 right-0 w-4 h-4 sm:w-5 sm:h-5 border-b-2 sm:border-b-4 border-r-2 sm:border-r-4 border-green"></span>

        {/* Button text */}
        <span className="relative pixel-text text-green group-hover:text-navy transition-colors duration-300 flex items-center gap-3">
          <span className="text-2xl">🚀</span>
          REGISTER HERE
          <span className="text-2xl">🚀</span>
        </span>

        {/* Hover background */}
        <span className="absolute inset-0 bg-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left -z-10"></span>

        {/* Animated border */}
        <span className="absolute inset-0 border-2 border-green shadow-[0_0_20px_rgba(100,255,218,0.4)] group-hover:shadow-[0_0_40px_rgba(100,255,218,0.8)] transition-shadow duration-300"></span>
      </button>

      {/* ═══════════ PPT TEMPLATE DOWNLOAD ═══════════ */}
      <a
        href="/HACKARENA_TEMPLATE.pptx"
        download
        onClick={() => playSound()}
        className="game-button-blue group relative px-10 sm:px-16 py-5 sm:py-7 text-sm sm:text-base md:text-xl font-bold transition-all duration-300 hover:scale-110 inline-block"
      >
        <span className="absolute top-0 left-0 w-4 h-4 sm:w-5 sm:h-5 border-t-2 sm:border-t-4 border-l-2 sm:border-l-4 border-yellow-400"></span>
        <span className="absolute top-0 right-0 w-4 h-4 sm:w-5 sm:h-5 border-t-2 sm:border-t-4 border-r-2 sm:border-r-4 border-yellow-400"></span>
        <span className="absolute bottom-0 left-0 w-4 h-4 sm:w-5 sm:h-5 border-b-2 sm:border-b-4 border-l-2 sm:border-l-4 border-yellow-400"></span>
        <span className="absolute bottom-0 right-0 w-4 h-4 sm:w-5 sm:h-5 border-b-2 sm:border-b-4 border-r-2 sm:border-r-4 border-yellow-400"></span>
        <span className="relative pixel-text text-yellow-400 group-hover:text-navy transition-colors duration-300 flex items-center gap-3">
          <span className="text-2xl">📥</span>
          DOWNLOAD PPT TEMPLATE
          <span className="text-2xl">📥</span>
        </span>
        <span className="absolute inset-0 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left -z-10"></span>
        <span className="absolute inset-0 border-2 border-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.4)] group-hover:shadow-[0_0_40px_rgba(250,204,21,0.8)] transition-shadow duration-300"></span>
      </a>
    </div>
  )
}
