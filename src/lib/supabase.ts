import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://your-project.supabase.co'
const supabaseKey = 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseKey)

export type Article = {
  id: string
  title: string
  content: string
  excerpt: string
  category: string
  created_at: string
  updated_at: string
  published: boolean
}