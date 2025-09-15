import Image from 'next/image'

export default function LandingPage() {
  // Define specific dimensions for each building
  const buildingDimensions: Record<number, { width: number; height: number }> = {
    1: { width: 180, height: 320 },
    2: { width: 160, height: 280 },
    3: { width: 200, height: 350 },
    4: { width: 170, height: 300 },
    5: { width: 190, height: 330 }
  }

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      {/* Parallax skyline layer - positioned to hide bottom space */}
      <div className="absolute bottom-0 w-full h-48 md:h-64 lg:h-80 overflow-hidden">
        <div className="skyline-animation flex items-end h-full relative top-8 md:top-12 lg:top-16">
          {/* First set of buildings */}
          <div className="flex items-end h-full">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={`set1-${num}`} className="relative h-full flex-shrink-0 -mx-2">
                <Image
                  src={`/building${num}.png`}
                  alt={`Building ${num}`}
                  width={buildingDimensions[num].width}
                  height={buildingDimensions[num].height}
                  className="h-full w-auto object-bottom"
                />
              </div>
            ))}
          </div>
          
          {/* Second set for seamless loop */}
          <div className="flex items-end h-full">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={`set2-${num}`} className="relative h-full flex-shrink-0 -mx-2">
                <Image
                  src={`/building${num}.png`}
                  alt={`Building ${num}`}
                  width={buildingDimensions[num].width}
                  height={buildingDimensions[num].height}
                  className="h-full w-auto object-bottom"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
