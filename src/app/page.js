import Image from "next/image";
import Link from "next/link";
import Schedule from "./component/schedule";
import prisma from "./lib/prisma";

export default async function Home() {

  const schedules = await prisma.schedule.findMany();

  return (
 <>
    
        
        <Schedule schedules={schedules} ></Schedule>
     
 </>
  );
}
