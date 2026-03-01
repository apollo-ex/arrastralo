import { pgTable, uuid, text, timestamp, jsonb } from 'drizzle-orm/pg-core'
export const submissions = pgTable('submissions', {
  id: uuid('id').defaultRandom().primaryKey(),
  role: text('role').notNull(), email: text('email').notNull(), phone: text('phone').notNull(), city: text('city').notNull(),
  port: text('port'), deliveryCity: text('delivery_city'), haulDates: jsonb('haul_dates').$type<string[]>(),
  emptyReturnTo: text('empty_return_to'), hazardousCargo: text('hazardous_cargo'),
  fleetBaseCity: text('fleet_base_city'), originStates: jsonb('origin_states').$type<string[]>(), destinationStates: jsonb('destination_states').$type<string[]>(),
  paymentTerms: text('payment_terms'), pricingMode: text('pricing_mode'), createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull()
})
