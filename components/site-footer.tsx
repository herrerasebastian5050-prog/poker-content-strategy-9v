import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>
          <span className="font-serif text-base text-foreground">The Felt Report</span> — poker strategy
          without the noise.
        </p>
        <p className="max-w-md text-pretty">
          For entertainment and education. Play responsibly and only with money you can afford to lose.{' '}
          <Link href="https://www.ncpgambling.org" className="underline underline-offset-4 hover:text-foreground">
            Get help
          </Link>
          .
        </p>
      </div>
    </footer>
  )
}
