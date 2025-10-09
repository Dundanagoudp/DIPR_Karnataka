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
    <Section aria-labelledby="recommended-heading">
 
      <Grid>
        {items.slice(0, 3).map((item) => (
          <Card key={item.id}>
            <ThumbWrap href={item.href} aria-label={item.title}>
              <img src={item.image || "/placeholder.svg"} alt="People training at the gym" />
            </ThumbWrap>
            <Content>
              <BadgeRow>
                <Badge>
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

              <TitleLink href={item.href}>{item.title}</TitleLink>

              <Meta>
                <span>{item.author}</span>
                <span aria-hidden="true">•</span>
                <time dateTime="P1D">{item.timeAgo}</time>
              </Meta>
            </Content>
          </Card>
        ))}
      </Grid>

      <DividerTitle>Most Readed</DividerTitle>

      <Grid>
        {items.slice(3).map((item) => (
          <Card key={item.id}>
            <ThumbWrap href={item.href} aria-label={item.title}>
              <img src={item.image || "/placeholder.svg"} alt="People training at the gym" />
            </ThumbWrap>
            <Content>
              <BadgeRow>
                <Badge>
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

              <TitleLink href={item.href}>{item.title}</TitleLink>

              <Meta>
                <span>{item.author}</span>
                <span aria-hidden="true">•</span>
                <time dateTime="P1D">{item.timeAgo}</time>
              </Meta>
            </Content>
          </Card>
        ))}
      </Grid>
    </Section>
  )
}
