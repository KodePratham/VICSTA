import type { Metadata } from 'next'
import { isAdminAuthenticated } from '@/lib/admin-auth'
import { AdminLogin } from '@/components/orientation/AdminLogin'
import { AdminPanel } from '@/components/orientation/AdminPanel'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Orientation Admin',
  robots: { index: false, follow: false },
}

export default function OrientationAdminPage() {
  const authenticated = isAdminAuthenticated()

  return (
    <div className="min-h-screen w-full relative bg-black overflow-x-hidden">
      <div className="fixed inset-0 bg-gradient-to-b from-navy via-black to-navy opacity-90" />
      <div className="relative z-10 container mx-auto px-4 py-8 sm:py-12 max-w-3xl">
        {authenticated ? <AdminPanel /> : <AdminLogin />}
      </div>
    </div>
  )
}
