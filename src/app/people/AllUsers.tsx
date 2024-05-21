import { BtnFollow } from "@/components/Button/BtnFollow"

export const AllUsers = ({users}: any) => {
  return <section className="max-w-3xl mx-auto mt-10">
    <section className="flex gap-10">
      {users.map((user: any) => (
        <div key={user.id} className="w-fit flex flex-col justify-center items-center rounded-md">
            <img src={user.image} alt="author image" className="w-14 h-14 rounded-full" />
            <h3 className="text-gray-500 text-sm font-bold mt-2">{user.name}</h3>
            <BtnFollow userid={user.id} />
        </div>
      ))}
    </section>
  </section>
}