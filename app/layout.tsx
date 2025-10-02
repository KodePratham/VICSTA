import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vicsta - VIT Computer Science & Technology Association',
  description: 'Premier Computer Science club at Vishwakarma Institute of Technology focusing on Cyber Security, Blockchain, and IoT',
  keywords: 'Vicsta, VIT, Computer Science, Cyber Security, Blockchain, IoT, Technology Club',
  authors: [{ name: 'Vicsta Team' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}