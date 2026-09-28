import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t-2 border-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-start md:justify-between md:px-6">
        <div className="flex flex-col gap-2">
          <Link href="/" className="font-serif text-2xl font-semibold">
            The River Report
          </Link>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Independent poker news, strategy and tournament coverage.
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/#news" className="hover:text-primary">News</Link>
          <Link href="/#strategy" className="hover:text-primary">Strategy</Link>
          <Link href="/#stories" className="hover:text-primary">Hands & Stories</Link>
          <Link href="/#calendar" className="hover:text-primary">Calendar</Link>
          <Link href="/#stats" className="hover:text-primary">Stats</Link>
          <Link href="/#newsletter" className="hover:text-primary">Newsletter</Link>
        </nav>
      </div>
      <p className="mx-auto max-w-6xl px-4 pb-8 text-xs leading-relaxed text-muted-foreground md:px-6">
        Please play responsibly. Poker involves risk — only play with money you can afford to lose. 18+/21+ where
        applicable.
      </p>
    </footer>
  )
}
