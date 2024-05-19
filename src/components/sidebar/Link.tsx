"use client"
import { Home, ImageUp, Users, Bookmark, Heart } from "lucide-react"
import Link from "next/link"

export const Links = () => {
  return <section className="flex flex-col gap-5">
    <Link href="#" className="flex text-xl items-center gap-5 hover:bg-[#7157F0] text-white duration-75 p-3 rounded-md">
      <Home size={27} />
      <span>Home</span>
    </Link>
    <Link href="#" className="flex text-xl items-center gap-5 hover:bg-[#7157F0] text-white duration-75 p-3 rounded-md">
      <ImageUp size={27} />
      <span>Image</span>
    </Link>
    <Link href="#" className="flex text-xl items-center gap-5 hover:bg-[#7157F0] text-white duration-75 p-3 rounded-md">
      <Users size={27} />
      <span>Users</span>
    </Link>
    <Link href="#" className="flex text-xl items-center gap-5 hover:bg-[#7157F0] text-white duration-75 p-3 rounded-md">
      <Bookmark size={27} />
      <span>Bookmark</span>
    </Link>
    <Link href="#" className="flex text-xl items-center gap-5 hover:bg-[#7157F0] text-white duration-75 p-3 rounded-md">
      <Heart size={27} />
      <span>Heart</span>
    </Link>
  </section>
}