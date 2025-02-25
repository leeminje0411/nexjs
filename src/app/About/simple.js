'use client'
import React from "react";
import {useState} from "react";

const Contact = ()=>{

    const [number, setNumber] = useState(0);
    return(
       <form>
            <input type="number" value={number} onChange={e=>setNumber(e.target.value)}>
                
            </input>
            <input type="submit" onClick={(e)=>{
                e.preventDefault();
                alert(number)}}></input>

       </form>
    )
}

export default Contact;