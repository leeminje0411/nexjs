'use client'
import React from 'react';
import { createClient } from "@supabase/supabase-js";
import {useRef,useState} from 'react';
import { useRouter } from 'next/navigation';

const Charge = () => {
    
    const router = useRouter();
    const [formData, setFormData] = useState({
        charger: "",
        chargee: "",
        title: "",
        price: "",
    });
        
    const handleChange = (e)=>{
        setFormData({
            ... formData, [e.target.name] : e.target.value
        })
    }
    
    const submitHnaler = async e => {
        e.preventDefault();
        await fetch('/api/charge', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => router.refresh())
    }

    return (
        <div>
            <form style={{'display':'flex', 'flexDirection': 'column'}} onSubmit={(e) => { submitHnaler(e) }}>
                <input name="charger" type="text" value={formData.charger} onChange={handleChange}/>
                <input name="chargee" type="text" value={formData.chargee} onChange={handleChange}/>
                <textarea name="title" value={formData.title} onChange={handleChange}></textarea>
                <input name="price" type="text" value={formData.price} onChange={handleChange}/>
                <input type="submit"/>
            </form>
        </div>
    );

};

export default Charge;