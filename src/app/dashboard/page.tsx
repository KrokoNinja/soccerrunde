"use client"
import { useQuery } from "convex/react"
import { api } from "../../../convex/_generated/api";
import CreateGameday from "@/components/CreateGameday";
export default function Dashboard() {

  const field_price = useQuery(api.info.get_field_price);
  
  return <div>
    <div>Dashboard: {field_price}</div>
    <CreateGameday />
  </div>
}
