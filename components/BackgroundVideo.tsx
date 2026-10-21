'use client'

import { useEffect, useState } from 'react'

interface Props {
  className?: string
  brightness?: number
}

type NetworkInfo = { saveData?: boolean; effectiveType?: string }

// Loads the heavy background video only after the page is interactive, and skips it
// entirely for data-saver / slow connections and reduced-motion users. Until then
// the page shows its normal dark background, so nothing blocks first paint.
export function BackgroundVideo({ className = '', brightness = 0.5 }: Props) {
  const [enabled, setEnabled] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const conn = (navigator as Navigator & { connection?: NetworkInfo }).connection
    const slow = conn?.saveData || /(^|-)2g$|3g/.test(conn?.effectiveType ?? '')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (slow || reduceMotion) return

    let cancelled = false
    const start = () => {
      if (cancelled) return
      const idle = (window as Window & { requestIdleCallback?: (cb: () => void) => number })
        .requestIdleCallback
      if (idle) idle(() => !cancelled && setEnabled(true))
      else setTimeout(() => !cancelled && setEnabled(true), 500)
    }

    if (document.readyState === 'complete') start()
    else window.addEventListener('load', start, { once: true })

    return () => {
      cancelled = true
      window.removeEventListener('load', start)
    }
  }, [])

  if (!enabled) return null

  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      aria-hidden="true"
      onCanPlay={() => setReady(true)}
      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
        ready ? 'opacity-100' : 'opacity-0'
      } ${className}`}
      style={{ filter: `brightness(${brightness})` }}
    >
      <source src="/pixel-city.mp4" type="video/mp4" />
    </video>
  )
}
