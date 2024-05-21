"use client"
import { BtnBookmark } from "../Button/BtnBookmark"
import { BtnLike } from "../Button/BtnLike"
import { SearchEngine } from "./SearchEngine"
import { useSearchParams } from "next/navigation"

export const AllPosts =  ({posts, user}: any) => {
  const searchParams = useSearchParams()
  const inputSearch = searchParams.get('inputSearch')

  if(inputSearch) {
    posts = posts.filter((post: any) => post.title.toLowerCase().includes(inputSearch.toLowerCase()))
  }
  if(posts.length === 0) {
    return <p>nothing found</p>
  }

  return <section className="flex flex-col gap-5">
    <SearchEngine />
    {posts.map((post: any) => (
      <div key={post.id} className="w-full bg-slate-950 p-5 rounded-md">
        <div className="flex items-center gap-3">
          <img src={post.author.image} alt="author image" className="w-14 h-14 rounded-full" />
          <div>
            <h3 className="text-white font-bold">{post.author.name}</h3>
            <p className="text-gray-500 text-sm mt-1">{new Date(post.createdAt).toLocaleDateString()}</p>
          </div>
        </div>

        <h2 className="text-white font-bold text-xl mt-5">{post.title}</h2>
        <p className="text-gray-300 mt-3">{post.content}</p>

        <div className="flex gap-3 mt-5">
          {post.tags.map((tag: any) => (
            <span key={tag.id} className="text-sm text-purple-700">{tag.tag.name}</span>
          ))}
        </div>

        <div className="flex items-center justify-between mt-10">
          <BtnLike numberLikes={post.likes} postid={post.id}/>
          <BtnBookmark postid={post.id} userid={user} savedPost={post.saved}/>
        </div>
      </div>
    ))}
  </section>
}