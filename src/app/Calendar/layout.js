import React from 'react';
import Schedule from '../component/schedule';
import { supabase } from '../lib/supabase';

const AboutLayout = async ({ children }) => {
    // const schedules = await prisma.schedule.findMany();
      
   let schedules = await supabase
  .from('schedule')
  .select('*');
    schedules = schedules.data;
    console.log('Calendar layout 재렌더링');

    return (
       
        <Schedule schedules={schedules} children={children}/>
    );
};

export default AboutLayout;

export const dynamic = "force-dynamic";