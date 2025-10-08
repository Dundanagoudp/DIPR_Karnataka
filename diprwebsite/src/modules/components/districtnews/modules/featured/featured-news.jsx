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
    category: "District News",
    date: "March 20, 2025",
    title: "District Administration Launches New Development Initiatives",
    excerpt:
      "District officials unveiled comprehensive development plans aimed at improving infrastructure and public services. The initiatives include road improvements, healthcare upgrades, and educational program enhancements.",
  },
  sideItems = [
    {
      image: "/state/2ndsection.jpg",
      category: "Education",
      date: "March 20, 2025",
      title: "District Schools Receive Technology Upgrades",
      excerpt:
        "Local schools in the district are set to receive new computer equipment and digital learning tools to enhance student education.",
    },
    {
      image: "/state/rightside.jpg",
      category: "Infrastructure",
      date: "March 20, 2025",
      title: "New District Road Network Project Announced",
      excerpt: "The district administration announced a major road network project to improve connectivity between rural areas.",
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

