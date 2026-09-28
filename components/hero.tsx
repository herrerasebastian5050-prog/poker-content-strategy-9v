import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Article } from '@/lib/db/schema'

type HeroProps = {
  featured: Article | undefined
  stats: { articles: number; subscribers: number; categories: number }
}

export function Hero({ featured, stats }: HeroProps) {
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-12 md:grid-cols-2 md:items-center md:pt-20">
      <div className="flex flex-col gap-6">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
          No-limit Hold&apos;em strategy
        </p>
        <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-balance md:text-6xl">
          Make better decisions. The results will follow.
        </h1>
        <p className="max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
          Clear, math-first lessons on odds, ranges, and the mental game — written for players who want to
          understand why a play is right, not just memorize it.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="#library"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Start reading
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <Link
            href="#newsletter"
            className="inline-flex h-11 items-center rounded-full border border-border px-6 text-sm font-medium hover:bg-secondary"
          >
            Get the weekly hand
          </Link>
        </div>
        <dl className="mt-4 grid max-w-md grid-cols-3 gap-4 border-t border-border pt-6">
          <Stat label="Lessons" value={stats.articles} />
          <Stat label="Topics" value={stats.categories} />
          <Stat label="Readers" value={stats.subscribers} />
        </dl>
      </div>

      <div className="relative">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-primary">
          <Image
            src="/images/hero-felt.png"
            alt="Poker chips and two face-down cards on green felt"
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        {featured && (
          <Link
            href={`/articles/${featured.slug}`}
            className="absolute inset-x-4 bottom-4 flex flex-col gap-1 rounded-xl bg-background/95 p-5 shadow-lg backdrop-blur transition-transform hover:-translate-y-0.5 md:-left-8 md:right-auto md:max-w-sm"
          >
            <span className="text-xs font-medium uppercase tracking-widest text-accent">Featured lesson</span>
            <span className="font-serif text-xl leading-snug text-balance">{featured.title}</span>
            <span className="text-xs text-muted-foreground">
              {featured.category} · {featured.readMinutes} min read
            </span>
          </Link>
        )}
      </div>
    </section>
  )
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex flex-col gap-1">
      <dt className="text-xs text-muted-foreground">{label}</dt>
      <dd className="font-serif text-3xl tabular-nums">{value.toLocaleString('en-US')}</dd>
    </div>
  )
}
