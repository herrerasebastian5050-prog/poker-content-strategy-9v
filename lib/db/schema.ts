import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'

export const newsletterSubscribers = pgTable('newsletter_subscribers', {
  id: serial('id').primaryKey(),
  email: text('email').notNull().unique(),
  interests: text('interests').array().notNull().default([]),
  source: text('source'),
  createdAt: timestamp('createdAt', { withTimezone: true }).notNull().defaultNow(),
})
