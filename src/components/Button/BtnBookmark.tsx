"use client"
import { Bookmark } from "lucide-react"

export const BtnBookmark = () => {
  return <>
    <button className="flex gap-2 items-center">
      <Bookmark size={25} />
    </button>
  </>
}