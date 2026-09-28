import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Article } from '@/lib/db/schema'
import { LevelBadge, formatDate } from '@/components/article-meta'

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="group relative flex h-full flex-col gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
      <div className="flex items-center justify-between gap-3 text-xs text-muted-foreground">
        <span className="font-medium uppercase tracking-widest">{article.category}</span>
        <LevelBadge level={article.level} />
      </div>
      <h3 className="font-serif text-2xl leading-tight text-balance">
        <Link href={`/articles/${article.slug}`} className="after:absolute after:inset-0">
          {article.title}
        </Link>
      </h3>
      <p className="flex-1 text-sm leading-relaxed text-muted-foreground text-pretty">{article.excerpt}</p>
      <div className="flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
        <span>
          <time dateTime={article.publishedAt.toISOString()}>{formatDate(article.publishedAt)}</time>
          {' · '}
          {article.readMinutes} min read
        </span>
        <ArrowUpRight
          className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
          aria-hidden="true"
        />
      </div>
    </article>
  )
}
