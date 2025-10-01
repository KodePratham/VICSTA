'use client'

import { useEffect, useState } from 'react'
import { supabase, isSupabaseConfigured } from '@/lib/supabase'

export function SupabaseTest() {
  const [connected, setConnected] = useState<boolean | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const testConnection = async () => {
      if (!isSupabaseConfigured || !supabase) {
        setConnected(false)
        setLoading(false)
        return
      }

      try {
        // Test with a simple query that should always work
        const { data, error } = await supabase
          .from('information_schema.tables')
          .select('table_name')
          .limit(1)
        
        if (error) {
          // If information_schema doesn't work, try a simple RPC call
          const { error: rpcError } = await supabase.rpc('version')
          setConnected(!rpcError)
        } else {
          setConnected(true)
        }
      } catch (err) {
        console.log('Supabase connection test:', err)
        setConnected(false)
      } finally {
        setLoading(false)
      }
    }

    testConnection()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse"></div>
        <span className="text-xs text-gray-600 dark:text-gray-300">Testing DB...</span>
      </div>
    )
  }

  return (
    <div className={`flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-gray-800 rounded-lg shadow-sm border ${
      connected ? 'border-green-200 dark:border-green-800' : 'border-red-200 dark:border-red-800'
    }`}>
      <div className={`w-1.5 h-1.5 rounded-full ${
        connected ? 'bg-green-500' : 'bg-red-500'
      }`}></div>
      <span className={`text-xs font-medium ${
        connected ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'
      }`}>
        {connected ? 'DB Connected' : 'DB Offline'}
      </span>
    </div>
  )
}
