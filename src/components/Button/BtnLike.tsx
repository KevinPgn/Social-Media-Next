"use client"
import { Heart } from "lucide-react"
import { likePost } from "@/server/Actions"
import { useOptimistic } from "react"

export const BtnLike = ({numberLikes, postid}: any) => {
  const [optimisticLikes, setOptimisticLikes] = useOptimistic(
    numberLikes.length,
    (prev: number) => prev + 1
  )

  const likePosts = async () => {
    await likePost({postId: postid})
    setOptimisticLikes((prev: number) => prev + 1)
  }  

  return <>
    <button 
      onClick={likePosts}
    className="flex gap-2 items-center">
      <Heart size={25} />
      <span>{optimisticLikes}</span>
    </button>
  </>
}