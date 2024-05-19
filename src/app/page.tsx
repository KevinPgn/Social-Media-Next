import { Plus } from "lucide-react";
import { Search } from "lucide-react";

export default function Home() {
  return (
  <section className="flex p-3 w-full">
    <div className="w-full">
      <div className="flex items-center justify-between">
        <input type="text" className="input input-bordered" placeholder="Search a user, post..." />
        <button className="btn btn-accent flex items-center gap-2">
          <Plus size={24} />
          Create a post
        </button>
      </div>
    </div>
  </section>
  );
}
