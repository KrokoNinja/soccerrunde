import { useQuery } from "convex/react";
import Box from "./Box";
import { api } from "../../convex/_generated/api";

export default function NextGameday() {

  const nextGameday = useQuery(api.game.get_next_gameday);

  return <Box>
  <h2 className="text-lg font-bold">Nächster Spieltag</h2>
  {nextGameday ? <p>{nextGameday.date}</p> : <p>Noch nicht festgelegt</p>}
</Box>
}