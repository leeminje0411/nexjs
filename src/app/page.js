
import React from 'react';
import Schedule from "./component/schedule";
import { supabase } from "./lib/supabase";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

export default async function Home() {
  console.log('Root page 재렌더링');
  
  let { data: schedules, error } = await supabase
    .from('schedule')
    .select('*');
  
  if (error) {
    console.error(error);
    schedules = [];
  }

  return (
    <>
      <div>
 
        <FontAwesomeIcon icon={faCalendar} />
        <FontAwesomeIcon icon={faCalendar} />
        <FontAwesomeIcon icon={faCalendar} />
        <FontAwesomeIcon icon={faCalendar} />
        <FontAwesomeIcon icon={faCalendar} />
      </div>
      <Schedule schedules={schedules}></Schedule>
    </>
  );
}

export const dynamic = "force-dynamic";