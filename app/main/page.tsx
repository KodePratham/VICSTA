// Updated on 2026-01-14
'use client'

import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'

export default function MainPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [isNavigating, setIsNavigating] = useState(false)
  const [navigatingTo, setNavigatingTo] = useState<string | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const hasInitialized = useRef(false)
  // EVENTS DATA + STATE
const [currentEvent, setCurrentEvent] = useState(0)

const events = [
  {
    title: 'VICSTA ORIENTATION 2025',
    image: '/event1.jpeg',
    points: [
      'Welcoming first-year IoT students with energy, enthusiasm, and endless possibilities.',
      'Organized by the VICSTA team with the presence of all IoT department faculty members.',
      'An inspiring address by the respected HOD ma’am, motivating students toward innovation and excellence.'
    ]
  },
  {
    title: 'HARMONY & INNOVATION – ALUMNI INTERACTION',
    image: '/event2.jpeg',
    points: [
      'First post-launch event of VICSTA conducted in collaboration with the IoT Forum.',
      'Distinguished alumni Mr. Gokul B and Mr. Mrunal Hedau shared industry experience and career guidance.',
      'An open and interactive discussion fostering harmony, innovation, and real-world understanding of IoT technologies.'
    ]
  },
  {
    title: 'FIELD TRIP TO GMRT - GIANT METREWAVE RADIO TELESCOPE',
    image: '/event3.jpg',
    points: [
      'An educational field trip to the Giant Metrewave Radio Telescope (GMRT), exploring one of the world\'s largest radio telescope arrays.',
      'Students gained hands-on insights into radio astronomy, signal processing, and the advanced technology powering GMRT.',
      'A successful and enriching experience, fostering curiosity and scientific temperament among future engineers.'
    ]
  },
  {
    title: 'FIELD TRIP TO IITM - INDIAN INSTITUTE OF TROPICAL METEOROLOGY',
    image: '/event4.jpg',
    points: [
      'An insightful visit to the Indian Institute of Tropical Meteorology (IITM), a premier research institute in atmospheric sciences.',
      'Students explored advanced meteorological instruments and learned about weather forecasting and climate change research.',
      'A great opportunity to interact with scientists and understand the impact of technology on meteorology.'
    ]
  }
]


  useEffect(() => {
    // Prevent double execution in development
    if (hasInitialized.current) return
    hasInitialized.current = true

    // Preload audio
    audioRef.current = new Audio('/game-start-6104.mp3')
    audioRef.current.volume = 0.5

    // Determine initial section
    const savedSection = sessionStorage.getItem('activeSection')
    
    if (savedSection && ['about', 'events', 'hod', 'contact'].includes(savedSection)) {
      // Coming from landing page with saved section
      setActiveSection(savedSection)
      sessionStorage.removeItem('activeSection')
    } else {
      // Check URL hash
      const hash = window.location.hash.replace('#', '')
      if (hash && ['about', 'events', 'hod', 'contact'].includes(hash)) {
        setActiveSection(hash)
      } else {
        // Default to menu
        setActiveSection('menu')
      }
    }

    return () => {
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

  const handleNavigate = (section: string) => {
    if (section.startsWith('http')) {
      playSound()
      window.open(section, '_blank')
      return
    }

    if (isNavigating || navigatingTo) return
    
    setIsNavigating(true)
    setNavigatingTo(section)
    playSound()
    
    setTimeout(() => {
      setActiveSection(section)
      setIsNavigating(false)
      setNavigatingTo(null)
      window.history.replaceState(null, '', `/main#${section}`)
    }, 150)
  }

  const handleBackToMenu = () => {
    if (isNavigating) return
    
    setIsNavigating(true)
    playSound()
    
    setTimeout(() => {
      setActiveSection('menu')
      setIsNavigating(false)
      window.history.replaceState(null, '', '/main')
    }, 150)
  }

  const handleBackToHome = () => {
    if (isNavigating) return
    
    setIsNavigating(true)
    playSound()
    
    setTimeout(() => {
      window.location.href = '/'
    }, 150)
  }

  const menuItems = [
    { name: 'About', href: 'about', icon: '📖' },
    { name: 'Events', href: 'events', icon: '🎯' },
    { name: 'Faculty', href: 'hod', icon: '👨‍🏫' },
    { name: 'Contact', href: 'contact', icon: '📧' }
  ]

  // Show loading state while determining initial section
  if (activeSection === null) {
    return (
      <div className="min-h-screen w-full relative overflow-hidden bg-black flex items-center justify-center">
        <div className="text-blue-400 pixel-text text-xl animate-pulse">LOADING...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.4)' }}
        >
          <source src="/pixel-city.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-navy/40 to-navy/90"></div>
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
      <div className="relative z-10 min-h-screen">
        {/* Menu Selection */}
        {activeSection === 'menu' && (
          <div key="menu-section" className="min-h-screen flex flex-col items-center justify-center px-4 pb-20 pt-32 animate-menu-appear">
            {/* Menu Header */}
            <div className="text-center mb-12 mt-8">
              <h2 className="pixel-text text-3xl sm:text-4xl md:text-5xl text-blue-400 mb-4 animate-glitch-text">
                SELECT AREA
              </h2>
              <div className="h-1 w-48 mx-auto bg-blue-400 animate-pulse-glow"></div>
            </div>

            {/* Menu Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8 max-w-4xl w-full">
              {menuItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigate(item.href)}
                  disabled={isNavigating}
                  className={`menu-card group relative p-6 sm:p-8 bg-navy/80 border-4 border-blue-400 transition-all duration-300 transform ${
                    navigatingTo === item.href 
                      ? 'scale-95 opacity-50 cursor-not-allowed' 
                      : isNavigating 
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
                  <div className="inline-flex items-center gap-2 pixel-text text-sm text-white border-white border-2 px-4 py-2 group-hover:bg-white group-hover:text-navy transition-all duration-300">
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

            {/* Bottom section with proper spacing */}
            <div className="mt-16 space-y-6">
              <div className="text-center">
                <button 
                  onClick={handleBackToHome}
                  disabled={isNavigating}
                  className={`pixel-text text-sm text-blue-400 border-2 border-blue-400 px-6 py-3 transition-all duration-300 inline-flex items-center gap-2 ${
                    isNavigating ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-400 hover:text-navy'
                  }`}
                >
                  {isNavigating ? (
                    <>
                      <span className="inline-block w-3 h-3 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></span>
                      <span>LOADING...</span>
                    </>
                  ) : (
                    <span>&lt; BACK TO HOME</span>
                  )}
                </button>
              </div>
              
              <div className="text-center">
                <p className="pixel-text text-xs sm:text-sm text-blue-400/60 animate-blink">
                  &gt; SELECT YOUR DESTINATION &lt;
                </p>
              </div>
            </div>
          </div>
        )}

        {/* About Section */}
        {activeSection === 'about' && (
          <div key="about-section" className="min-h-screen flex items-center justify-center px-4 py-20 animate-menu-appear">
            <div className="max-w-4xl w-full bg-navy/80 border-4 border-blue-400 p-8 sm:p-12 relative">
              {/* Corner decorations */}
              <span className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-white"></span>
              <span className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-white"></span>
              <span className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-white"></span>
              <span className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-white"></span>

              <h1 className="pixel-text text-3xl sm:text-4xl md:text-5xl text-blue-400 mb-8 text-center">
                ABOUT VICSTA
              </h1>
              <div className="h-1 w-48 mx-auto bg-blue-400 mb-12 animate-pulse-glow"></div>

              <div className="space-y-6 text-white text-base sm:text-lg leading-relaxed">
                <p className="font-poppins">
                  Vicsta is the flagship technology club of Vishwakarma Institute of Technology&apos;s 
                  Computer Science department. We are a community of passionate innovators, 
                  researchers, and tech enthusiasts.
                </p>
                <p className="font-poppins">
                  Our mission is to bridge the gap between academic learning and industry 
                  demands by providing hands-on experience in cutting-edge technologies.
                </p>
              </div>

              <div className="mt-12 text-center">
                <button 
                  onClick={handleBackToMenu}
                  disabled={isNavigating}
                  className={`pixel-text text-sm text-blue-400 border-2 border-blue-400 px-6 py-3 transition-all duration-300 flex items-center gap-2 mx-auto ${
                    isNavigating ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-400 hover:text-navy'
                  }`}
                >
                  {isNavigating ? (
                    <>
                      <span className="inline-block w-3 h-3 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></span>
                      <span>LOADING...</span>
                    </>
                  ) : (
                    <span>&lt; BACK TO MENU</span>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Events Section */}
{activeSection === 'events' && (
  <div
    key="events-section"
    className="min-h-screen flex items-center justify-center px-4 py-20 animate-menu-appear"
  >
    <div className="max-w-5xl w-full bg-navy/80 border-4 border-blue-400 p-8 sm:p-12 relative">

      {/* Corner decorations */}
      <span className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-white"></span>
      <span className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-white"></span>
      <span className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-white"></span>
      <span className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-white"></span>

      {/* Heading */}
      <h1 className="pixel-text text-3xl sm:text-4xl md:text-5xl text-blue-400 mb-8 text-center">
        EVENTS
      </h1>
      <div className="h-1 w-48 mx-auto bg-blue-400 mb-12 animate-pulse-glow"></div>

      {/* Event Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Event Image */}
        <div className="border-4 border-blue-400 p-2">
          <Image
            src={events[currentEvent].image}
            alt={events[currentEvent].title}
            width={500}
            height={288}
            priority={true}
            className="w-full h-72 object-cover"
          />
        </div>

        {/* Event Details */}
        <div>
          <h2 className="pixel-text text-2xl sm:text-3xl text-blue-400 mb-6">
            {events[currentEvent].title}
          </h2>

          <ul className="space-y-4 text-white font-poppins text-base list-disc list-inside">
            {events[currentEvent].points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mt-12">
        <button
          onClick={() =>
            setCurrentEvent(
              currentEvent === 0 ? events.length - 1 : currentEvent - 1
            )
          }
          className="pixel-text text-sm text-blue-400 border-2 border-blue-400 px-6 py-3 hover:bg-blue-400 hover:text-navy transition-all"
        >
          &lt; PREVIOUS
        </button>

        <p className="pixel-text text-xs text-blue-400/60">
          EVENT {currentEvent + 1} / {events.length}
        </p>

        <button
          onClick={() =>
            setCurrentEvent(
              currentEvent === events.length - 1 ? 0 : currentEvent + 1
            )
          }
          className="pixel-text text-sm text-blue-400 border-2 border-blue-400 px-6 py-3 hover:bg-blue-400 hover:text-navy transition-all"
        >
          NEXT &gt;
        </button>
      </div>

      {/* Back to Menu */}
      <div className="mt-14 text-center">
        <button
          onClick={handleBackToMenu}
          disabled={isNavigating}
          className={`pixel-text text-sm text-blue-400 border-2 border-blue-400 px-6 py-3 transition-all duration-300 flex items-center gap-2 mx-auto ${
            isNavigating
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:bg-blue-400 hover:text-navy'
          }`}
        >
          {isNavigating ? (
            <>
              <span className="inline-block w-3 h-3 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></span>
              <span>LOADING...</span>
            </>
          ) : (
            <span>&lt; BACK TO MENU</span>
          )}
        </button>
      </div>

    </div>
  </div>
)}



        {/* Faculty Section - Professional Style */}
        {activeSection === 'hod' && (
          <div key="hod-section" className="min-h-screen flex items-center justify-center px-4 py-20 animate-menu-appear">
            <div className="max-w-6xl w-full bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl p-8 sm:p-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-navy mb-4 text-center font-poppins">
                Head of Department
              </h1>
              <div className="h-1 w-48 mx-auto bg-blue-500 mb-12"></div>

              <div className="grid lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 items-start">
                <div className="lg:col-span-1 flex flex-col items-center">
                  <div className="w-48 h-48 sm:w-64 sm:h-64 bg-gray-200 rounded-2xl mx-auto mb-6 overflow-hidden ring-4 ring-blue-500/30 hover:ring-blue-500/60 transition-all duration-300 transform hover:scale-105 shadow-xl">
                    <Image 
                      src="/hod.png" 
                      alt="Dr. Priya M Shelke" 
                      width={256} 
                      height={256}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-navy font-bold text-2xl sm:text-3xl mb-2 font-poppins">Dr. Priya M Shelke</h3>
                    <p className="text-blue-600 font-semibold text-sm sm:text-base mb-1">Head of Department</p>
                    <p className="text-gray-600 text-sm">Associate Professor</p>
                  </div>
                </div>
                
                <div className="lg:col-span-2">
                  <div className="space-y-6 text-gray-700 text-base sm:text-lg font-poppins">
                    <p className="leading-relaxed">
                      Experienced Associate Professor with a demonstrated history of working in the higher education industry. 
                      Skilled in Core Java, Unified Modeling Language (UML), C++, Computer Graphics, Blockchain, 
                      Machine learning, Deep learning and Object Oriented Modeling.
                    </p>
                    <p className="leading-relaxed">
                      Strong education professional with a Doctorate degree focused in Computer Science from 
                      Savitribai Phule Pune University, Pune.
                    </p>
                    
                    <div className="mt-8 p-6 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                      <h4 className="text-navy font-bold text-xl sm:text-2xl mb-6 flex items-center gap-2 font-poppins">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                        Achievements
                      </h4>
                      <ul className="space-y-4">
                        <li className="flex gap-3 group">
                          <span className="text-blue-600 font-bold text-sm flex-shrink-0 mt-1">01.</span>
                          <span className="text-sm sm:text-base leading-relaxed">
                            Best Paper Award in &quot;International Conference on future Intelligence in Science and Technology, 
                            SITS, Pune-SITSFIST-20&quot;
                          </span>
                        </li>
                        <li className="flex gap-3 group">
                          <span className="text-blue-600 font-bold text-sm flex-shrink-0 mt-1">02.</span>
                          <span className="text-sm sm:text-base leading-relaxed">
                            Best Paper Award in &quot;International Virtual Conference on Recent Trends in Engineering &amp; 
                            Technology - Vishwacon2020, VIIT, Pune 28 Nov 20&quot;
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <button 
                  onClick={handleBackToMenu}
                  disabled={isNavigating}
                  className={`font-poppins font-semibold text-sm text-white bg-blue-600 px-8 py-3 rounded-lg transition-all duration-300 shadow-lg inline-flex items-center gap-2 ${
                    isNavigating ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700 hover:shadow-xl transform hover:-translate-y-1'
                  }`}
                >
                  {isNavigating ? (
                    <>
                      <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      <span>Loading...</span>
                    </>
                  ) : (
                    <span>← Back to Menu</span>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <div key="contact-section" className="min-h-screen flex items-center justify-center px-4 py-20 animate-menu-appear">
            <div className="max-w-4xl w-full bg-navy/80 border-4 border-blue-400 p-8 sm:p-12 relative">
              {/* Corner decorations */}
              <span className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-white"></span>
              <span className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-white"></span>
              <span className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-white"></span>
              <span className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-white"></span>

              <h1 className="pixel-text text-3xl sm:text-4xl md:text-5xl text-blue-400 mb-8 text-center">
                CONTACT US
              </h1>
              <div className="h-1 w-48 mx-auto bg-blue-400 mb-12 animate-pulse-glow"></div>

              <div className="space-y-8 max-w-2xl mx-auto">
                {/* Instagram */}
                <a 
                  href="https://www.instagram.com/vicsta_vitpune/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={playSound}
                  className="flex items-center gap-6 p-6 bg-blue-400/10 border-2 border-blue-400 hover:bg-blue-400/20 transition-all duration-300 group"
                >
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-300">📸</div>
                  <div>
                    <p className="pixel-text text-sm text-blue-400 mb-2">INSTAGRAM</p>
                    <p className="text-white font-mono text-sm sm:text-base break-all">@vicsta_vitpune</p>
                  </div>
                  <svg className="w-6 h-6 text-blue-400 ml-auto group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                {/* Email */}
                <a 
                  href="mailto:vicsta@vit.edu"
                  onClick={playSound}
                  className="flex items-center gap-6 p-6 bg-blue-400/10 border-2 border-blue-400 hover:bg-blue-400/20 transition-all duration-300 group"
                >
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-300">📧</div>
                  <div>
                    <p className="pixel-text text-sm text-blue-400 mb-2">EMAIL</p>
                    <p className="text-white font-mono text-sm sm:text-base break-all">vicsta@vit.edu</p>
                  </div>
                  <svg className="w-6 h-6 text-blue-400 ml-auto group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              <div className="mt-12 text-center">
                <button 
                  onClick={handleBackToMenu}
                  disabled={isNavigating}
                  className={`pixel-text text-sm text-blue-400 border-2 border-blue-400 px-6 py-3 transition-all duration-300 flex items-center gap-2 mx-auto ${
                    isNavigating ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-400 hover:text-navy'
                  }`}
                >
                  {isNavigating ? (
                    <>
                      <span className="inline-block w-3 h-3 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></span>
                      <span>LOADING...</span>
                    </>
                  ) : (
                    <span>&lt; BACK TO MENU</span>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
