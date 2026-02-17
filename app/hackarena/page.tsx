// HACKARENA'26 - VICSTA Hackathon
'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'

interface ProblemStatement {
  id: string
  title: string
  description: string
}

interface Domain {
  name: string
  code: string
  icon: string
  color: string
  problems: ProblemStatement[]
}

const domains: Domain[] = [
  {
    name: 'Education & Audio',
    code: 'EDU-AUD',
    icon: '🎓',
    color: 'blue-400',
    problems: [
      {
        id: 'EA-01',
        title: 'LagFree Classroom',
        description:
          'Standard Bluetooth audio often suffers from latency or range issues in large lecture halls. Design a system that seamlessly bridges Bluetooth audio to a Wi-Fi network for high-fidelity, low-latency distribution to multiple outputs.',
      },
      {
        id: 'EA-02',
        title: 'Inclusive AudioMix',
        description:
          'Students with hearing impairments often struggle with "flat" audio in educational videos. Create an app-based mixer that allows users to independently boost vocal frequencies while suppressing background noise in real-time.',
      },
      {
        id: 'EA-03',
        title: 'MultiSource StudyHub',
        description:
          'Collaborative learning requires audio from multiple devices (laptops, phones). Build a Wi-Fi-based audio hub that allows a group to "pool" their audio sources into a single output stream with individual gain control.',
      },
      {
        id: 'EA-04',
        title: 'CampusCast Interactive',
        description:
          'Traditional PA systems are one-way. Develop a Wi-Fi-integrated audio system where students can "tune in" to campus announcements via their own headphones using a localized app.',
      },
    ],
  },
  {
    name: 'Healthcare & Wellness',
    code: 'HEALTH',
    icon: '🏥',
    color: 'emerald-400',
    problems: [
      {
        id: 'HW-01',
        title: 'InvisoPollutant Tracker',
        description:
          'Most people spend 90% of their time indoors, unaware of VOCs or stagnant CO2 levels. Create a holistic "Home Environment Dashboard" that correlates air quality spikes with physical health symptoms.',
      },
      {
        id: 'HW-02',
        title: 'HydraGuard Monitor',
        description:
          'Water quality can change due to aging pipes or local contamination. Develop a real-time sensor array for residential tanks that alerts users to specific chemical imbalances before they become a health risk.',
      },
      {
        id: 'HW-03',
        title: 'DiagnoFlow Urinal',
        description:
          'Clinical urinalysis is usually reactive. Build a "Health-Tech Urinal" sensor suite that tracks glucose levels, hydration, and pH daily to provide early warnings for chronic conditions like diabetes or kidney stones.',
      },
      {
        id: 'HW-04',
        title: 'NutriSync AI',
        description:
          'Most diet apps are manual and tedious. Develop an automated "Balanced Diet" ecosystem that uses AI to suggest meals based on the user\'s real-time physiological data (e.g., blood oxygen or heart rate).',
      },
      {
        id: 'HW-05',
        title: 'RecoveryGuard Remote',
        description:
          'Post-surgery patients often feel vulnerable at home. Design a "Home Patient Monitoring" system that uses non-invasive sensors to detect falls or abnormal vital patterns and instantly alerts emergency contacts.',
      },
      {
        id: 'HW-06',
        title: 'AsthmaAlert Pediatric',
        description:
          'For pediatric asthma patients, air quality shifts are critical. Design an integrated monitor that specifically tracks PM2.5 and humidity, sending "pre-attack" alerts to parents\' smartphones.',
      },
    ],
  },
  {
    name: 'IoT & Smart Infrastructure',
    code: 'IOT-INFRA',
    icon: '🌐',
    color: 'purple-400',
    problems: [
      {
        id: 'II-01',
        title: 'ZoneCast Emergency',
        description:
          'In large buildings, sirens are stressful and unclear. Build a "Digital Announcement System" that pushes text and voice instructions to every connected device in a specific zone during emergencies.',
      },
      {
        id: 'II-02',
        title: 'DecentraBell IONET',
        description:
          'Standard smart doorbells rely on heavy cloud servers. Develop a "Smart Doorbell using IONET" that utilizes decentralized edge computing to process facial recognition locally, ensuring privacy and speed.',
      },
      {
        id: 'II-03',
        title: 'ClimateSense IONET',
        description:
          'Ceiling fans often run in empty rooms. Create a "Smart Fan using IONET" that uses mesh-networked occupancy sensors to optimize airflow and power consumption across a large office space.',
      },
      {
        id: 'II-04',
        title: 'LastInch MeshBridge',
        description:
          'Many IoT devices lose connection at the edge of a property. Build a self-healing IONET mesh bridge that ensures high-bandwidth devices (like cameras) remain online in dead zones.',
      },
      {
        id: 'II-05',
        title: 'MoodLight IONET',
        description:
          'Integrate your IONET framework to create lighting that adjusts not just for brightness, but for the "mood" or activity detected via movement patterns in a room.',
      },
    ],
  },
  {
    name: 'Productivity & Security',
    code: 'PROD-SEC',
    icon: '🔒',
    color: 'red-400',
    problems: [
      {
        id: 'PS-01',
        title: 'ThreatSense AI-DVR',
        description:
          'Traditional CCTV requires constant human monitoring. Build an "AI-based DVR" for Ethernet cameras that filters out false positives (animals, shadows) and only alerts security for high-risk human behavior.',
      },
      {
        id: 'PS-02',
        title: 'SecureLocker ESP32',
        description:
          'In co-working spaces, locker security is often just a physical key. Design an "ESP32-based Locker Alert System" that detects forced entry or "forgotten open" states, notifying users via encrypted mobile alerts.',
      },
      {
        id: 'PS-03',
        title: 'SmartRack Inventory',
        description:
          'Combine locker detection with weight sensors. Create a system for small businesses to track high-value inventory in real-time, automatically logging when items are removed or replaced.',
      },
      {
        id: 'PS-04',
        title: 'EdgeVid LowBand',
        description:
          'High-end CCTV uses massive data. Develop a DVR system that uses edge-AI to compress video based on "interest levels"—saving high-def footage only when an event occurs and low-def for idle time.',
      },
      {
        id: 'PS-05',
        title: 'BioAccess MFA',
        description:
          'Expand the locker detection concept into a full-room entry system that uses the ESP32 to manage multi-factor authentication (Phone + Proximity) for sensitive data rooms.',
      },
    ],
  },
  {
    name: 'Fintech & Money Management',
    code: 'FINTECH',
    icon: '💰',
    color: 'yellow-400',
    problems: [
      {
        id: 'FM-01',
        title: 'SnapBudget OCR',
        description:
          'Most people stop using money trackers because manual entry is hard. Build a "Simple Money Tracker" that uses OCR to scan physical receipts and automatically categorizes spending with 99% accuracy.',
      },
      {
        id: 'FM-02',
        title: 'SubVampire Slayer',
        description:
          'Small recurring payments often go unnoticed. Create a tracker that identifies "ghost" subscriptions by analyzing spending patterns and offers a one-click "remind to cancel" feature.',
      },
      {
        id: 'FM-03',
        title: 'MicroSave Student',
        description:
          'Design a fintech tool that "rounds up" digital transactions to the nearest dollar and automatically invests the change into a low-risk educational fund.',
      },
      {
        id: 'FM-04',
        title: 'SplitSync Social',
        description:
          'Traditional splitting apps are messy. Create a money tracker that integrates directly with group chats to settle bills in real-time using a simplified, "non-awkward" UI.',
      },
      {
        id: 'FM-05',
        title: 'VitalScore Finance',
        description:
          'Move beyond just tracking. Build an app that gamifies savings by providing a "Financial Vitality Score" based on the ratio of necessities to discretionary spending.',
      },
    ],
  },
]

const domainColorMap: Record<string, { border: string; text: string; bg: string; shadow: string; glow: string }> = {
  'blue-400': {
    border: 'border-blue-400',
    text: 'text-blue-400',
    bg: 'bg-blue-400',
    shadow: 'shadow-blue-400/30',
    glow: 'shadow-[0_0_30px_rgba(96,165,250,0.4)]',
  },
  'emerald-400': {
    border: 'border-emerald-400',
    text: 'text-emerald-400',
    bg: 'bg-emerald-400',
    shadow: 'shadow-emerald-400/30',
    glow: 'shadow-[0_0_30px_rgba(52,211,153,0.4)]',
  },
  'purple-400': {
    border: 'border-purple-400',
    text: 'text-purple-400',
    bg: 'bg-purple-400',
    shadow: 'shadow-purple-400/30',
    glow: 'shadow-[0_0_30px_rgba(192,132,252,0.4)]',
  },
  'red-400': {
    border: 'border-red-400',
    text: 'text-red-400',
    bg: 'bg-red-400',
    shadow: 'shadow-red-400/30',
    glow: 'shadow-[0_0_30px_rgba(248,113,113,0.4)]',
  },
  'yellow-400': {
    border: 'border-yellow-400',
    text: 'text-yellow-400',
    bg: 'bg-yellow-400',
    shadow: 'shadow-yellow-400/30',
    glow: 'shadow-[0_0_30px_rgba(250,204,21,0.4)]',
  },
}

export default function HackArenaPage() {
  const [selectedDomain, setSelectedDomain] = useState<number | null>(null)
  const [showContent, setShowContent] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    audioRef.current = new Audio('/game-start-6104.mp3')
    audioRef.current.volume = 0.5

    const timer = setTimeout(() => setShowContent(true), 300)
    return () => {
      clearTimeout(timer)
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      audioRef.current.play().catch((err) => console.log('Audio play failed:', err))
    }
  }

  const handleDomainSelect = (index: number) => {
    playSound()
    setSelectedDomain(selectedDomain === index ? null : index)
  }

  const colors = (c: string) => domainColorMap[c] || domainColorMap['blue-400']

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover animate-video-zoom"
          style={{ filter: 'brightness(0.4)' }}
        >
          <source src="/pixel-city.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-navy/30 to-navy/80"></div>
        <div className="absolute inset-0 scanline-effect pointer-events-none"></div>
      </div>

      {/* Top Corner Logos */}
      <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <div className="container flex justify-between items-start py-6">
          <button
            onClick={() => (window.location.href = '/')}
            className="pointer-events-auto animate-fade-in cursor-pointer"
          >
            <Image
              src="/VI_Logo.png"
              alt="VIT Logo"
              width={80}
              height={80}
              className="object-contain drop-shadow-[0_0_15px_rgba(96,165,250,0.5)] hover:scale-110 transition-transform duration-300"
            />
          </button>
          <button
            onClick={() => (window.location.href = '/')}
            className="pointer-events-auto animate-fade-in cursor-pointer"
            style={{ animationDelay: '0.2s' }}
          >
            <Image
              src="/VICSTA_logo.png"
              alt="VICSTA Logo"
              width={80}
              height={80}
              className="object-contain drop-shadow-[0_0_15px_rgba(96,165,250,0.5)] hover:scale-110 transition-transform duration-300"
            />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen pt-28 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div
            className={`text-center mb-12 transition-all duration-1000 ${
              showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
          >
            <h1 className="pixel-game-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blue-400 mb-4 animate-glitch-text leading-tight">
              HACKARENA&apos;26
            </h1>
            <p className="pixel-text text-xs sm:text-sm text-blue-400/70 mb-2">
              PRESENTED BY VICSTA X DSSA
            </p>
            <div className="h-1 w-48 mx-auto bg-blue-400 animate-pulse-glow mb-6"></div>
            <p className="font-mono text-sm sm:text-base text-blue-400/60 max-w-2xl mx-auto">
              Choose your battlefield. 5 domains. 25 problem statements. One arena.
            </p>
          </div>

          {/* Back Button */}
          <div
            className={`flex justify-center mb-10 transition-all duration-700 delay-200 ${
              showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <button
              onClick={() => {
                playSound()
                window.location.href = '/'
              }}
              className="game-button-blue group relative px-6 py-3 text-xs sm:text-sm font-bold transition-all duration-300 hover:scale-105"
            >
              <span className="relative pixel-text text-blue-400 group-hover:text-navy transition-colors duration-300 flex items-center gap-2">
                &lt; BACK TO BASE
              </span>
              <span className="absolute inset-0 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left -z-10"></span>
              <span className="absolute inset-0 border-2 border-blue-400 animate-border-pulse-blue"></span>
            </button>
          </div>

          {/* Domain Cards Grid */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 transition-all duration-700 delay-300 ${
              showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {domains.map((domain, index) => {
              const c = colors(domain.color)
              const isSelected = selectedDomain === index
              return (
                <button
                  key={domain.code}
                  onClick={() => handleDomainSelect(index)}
                  className={`menu-card group relative p-6 bg-navy/80 border-4 transition-all duration-300 transform text-left ${
                    c.border
                  } ${
                    isSelected
                      ? `scale-[1.02] ${c.glow}`
                      : 'hover:scale-105 hover:-translate-y-2'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Corner decorations */}
                  <span className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-white"></span>
                  <span className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-white"></span>
                  <span className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-white"></span>
                  <span className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-white"></span>

                  {/* Icon + Code */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-4xl">{domain.icon}</span>
                    <span className={`pixel-text text-[10px] ${c.text} opacity-70`}>
                      [{domain.code}]
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className={`pixel-text text-sm sm:text-base ${c.text} mb-2`}>
                    {domain.name}
                  </h3>

                  {/* Problem count */}
                  <p className="font-mono text-xs text-white/50">
                    {domain.problems.length} PROBLEM STATEMENTS
                  </p>

                  {/* Select indicator */}
                  <div
                    className={`mt-4 inline-flex items-center gap-2 pixel-text text-[10px] border-2 px-3 py-1.5 transition-all duration-300 ${
                      isSelected
                        ? `${c.border} ${c.bg} text-navy font-bold`
                        : `border-white/50 text-white/50 group-hover:border-white group-hover:text-white`
                    }`}
                  >
                    {isSelected ? '▼ SELECTED' : '▶ SELECT'}
                  </div>

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className={`absolute inset-0 ${c.glow}`}></div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Problem Statements Panel */}
          {selectedDomain !== null && (
            <div className="animate-menu-appear mb-16">
              {(() => {
                const domain = domains[selectedDomain]
                const c = colors(domain.color)
                return (
                  <div className={`border-4 ${c.border} bg-navy/90 p-6 sm:p-8`}>
                    {/* Domain Header */}
                    <div className="flex items-center gap-4 mb-8">
                      <span className="text-5xl">{domain.icon}</span>
                      <div>
                        <h2 className={`pixel-text text-lg sm:text-xl ${c.text} mb-1`}>
                          {domain.name}
                        </h2>
                        <p className={`pixel-text text-[10px] ${c.text} opacity-60`}>
                          DOMAIN: {domain.code} &bull; {domain.problems.length} CHALLENGES
                        </p>
                      </div>
                    </div>

                    <div className={`h-0.5 w-full ${c.bg} opacity-30 mb-8`}></div>

                    {/* Problem Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {domain.problems.map((problem, pIndex) => (
                        <div
                          key={problem.id}
                          className={`group relative bg-navy/60 border-2 ${c.border} border-opacity-40 p-5 transition-all duration-300 hover:border-opacity-100 hover:${c.glow}`}
                          style={{ animationDelay: `${pIndex * 0.05}s` }}
                        >
                          {/* Problem ID badge */}
                          <div className="flex items-center justify-between mb-3">
                            <span
                              className={`pixel-text text-[10px] ${c.bg} text-navy px-2 py-1 font-bold`}
                            >
                              {problem.id}
                            </span>
                          </div>

                          {/* Problem Title */}
                          <h4 className={`pixel-text text-xs sm:text-sm ${c.text} mb-3`}>
                            {problem.title}
                          </h4>

                          {/* Problem Description */}
                          <p className="font-mono text-xs text-white/60 leading-relaxed">
                            {problem.description}
                          </p>

                          {/* Corner accents */}
                          <span
                            className={`absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 ${c.border}`}
                          ></span>
                          <span
                            className={`absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 ${c.border}`}
                          ></span>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })()}
            </div>
          )}

          {/* ═══════════ REGISTER BUTTON ═══════════ */}
          <div className="flex justify-center my-12">
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
          </div>

          {/* ═══════════ TIMELINE ═══════════ */}
          <div className="mb-16 mt-8">
            {/* Section Header */}
            <div className="text-center mb-10">
              <h2 className="pixel-text text-2xl sm:text-3xl text-blue-400 mb-4 animate-glitch-text">
                ⏳ EVENT TIMELINE
              </h2>
              <div className="h-1 w-40 mx-auto bg-blue-400 animate-pulse-glow"></div>
            </div>

            {/* Timeline */}
            <div className="relative max-w-3xl mx-auto">
              {/* Vertical line */}
              <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-blue-400/30"></div>

              {[
                { phase: 'PHASE 1', event: 'Registrations & PPT Submission Open', date: 'LIVE NOW', isLive: true },
                { phase: 'PHASE 1', event: 'Round 1 Submission Deadline', date: '28th Feb (11:59 PM)', isLive: false },
                { phase: 'INTERMISSION', event: 'Shortlisting & Evaluation', date: '1st March', isLive: false },
                { phase: 'ANNOUNCEMENT', event: 'Round 1 Results (Finalists Declared)', date: '2nd March', isLive: false },
                { phase: 'PHASE 2', event: 'Round 2 Registration & Fee Payment', date: '2nd – 4th March', isLive: false },
                { phase: 'GRAND FINALE', event: 'Day 1: Hacking & Mentorship', date: '5th March', isLive: false },
                { phase: 'GRAND FINALE', event: 'Day 2: Final Pitch & Awards', date: '6th March', isLive: false },
              ].map((item, i) => (
                <div key={i} className="relative flex items-start gap-4 sm:gap-6 mb-8 group">
                  {/* Node */}
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className={`w-12 h-12 sm:w-16 sm:h-16 border-2 flex items-center justify-center transition-all duration-300 ${
                        item.isLive
                          ? 'border-green bg-green/20 shadow-[0_0_20px_rgba(100,255,218,0.5)] animate-pulse'
                          : 'border-blue-400 bg-navy/80 group-hover:shadow-[0_0_20px_rgba(96,165,250,0.4)]'
                      }`}
                    >
                      <span className="pixel-text text-[8px] sm:text-[10px] text-blue-400">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`flex-1 border-2 p-4 sm:p-5 transition-all duration-300 ${
                      item.isLive
                        ? 'border-green bg-green/5 shadow-[0_0_15px_rgba(100,255,218,0.2)]'
                        : 'border-blue-400/40 bg-navy/60 group-hover:border-blue-400/80'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <span
                          className={`pixel-text text-[9px] px-2 py-0.5 mb-2 inline-block ${
                            item.isLive
                              ? 'bg-green text-navy font-bold'
                              : 'bg-blue-400/20 text-blue-400'
                          }`}
                        >
                          {item.phase}
                        </span>
                        <h4 className="font-mono text-sm sm:text-base text-white/90 mt-1">
                          {item.event}
                        </h4>
                      </div>
                      <span
                        className={`pixel-text text-[10px] sm:text-xs flex-shrink-0 ${
                          item.isLive ? 'text-green animate-blink' : 'text-blue-400/70'
                        }`}
                      >
                        {item.date}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ═══════════ RULES & GUIDELINES ═══════════ */}
          <div className="mb-16">
            {/* Section Header */}
            <div className="text-center mb-10">
              <h2 className="pixel-text text-2xl sm:text-3xl text-blue-400 mb-4 animate-glitch-text">
                ⚖️ RULES & GUIDELINES
              </h2>
              <div className="h-1 w-40 mx-auto bg-blue-400 animate-pulse-glow mb-6"></div>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {/* Important Notice */}
              <div className="border-2 border-yellow-400 bg-yellow-400/5 p-5 sm:p-6 relative">
                <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-yellow-400"></span>
                <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-yellow-400"></span>
                <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-yellow-400"></span>
                <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-yellow-400"></span>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⚠️</span>
                  <div>
                    <h4 className="pixel-text text-xs text-yellow-400 mb-2">IMPORTANT</h4>
                    <p className="font-mono text-xs sm:text-sm text-yellow-400/80 leading-relaxed">
                      Limited Registrations Available: To ensure a high-quality experience and fair evaluation, we are accepting a limited number of teams. Registration may close early once the maximum capacity is reached.
                    </p>
                  </div>
                </div>
              </div>

              {/* Rule Sections */}
              {[
                {
                  icon: '👥',
                  title: 'TEAM COMPOSITION & ELIGIBILITY',
                  code: 'TEAM',
                  color: 'blue-400',
                  rules: [
                    { label: 'Team Size', text: 'Minimum of 2 and maximum of 4 members.' },
                    { label: 'Single Entry', text: 'Only one submission is permitted per team. Duplicate entries may lead to disqualification.' },
                    { label: 'Availability', text: 'By registering, all team members confirm their availability for the Offline Grand Finale on 5th & 6th March at the VIT College – Kondhwa Campus.' },
                  ],
                },
                {
                  icon: '📝',
                  title: 'ROUND 1: ONLINE SCREENING',
                  code: 'RND-1',
                  color: 'emerald-400',
                  rules: [
                    { label: 'Fee', text: 'No Registration Fees for this round.' },
                    { label: 'Deadline', text: 'Submissions must be uploaded by 28th February, 11:59 PM. Late entries will not be considered.' },
                    { label: 'Format', text: 'Ideas must be submitted in PPT format via the official registration form.' },
                    { label: 'Evaluation', text: 'Teams will be judged on problem clarity, innovation, technical feasibility, and potential impact.' },
                    { label: 'Results', text: 'Shortlisted teams will be announced on 2nd March.' },
                  ],
                },
                {
                  icon: '🛠️',
                  title: 'ROUND 2: OFFLINE GRAND FINALE',
                  code: 'RND-2',
                  color: 'purple-400',
                  rules: [
                    { label: 'Shortlisting Fee', text: 'Shortlisted teams must pay a registration fee of ₹500 per team to confirm their slot for the finale.' },
                    { label: 'Participation', text: 'In-person attendance is mandatory for all shortlisted members.' },
                    { label: 'Development', text: 'Teams will work on-site at the campus to build and refine their solutions before the final pitch.' },
                    { label: 'Conduct', text: 'Any form of plagiarism or use of pre-existing full-scale projects is strictly prohibited.' },
                  ],
                },
                {
                  icon: '🏁',
                  title: 'GENERAL AUTHORITY',
                  code: 'AUTH',
                  color: 'red-400',
                  rules: [
                    { label: 'Finality', text: 'The decisions made by the judging panel and organizing committee (VICSTA & DSSA) are final and binding.' },
                    { label: 'Professionalism', text: 'Participants are expected to maintain professional conduct throughout the event.' },
                  ],
                },
              ].map((section) => {
                const sc = colors(section.color)
                return (
                  <div
                    key={section.code}
                    className={`border-2 ${sc.border} bg-navy/70 p-5 sm:p-6 relative transition-all duration-300 hover:${sc.glow}`}
                  >
                    {/* Corner decorations */}
                    <span className={`absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 ${sc.border}`}></span>
                    <span className={`absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 ${sc.border}`}></span>
                    <span className={`absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 ${sc.border}`}></span>
                    <span className={`absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 ${sc.border}`}></span>

                    {/* Section Header */}
                    <div className="flex items-center gap-3 mb-5">
                      <span className="text-3xl">{section.icon}</span>
                      <div>
                        <h3 className={`pixel-text text-xs sm:text-sm ${sc.text}`}>
                          {section.title}
                        </h3>
                        <span className={`pixel-text text-[9px] ${sc.text} opacity-50`}>
                          [{section.code}]
                        </span>
                      </div>
                    </div>

                    <div className={`h-0.5 w-full ${sc.bg} opacity-20 mb-5`}></div>

                    {/* Rules */}
                    <div className="space-y-4">
                      {section.rules.map((rule, rIndex) => (
                        <div key={rIndex} className="flex items-start gap-3">
                          <span className={`pixel-text text-[10px] ${sc.bg} text-navy px-1.5 py-0.5 font-bold flex-shrink-0 mt-0.5`}>
                            {String(rIndex + 1).padStart(2, '0')}
                          </span>
                          <div>
                            <span className={`pixel-text text-[10px] ${sc.text} block mb-1`}>
                              {rule.label}
                            </span>
                            <p className="font-mono text-xs text-white/60 leading-relaxed">
                              {rule.text}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Bottom decorative dots */}
          <div className="flex justify-center gap-2 mt-8">
            <div className="w-2 h-2 bg-blue-400/50 animate-ping"></div>
            <div className="w-2 h-2 bg-blue-400/50 animate-ping" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-blue-400/50 animate-ping" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}
