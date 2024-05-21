//nombre de posts, nombre de followers, nombre de following
import { getFollowers } from "@/server/Actions"
import { getFollowing } from "@/server/Actions"


export const InfoUser = async () => {
  const followers = await getFollowers({})
  const following = await getFollowing({})
  console.log(followers)
  return <div className="flex gap-5 items-center justify-center w-full">
    <div className="flex items-center flex-col gap-2">
      <span>0</span>
      <span className="text-sm text-gray-500">Posts</span>
    </div>
    <div className="flex items-center flex-col gap-2">
      <span>{followers.data?.length}</span>
      <span className="text-sm text-gray-500">Followers</span>
    </div>
    <div className="flex items-center flex-col gap-2">
      <span>
        {following.data?.length}
      </span>
      <span className="text-sm text-gray-500">Following</span>
    </div>
  </div>
}