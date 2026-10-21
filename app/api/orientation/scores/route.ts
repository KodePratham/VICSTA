import { NextResponse } from 'next/server'
import { isAdminAuthenticated } from '@/lib/admin-auth'
import { getSupabaseAdmin } from '@/lib/supabase-admin'
import { isDivision, isGameId } from '@/lib/orientation'

export const dynamic = 'force-dynamic'

const MAX_POINTS = 100000

function unauthorized() {
  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
}

export async function POST(request: Request) {
  if (!isAdminAuthenticated()) return unauthorized()

  let body: { game?: unknown; division?: unknown; points?: unknown; note?: unknown }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  const { game, division, points, note } = body

  if (!isGameId(game)) {
    return NextResponse.json({ error: 'Invalid game' }, { status: 400 })
  }
  if (!isDivision(division)) {
    return NextResponse.json({ error: 'Invalid division' }, { status: 400 })
  }
  if (
    typeof points !== 'number' ||
    !Number.isInteger(points) ||
    points === 0 ||
    Math.abs(points) > MAX_POINTS
  ) {
    return NextResponse.json({ error: 'Points must be a non-zero integer' }, { status: 400 })
  }

  const cleanNote =
    typeof note === 'string' && note.trim() ? note.trim().slice(0, 200) : null

  try {
    const { data, error } = await getSupabaseAdmin()
      .from('score_entries')
      .insert({ game, division, points, note: cleanNote })
      .select()
      .single()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
    return NextResponse.json({ entry: data })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Server error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  if (!isAdminAuthenticated()) return unauthorized()

  const id = Number(new URL(request.url).searchParams.get('id'))
  if (!Number.isInteger(id) || id <= 0) {
    return NextResponse.json({ error: 'Invalid id' }, { status: 400 })
  }

  try {
    const { error } = await getSupabaseAdmin().from('score_entries').delete().eq('id', id)
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
    return NextResponse.json({ ok: true })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Server error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
