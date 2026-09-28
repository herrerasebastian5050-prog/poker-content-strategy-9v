'use server'

import { db } from '@/lib/db'
import { newsletterSubscribers } from '@/lib/db/schema'
import { sql } from 'drizzle-orm'

export type NewsletterState = {
  status: 'idle' | 'success' | 'error'
  message: string
}

const ALLOWED_INTERESTS = new Set(['news', 'strategy', 'tournaments'])
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export async function subscribeToNewsletter(
  _prev: NewsletterState,
  formData: FormData,
): Promise<NewsletterState> {
  const email = String(formData.get('email') ?? '').trim().toLowerCase()
  const source = String(formData.get('source') ?? 'site').slice(0, 40)
  const interests = formData
    .getAll('interests')
    .map(String)
    .filter((interest) => ALLOWED_INTERESTS.has(interest))

  if (!email || email.length > 254 || !EMAIL_PATTERN.test(email)) {
    return { status: 'error', message: 'Please enter a valid email address.' }
  }

  try {
    await db
      .insert(newsletterSubscribers)
      .values({ email, source, interests: interests.length ? interests : ['news', 'strategy', 'tournaments'] })
      .onConflictDoUpdate({
        target: newsletterSubscribers.email,
        set: { interests: sql`excluded.interests` },
      })

    return { status: 'success', message: "You're in. The next issue lands Friday morning." }
  } catch (error) {
    console.error('Newsletter signup failed', error)
    return { status: 'error', message: 'Something went wrong. Please try again.' }
  }
}
