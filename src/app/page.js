import Image from "next/image";
import Link from "next/link";
import Schedule from "./component/schedule";
import {supabase} from "./lib/supabase";
// import prisma from "./lib/prisma";

export default async function Home() {
  console.log('Root page 재렌더링');
     let schedules = await supabase
    .from('schedule')
    .select('*');

     schedules = schedules.data;
  
  return (
 <>
    
        
        <Schedule schedules={schedules} ></Schedule>
     
 </>
  );
}

export const dynamic = "force-dynamic";