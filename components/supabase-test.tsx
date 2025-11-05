'use client'

import { useEffect, useState } from 'react'
import { testSupabaseConnection, isSupabaseConfigured } from '@/lib/supabase'

interface ConnectionStatus {
  connected: boolean | null
  error: string | null
  loading: boolean
}

export function SupabaseTest() {
  const [status, setStatus] = useState<ConnectionStatus>({
    connected: null,
    error: null,
    loading: true
  })

  useEffect(() => {
    const checkConnection = async () => {
      setStatus(prev => ({ ...prev, loading: true }))

      if (!isSupabaseConfigured) {
        setStatus({
          connected: false,
          error: 'Environment variables not configured',
          loading: false
        })
        return
      }

      const result = await testSupabaseConnection()
      setStatus({
        connected: result.connected,
        error: result.error,
        loading: false
      })
    }

    checkConnection()
  }, [])

  if (status.loading) {
    return (
      <div className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse"></div>
        <span className="text-xs text-gray-600 dark:text-gray-300">Testing DB...</span>
      </div>
    )
  }

  const isConnected = status.connected === true
  const statusColor = isConnected ? 'green' : 'red'
  const statusText = isConnected ? 'DB Connected' : 'DB Offline'

  return (
    <div className={`flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-gray-800 rounded-lg shadow-sm border ${
      isConnected ? 'border-green-200 dark:border-green-800' : 'border-red-200 dark:border-red-800'
    }`}>
      <div className={`w-1.5 h-1.5 rounded-full bg-${statusColor}-500`}></div>
      <span className={`text-xs font-medium text-${statusColor}-700 dark:text-${statusColor}-400`}>
        {statusText}
      </span>
      {status.error && !isConnected && (
        <div className="relative group">
          <svg className="w-3 h-3 text-red-500 cursor-help" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div className="absolute bottom-full right-0 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap max-w-xs">
            {status.error}
          </div>
        </div>
      )}
    </div>
  )
}
