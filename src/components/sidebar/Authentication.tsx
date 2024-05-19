"use client"
import { signIn, signOut, useSession } from "next-auth/react"
import {LogOut, LogIn} from 'lucide-react'

export const Authentication = () => {
  const { data: session } = useSession()
  
  if(!session){
    return <button className='btn btn-outline w-full flex items-center gap-2' onClick={() => signIn()}><LogIn /> Log In</button>
  }

  return <>
    <div className="flex items-center gap-2 mb-5 p-2 hover:bg-[#16213c] duration-75">
      <img src={session.user?.image ?? ""} alt="session image" className="w-10 h-10 rounded-full" />
      <span className="text-lg font-bold">Manage Account</span>
    </div>
    <button className='btn hover:bg-red-500 bg-red-700 text-white w-full flex items-center gap-2' onClick={() => signOut()}><LogOut /> Log Out</button>
  </> 
}