'use client'
import React from "react";
import { useRef } from "react";

export default function Upload() {
    const textRef = useRef();
    const submithandler = (e=>{
        e.preventDefault();
        

    })
    return (
        <div>
            
            <p><input ref={textRef} type="text" /></p>
            {/* <p><textarea name="" id=""></textarea></p> */}
            <p><input type="submit" value='업로드' onClick={(e)=>{}}/></p>
        </div>
    );
}