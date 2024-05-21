import React from 'react'
import { AllUsers } from './AllUsers'
import { getAllUsers } from '@/server/Actions'

const PeoplePage = async () => {
  const users = await getAllUsers()

  return (
    <AllUsers users={users}/>
  )
}

export default PeoplePage