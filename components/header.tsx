import Link from 'next/link'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f5f5f7]/80 backdrop-blur-lg">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-[#1d1d1f]"
        >
          VICSTA
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/about"
            className="text-sm text-[#1d1d1f] hover:text-blue-600 transition-colors"
          >
            About
          </Link>
          <Link
            href="/events"
            className="text-sm text-[#1d1d1f] hover:text-blue-600 transition-colors"
          >
            Events
          </Link>
          <Link
            href="/contact"
            className="text-sm text-[#1d1d1f] hover:text-blue-600 transition-colors"
          >
            Contact
          </Link>
          <a
            href="#"
            className="px-4 py-2 text-sm text-white bg-blue-600 rounded-full transition-all hover:bg-blue-700"
          >
            Join Us
          </a>
        </div>
      </nav>
    </header>
  )
}
