import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const create_gameday = mutation({
  args: {
    date: v.string(),
  },
  handler: async (ctx, args) => {
    const gameday = await ctx.db.insert("gameday", {
      date: args.date,
    });
    return gameday;
  },
});

export const set_players_for_gameday = mutation({
  args: {
    gameday_id: v.id("gameday"),
    players: v.array(v.id("player")),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.gameday_id, {
      players: args.players,
    });
  },
});

export const get_gameday_by_date = query({
  args: {
    date: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.query("gameday").filter(q => q.eq(q.field("date"), args.date)).collect();
  },
});

export const get_next_gameday = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("gameday").order("asc").filter(q => q.gt(q.field("date"), new Date().toISOString())).first();
  },
});
