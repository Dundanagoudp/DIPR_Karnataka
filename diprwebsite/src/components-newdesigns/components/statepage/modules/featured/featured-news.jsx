import {
  Section,
  Container,
  LeftImageWrap,
  MainContent,
  MetaRow,
  Tag,
  DateText,
  Sidebar,
  SideCard,
} from "./featured-news.styles"

export default function FeaturedNewsSection({
  featured = {
    image: "/state/2ndimage.jpg",
    category: "Politics",
    date: "March 20, 2025",
    title: "Climate Change Protesters Clash with Police in City L",
    excerpt:
      "Climate change activists took to the streets of City L to demand urgent action to tackle the climate crisis. The protests turned violent, with clashes between protesters and police resulting in several arrests.",
  },
  sideItems = [
    {
      image: "/state/2ndsection.jpg",
      category: "Technology",
      date: "March 20, 2025",
      title: "Tech Giants Set to Face Antitrust Lawsuits in Continent E",
      excerpt:
        "The E Union is preparing to file antitrust lawsuits against several major tech companies for alleged anti-competitive behavior.",
    },
    {
      image: "/state/rightside.jpg",
      category: "Technology",
      date: "March 20, 2025",
      title: "Juice Unveils New Phone with Advanced Features",
      excerpt: "The latest model features new capabilities including a foldable screen and improved camera system.",
    },
  ],
}) {
  return (
    <Section aria-label="Featured news">
      <Container>
        <LeftImageWrap>
          <img src={featured.image || "/placeholder.svg"} alt="Lead story image" />
        </LeftImageWrap>

        <MainContent>
          <MetaRow>
            <Tag aria-label={`Category: ${featured.category}`}>{featured.category}</Tag>
            <DateText dateTime="2025-03-20">{featured.date}</DateText>
          </MetaRow>

          <h2>{featured.title}</h2>
          <p>{featured.excerpt}</p>
        </MainContent>

        <Sidebar aria-label="More top stories">
          {sideItems.slice(0, 2).map((item, idx) => (
            <SideCard key={idx}>
              <div className="thumb">
                <img src={item.image || "/placeholder.svg"} alt="Story thumbnail" />
              </div>
              <div>
                <MetaRow>
                  <Tag>{item.category}</Tag>
                  <DateText>{item.date}</DateText>
                </MetaRow>
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
              </div>
            </SideCard>
          ))}
        </Sidebar>
      </Container>
    </Section>
  )
}
