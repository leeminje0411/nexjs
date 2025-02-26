import React from 'react';
import Schedule from '../component/schedule';
import { supabase } from '../lib/supabase';

const CalendarLayout = async ({ children }) => {
  let schedules = await supabase
    .from('schedule')
    .select('*');
  schedules = schedules.data;
  console.log('Calendar layout 재렌더링');

  return (
    <Schedule schedules={schedules} children={children}/>
  );
};

export default CalendarLayout;

export const dynamic = "force-dynamic";