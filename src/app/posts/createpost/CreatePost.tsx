"use client"
import { Input } from "@/components/ui/input"
import { createPost } from "@/server/Actions"

export const CreatePost = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      title: { value: string }
      content: { value: string }
      image: { value: string }
      tags: { value: string }
    }

    const title = target.title.value
    const content = target.content.value
    const image = target.image.value
    const tags = target.tags.value.split(' ').map(tag => tag.startsWith('#') ? tag : `#${tag}`)
    try{
      await createPost({ title, content, image, tags })
    } catch (err) {
      console.log(err)
    }
  }
  
  return <section className="max-w-4xl mx-auto mt-10">
    <h2 className="font-bold text-white text-2xl mb-5 px-10">Create Post</h2>

    <form onSubmit={handleSubmit} className="flex flex-col gap-10 px-10">
      <div>
        <label className="text-md text-gray-400">Title</label>
        <Input type="text" name="title" placeholder="Title" className="input mt-2 text-md bg-slate-950 border-none" />
      </div>

      <div className="flex flex-col">
        <label className="text-md text-gray-400 mb-2">Content</label>
        <textarea placeholder="Content" name="content" className="textarea textarea-bordered bg-slate-950 resize-none" rows={8}/>
      </div>

      <div>
        <label className="text-md text-gray-400 mb-2">Image</label>
        <Input type="file" name="image" placeholder="Image URL" className="input text-md mt-2 h-16 p-4 bg-slate-950 border-none" />
      </div>

      <div>
        <label className="text-md text-gray-400 mb-2">Tags</label>
        <Input type="text" name="tags" placeholder="#Tags" className="input text-md mt-2 bg-slate-950 border-none" />
      </div>
      <button className="btn bg-gradient-to-r from-pink-500 to-pink-700 text-white">Create Post</button>
    </form>
  </section>
}