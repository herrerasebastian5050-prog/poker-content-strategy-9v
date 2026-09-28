import { cn } from '@/lib/utils'

const levelStyles: Record<string, string> = {
  Beginner: 'bg-secondary text-secondary-foreground',
  Intermediate: 'bg-primary/10 text-primary',
  Advanced: 'bg-accent/15 text-accent',
}

export function LevelBadge({ level, className }: { level: string; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        levelStyles[level] ?? 'bg-muted text-muted-foreground',
        className,
      )}
    >
      {level}
    </span>
  )
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(date)
}
