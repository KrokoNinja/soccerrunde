import { v } from "convex/values";
import { query } from "./_generated/server";

export const get_players = query({
  args: {},
  handler: async (ctx) => {
    const players = await ctx.db.query("player").collect().then((players) => {
      return players.map((player) => {
        return {
          id: player._id,
          name: player.name,
          balance: player.balance,
        };
      });
    });
    return players;
  },
});

export const get_player_by_id = query({
  args: { id: v.id("player") },
  handler: async (ctx, args) => {
    const player = await ctx.db.get(args.id);
    return player;
  },
});