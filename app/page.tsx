import Image from 'next/image'
import { SupabaseTest } from '@/components/supabase-test'

export default function LandingPage() {
  return (
    <>
      {/* Hero Section */}
      <main className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950">
        <div className="absolute top-4 right-4 z-10">
          <SupabaseTest />
        </div>

        <div className="container mx-auto px-6 py-20 text-center">
          {/* Logos Section */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <Image
              src="/VI_logo.png"
              alt="Vishwakarma Institute of Technology Logo"
              width={80}
              height={80}
              className="rounded-lg shadow-lg"
            />
            <div className="w-px h-16 bg-gray-300 dark:bg-gray-600"></div>
            <Image
              src="/VICSTA_logo.png"
              alt="VICSTA Logo"
              width={80}
              height={80}
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="mb-4 inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
            <p className="text-sm font-semibold text-blue-700 dark:text-blue-300">
              Vishwakarma Institute of Technology
            </p>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              VICSTA
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-3 max-w-2xl mx-auto">
            VIT Computer Science & Technology Association
          </p>

          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
            Departmental Club for Cyber Security, Blockchain & IoT
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#about"
              className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg transition-all hover:shadow-xl hover:scale-105"
            >
              Learn More
            </a>
            <a
              href="#join"
              className="px-8 py-4 text-lg font-semibold text-blue-600 dark:text-blue-400 bg-white dark:bg-gray-800 border-2 border-blue-600 dark:border-blue-500 rounded-lg transition-all hover:shadow-xl hover:scale-105"
            >
              Join VICSTA
            </a>
          </div>
        </div>
      </main>

      {/* Focus Areas */}
      <section id="about" className="py-24 px-6 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Our Specializations
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Exploring the cutting edge of computer science and technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/30 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-blue-500 dark:border-blue-900">
              <div className="w-14 h-14 bg-blue-600 dark:bg-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Cyber Security</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Protecting systems and networks through ethical hacking, vulnerability assessment, and security protocols.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/50 dark:to-purple-900/30 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-purple-500 dark:border-purple-900">
              <div className="w-14 h-14 bg-purple-600 dark:bg-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Blockchain</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Building decentralized applications, smart contracts, and exploring distributed ledger technologies.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-950/50 dark:to-indigo-900/30 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-indigo-500 dark:border-indigo-900">
              <div className="w-14 h-14 bg-indigo-600 dark:bg-indigo-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Internet of Things</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Creating smart devices and connected systems that integrate sensors, networks, and cloud computing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section id="join" className="py-24 px-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-950 dark:to-blue-950">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Join VICSTA Today
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Be part of VIT's premier computer science departmental club and enhance your skills in cutting-edge technologies.
          </p>
          <a
            href="mailto:vicsta@vit.edu"
            className="inline-block px-10 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg transition-all hover:shadow-xl hover:scale-105"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Image
                  src="/VI_logo.png"
                  alt="VIT Logo"
                  width={32}
                  height={32}
                  className="rounded"
                />
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  VICSTA
                </h3>
              </div>
              <p className="text-gray-400 text-sm">
                VIT Computer Science & Technology Association<br />
                Vishwakarma Institute of Technology
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#join" className="hover:text-white transition-colors">Join Club</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider">Connect</h4>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
            <p>&copy; 2025 VICSTA - Vishwakarma Institute of Technology. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}