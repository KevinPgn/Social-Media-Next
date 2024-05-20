import { BtnBookmark } from "@/components/Button/BtnBookmark"
import { BtnLike } from "@/components/Button/BtnLike"
import { auth } from "@/lib/auth"

export const SavedPost = async ({savedPosts}: any) => {
  const session = await auth()
  const user = session?.user?.id
  return <>
    <section className="flex flex-col gap-5">
      {savedPosts.map((post: any) => (
        <div key={post.post.id} className="w-full bg-slate-950 p-5 rounded-md">
          <div className="flex items-center gap-3">
            <img src={post.post.author.image} alt="author image" className="w-14 h-14 rounded-full" />
            <div>
              <h3 className="text-white font-bold">{post.post.author.name}</h3>
              <p className="text-gray-500 text-sm mt-1">{new Date(post.post.createdAt).toLocaleDateString()}</p>
            </div>
          </div>

          <h2 className="text-white font-bold text-xl mt-5">{post.post.title}</h2>
          <p className="text-gray-300 mt-3">{post.post.content}</p>

          <div className="flex gap-3 mt-5">
            {post.post.tags.map((tag: any) => (
              <span key={tag.id} className="text-sm text-purple-700">{tag.tag.name}</span>
            ))}
          </div>
            
          <div className="flex items-center justify-between mt-10">
            <BtnLike numberLikes={post.post.likes} postid={post.post.id}/>
            <BtnBookmark postid={post.post.id} userid={user} savedPost={post.post.saved}/>
            </div>
        </div>
      ))} 
    </section>
  </>
}