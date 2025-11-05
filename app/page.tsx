'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'

export default function LandingPage() {
  const [introComplete, setIntroComplete] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [isNavigating, setIsNavigating] = useState(false)
  const [navigatingTo, setNavigatingTo] = useState<string | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Preload audio
    audioRef.current = new Audio('/game-start-6104.mp3')
    audioRef.current.volume = 0.5
    
    // Show intro animation
    const introTimer = setTimeout(() => {
      setIntroComplete(true)
    }, 1500)

    // Show button after title animation
    const buttonTimer = setTimeout(() => {
      setShowButton(true)
    }, 2500)

    return () => {
      clearTimeout(introTimer)
      clearTimeout(buttonTimer)
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      audioRef.current.play().catch(err => {
        console.log('Audio play failed:', err)
      })
    }
  }

  const handleExplore = async () => {
    if (isNavigating) return
    
    setIsNavigating(true)
    
    try {
      await playSound()
      
      // Wait for audio to finish
      const audioPromise = new Promise((resolve) => {
        if (audioRef.current) {
          audioRef.current.onended = () => resolve(true)
          setTimeout(() => resolve(true), 3000)
        } else {
          resolve(true)
        }
      })
      
      await audioPromise
      setShowMenu(true)
    } catch (error) {
      console.log('Error:', error)
      setShowMenu(true)
    } finally {
      setIsNavigating(false)
    }
  }

  const handleNavigate = (section: string) => {
    if (navigatingTo) return
    
    setNavigatingTo(section)
    
    // Play sound but don't wait
    playSound()
    
    // Store section and navigate immediately
    sessionStorage.setItem('activeSection', section)
    window.location.href = `/main#${section}`
  }

  const menuItems = [
    { name: 'About', href: 'about', icon: '📖' },
    { name: 'Events', href: 'events', icon: '🎯' },
    { name: 'Faculty', href: 'hod', icon: '👨‍🏫' },
    { name: 'Contact', href: 'contact', icon: '📧' }
  ]

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
          style={{ filter: 'brightness(0.6)' }}
        >
          <source src="/pixel-city.mp4" type="video/mp4" />
        </video>
        {/* Vignette overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-navy/30 to-navy/80"></div>
        {/* Scanline effect */}
        <div className="absolute inset-0 scanline-effect pointer-events-none"></div>
      </div>

      {/* Top Corner Logos */}
      <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <div className="container flex justify-between items-start py-6">
          {/* VIT Logo - Top Left */}
          <button 
            onClick={playSound}
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
          
          {/* VICSTA Logo - Top Right */}
          <button 
            onClick={playSound}
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

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pb-20">
        {!showMenu ? (
          <>
            {/* VICSTA Title with game-style animation */}
            <div className={`text-center mb-16 transition-all duration-1000 ${introComplete ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
              <h1 className="pixel-game-text text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-blue-400 mb-6 animate-glitch-text leading-tight">
                VICSTA
              </h1>
              <div className="h-1 w-32 mx-auto bg-blue-400 animate-pulse-glow"></div>
            </div>

            {/* Start Exploring Button - Game Style */}
            <div className={`transition-all duration-700 ${showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <button
                onClick={handleExplore}
                disabled={isNavigating}
                className={`game-button-blue group relative px-8 sm:px-12 py-4 sm:py-6 text-sm sm:text-base md:text-lg font-bold transition-all duration-300 ${isNavigating ? 'opacity-50 cursor-not-allowed scale-95' : 'hover:scale-105'}`}
              >
                {/* Button decorative corners */}
                <span className="absolute top-0 left-0 w-3 h-3 sm:w-4 sm:h-4 border-t-2 sm:border-t-4 border-l-2 sm:border-l-4 border-blue-400"></span>
                <span className="absolute top-0 right-0 w-3 h-3 sm:w-4 sm:h-4 border-t-2 sm:border-t-4 border-r-2 sm:border-r-4 border-blue-400"></span>
                <span className="absolute bottom-0 left-0 w-3 h-3 sm:w-4 sm:h-4 border-b-2 sm:border-b-4 border-l-2 sm:border-l-4 border-blue-400"></span>
                <span className="absolute bottom-0 right-0 w-3 h-3 sm:w-4 sm:h-4 border-b-2 sm:border-b-4 border-r-2 sm:border-r-4 border-blue-400"></span>
                
                {/* Button text */}
                <span className="relative pixel-text text-blue-400 group-hover:text-navy transition-colors duration-300 flex items-center gap-3">
                  {isNavigating ? (
                    <>
                      <span className="inline-block w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></span>
                      LOADING...
                    </>
                  ) : (
                    'START EXPLORING'
                  )}
                </span>
                
                {/* Hover background */}
                <span className="absolute inset-0 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left -z-10"></span>
                
                {/* Animated border */}
                <span className="absolute inset-0 border-2 border-blue-400 animate-border-pulse-blue"></span>
              </button>

              {/* Press Start text */}
              {!isNavigating && (
                <p className="text-center mt-8 text-blue-400/60 text-xs sm:text-sm pixel-text animate-blink">
                  &gt; PRESS TO CONTINUE &lt;
                </p>
              )}
            </div>

            {/* Bottom decorative elements */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              <div className="w-2 h-2 bg-blue-400/50 animate-ping"></div>
              <div className="w-2 h-2 bg-blue-400/50 animate-ping" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-blue-400/50 animate-ping" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </>
        ) : (
          /* Navigation Menu Popup */
          <div className="animate-menu-appear w-full max-w-4xl pt-24">
            {/* Menu Header */}
            <div className="text-center mb-12 mt-8">
              <h2 className="pixel-text text-3xl sm:text-4xl md:text-5xl text-blue-400 mb-4 animate-glitch-text">
                SELECT AREA
              </h2>
              <div className="h-1 w-48 mx-auto bg-blue-400 animate-pulse-glow"></div>
            </div>

            {/* Menu Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8">
              {menuItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigate(item.href)}
                  disabled={!!navigatingTo}
                  className={`menu-card group relative p-6 sm:p-8 bg-navy/80 border-4 border-blue-400 transition-all duration-300 transform ${
                    navigatingTo === item.href 
                      ? 'scale-95 opacity-50 cursor-not-allowed' 
                      : navigatingTo 
                        ? 'opacity-50 cursor-not-allowed'
                        : 'hover:bg-blue-400/10 hover:scale-105 hover:-translate-y-2'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Corner decorations */}
                  <span className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-white"></span>
                  <span className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-white"></span>
                  <span className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-white"></span>
                  <span className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-white"></span>

                  {/* Icon */}
                  <div className={`text-5xl sm:text-6xl mb-4 transition-transform duration-300 ${
                    navigatingTo === item.href ? 'scale-110 animate-pulse' : 'group-hover:scale-110'
                  }`}>
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="pixel-text text-xl sm:text-2xl text-blue-400 mb-4">
                    {item.name}
                  </h3>

                  {/* Enter button */}
                  <div className="inline-flex items-center gap-2 pixel-text text-sm text-white border-2 border-white px-4 py-2 group-hover:bg-white group-hover:text-navy transition-all duration-300">
                    {navigatingTo === item.href ? (
                      <>
                        <span className="inline-block w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        <span>LOADING</span>
                      </>
                    ) : (
                      <>
                        <span>&gt;</span>
                        <span>ENTER</span>
                      </>
                    )}
                  </div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute inset-0 shadow-[0_0_30px_rgba(96,165,250,0.6)]"></div>
                  </div>
                </button>
              ))}
            </div>

            {/* Bottom text - positioned absolutely to avoid overlap */}
            <div className="mt-16 space-y-4">
              <div className="text-center">
                <p className="pixel-text text-xs sm:text-sm text-blue-400/60 animate-blink">
                  &gt; SELECT YOUR DESTINATION &lt;
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}