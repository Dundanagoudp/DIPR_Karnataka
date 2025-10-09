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
    category: "Karnataka Progress",
    date: "March 20, 2025",
    title: "Karnataka's Digital Transformation: Leading India's Tech Revolution",
    excerpt:
      "Karnataka has emerged as the Silicon Valley of India, with Bangalore becoming a global technology hub. The state's progressive policies and investment in digital infrastructure have positioned it as a leader in India's technological advancement.",
  },
  sideItems = [
    {
      image: "/state/2ndsection.jpg",
      category: "Education",
      date: "March 20, 2025",
      title: "Karnataka's Educational Excellence: Nurturing Future Innovators",
      excerpt:
        "The state's world-class educational institutions, including IISc and IIMs, continue to produce leaders in science, technology, and business.",
    },
    {
      image: "/state/rightside.jpg",
      category: "Infrastructure",
      date: "March 20, 2025",
      title: "Karnataka's Infrastructure Development: Building Tomorrow's Cities",
      excerpt: "Major infrastructure projects including metro systems, smart cities, and sustainable urban development initiatives.",
    },
  ],
}) {
  return (
    <Section aria-label="Featured March of Karnataka news">
      <Container>
        <LeftImageWrap>
          <img src={featured.image || "/placeholder.svg"} alt="Karnataka progress story image" />
        </LeftImageWrap>

        <MainContent>
          <MetaRow>
            <Tag aria-label={`Category: ${featured.category}`}>{featured.category}</Tag>
            <DateText dateTime="2025-03-20">{featured.date}</DateText>
          </MetaRow>

          <h2>{featured.title}</h2>
          <p>{featured.excerpt}</p>
        </MainContent>

        <Sidebar aria-label="More Karnataka progress stories">
          {sideItems.slice(0, 2).map((item, idx) => (
            <SideCard key={idx}>
              <div className="thumb">
                <img src={item.image || "/placeholder.svg"} alt="Karnataka story thumbnail" />
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
