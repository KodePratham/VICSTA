// HackArena Awards Section – Moved below Timeline
'use client'

import React from 'react'

export function HackArenaAwardsSection() {
  return (
    <div id="section-awards" className="mb-16 mt-8">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="pixel-text text-2xl sm:text-3xl text-blue-400 mb-4 animate-glitch-text">
          🏆 AWARDS
        </h2>
        <div className="h-1 w-40 mx-auto bg-blue-400 animate-pulse-glow"></div>
      </div>

      {/* Awards Card */}
      <div className="announcement-card border-2 border-green bg-green/5 p-6 sm:p-8 relative max-w-3xl mx-auto">
        <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-green"></span>
        <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-green"></span>
        <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-green"></span>
        <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-green"></span>

        {/* Title */}
        <h3 className="pixel-text text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-r from-green to-yellow-400 text-center mb-4">
          🏆 REWARDS &amp; RECOGNITION
        </h3>

        {/* Intro */}
        <p className="font-mono text-sm sm:text-base text-white/70 text-center leading-relaxed mb-6">
          VICSTA &amp; DSSA are excited to announce exclusive rewards for participants to gain real-world industry experience and celebrate your achievements.
        </p>

        {/* Internship - Full Width Highlighted */}
        <div className="border-2 border-green bg-green/10 p-5 sm:p-6 text-center transition-all duration-300 hover:bg-green/15 hover:border-green mb-4 shadow-[0_0_20px_rgba(100,255,218,0.15)]">
          <span className="text-4xl block mb-3">🎓</span>
          <h4 className="pixel-text text-xs sm:text-sm text-green mb-3">INTERNSHIP OPPORTUNITIES</h4>
          <p className="font-mono text-xs sm:text-sm text-white/70 leading-relaxed">
            Top 4 Winning Teams will receive exclusive Internship Opportunities, giving you a valuable chance to gain real-world industry experience and strengthen your professional profile.
          </p>
        </div>

        {/* Prize Pool & Certificates - Side by Side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Prize Pool */}
          <div className="border border-yellow-400/40 bg-yellow-400/5 p-5 text-center transition-all duration-300 hover:bg-yellow-400/10 hover:border-yellow-400/70">
            <span className="text-4xl block mb-3">💰</span>
            <h4 className="pixel-text text-xs sm:text-sm text-yellow-400 mb-3">PRIZE POOL</h4>
            <p className="font-mono text-xs sm:text-sm text-white/60 leading-relaxed">
              Rs 10,000
            </p>
            <p className="font-mono text-xs sm:text-sm text-white/60 leading-relaxed">
              Compete. Win. Get Rewarded.
            </p>
          </div>

          {/* Certificates */}
          <div className="border border-purple-400/40 bg-purple-400/5 p-5 text-center transition-all duration-300 hover:bg-purple-400/10 hover:border-purple-400/70">
            <span className="text-4xl block mb-3">🏅</span>
            <h4 className="pixel-text text-xs sm:text-sm text-purple-400 mb-3">CERTIFICATES &amp; MEDALS</h4>
            <p className="font-mono text-xs sm:text-sm text-white/60 leading-relaxed">
              Certificates &amp; medals to recognize and celebrate your achievements
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
