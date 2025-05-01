import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  info: defineTable({
    field_price: v.float64(),
    guest_price: v.float64(),
    player_price: v.float64(),
  }),
  player: defineTable({
    balance: v.float64(),
    name: v.string(),
    status: v.string(),
  }).index("by_name", ["name"]),
  gameday: defineTable({
    date: v.string(),
    players: v.optional(v.array(v.id("player"))),
  }).index("by_date", ["date"]),
});