import Link from 'next/link'
import type { Article } from '@/lib/db/schema'
import { ArticleCard } from '@/components/article-card'
import { cn } from '@/lib/utils'

type LibraryProps = {
  articles: Article[]
  categories: { category: string; total: number }[]
  active?: string
}

export function ArticleLibrary({ articles, categories, active }: LibraryProps) {
  const totalAll = categories.reduce((sum, c) => sum + c.total, 0)

  return (
    <section id="library" className="scroll-mt-20 border-t border-border bg-secondary/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-16">
        <div className="flex flex-col gap-2">
          <h2 className="font-serif text-4xl tracking-tight">The library</h2>
          <p className="text-muted-foreground">Every lesson, newest first. Filter by topic.</p>
        </div>

        <nav aria-label="Filter by topic" className="-mx-5 overflow-x-auto px-5">
          <ul className="flex gap-2">
            <FilterPill href="/#library" label="All" count={totalAll} active={!active} />
            {categories.map((c) => (
              <FilterPill
                key={c.category}
                href={`/?category=${encodeURIComponent(c.category)}#library`}
                label={c.category}
                count={c.total}
                active={active === c.category}
              />
            ))}
          </ul>
        </nav>

        {articles.length > 0 ? (
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <li key={article.id}>
                <ArticleCard article={article} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="rounded-xl border border-dashed border-border p-10 text-center text-muted-foreground">
            No lessons in this topic yet.
          </p>
        )}
      </div>
    </section>
  )
}

function FilterPill({
  href,
  label,
  count,
  active,
}: {
  href: string
  label: string
  count: number
  active: boolean
}) {
  return (
    <li className="shrink-0">
      <Link
        href={href}
        scroll={false}
        aria-current={active ? 'page' : undefined}
        className={cn(
          'inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm transition-colors',
          active
            ? 'border-primary bg-primary text-primary-foreground'
            : 'border-border bg-background hover:border-primary/40',
        )}
      >
        {label}
        <span className={cn('text-xs tabular-nums', active ? 'opacity-70' : 'text-muted-foreground')}>
          {count}
        </span>
      </Link>
    </li>
  )
}
