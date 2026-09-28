import { NewsletterForm } from '@/components/newsletter-form'

export function NewsletterSection({ source = 'homepage' }: { source?: 'homepage' | 'article' }) {
  return (
    <section id="newsletter" className="scroll-mt-20 px-5 py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 rounded-2xl bg-primary p-8 text-primary-foreground md:flex-row md:items-center md:justify-between md:p-12">
        <div className="flex max-w-lg flex-col gap-3">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">The Sunday hand</p>
          <h2 className="font-serif text-3xl leading-tight text-balance md:text-4xl">
            One hand, broken down street by street. Every week.
          </h2>
          <p className="text-sm leading-relaxed text-primary-foreground/75">
            Free. No spam, no affiliate links, unsubscribe any time.
          </p>
        </div>
        <div className="w-full md:max-w-md">
          <NewsletterForm source={source} />
        </div>
      </div>
    </section>
  )
}
