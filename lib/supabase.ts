// Updated on 2026-01-14
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Validate environment variables
export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseAnonKey && 
  supabaseUrl.includes('supabase.co') &&
  supabaseAnonKey.length > 50
)

// Create a client with enhanced error handling
export const supabase = isSupabaseConfigured 
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: false, // Disable session persistence for now
        autoRefreshToken: false,
      },
    })
  : null

// Helper function to test connection
export const testSupabaseConnection = async () => {
  if (!supabase || !isSupabaseConfigured) {
    return { connected: false, error: 'Supabase not configured' }
  }

  try {
    // Test connection with a simple query
    const { error } = await supabase
      .from('pg_tables')
      .select('tablename')
      .limit(1)

    if (error) {
      console.warn('Supabase connection test failed:', error.message)
      return { connected: false, error: error.message }
    }

    return { connected: true, error: null }
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error'
    console.warn('Supabase connection error:', errorMessage)
    return { connected: false, error: errorMessage }
  }
}
