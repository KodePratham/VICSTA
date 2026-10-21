'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export function AdminLogin() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)
    try {
      const res = await fetch('/api/orientation/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setError(data.error || 'Login failed')
        return
      }
      router.refresh()
    } catch {
      setError('Network error')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="max-w-md mx-auto mt-16 bg-navy/80 border-4 border-blue-400 p-6 sm:p-8">
      <h1 className="pixel-text text-xl sm:text-2xl text-blue-400 mb-6 text-center">ADMIN LOGIN</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          autoComplete="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="w-full bg-black/50 border-2 border-blue-400 text-white px-4 py-3 outline-none focus:border-white"
        />
        <input
          type="password"
          autoComplete="current-password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full bg-black/50 border-2 border-blue-400 text-white px-4 py-3 outline-none focus:border-white"
        />
        {error && <p className="pixel-text text-xs text-red-400">{error}</p>}
        <button
          type="submit"
          disabled={submitting}
          className="w-full pixel-text text-blue-400 border-2 border-blue-400 py-3 hover:bg-blue-400 hover:text-navy transition-colors disabled:opacity-50"
        >
          {submitting ? 'CHECKING...' : 'LOGIN'}
        </button>
      </form>
    </div>
  )
}
