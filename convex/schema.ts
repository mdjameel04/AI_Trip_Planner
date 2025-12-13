import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

// Creates the USerTable database structure

export default defineSchema({
  UserTable: defineTable({
    name: v.string(),
    imageUrl: v.string(),
    email: v.string(),
    SubscriptIcon: v.optional( v.string(),)
  }),

 TripDetails:defineTable({
  tripId: v.string(),
  tripDetail: v.any(),
  uid: v.id("UserTable")
  
 })

});
