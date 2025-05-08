"use client"
import CreateGameday from "@/app/dashboard/components/CreateGameday";
import NextGameday from "@/components/NextGameday";
export default function Dashboard() {

  return <div className="flex flex-col gap-4">
    <NextGameday />
    <CreateGameday />
  </div>
}
