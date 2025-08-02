import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
})

export const metadata = {
  title: 'VICSTA - Computer Science Excellence',
  description: 'Departmental club for Computer Science: IoT, Cybersecurity, and Blockchain',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${playfair.variable}`}>{children}</body>
    </html>
  )
}
