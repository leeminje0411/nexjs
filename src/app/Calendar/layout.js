import React from 'react';
import prisma from '../lib/prisma';
import Schedule from '../component/schedule';

const AboutLayout = async ({ children }) => {
    const schedules = await prisma.schedule.findMany();
        
    console.log(schedules);

    return (
       
        <Schedule schedules={schedules} children={children}/>
    );
};

export default AboutLayout;

export const dynamic = "force-dynamic";