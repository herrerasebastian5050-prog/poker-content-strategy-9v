import { boolean, integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'

export const articles = pgTable('articles', {
  id: serial('id').primaryKey(),
  slug: text('slug').notNull().unique(),
  title: text('title').notNull(),
  excerpt: text('excerpt').notNull(),
  body: text('body').notNull(),
  category: text('category').notNull(),
  level: text('level').notNull(),
  readMinutes: integer('readMinutes').notNull(),
  featured: boolean('featured').notNull().default(false),
  publishedAt: timestamp('publishedAt', { withTimezone: true }).notNull().defaultNow(),
})

export const newsletterSubscribers = pgTable('newsletter_subscribers', {
  id: serial('id').primaryKey(),
  email: text('email').notNull().unique(),
  source: text('source'),
  interests: text('interests').array(),
  createdAt: timestamp('createdAt', { withTimezone: true }).defaultNow(),
})

export type Article = typeof articles.$inferSelect
