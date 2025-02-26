import { NextResponse } from 'next/server';
import { supabase } from '../../lib/supabase';


export async function POST(req) {
 

    const { charger, chargee, title, price } = await req.json();


    const { error } = await supabase.from('charge').insert([
      { charger, chargee, title, price }
    ]);
   

    if (error) {
      console.error('❌ Supabase Error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: 'Data inserted successfully' }, { status: 200 });

}