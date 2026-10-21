import { createHmac, timingSafeEqual } from 'crypto'
import { cookies } from 'next/headers'

export const SESSION_COOKIE = 'orientation_admin'
export const SESSION_MAX_AGE_SECONDS = 60 * 60 * 12 // 12 hours

// Uses ADMIN_SESSION_SECRET if set; otherwise derives a signing key from the admin
// credentials so no extra env var is needed. Changing the username/password
// invalidates existing sessions.
function getSecret(): string | null {
  const explicit = process.env.ADMIN_SESSION_SECRET
  if (explicit && explicit.length >= 16) return explicit

  const user = process.env.ADMIN_USERNAME
  const pass = process.env.ADMIN_PASSWORD
  if (!user || !pass) return null
  return createHmac('sha256', 'orientation-session-key').update(`${user}\n${pass}`).digest('hex')
}

function sign(payload: string, secret: string): string {
  return createHmac('sha256', secret).update(payload).digest('base64url')
}

function safeEqual(a: string, b: string): boolean {
  const ab = Buffer.from(a)
  const bb = Buffer.from(b)
  if (ab.length !== bb.length) return false
  return timingSafeEqual(ab, bb)
}

// Compares via HMAC digests so length differences don't leak and comparison is constant time.
export function checkCredentials(username: string, password: string): boolean {
  const expectedUser = process.env.ADMIN_USERNAME
  const expectedPass = process.env.ADMIN_PASSWORD
  if (!expectedUser || !expectedPass) return false

  const key = 'credential-compare'
  const digest = (v: string) => createHmac('sha256', key).update(v).digest()
  const userOk = timingSafeEqual(digest(username), digest(expectedUser))
  const passOk = timingSafeEqual(digest(password), digest(expectedPass))
  return userOk && passOk
}

export function createSessionToken(): string | null {
  const secret = getSecret()
  if (!secret) return null
  const expires = Date.now() + SESSION_MAX_AGE_SECONDS * 1000
  const payload = String(expires)
  return `${payload}.${sign(payload, secret)}`
}

export function verifySessionToken(token: string | undefined): boolean {
  if (!token) return false
  const secret = getSecret()
  if (!secret) return false

  const [payload, signature] = token.split('.')
  if (!payload || !signature) return false
  if (!safeEqual(signature, sign(payload, secret))) return false

  const expires = Number(payload)
  return Number.isFinite(expires) && expires > Date.now()
}

export function isAdminAuthenticated(): boolean {
  return verifySessionToken(cookies().get(SESSION_COOKIE)?.value)
}
