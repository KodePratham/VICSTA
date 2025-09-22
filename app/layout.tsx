import './globals.css'
import { Inter } from 'next/font/google'
import { Header } from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'VICSTA | University Tech Club',
  description:
    'A university club for students passionate about Cyber Security, Internet of Things, and Blockchain.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} pt-16`}>
        <Header />
        {children}
      </body>
    </html>
  )
}