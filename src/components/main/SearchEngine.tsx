"use client"
import { useRouter } from "next/navigation"

export const SearchEngine = () => {
  const router = useRouter()

  const search = (type: string) => {
    router.push(`/?search=${type}`)
  }

  return <>
    <h2 className="text-xl text-white font-bold mt-2">Search</h2>

    <div className="flex items-center gap-5">
      <span
      onClick={() => search('all')}
      className="text-sm text-white p-2 bg-purple-800 rounded-lg w-[70px] text-center cursor-pointer">All</span>
      <span
      onClick={() => search('users')}
      className="text-sm text-white p-2 bg-purple-800 rounded-lg w-[70px] text-center cursor-pointer">Users</span>
      <span 
      onClick={() => search('posts')}
      className="text-sm text-white p-2 bg-purple-800 rounded-lg w-[70px] text-center cursor-pointer">Posts</span>
    </div>
  </>
}