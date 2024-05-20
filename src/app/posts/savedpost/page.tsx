import React from 'react'
import { SavedPost } from './SavedPost'
import { getSavedPosts } from '@/server/Actions'

const SavePostPage = async () => {
  const savedPosts = await getSavedPosts({})
  
  return (
    <>
      <SavedPost savedPosts={savedPosts.data}/>
    </>
  )
}

export default SavePostPage