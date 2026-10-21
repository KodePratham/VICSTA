'use client'

import { useCallback, useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import type { ScoreEntry } from '@/lib/orientation'

export function useScoreEntries() {
  const [entries, setEntries] = useState<ScoreEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const refresh = useCallback(async () => {
    if (!supabase) {
      setError('Scoreboard is not configured yet.')
      setLoading(false)
      return
    }
    const { data, error } = await supabase
      .from('score_entries')
      .select('*')
      .order('created_at', { ascending: false })
      .order('id', { ascending: false })

    if (error) {
      setError(error.message)
    } else {
      setError(null)
      setEntries((data ?? []) as ScoreEntry[])
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    refresh()
    if (!supabase) return

    const client = supabase
    // Realtime keeps the board live; a slow poll is a fallback if the socket drops.
    // Debounce bursts of changes into a single refetch.
    let timer: ReturnType<typeof setTimeout> | null = null
    const scheduleRefresh = () => {
      if (timer) clearTimeout(timer)
      timer = setTimeout(refresh, 300)
    }
    const channel = client
      .channel('score_entries_changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'score_entries' }, scheduleRefresh)
      .subscribe()
    // Fallback poll, skipped while the tab is hidden.
    const interval = setInterval(() => {
      if (document.visibilityState === 'visible') refresh()
    }, 30000)

    return () => {
      if (timer) clearTimeout(timer)
      clearInterval(interval)
      client.removeChannel(channel)
    }
  }, [refresh])

  return { entries, loading, error, refresh }
}
