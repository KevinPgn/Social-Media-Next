"use client"
import { Home, ImageUp, Users, Bookmark, Heart } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const Links = () => {
  const pathname = usePathname()
  
  return <section className="flex flex-col gap-5">
    <Link href="/" className={`
    ${pathname === "/" ? "bg-[#7157F0]" : ""}
    flex text-xl items-center gap-5 hover:bg-[#7157F0] text-white duration-75 p-3 rounded-md`}>
      <Home size={27} />
      <span>Home</span>
    </Link>
    <Link href="#" className={`
    ${pathname === "/createpost" ? "bg-[#7157F0]" : ""}
    flex text-xl items-center gap-5 hover:bg-[#7157F0] text-white duration-75 p-3 rounded-md`}>
      <ImageUp size={27} />
      <span>Create Post</span>
    </Link>
    <Link href="#" className={`
    ${pathname === "/users" ? "bg-[#7157F0]" : ""}
    flex text-xl items-center gap-5 hover:bg-[#7157F0] text-white duration-75 p-3 rounded-md`}>
      <Users size={27} />
      <span>People</span>
    </Link>
    <Link href="#" className={`
    ${pathname === "/savedposts" ? "bg-[#7157F0]" : ""}
    flex text-xl items-center gap-5 hover:bg-[#7157F0] text-white duration-75 p-3 rounded-md`}>
      <Bookmark size={27} />
      <span>Saved Posts</span>
    </Link>
    <Link href="#" className={`
    ${pathname === "/favorypost" ? "bg-[#7157F0]" : ""}
    flex text-xl items-center gap-5 hover:bg-[#7157F0] text-white duration-75 p-3 rounded-md`}>
      <Heart size={27} />
      <span>Like Posts</span>
    </Link>
  </section>
}