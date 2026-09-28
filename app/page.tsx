import { getArticles, getCategories, getSiteStats } from '@/lib/articles'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Hero } from '@/components/hero'
import { MethodSection } from '@/components/method-section'
import { ArticleLibrary } from '@/components/article-library'
import { NewsletterSection } from '@/components/newsletter-section'

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  const { category } = await searchParams
  const [allArticles, categories, stats] = await Promise.all([
    getArticles(),
    getCategories(),
    getSiteStats(),
  ])

  const activeCategory = categories.some((c) => c.category === category) ? category : undefined
  const visible = activeCategory
    ? allArticles.filter((a) => a.category === activeCategory)
    : allArticles
  const featured = allArticles.find((a) => a.featured) ?? allArticles[0]

  return (
    <>
      <SiteHeader />
      <main>
        <Hero featured={featured} stats={{ ...stats, categories: categories.length }} />
        <MethodSection />
        <ArticleLibrary articles={visible} categories={categories} active={activeCategory} />
        <NewsletterSection />
      </main>
      <SiteFooter />
    </>
  )
}
