"use client"
import { useQuery } from "convex/react"
import { api } from "../../../convex/_generated/api";
export default function Dashboard() {

  const field_price = useQuery(api.info.get_field_price);
  
  return <div>
    <div>Dashboard: {field_price}</div>
  </div>
}
