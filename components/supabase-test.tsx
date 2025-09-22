'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export function SupabaseTest() {
  const [connected, setConnected] = useState<boolean | null>(null)

  useEffect(() => {
    const testConnection = async () => {
      try {
        const { data, error } = await supabase.from('test').select('*').limit(1)
        if (error && error.code !== 'PGRST116') {
          // PGRST116 means table doesn't exist, which is expected
          setConnected(false)
        } else {
          setConnected(true)
        }
      } catch (err) {
        setConnected(false)
      }
    }

    testConnection()
  }, [])

  if (connected === null) {
    return <div className="text-sm text-gray-500">Testing Supabase connection...</div>
  }

  return (
    <div className={`text-sm ${connected ? 'text-green-600' : 'text-red-600'}`}>
      Supabase: {connected ? 'Connected ✓' : 'Connection Failed ✗'}
    </div>
  )
}
