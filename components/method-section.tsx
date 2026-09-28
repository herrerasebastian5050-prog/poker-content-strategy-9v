import { Calculator, Brain, Layers } from 'lucide-react'

const pillars = [
  {
    icon: Calculator,
    title: 'Math you can do at the table',
    body: 'Pot odds, equity, and defense frequencies reduced to quick mental shortcuts that hold up under pressure.',
  },
  {
    icon: Layers,
    title: 'Ranges over single hands',
    body: 'Stop guessing one hand. Learn to count combinations and weigh everything your opponent could hold.',
  },
  {
    icon: Brain,
    title: 'A mental game that lasts',
    body: 'Bankroll rules and tilt control, so variance never forces a winning player out of the game.',
  },
]

export function MethodSection() {
  return (
    <section id="method" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
      <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
        <div className="flex flex-col gap-3">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">The method</p>
          <h2 className="font-serif text-4xl leading-tight tracking-tight text-balance">
            Judge the decision, not the card that fell.
          </h2>
        </div>
        <ul className="grid gap-8 sm:grid-cols-3">
          {pillars.map(({ icon: Icon, title, body }) => (
            <li key={title} className="flex flex-col gap-3">
              <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="font-medium">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
