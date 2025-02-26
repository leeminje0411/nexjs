import React from 'react';
import Schedule from '../component/schedule';
import { supabase } from '../lib/supabase';

const CalendarLayout = async ({ children }) => {
  let { data: schedules, error } = await supabase
    .from('schedule')
    .select('*');
  
  if (error) {
    console.error(error);
    schedules = [];
  }

  console.log('Calendar layout 재렌더링');

  return (
    <Schedule schedules={schedules} children={children}/>
  );
};

export default CalendarLayout;

export const dynamic = "force-dynamic";