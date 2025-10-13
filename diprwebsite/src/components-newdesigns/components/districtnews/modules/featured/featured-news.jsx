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
  // Parse date for datetime attribute
  const parseDateTimeAttr = (dateStr) => {
    try {
      const parsed = new Date(dateStr);
      return parsed.toISOString().split('T')[0];
    } catch {
      return '';
    }
  };

  return (
    <Section as="section" aria-labelledby="featured-news-heading" role="region">
      <h2 
        id="featured-news-heading" 
        style={{ position: 'absolute', left: '-9999px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }}
      >
        Featured District News
      </h2>
      <Container>
        <LeftImageWrap>
          <img 
            src={featured.image || "/placeholder.svg"} 
            alt={`Featured story: ${featured.title}`}
            loading="lazy"
          />
        </LeftImageWrap>

        <MainContent as="article" role="article" aria-labelledby="featured-main-title">
          <MetaRow>
            <Tag aria-label={`Category: ${featured.category}`}>{featured.category}</Tag>
            <DateText as="time" dateTime={parseDateTimeAttr(featured.date)}>{featured.date}</DateText>
          </MetaRow>

          <h3 id="featured-main-title">{featured.title}</h3>
          <p>{featured.excerpt}</p>
        </MainContent>

        <Sidebar 
          as="aside" 
          role="complementary" 
          aria-labelledby="featured-sidebar-heading"
        >
          <h4 
            id="featured-sidebar-heading" 
            style={{ position: 'absolute', left: '-9999px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }}
          >
            Related Stories
          </h4>
          {sideItems.slice(0, 2).map((item, idx) => (
            <SideCard 
              key={idx} 
              as="article" 
              role="article"
              aria-labelledby={`featured-side-title-${idx}`}
              tabIndex="0"
            >
              <div className="thumb">
                <img 
                  src={item.image || "/placeholder.svg"} 
                  alt={`Related story: ${item.title}`}
                  loading="lazy"
                />
              </div>
              <div>
                <MetaRow>
                  <Tag aria-label={`Category: ${item.category}`}>{item.category}</Tag>
                  <DateText as="time" dateTime={parseDateTimeAttr(item.date)}>{item.date}</DateText>
                </MetaRow>
                <h5 id={`featured-side-title-${idx}`}>{item.title}</h5>
                <p>{item.excerpt}</p>
              </div>
            </SideCard>
          ))}
        </Sidebar>
      </Container>
    </Section>
  )
}

