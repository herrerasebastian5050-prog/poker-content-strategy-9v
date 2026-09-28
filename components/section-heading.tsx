type SectionHeadingProps = {
  id: string
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeading({ id, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-8 flex flex-col gap-2 border-t-2 border-foreground pt-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>
      <h2 id={id} className="font-serif text-3xl font-semibold tracking-tight text-balance md:text-4xl">
        {title}
      </h2>
      {description ? <p className="max-w-2xl leading-relaxed text-muted-foreground">{description}</p> : null}
    </div>
  )
}
