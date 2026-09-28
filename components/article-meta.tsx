import { formatDate, type Article } from '@/lib/content'

export function ArticleMeta({ article }: { article: Article }) {
  return (
    <p className="text-xs text-muted-foreground">
      <span className="font-medium text-foreground">{article.author}</span>
      <span aria-hidden="true"> · </span>
      <time dateTime={article.date}>{formatDate(article.date)}</time>
      <span aria-hidden="true"> · </span>
      {article.readTime}
    </p>
  )
}

export function CategoryTag({ article }: { article: Article }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-widest text-primary">
      {article.category}
      {article.level ? <span className="text-muted-foreground"> · {article.level}</span> : null}
    </p>
  )
}
