import { v } from "convex/values";
import { query } from "./_generated/server";

export const get_players = query({
  args: {},
  handler: async (ctx) => {
    const players = await ctx.db.query("player").collect();
    return players;
  },
});

export const get_player_by_name = query({
  args: { name: v.string() },
  handler: async (ctx, args) => {
    const player = await ctx.db.query("player").filter((q) => q.eq(q.field("name"), args.name)).first();
    return player;
  },
});