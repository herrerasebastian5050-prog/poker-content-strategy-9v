import Image from 'next/image'
import Link from 'next/link'
import { articles } from '@/lib/content'
import { ArticleMeta, CategoryTag } from './article-meta'

export function NewsSection() {
  const news = articles.filter((article) => article.category === 'News')
  const [lead, ...rest] = news

  return (
    <section aria-labelledby="news" className="scroll-mt-4">
      <h2 id="news" className="sr-only">
        Latest poker news
      </h2>
      <div className="flex flex-col gap-10 lg:flex-row">
        <article className="flex flex-col gap-4 lg:w-2/3">
          {lead.image ? (
            <Link href={`/articles/${lead.slug}`} className="overflow-hidden rounded-sm">
              <Image
                src={lead.image || '/placeholder.svg'}
                alt="A poker final table under stage lights with chip stacks on green felt"
                width={1200}
                height={720}
                priority
                className="aspect-[16/10] w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </Link>
          ) : null}
          <CategoryTag article={lead} />
          <h3 className="font-serif text-3xl font-semibold leading-tight tracking-tight text-balance md:text-5xl">
            <Link href={`/articles/${lead.slug}`} className="hover:text-primary">
              {lead.title}
            </Link>
          </h3>
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">{lead.dek}</p>
          <ArticleMeta article={lead} />
        </article>

        <div className="flex flex-col lg:w-1/3 lg:border-l lg:border-border lg:pl-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest">Latest headlines</p>
          <ul className="flex flex-col divide-y divide-border">
            {rest.map((article) => (
              <li key={article.slug} className="flex flex-col gap-2 py-5">
                <h3 className="font-serif text-xl font-semibold leading-snug text-balance">
                  <Link href={`/articles/${article.slug}`} className="hover:text-primary">
                    {article.title}
                  </Link>
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{article.dek}</p>
                <ArticleMeta article={article} />
              </li>
            ))}
          </ul>
          <div className="mt-4 rounded-sm bg-felt p-5 text-felt-foreground">
            <p className="text-xs font-semibold uppercase tracking-widest opacity-80">Results desk</p>
            <p className="mt-2 font-serif text-lg leading-snug">
              Coastal Championship: Okafor wins from 9th in chips at the final table.
            </p>
            <Link
              href="/articles/hero-call-river-analysis"
              className="mt-3 inline-block text-sm font-medium underline underline-offset-4"
            >
              See the deciding hand
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
