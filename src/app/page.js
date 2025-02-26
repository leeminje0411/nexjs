import React from 'react';
import Schedule from "./component/schedule";
import { supabase } from "./lib/supabase";

export default async function Home() {
  console.log('Root page 재렌더링');
  
  let schedules = await supabase
    .from('schedule')
    .select('*');
  schedules = schedules.data;

  return (
      <>      <Schedule schedules={schedules}></Schedule></>
  );
}

export const dynamic = "force-dynamic";