import { Card, Thumb, Title, Excerpt, Meta, Dot } from "./sidebar-card.styles"

export default function SidebarCard({ title, excerpt, date, author, imageSrc, alt = "Story image" }) {
  return (
    <Card role="article" aria-label={title}>
      <Thumb src={imageSrc} alt={alt} />
      <Title className="text-pretty">{title}</Title>
      <Excerpt>{excerpt}</Excerpt>
      <Meta>
        <time>{date}</time>
        <Dot aria-hidden="true" />
        <span>{author}</span>
      </Meta>
    </Card>
  )
}

