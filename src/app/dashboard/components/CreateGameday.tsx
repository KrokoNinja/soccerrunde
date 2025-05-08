"use client"
import { useState } from "react";
import Box from "../../../components/Box";
import DatePicker from "./DatePicker";
import { Button } from "../../../components/ui/button";
import { useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
export default function CreateGameday() {


  const [date, setDate] = useState<Date | undefined>(undefined)
  const [error, setError] = useState<string | undefined>(undefined)
  const create_gameday = useMutation(api.game.create_gameday);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
    if (date) {
      const dateString = date.toLocaleDateString();
      const res = create_gameday({ date: dateString });
      res.then(() => {
        setDate(undefined);
      }, (error) => {
        setError(error.message);
      });
    }
  }


  return <Box className="w-fit">
    <h2 className="text-lg font-bold pb-2">Spieltag erstellen</h2>
    <form className="flex flex-col gap-2 items-start pb-2" onSubmit={handleSubmit}>
      <DatePicker date={date} setDate={setDate} />
      <Button type="submit">Erstellen</Button>
    </form>
    {error && <p className="text-red-500">{error}</p>}
  </Box>;
}