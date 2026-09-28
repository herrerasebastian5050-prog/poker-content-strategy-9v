import Link from 'next/link'
import { BookOpen, Coins, Target } from 'lucide-react'
import { articles } from '@/lib/content'
import { ArticleMeta, CategoryTag } from './article-meta'
import { SectionHeading } from './section-heading'

const pillars = [
  { icon: BookOpen, title: 'Beginner tips', text: 'Hand rankings, position and the fundamentals that win.' },
  { icon: Target, title: 'Hand analysis', text: 'Street-by-street breakdowns of real decisions.' },
  { icon: Coins, title: 'Bankroll concepts', text: 'Protect your roll and survive the swings.' },
]

export function StrategySection() {
  const guides = articles.filter((article) => article.category === 'Strategy')

  return (
    <section aria-labelledby="strategy" className="scroll-mt-4">
      <SectionHeading
        id="strategy"
        eyebrow="Strategy"
        title="Play better, starting tonight"
        description="Practical guides written for real games — from your first home game to deep tournament runs."
      />

      <ul className="mb-10 grid gap-4 sm:grid-cols-3">
        {pillars.map(({ icon: Icon, title, text }) => (
          <li key={title} className="flex gap-3 rounded-sm border border-border bg-card p-4">
            <Icon className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
            <div>
              <p className="font-medium">{title}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="grid gap-8 md:grid-cols-3">
        {guides.map((article, index) => (
          <article key={article.slug} className="flex flex-col gap-3">
            <span className="font-serif text-5xl font-semibold text-border" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <CategoryTag article={article} />
            <h3 className="font-serif text-2xl font-semibold leading-snug text-balance">
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
