import React from 'react'
import { AllLikedPost } from './AllLikedPost'
import Auth from '@/lib/middleware'
import { getLikedPosts } from '@/server/Actions'

const LikedPostPage = async () => {
  const postsLiked = await getLikedPosts({})
  
  return (
    <Auth>
    <section className='max-w-3xl mx-auto mt-10'>
        <AllLikedPost postsLiked={postsLiked.data}/>
    </section>
    </Auth>
  )
}

export default LikedPostPage