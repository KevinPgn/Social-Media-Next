"use client"
import { followUser } from "@/server/Actions"
import { Button } from "../ui/button"

export const BtnFollow = ({userid}: {userid: string}) => {
  return <>
    <Button variant="outline" onClick={() => followUser({userId: userid})} className="text-black mt-5">Follow</Button>
  </> 
}