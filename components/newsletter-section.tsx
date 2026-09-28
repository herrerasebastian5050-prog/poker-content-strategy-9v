import { NewsletterForm } from './newsletter-form'

const perks = [
  'Weekend tournament results in two minutes',
  'One strategy lesson you can use at your next session',
  'The week ahead on the tournament calendar',
]

export function NewsletterSection({ source = 'homepage' }: { source?: string }) {
  return (
    <section
      id="newsletter"
      aria-labelledby={`newsletter-heading-${source}`}
      className="scroll-mt-4 rounded-sm bg-felt px-6 py-10 text-felt-foreground md:px-12 md:py-14"
    >
      <div className="flex flex-col gap-10 md:flex-row md:items-start">
        <div className="flex flex-col gap-4 md:w-1/2">
          <p className="text-xs font-semibold uppercase tracking-widest opacity-80">Free weekly newsletter</p>
          <h2
            id={`newsletter-heading-${source}`}
            className="font-serif text-3xl font-semibold leading-tight tracking-tight text-balance md:text-4xl"
          >
            The Friday Flop
          </h2>
          <ul className="flex flex-col gap-2 text-sm leading-relaxed opacity-90">
            {perks.map((perk) => (
              <li key={perk} className="flex gap-2">
                <span aria-hidden="true" className="text-primary-foreground">
                  {'♠'}
                </span>
                {perk}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/2">
          <NewsletterForm source={source} />
          <p className="mt-4 text-xs opacity-70">No spam. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  )
}
