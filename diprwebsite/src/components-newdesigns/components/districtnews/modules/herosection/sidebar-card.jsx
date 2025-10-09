import { Card, Thumb, Title, Excerpt, Meta, Dot } from "./sidebar-card.styles"

export default function SidebarCard({ title, excerpt, date, author, imageSrc, alt = "Story image" }) {
  // Limit excerpt to 8 words
  const truncatedExcerpt = excerpt.split(' ').slice(0, 8).join(' ') + (excerpt.split(' ').length > 8 ? '...' : '');
  
  return (
    <Card role="article" aria-label={title}>
      <Thumb src={imageSrc} alt={alt} />
      <Title className="text-pretty">{title}</Title>
      <Excerpt>{truncatedExcerpt}</Excerpt>
      <Meta>
        <time>{date}</time>
        <Dot aria-hidden="true" />
        <span>{author}</span>
      </Meta>
    </Card>
  )
}

