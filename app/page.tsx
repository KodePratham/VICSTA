import Image from 'next/image'
import { SupabaseTest } from '@/components/supabase-test'

export default function LandingPage() {
  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-8 text-center">
        <div className="absolute top-4 right-4">
          <SupabaseTest />
        </div>
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 py-2">
          Innovate. Secure. Connect.
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl md:text-2xl text-neutral-600">
          The university club for students passionate about Cyber Security,
          Internet of Things, and Blockchain.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <a
            href="#"
            className="px-6 py-3 text-lg font-medium text-black bg-neutral-900/5 border border-neutral-900/10 rounded-full backdrop-blur-lg transition-all hover:bg-neutral-900/10"
          >
            Learn More
          </a>
          <a
            href="#"
            className="px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-full transition-all hover:bg-blue-700"
          >
            Join The Club
          </a>
        </div>
      </main>
      <section className="py-20 px-8 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Explore the Future of Technology
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-neutral-600">
            VICSTA is your launchpad into the most exciting fields in tech.
            Whether you're a beginner or an expert, you'll find your place with
            us.
          </p>
          <div className="mt-16 grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-semibold">Cyber Security</h3>
              <p className="mt-2 text-neutral-600">
                Defend digital frontiers and learn ethical hacking.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-semibold">Internet of Things</h3>
              <p className="mt-2 text-neutral-600">
                Build smart devices and connect the physical world.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-semibold">Blockchain</h3>
              <p className="mt-2 text-neutral-600">
                Dive into decentralized systems and cryptocurrencies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
