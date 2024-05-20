import { AllPosts } from "@/components/main/AllPosts";
import { getPosts } from "@/server/Actions";

export default async function Home() {
  const posts = await getPosts()
  
  return (
    <section className="max-w-2xl mx-auto mt-10">
      <AllPosts posts={posts} />
    </section>
  );
}
