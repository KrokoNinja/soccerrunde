"use client"
import CreateGameday from "@/app/dashboard/components/CreateGameday";
import NextGameday from "@/components/NextGameday";
import PlayerBox from "@/app/dashboard/components/PlayerBox";
export default function Dashboard() {

  return <div className="flex flex-col gap-4">
    <NextGameday />
    <div className="flex gap-4 flex-col sm:flex-row">
      <CreateGameday />
      <PlayerBox />
    </div>
  </div>
}
