'use client'

import { useSession } from "next-auth/react"
import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Image from 'next/image'


const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete}) => {
    
  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <Image
          src={post.image}
          alt='user_image'
          width={40}
          height={40}
          className="rounded-full object-contain"
          />
          
          <div className="flex flex-col">
            <h3>{post.username}</h3>
            <p>{post.email}</p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default PromptCard