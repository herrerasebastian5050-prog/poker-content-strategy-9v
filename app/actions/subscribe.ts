'use server'

import { revalidatePath } from 'next/cache'
import { z } from 'zod'
import { db } from '@/lib/db'
import { newsletterSubscribers } from '@/lib/db/schema'

const schema = z.object({
  email: z.email().max(254).transform((v) => v.trim().toLowerCase()),
  source: z.enum(['homepage', 'article']).default('homepage'),
})

export type SubscribeState = { status: 'idle' | 'success' | 'error'; message: string }

export async function subscribe(
  _prev: SubscribeState,
  formData: FormData,
): Promise<SubscribeState> {
  const parsed = schema.safeParse({
    email: formData.get('email'),
    source: formData.get('source') ?? undefined,
  })

  if (!parsed.success) {
    return { status: 'error', message: 'Please enter a valid email address.' }
  }

  try {
    const inserted = await db
      .insert(newsletterSubscribers)
      .values({ email: parsed.data.email, source: parsed.data.source, interests: [] })
      .onConflictDoNothing({ target: newsletterSubscribers.email })
      .returning({ id: newsletterSubscribers.id })

    revalidatePath('/')

    if (inserted.length === 0) {
      return { status: 'success', message: "You're already on the list. See you Sunday." }
    }
    return { status: 'success', message: "You're in. The first issue lands this Sunday." }
  } catch {
    return { status: 'error', message: 'Something went wrong. Please try again.' }
  }
}
