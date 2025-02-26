import { NextResponse } from 'next/server';
import { supabase } from '../../lib/supabase';


export async function POST(req) {
 

    const { writer, schedule, date, startTime, endTime  } = await req.json();


    const { error } = await supabase.from('schedule').insert([
      { writer, schedule, date, startTime, endTime }
    ]);
   

    if (error) {
      console.error('❌ Supabase Error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: 'Data inserted successfully' }, { status: 200 });

}