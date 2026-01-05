'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'HOD', href: '#hod' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-navy/95 backdrop-blur-lg shadow-lg shadow-navy/50' : 'bg-transparent'}`}>
      <nav className="container">
        <div className="flex justify-between items-center py-6">
          <Link href="/" className="flex items-center gap-4 group">
            <div className="flex items-center gap-3">
              <Image 
                src="/VI_Logo.png" 
                alt="VIT Logo" 
                width={48} 
                height={48}
                className="object-contain"
              />
              <Image 
                src="/VICSTA_logo.png" 
                alt="VICSTA Logo" 
                width={48} 
                height={48}
                className="object-contain"
              />
            </div>
            <span className="text-light-slate font-poppins font-bold text-xl">Vicsta</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate hover:text-green transition-colors font-mono text-sm relative group"
              >
                <span className="text-green font-mono text-xs">0{index + 1}.</span> {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden w-10 h-10 flex flex-col justify-center items-center space-y-1.5 group"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-green transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-green transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-green transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-6 space-y-4 border-t border-lightest-navy">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-slate hover:text-green transition-colors font-mono text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-green font-mono text-xs">0{index + 1}.</span> {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}