import { auth } from "@/lib/auth"
import { Authentication } from "./Authentication"
import { InfoUser } from "./InfoUser"
import { Links } from "./Link"

export const Sidebar = async () => {
  const session = await auth()
  
  return <section className="w-[280px]">
    <div className="w-full flex flex-col justify-between p-3 h-full">

      <div className="flex justify-center flex-col items-center">
        <h2 className="text-center font-bold text-3xl mb-7">VIBE ZONE</h2>
        <img src={session?.user?.image ?? ""} alt="image user" className="w-16 h-16 rounded-full" />
        <span className="mb-2 mt-2">{session?.user?.name}</span>
        <InfoUser />
        <div className="w-full h-[1px] bg-slate-400 mt-10"></div>
      </div>

      <div className="flex flex-col justify-center w-full">
        <Links />
      </div>

      <div className="p-2">
        <div className="w-full h-[1px] bg-slate-400 mb-10"></div>
        <Authentication />
      </div>

    </div>
  </section>
}