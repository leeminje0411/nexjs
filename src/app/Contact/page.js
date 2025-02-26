'use client'
import React from 'react';
import {useRef} from 'react';
import { Button } from "@/components/ui/button"


const Contact = () => {

    const textRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({text: textRef.current.value}),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response=> response.json()).then(data=> alert(data));
    }


    return (
        <div>
             
            <h1>Contact Us</h1>
            <p>If you have any questions, feel free to reach out to us!</p>
             <div>
                <Button>제출 버튼 </Button>
            </div>
            <form onSubmit={(e) => { handleSubmit(e)}}>
            <input type="text" ref={textRef} />
            <input type="submit" />
            </form>
        </div>
    );
};

export default Contact;