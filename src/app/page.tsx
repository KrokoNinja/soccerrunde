"use client";
import AgGrid from "@/components/AgGrid";
import NextGameday from "@/components/NextGameday";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center pb-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full">
        <NextGameday />
        <AgGrid />
      </main>
    </div>
  );
}
