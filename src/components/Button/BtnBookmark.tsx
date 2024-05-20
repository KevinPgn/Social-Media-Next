"use client"
import { Bookmark } from "lucide-react"
import { savePost } from "@/server/Actions"

export const BtnBookmark = ({ postid, userid, savedPost }: any) => {  
  const savePosts = async () => {
    await savePost({ postId: postid })
  }

  const isSaved = savedPost.some((post: any) => post.userId === userid)

  return (
    <>
      <button
        onClick={savePosts}
        className={`flex gap-2 items-center ${isSaved ? 'text-blue-500' : ''}`}
      >
        <Bookmark size={25} />
      </button>
    </>
  )
}