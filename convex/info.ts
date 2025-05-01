import { query } from "./_generated/server";

export const get_field_price = query({
  args: {},
  handler: async (ctx) => {
    const field_price = await ctx.db.query("info").first();
    return field_price?.field_price;
  },
});

export const get_guest_price = query({
  args: {},
  handler: async (ctx) => {
    const guest_price = await ctx.db.query("info").first();
    return guest_price?.guest_price;
  },
});

export const get_player_price = query({
  args: {},
  handler: async (ctx) => {
    const player_price = await ctx.db.query("info").first();
    return player_price?.player_price;
  },
});
