'use client'

import { useActionState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { subscribe, type SubscribeState } from '@/app/actions/subscribe'
import { Button } from '@/components/ui/button'

const initialState: SubscribeState = { status: 'idle', message: '' }

export function NewsletterForm({ source = 'homepage' }: { source?: 'homepage' | 'article' }) {
  const [state, action, pending] = useActionState(subscribe, initialState)

  if (state.status === 'success') {
    return (
      <p
        role="status"
        className="flex items-center gap-2 rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-3 text-sm"
      >
        <Check className="size-4 shrink-0" aria-hidden="true" />
        {state.message}
      </p>
    )
  }

  return (
    <form action={action} className="flex flex-col gap-2">
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
          aria-describedby={state.status === 'error' ? `email-error-${source}` : undefined}
          className="h-11 flex-1 rounded-lg border border-primary-foreground/25 bg-primary-foreground/5 px-4 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
        />
        <Button
          type="submit"
          disabled={pending}
          className="h-11 gap-2 bg-accent px-5 text-accent-foreground hover:bg-accent/90"
        >
          {pending ? 'Joining…' : 'Join free'}
          <ArrowRight className="size-4" aria-hidden="true" />
        </Button>
      </div>
      {state.status === 'error' && (
        <p id={`email-error-${source}`} role="alert" className="text-sm text-accent">
          {state.message}
        </p>
      )}
    </form>
  )
}
