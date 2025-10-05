import Image from 'next/image'
import { Header } from '@/components/header'
import { SupabaseTest } from '@/components/supabase-test'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-navy">
      <Header />
      
      {/* Debug DB Status */}
      <div className="fixed top-4 right-4 z-50">
        <SupabaseTest />
      </div>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center animated-bg">
        <div className="container">
          <div className="max-w-4xl">
            <p className="text-green font-mono text-lg mb-6">Hi, we are</p>
            <h1 className="text-6xl lg:text-8xl font-bold text-light-slate mb-6 font-poppins">
              Vicsta
            </h1>
            <h2 className="text-3xl lg:text-5xl font-bold text-slate mb-8 font-poppins">
              Innovating Tomorrow's Tech Today
            </h2>
            <p className="text-slate text-xl lg:text-2xl mb-12 max-w-2xl leading-relaxed">
              The premier Computer Science club at Vishwakarma Institute of Technology, 
              specializing in <span className="text-green">Cyber Security</span>, 
              <span className="text-green"> Blockchain</span>, and 
              <span className="text-green"> IoT</span> technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="btn-secondary">
                Explore Events
              </button>
              <button className="btn-primary">
                Learn More
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating Animation Element */}
        <div className="absolute top-20 right-20 w-64 h-64 opacity-10 floating hidden lg:block">
          <div className="w-full h-full border border-green rounded-full"></div>
          <div className="absolute top-8 left-8 w-48 h-48 border border-green rounded-full"></div>
          <div className="absolute top-16 left-16 w-32 h-32 border border-green rounded-full"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-light-navy">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold text-light-slate mb-8 font-poppins">
                About <span className="gradient-text">Vicsta</span>
              </h2>
              <div className="space-y-6 text-slate text-lg">
                <p>
                  Vicsta is the flagship technology club of Vishwakarma Institute of Technology's 
                  Computer Science department. We are a community of passionate innovators, 
                  researchers, and tech enthusiasts.
                </p>
                <p>
                  Our mission is to bridge the gap between academic learning and industry 
                  demands by providing hands-on experience in cutting-edge technologies.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h3 className="text-light-slate font-semibold">Cyber Security</h3>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-light-slate font-semibold">Blockchain</h3>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                    </div>
                    <h3 className="text-light-slate font-semibold">IoT</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-lightest-navy rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 border-2 border-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green font-mono font-bold text-3xl">V</span>
                  </div>
                  <p className="text-slate font-mono">Visual Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="section-padding bg-navy">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-light-slate mb-6 font-poppins">
              Upcoming <span className="gradient-text">Events</span>
            </h2>
            <p className="text-slate text-xl max-w-2xl mx-auto">
              Join us for workshops, hackathons, and tech talks that shape the future
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((event) => (
              <div key={event} className="bg-light-navy rounded-lg p-6 card-hover border border-lightest-navy">
                <div className="w-full h-48 bg-lightest-navy rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-green font-mono">Event Image</span>
                </div>
                <h3 className="text-light-slate font-semibold text-xl mb-3">Tech Workshop #{event}</h3>
                <p className="text-slate mb-4">
                  Deep dive into cutting-edge technologies with hands-on experience and expert guidance.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-green font-mono text-sm">Jan 15, 2025</span>
                  <button className="text-green hover:text-light-slate transition-colors">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-light-navy">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-light-slate mb-6 font-poppins">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-slate text-xl max-w-2xl mx-auto">
              Innovative solutions built by our talented members
            </p>
          </div>
          
          <div className="space-y-16">
            {[1, 2, 3].map((project, index) => (
              <div key={project} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <h3 className="text-3xl font-bold text-light-slate mb-4 font-poppins">
                    Blockchain Voting System
                  </h3>
                  <p className="text-slate text-lg mb-6">
                    A secure, transparent, and tamper-proof voting system built on blockchain 
                    technology, ensuring electoral integrity and voter privacy.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {['React', 'Solidity', 'Web3.js', 'IPFS'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-green/10 text-green rounded font-mono text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <button className="text-green hover:text-light-slate transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </button>
                    <button className="text-green hover:text-light-slate transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="w-full h-80 bg-lightest-navy rounded-lg flex items-center justify-center">
                    <span className="text-green font-mono">Project Screenshot</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section-padding bg-navy">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-light-slate mb-6 font-poppins">
              Meet the <span className="gradient-text">Team</span>
            </h2>
            <p className="text-slate text-xl max-w-2xl mx-auto">
              The brilliant minds behind Vicsta's success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((member) => (
              <div key={member} className="text-center card-hover">
                <div className="w-48 h-48 bg-lightest-navy rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-green font-mono">Photo</span>
                </div>
                <h3 className="text-light-slate font-semibold text-xl mb-2">Team Member {member}</h3>
                <p className="text-green font-mono text-sm mb-4">Role Title</p>
                <div className="flex justify-center gap-4">
                  <button className="text-slate hover:text-green transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </button>
                  <button className="text-slate hover:text-green transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-lightest-navy py-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 border-2 border-green rounded flex items-center justify-center">
                  <span className="text-green font-mono font-bold text-xl">V</span>
                </div>
                <span className="text-light-slate font-poppins font-bold text-2xl">Vicsta</span>
              </div>
              <p className="text-slate mb-6 max-w-md">
                Vishwakarma Institute of Technology's premier Computer Science club, 
                driving innovation in Cyber Security, Blockchain, and IoT.
              </p>
              <div className="flex gap-6">
                {['linkedin', 'twitter', 'instagram', 'github'].map((social) => (
                  <button key={social} className="text-slate hover:text-green transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-light-slate font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['About', 'Events', 'Projects', 'Team'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-slate hover:text-green transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-light-slate font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-slate">
                <p>VIT Campus, Pune</p>
                <p>vicsta@vit.edu</p>
                <p>+91 XXX XXX XXXX</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-light-navy mt-12 pt-8 text-center">
            <p className="text-slate font-mono text-sm">
              © 2025 Vicsta - Vishwakarma Institute of Technology. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}