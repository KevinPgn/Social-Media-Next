import React from 'react'
import { SavedPost } from './SavedPost'
import { getSavedPosts } from '@/server/Actions'
import Auth from '@/lib/middleware'

const SavePostPage = async () => {
  const savedPosts = await getSavedPosts({})
  
  return (
    <Auth>
    <section className="max-w-2xl mx-auto mt-10">
        <SavedPost savedPosts={savedPosts.data}/>
    </section>
    </Auth>
  )
}

export default SavePostPage