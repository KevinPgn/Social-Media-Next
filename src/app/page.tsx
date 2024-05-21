import { AllPosts } from "@/components/main/AllPosts";
import { auth } from "@/lib/auth";
import { getPosts } from "@/server/Actions";

export default async function Home() {
  const posts = await getPosts()
  const session = await auth()
  const user = session?.user?.id
  
  return (
    <section className="max-w-2xl mx-auto mt-10">
      <AllPosts posts={posts} user={user}/>
    </section>
  );
}
