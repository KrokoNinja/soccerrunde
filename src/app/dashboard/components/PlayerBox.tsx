import Box from "@/components/Box";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import AddPlayerDrawer from "./AddPlayerDrawer";

export default function PlayerBox() {
  return <Box>
    <h2 className="text-lg font-bold">Spieler</h2>
    <div className="flex gap-8 items-center justify-between sm:justify-start">
      <p className="text-4xl sm:text-3xl font-bold">10</p>
      <div className="flex flex-col gap-2">
        <AddPlayerDrawer />
        <Link href="/dashboard/players" className={cn(buttonVariants())}>Alle Spieler anzeigen</Link>
      </div>
    </div>
  </Box>
}