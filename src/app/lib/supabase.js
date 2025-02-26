import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// ✅ Supabase 서버 역할 키를 사용해야 함 (더 강력한 인증 가능)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY; // 서버 키 사용


if (!globalThis.supabase) {
  globalThis.supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: { persistSession: false }
  });
}

export const supabase = globalThis.supabase;