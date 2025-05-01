"use client";
import AgGrid from "@/components/AgGrid";
import { useQuery } from "convex/react";
import { api } from "@/../convex/_generated/api";

export default function Home() {
  const nextGameday = useQuery(api.game.get_next_gameday);

  return (
    <div className="grid items-center justify-items-center p-8 pb-20 sm:p-12 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full">
        <div>
          <h2>Nächster Spieltag</h2>
          {nextGameday ? <p>{nextGameday.date}</p> : <p>Noch nicht festgelegt</p>}
        </div>
        <AgGrid />
      </main>
    </div>
  );
}
