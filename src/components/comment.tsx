"use client"
import React, { useState } from 'react';
const Comments = () => {
    const [comment , setcomment]=useState("")
    const [comments , setcomments]=useState<string[]>([])
    const submitcomment = (notrefresh: React.FormEvent)=>{
        notrefresh.preventDefault()
        if(comment.trim()){
            setcomments([comment , ...comments ])
            setcomment("")}}
  return (
    <div>
     <form className=' flex flex-row gap-4' onSubmit={submitcomment}>
        <input type="text" className='w-auto h-10' placeholder='write a comment here.' value={comment} onChange={(notrefresh) => setcomment(notrefresh.target.value)}/>
        <button className='text-base w-auto bg-myred text-white px-3 rounded-sm'>Submit</button>
     </form>
     <ul>
     {comments.map((herecomments , index)=>{
        return(
            <li className='text-black bg-white mt-3 ' key={index}>
                {herecomments}
            </li>
        )})}
     </ul>
    </div>)}
export default Comments
