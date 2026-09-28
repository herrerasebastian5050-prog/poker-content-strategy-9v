import { MapPin } from 'lucide-react'
import { formatDate, tournaments } from '@/lib/content'
import { SectionHeading } from './section-heading'

export function CalendarSection() {
  return (
    <section aria-labelledby="calendar" className="scroll-mt-4">
      <SectionHeading
        id="calendar"
        eyebrow="Tournament calendar"
        title="Upcoming major tournaments"
        description="The biggest live and online series on the schedule. Dates and guarantees are updated as organizers confirm them."
      />
      <ol className="flex flex-col divide-y divide-border border-y border-border">
        {tournaments.map((event) => (
          <li key={event.name} className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:gap-6">
            <div className="flex shrink-0 items-baseline gap-2 sm:w-28 sm:flex-col sm:gap-0">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                {formatDate(event.startDate, { month: 'short', day: undefined, year: undefined })}
              </span>
              <span className="font-serif text-3xl font-semibold leading-none">
                {formatDate(event.startDate, { month: undefined, day: 'numeric', year: undefined })}
              </span>
              <span className="text-xs text-muted-foreground">
                {'to '}
                {formatDate(event.endDate, { year: undefined })}
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <p className="text-xs text-muted-foreground">{event.series}</p>
              <h3 className="font-serif text-xl font-semibold leading-snug">{event.name}</h3>
              <p className="flex items-center gap-1 text-sm text-muted-foreground">
                <MapPin className="size-3.5" aria-hidden="true" />
                {event.location}
              </p>
            </div>
            <dl className="flex gap-6 text-sm sm:w-72 sm:justify-end">
              <div>
                <dt className="text-xs text-muted-foreground">Buy-in</dt>
                <dd className="font-mono font-medium">{event.buyIn}</dd>
              </div>
              <div>
                <dt className="text-xs text-muted-foreground">Guarantee</dt>
                <dd className="font-mono font-medium">{event.guarantee}</dd>
              </div>
            </dl>
            <span
              className={`w-fit shrink-0 rounded-sm px-2 py-0.5 text-xs font-medium ${
                event.format === 'Online' ? 'bg-secondary text-secondary-foreground' : 'bg-felt text-felt-foreground'
              }`}
            >
              {event.format}
            </span>
          </li>
        ))}
      </ol>
    </section>
  )
}
