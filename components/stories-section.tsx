import Image from 'next/image'
import Link from 'next/link'
import { articles } from '@/lib/content'
import { ArticleMeta, CategoryTag } from './article-meta'
import { SectionHeading } from './section-heading'

const imageAlt: Record<string, string> = {
  'hero-call-river-analysis': 'A dealer turns the river card as chips sit all-in on the felt',
  'the-dealer-who-became-a-champion': 'A player seen from behind at a tournament table in a casino ballroom',
}

export function StoriesSection() {
  const features = articles.filter(
    (article) => article.category === 'Hand Analysis' || article.category === 'Player Story',
  )

  return (
    <section aria-labelledby="stories" className="scroll-mt-4">
      <SectionHeading
        id="stories"
        eyebrow="Hands & Stories"
        title="The hands people talk about — and the players behind them"
      />
      <div className="grid gap-10 md:grid-cols-2">
        {features.map((article) => (
          <article key={article.slug} className="group flex flex-col gap-4">
            {article.image ? (
              <Link href={`/articles/${article.slug}`} className="overflow-hidden rounded-sm">
                <Image
                  src={article.image || '/placeholder.svg'}
                  alt={imageAlt[article.slug] ?? ''}
                  width={900}
                  height={600}
                  className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </Link>
            ) : null}
            <CategoryTag article={article} />
            <h3 className="font-serif text-2xl font-semibold leading-snug text-balance md:text-3xl">
              <Link href={`/articles/${article.slug}`} className="hover:text-primary">
                {article.title}
              </Link>
            </h3>
            <p className="leading-relaxed text-muted-foreground">{article.dek}</p>
            <ArticleMeta article={article} />
          </article>
        ))}
      </div>
    </section>
  )
}
