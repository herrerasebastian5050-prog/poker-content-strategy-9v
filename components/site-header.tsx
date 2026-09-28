import Link from 'next/link'

const navItems = [
  { href: '/#news', label: 'News' },
  { href: '/#strategy', label: 'Strategy' },
  { href: '/#stories', label: 'Hands & Stories' },
  { href: '/#calendar', label: 'Calendar' },
  { href: '/#stats', label: 'Stats' },
]

export function SiteHeader() {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <header className="border-b-2 border-foreground">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 text-xs text-muted-foreground md:px-6">
        <span>{today}</span>
        <span className="hidden sm:inline">Independent poker coverage since 2026</span>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-1 border-t border-border px-4 py-5 md:px-6 md:py-7">
        <Link href="/" className="font-serif text-4xl font-semibold tracking-tight text-balance md:text-6xl">
          The River Report
        </Link>
        <p className="text-sm text-muted-foreground">News, strategy and the stories behind the chips</p>
      </div>
      <nav aria-label="Primary" className="border-t border-border">
        <div className="mx-auto flex max-w-6xl items-center gap-1 overflow-x-auto px-4 md:justify-center md:px-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 px-3 py-3 text-sm font-medium transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#newsletter"
            className="ml-auto shrink-0 rounded-sm bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 md:ml-4"
          >
            Subscribe
          </Link>
        </div>
      </nav>
    </header>
  )
}
