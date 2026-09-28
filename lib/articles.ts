import 'server-only'
import { and, count, desc, eq, ne } from 'drizzle-orm'
import { db } from '@/lib/db'
import { articles, newsletterSubscribers } from '@/lib/db/schema'

export async function getArticles(category?: string) {
  return db
    .select()
    .from(articles)
    .where(category ? eq(articles.category, category) : undefined)
    .orderBy(desc(articles.publishedAt))
}

export async function getCategories() {
  const rows = await db
    .select({ category: articles.category, total: count() })
    .from(articles)
    .groupBy(articles.category)
    .orderBy(articles.category)
  return rows
}

export async function getArticleBySlug(slug: string) {
  const [article] = await db.select().from(articles).where(eq(articles.slug, slug)).limit(1)
  return article ?? null
}

export async function getRelatedArticles(category: string, excludeSlug: string) {
  return db
    .select()
    .from(articles)
    .where(and(eq(articles.category, category), ne(articles.slug, excludeSlug)))
    .orderBy(desc(articles.publishedAt))
    .limit(3)
}

export async function getSiteStats() {
  const [[articleStats], [subscriberStats]] = await Promise.all([
    db.select({ total: count() }).from(articles),
    db.select({ total: count() }).from(newsletterSubscribers),
  ])
  return { articles: articleStats.total, subscribers: subscriberStats.total }
}
