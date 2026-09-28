'use client'

import { useActionState } from 'react'
import { subscribeToNewsletter, type NewsletterState } from '@/app/actions/newsletter'

const interests = [
  { value: 'news', label: 'News & results' },
  { value: 'strategy', label: 'Strategy' },
  { value: 'tournaments', label: 'Tournament calendar' },
]

const initialState: NewsletterState = { status: 'idle', message: '' }

export function NewsletterForm({ source = 'homepage' }: { source?: string }) {
  const [state, formAction, isPending] = useActionState(subscribeToNewsletter, initialState)

  if (state.status === 'success') {
    return (
      <p role="status" className="rounded-sm bg-felt-foreground/10 p-4 font-serif text-xl">
        {state.message}
      </p>
    )
  }

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <input type="hidden" name="source" value={source} />
      <div className="flex flex-col gap-2 sm:flex-row">
        <label htmlFor={`email-${source}`} className="sr-only">
          Email address
        </label>
        <input
          id={`email-${source}`}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          aria-invalid={state.status === 'error'}
          aria-describedby={state.status === 'error' ? `error-${source}` : undefined}
          className="h-11 flex-1 rounded-sm border border-felt-foreground/30 bg-felt-foreground px-3 text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-felt-foreground"
        />
        <button
          type="submit"
          disabled={isPending}
          className="h-11 rounded-sm bg-primary px-5 font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {isPending ? 'Subscribing...' : 'Subscribe free'}
        </button>
      </div>
      <fieldset className="flex flex-wrap gap-x-5 gap-y-2">
        <legend className="mb-2 text-xs uppercase tracking-widest opacity-80">I want to hear about</legend>
        {interests.map((interest) => (
          <label key={interest.value} className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              name="interests"
              value={interest.value}
              defaultChecked
              className="size-4 accent-primary"
            />
            {interest.label}
          </label>
        ))}
      </fieldset>
      {state.status === 'error' ? (
        <p id={`error-${source}`} role="alert" className="text-sm font-medium">
          {state.message}
        </p>
      ) : null}
    </form>
  )
}
