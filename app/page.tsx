import { CalendarSection } from '@/components/calendar-section'
import { NewsSection } from '@/components/news-section'
import { NewsletterSection } from '@/components/newsletter-section'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { StatsSection } from '@/components/stats-section'
import { StoriesSection } from '@/components/stories-section'
import { StrategySection } from '@/components/strategy-section'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto flex max-w-6xl flex-col gap-20 px-4 py-10 md:px-6">
        <NewsSection />
        <StrategySection />
        <StoriesSection />
        <NewsletterSection />
        <CalendarSection />
        <StatsSection />
      </main>
      <SiteFooter />
    </>
  )
}
