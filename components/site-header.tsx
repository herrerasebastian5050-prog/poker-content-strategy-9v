import Link from 'next/link'
import { Spade } from 'lucide-react'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2" aria-label="The Felt Report home">
          <span className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Spade className="size-4" aria-hidden="true" />
          </span>
          <span className="font-serif text-xl tracking-tight">The Felt Report</span>
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-5 text-sm">
          <Link href="/#library" className="hidden text-muted-foreground hover:text-foreground sm:inline">
            Library
          </Link>
          <Link href="/#method" className="hidden text-muted-foreground hover:text-foreground sm:inline">
            Method
          </Link>
          <Link
            href="/#newsletter"
            className="rounded-full bg-primary px-4 py-2 font-medium text-primary-foreground hover:bg-primary/90"
          >
            Subscribe
          </Link>
        </nav>
      </div>
    </header>
  )
}
