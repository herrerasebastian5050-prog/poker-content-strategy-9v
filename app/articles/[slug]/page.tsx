import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArticleMeta, CategoryTag } from '@/components/article-meta'
import { NewsletterSection } from '@/components/newsletter-section'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { articles, getArticle } from '@/lib/content'

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: PageProps<'/articles/[slug]'>): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.dek,
    openGraph: { title: article.title, description: article.dek, images: article.image ? [article.image] : [] },
  }
}

export default async function ArticlePage({ params }: PageProps<'/articles/[slug]'>) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  const related = articles.filter((item) => item.slug !== article.slug).slice(0, 3)

  return (
    <>
      <SiteHeader />
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-4 py-10 md:px-6">
        <article className="mx-auto flex w-full max-w-2xl flex-col gap-5">
          <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
            {'← Back to front page'}
          </Link>
          <CategoryTag article={article} />
          <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-balance md:text-5xl">
            {article.title}
          </h1>
          <p className="text-xl leading-relaxed text-muted-foreground text-pretty">{article.dek}</p>
          <ArticleMeta article={article} />
          {article.image ? (
            <Image
              src={article.image || '/placeholder.svg'}
              alt=""
              width={1200}
              height={720}
              priority
              className="my-2 aspect-[16/10] w-full rounded-sm object-cover"
            />
          ) : null}
          <div className="flex flex-col gap-5 border-t border-border pt-6 text-lg leading-relaxed">
            {article.body.map((paragraph, index) => (
              <p
                key={index}
                className={
                  index === 0
                    ? 'first-letter:float-left first-letter:mr-2 first-letter:font-serif first-letter:text-6xl first-letter:font-semibold first-letter:leading-none first-letter:text-primary'
                    : undefined
                }
              >
                {paragraph}
              </p>
            ))}
          </div>
        </article>

        <NewsletterSection source={`article-${article.slug}`} />

        <section aria-labelledby="related">
          <h2 id="related" className="mb-6 border-t-2 border-foreground pt-4 font-serif text-2xl font-semibold">
            Keep reading
          </h2>
          <ul className="grid gap-8 md:grid-cols-3">
            {related.map((item) => (
              <li key={item.slug} className="flex flex-col gap-2">
                <CategoryTag article={item} />
                <Link
                  href={`/articles/${item.slug}`}
                  className="font-serif text-xl font-semibold leading-snug text-balance hover:text-primary"
                >
                  {item.title}
                </Link>
                <ArticleMeta article={item} />
              </li>
            ))}
          </ul>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
