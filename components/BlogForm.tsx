"use client"
import React, { useState } from 'react'

export default function BlogForm() {
    const [author,setAuthor]= useState('')
    const [title,setTitle]= useState('')
    const [content,setContent]= useState('')

    const handleSave=()=>{
        const blogData = {
            author,
            title,
            content
        }

        console.log("data input: ",blogData);
        
    }
    
  return (
    <div className='p-4 border my-4'>
        <h2>Create own post</h2>
        <input type="text" placeholder='author' value={author} onChange={(e)=>setAuthor(e.target.value)} />
        <input type="text" placeholder='title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <input type="text" placeholder='content' value={content} onChange={(e)=>setContent(e.target.value)}/>
        <button onClick={handleSave}>Save</button>
    </div>
  )
}
