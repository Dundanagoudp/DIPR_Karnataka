import {
  Section,
  Header,
  Title,
  Grid,
  Card,
  ThumbWrap,
  Content,
  BadgeRow,
  Badge,
  TitleLink,
  Meta,
  DividerTitle,
} from "./RecommedNews.styles"

const items = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  title: 'Karnataka Wins the Prestigious "National e-Governance Award" for 2024',
  category: "Buzzlines",
  author: "AthleteAdmirer",
  timeAgo: "24 hours ago",
  href: "#",
  image: "/specilanews/recommeded.jpg",
}))

export default function Recommrednews() {
  return (
    <Section as="section" aria-labelledby="recommended-heading" role="region">
      <h2 id="recommended-heading" style={{ position: 'absolute', left: '-9999px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }}>
        Recommended and Most Read Articles
      </h2>

      <h3 id="recommended-articles-heading" style={{ position: 'absolute', left: '-9999px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }}>
        Recommended Articles
      </h3>
      
      <Grid role="list" aria-labelledby="recommended-articles-heading">
        {items.slice(0, 3).map((item) => (
          <Card 
            key={item.id} 
            as="article" 
            role="listitem"
            aria-labelledby={`rec-title-${item.id}`}
            tabIndex="0"
          >
            <ThumbWrap 
              as="a"
              href={item.href} 
              aria-label={`View full article: ${item.title}`}
            >
              <img 
                src={item.image || "/placeholder.svg"} 
                alt={`Featured image for: ${item.title}`}
                loading="lazy"
              />
            </ThumbWrap>
            <Content>
              <BadgeRow>
                <Badge aria-label={`Category: ${item.category}`}>
                  {/* simple red accent dot */}
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "currentColor",
                      display: "inline-block",
                    }}
                    aria-hidden="true"
                  />
                  {item.category}
                </Badge>
              </BadgeRow>

              <TitleLink 
                id={`rec-title-${item.id}`}
                as="a"
                href={item.href}
              >
                <h4 style={{ all: 'inherit' }}>{item.title}</h4>
              </TitleLink>

              <Meta>
                <span aria-label={`Author: ${item.author}`}>{item.author}</span>
                <span aria-hidden="true">•</span>
                <time dateTime="P1D" aria-label={`Posted ${item.timeAgo}`}>{item.timeAgo}</time>
              </Meta>
            </Content>
          </Card>
        ))}
      </Grid>

      <DividerTitle as="h3" id="most-read-heading">Most Readed</DividerTitle>

      <Grid role="list" aria-labelledby="most-read-heading">
        {items.slice(3).map((item) => (
          <Card 
            key={item.id} 
            as="article" 
            role="listitem"
            aria-labelledby={`read-title-${item.id}`}
            tabIndex="0"
          >
            <ThumbWrap 
              as="a"
              href={item.href} 
              aria-label={`View full article: ${item.title}`}
            >
              <img 
                src={item.image || "/placeholder.svg"} 
                alt={`Featured image for: ${item.title}`}
                loading="lazy"
              />
            </ThumbWrap>
            <Content>
              <BadgeRow>
                <Badge aria-label={`Category: ${item.category}`}>
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "currentColor",
                      display: "inline-block",
                    }}
                    aria-hidden="true"
                  />
                  {item.category}
                </Badge>
              </BadgeRow>

              <TitleLink 
                id={`read-title-${item.id}`}
                as="a"
                href={item.href}
              >
                <h4 style={{ all: 'inherit' }}>{item.title}</h4>
              </TitleLink>

              <Meta>
                <span aria-label={`Author: ${item.author}`}>{item.author}</span>
                <span aria-hidden="true">•</span>
                <time dateTime="P1D" aria-label={`Posted ${item.timeAgo}`}>{item.timeAgo}</time>
              </Meta>
            </Content>
          </Card>
        ))}
      </Grid>
    </Section>
  )
}
