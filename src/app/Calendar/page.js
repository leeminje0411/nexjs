'use client'
import Image from "next/image";
import Link from "next/link";
import Index from ".";
import {useState} from "react";
export default function Home() {
    const [isClicked, setIsClicked] = useState(false);
    const buttonHandler = ()=>{
        setIsClicked(!isClicked);
    }   

  return (
 <>
    
        <h1 className="text-4xl font-bold text-blue-500">Hello, Tailwind CSS!</h1>
        <button className="rounded-full bg-blue-500 p-3 text-white" onClick={buttonHandler}>일정추가</button>
        {isClicked? <Index isClicked={isClicked} setIsClicked={setIsClicked}></Index> : null} 
 </>
  );
}
