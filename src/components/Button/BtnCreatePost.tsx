"use client"

import { useRouter } from "next/navigation"
import { Button } from "../ui/button"
import { Plus } from "lucide-react"

export const BtnCreatePost = () => {
  const router = useRouter()
  
  return <>
    <Button onClick={() => router.push('/posts/createpost')} className='btn
      bg-clip-padding bg-gradient-to-r from-pink-500 to-pink-700
    text-white flex items-center gap-3'>
      <Plus /> Create Post
    </Button>
  </>
}