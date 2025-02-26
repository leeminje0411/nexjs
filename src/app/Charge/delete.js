'use client'
import React from 'react';
import { useRouter } from 'next/navigation';



export default function Delete({item}) {
  const router = useRouter();

    const deleteHandler =  async (e)=>{ 
         e.preventDefault();
        await fetch('/api/delete', {
            method: 'POST',
            body: JSON.stringify({id: item.id}),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response=> router.refresh())
        
    }

    return (
        <button id={item.id} onClick={deleteHandler}>삭제</button>
    );

}