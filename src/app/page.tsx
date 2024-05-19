import { BtnCreatePost } from "@/components/Button/BtnCreatePost";
import { SearchBar } from "@/components/Search/SearchBar";

export default function Home() {
  return (
  <section className="flex p-3 w-full">
    <div className="w-full">
      <div className="flex items-center justify-around">
        <SearchBar />
        <BtnCreatePost />
      </div>
    </div>
  </section>
  );
}
