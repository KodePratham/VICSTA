import Image from 'next/image'
import { Header } from '@/components/header'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-navy">
      <Header />

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
              <button className="btn-secondary relative group" disabled>
                Explore Projects
                <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-lightest-navy text-green text-xs rounded whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  Coming Soon
                </span>
              </button>
              <button className="btn-primary relative group" disabled>
                Learn More
                <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-lightest-navy text-green text-xs rounded whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  Coming Soon
                </span>
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
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-light-slate mb-8 font-poppins">
              About <span className="gradient-text">Vicsta</span>
            </h2>
            <div className="space-y-6 text-slate text-lg mb-12">
              <p>
                Vicsta is the flagship technology club of Vishwakarma Institute of Technology's 
                Computer Science department. We are a community of passionate innovators, 
                researchers, and tech enthusiasts.
              </p>
              <p>
                Our mission is to bridge the gap between academic learning and industry 
                demands by providing hands-on experience in cutting-edge technologies.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center p-6 bg-navy rounded-lg border border-lightest-navy">
                <div className="w-16 h-16 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-light-slate font-semibold text-xl mb-2">Cyber Security</h3>
                <p className="text-slate text-sm">Protecting digital assets and infrastructure</p>
              </div>
              <div className="text-center p-6 bg-navy rounded-lg border border-lightest-navy">
                <div className="w-16 h-16 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-light-slate font-semibold text-xl mb-2">Blockchain</h3>
                <p className="text-slate text-sm">Decentralized solutions for tomorrow</p>
              </div>
              <div className="text-center p-6 bg-navy rounded-lg border border-lightest-navy">
                <div className="w-16 h-16 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-light-slate font-semibold text-xl mb-2">IoT</h3>
                <p className="text-slate text-sm">Connecting devices, creating smart systems</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOD Section */}
      <section id="hod" className="section-padding bg-navy">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-light-slate mb-6 font-poppins">
              Head of <span className="gradient-text">Department</span>
            </h2>
          </div>
          
          <div className="max-w-5xl mx-auto bg-light-navy rounded-lg p-8 lg:p-12 border border-lightest-navy">
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1">
                <div className="w-64 h-64 bg-lightest-navy rounded-lg mx-auto mb-6 overflow-hidden">
                  <Image 
                    src="/hod.png" 
                    alt="Dr. Priya M Shelke" 
                    width={256} 
                    height={256}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-light-slate font-bold text-2xl mb-2">Dr. Priya M Shelke</h3>
                  <p className="text-green font-mono text-sm">Head of Department</p>
                  <p className="text-slate text-sm mt-2">Associate Professor</p>
                </div>
              </div>
              
              <div className="lg:col-span-2">
                <div className="space-y-6 text-slate text-lg">
                  <p>
                    Experienced Associate Professor with a demonstrated history of working in the higher education industry. 
                    Skilled in Core Java, Unified Modeling Language (UML), C++, Computer Graphics, Blockchain, 
                    Machine learning, Deep learning and Object Oriented Modeling.
                  </p>
                  <p>
                    Strong education professional with a Doctorate degree focused in Computer Science from 
                    Savitribai Phule Pune University, Pune.
                  </p>
                  
                  <div className="mt-8">
                    <h4 className="text-light-slate font-semibold text-xl mb-4 flex items-center gap-2">
                      <svg className="w-6 h-6 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                      Achievements
                    </h4>
                    <ul className="space-y-4">
                      <li className="flex gap-3">
                        <span className="text-green font-mono text-sm flex-shrink-0">01.</span>
                        <span>
                          Best Paper Award in "International Conference on future Intelligence in Science and Technology, 
                          SITS, Pune-SITSFIST-20"
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-green font-mono text-sm flex-shrink-0">02.</span>
                        <span>
                          Best Paper Award in "International Virtual Conference on Recent Trends in Engineering & 
                          Technology - Vishwacon2020, VIIT, Pune 28 Nov 20"
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-lightest-navy py-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <Image 
                  src="/VICSTA_logo.png" 
                  alt="VICSTA Logo" 
                  width={48} 
                  height={48}
                  className="object-contain"
                />
                <span className="text-light-slate font-poppins font-bold text-2xl">Vicsta</span>
              </div>
              <p className="text-slate mb-6 max-w-md">
                Vishwakarma Institute of Technology's premier Computer Science club, 
                driving innovation in Cyber Security, Blockchain, and IoT.
              </p>
              <div className="flex gap-6">
                {['LinkedIn', 'Twitter', 'Instagram', 'GitHub'].map((social) => (
                  <button key={social} className="text-slate hover:text-green transition-colors relative group" disabled>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-navy text-green text-xs rounded whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      Coming Soon
                    </span>
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-light-slate font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'About', 'HOD', 'Contact'].map((link) => (
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