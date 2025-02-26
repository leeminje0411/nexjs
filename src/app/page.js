import React from 'react';
import Gallery from './gallery.js';
import Schedule from './component/schedule.js';
import { supabase } from './lib/supabase.js'; 

export default async function Home() {
  let { data: schedules, error } = await supabase
    .from('schedule')
    .select('*');
  
  if (error) {
    console.error(error);
    schedules = [];
  }

  return (
    <div>
      <Gallery />
      <div className="flex flex-wrap md:flex-nowrap">
        <Schedule className="w-full sm:w-1/2" schedules={schedules} />
        <div className="w-full sm:w-1/2 h-auto bg-amber-300"></div>
      </div>
    </div>
  );
}

export const dynamic = "force-dynamic";