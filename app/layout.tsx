import type { Metadata, Viewport } from 'next'
import { Poppins, Roboto_Mono, Press_Start_2P } from 'next/font/google'
import './globals.css'

// Self-hosted at build time: no render-blocking request to Google Fonts.
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

const pressStart = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-press-start',
})

export const metadata: Metadata = {
  title: 'Vicsta - VIT Computer Science & Technology Association',
  description: 'Premier Computer Science club at Vishwakarma Institute of Technology focusing on Cyber Security, Blockchain, and IoT',
  keywords: 'Vicsta, VIT, Computer Science, Cyber Security, Blockchain, IoT, Technology Club',
  authors: [{ name: 'Vicsta Team' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${poppins.variable} ${robotoMono.variable} ${pressStart.variable}`}
    >
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
