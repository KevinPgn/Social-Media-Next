import { AllPosts } from "@/components/main/AllPosts";
import { getPosts } from "@/server/Actions";

export default async function Home() {
  const posts = await getPosts()
  
  return (
    <>
      <AllPosts posts={posts} />
    </>
  );
}
