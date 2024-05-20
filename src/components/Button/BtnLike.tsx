"use client"
import { Heart } from "lucide-react"

export const BtnLike = () => {
  return <>
    <button className="flex gap-2 items-center">
      <Heart size={25} />
    </button>
  </>
}