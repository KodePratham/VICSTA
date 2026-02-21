// Sponsors section – extracted as a separate component for merge-safety.
// Replace the logo paths and hrefs with actual sponsor details.
'use client'

import Image from 'next/image'

interface Sponsor {
  name: string
  logo: string    // path inside /public, e.g. "/sponsor1.png"
  website: string // external URL
}

const sponsors: Sponsor[] = [
  { name: 'IEEE Computer Society', logo: '/sponsor1.jpeg', website: 'https://www.computer.org/' },
  { name: 'Sunhsine IOTronics', logo: '/sponsor2.jpeg', website: 'https://www.linkedin.com/company/sunshine-iotronics-llp/' },
  { name: 'SCOI TECHNOLOGIES', logo: '/sponsor3.jpeg', website: 'https://www.scoi.io/' },
]

export function HackArenaSponsorsSection() {
  return (
    <div className="mb-16 mt-8">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="pixel-text text-2xl sm:text-3xl text-blue-400 mb-4 animate-glitch-text">
          🤝 OUR SPONSORS
        </h2>
        <div className="h-1 w-40 mx-auto bg-blue-400 animate-pulse-glow mb-6"></div>
      </div>

      {/* Sponsor Cards */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        {sponsors.map((sponsor, i) => (
          <a
            key={i}
            href={sponsor.website}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative border-2 border-blue-400/40 bg-navy/70 p-6 flex flex-col items-center gap-4 transition-all duration-300 hover:border-blue-400 hover:bg-blue-400/10 hover:shadow-[0_0_25px_rgba(96,165,250,0.3)]"
          >
            {/* Corner accents */}
            <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-blue-400"></span>
            <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-blue-400"></span>
            <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-blue-400"></span>
            <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-blue-400"></span>

            {/* Logo */}
            <div className="w-28 h-28 sm:w-32 sm:h-32 relative flex items-center justify-center">
              <Image
                src={sponsor.logo}
                alt={`${sponsor.name} Logo`}
                width={128}
                height={128}
                className="object-contain drop-shadow-[0_0_10px_rgba(96,165,250,0.4)] group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Name */}
            <span className="pixel-text text-xs sm:text-sm text-blue-400 group-hover:text-white transition-colors duration-200">
              {sponsor.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}
