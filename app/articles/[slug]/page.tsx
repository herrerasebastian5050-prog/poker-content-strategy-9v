import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { getArticleBySlug, getRelatedArticles } from '@/lib/articles'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ArticleCard } from '@/components/article-card'
import { NewsletterSection } from '@/components/newsletter-section'
import { LevelBadge, formatDate } from '@/components/article-meta'

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticleBySlug(slug)
  if (!article) return { title: 'Lesson not found' }
  return { title: article.title, description: article.excerpt }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)
  if (!article) notFound()

  const related = await getRelatedArticles(article.category, article.slug)
  const paragraphs = article.body.split(/\n\s*\n/).filter(Boolean)

  return (
    <>
      <SiteHeader />
      <main>
        <article className="mx-auto flex max-w-2xl flex-col gap-8 px-5 py-12 md:py-16">
          <Link
            href="/#library"
            className="inline-flex w-fit items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to the library
          </Link>

          <header className="flex flex-col gap-5 border-b border-border pb-8">
            <div className="flex items-center gap-3 text-xs">
              <span className="font-medium uppercase tracking-widest text-accent">{article.category}</span>
              <LevelBadge level={article.level} />
            </div>
            <h1 className="font-serif text-4xl leading-[1.1] tracking-tight text-balance md:text-5xl">
              {article.title}
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground text-pretty">{article.excerpt}</p>
            <p className="text-sm text-muted-foreground">
              <time dateTime={article.publishedAt.toISOString()}>{formatDate(article.publishedAt)}</time>
              {' · '}
              {article.readMinutes} min read
            </p>
          </header>

          <div className="flex flex-col gap-6 text-lg leading-relaxed">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? 'text-pretty first-letter:float-left first-letter:mr-2 first-letter:font-serif first-letter:text-6xl first-letter:leading-none first-letter:text-primary'
                    : 'text-pretty'
                }
              >
                {p}
              </p>
            ))}
          </div>
        </article>

        {related.length > 0 && (
          <section className="border-t border-border bg-secondary/40">
            <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-14">
              <h2 className="font-serif text-3xl tracking-tight">More on {article.category}</h2>
              <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((r) => (
                  <li key={r.id}>
                    <ArticleCard article={r} />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <NewsletterSection source="article" />
      </main>
      <SiteFooter />
    </>
  )
}
