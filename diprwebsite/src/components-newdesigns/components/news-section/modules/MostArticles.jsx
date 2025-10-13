import React from "react"
import {
  Section,
  Container,
  Tabs,
  TabButton,
  Layout,
  Grid,
  Card,
  ImageWrap,
  Content,
  DateText,
  Title,
  Excerpt,
  Sidebar,
  SideList,
  SideItem,
  SideDate,
  SideTitle,
  SideExcerpt,
  SeeMoreWrap,
  SeeMoreBtn,
} from "./MostArticles.styles"

// Demo data for March of Karnataka
const TABS = ["Technology", "Education", "Infrastructure", "Culture", "Economy", "Healthcare", "Environment"]

const POSTS = {
  Technology: [
    {
      id: "t1",
      date: "March 20, 2025",
      title: "Karnataka's IT Sector: Driving India's Digital Future",
      excerpt:
        "Bangalore's tech ecosystem continues to expand, with new startups and multinational companies establishing their presence in the Silicon Valley of India.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/68994c24e22e9173fc6004a1d4f5dd78460631dc-Vi79QbCWZK6QOFoOgMteWdnLZjU1mi.jpg",
      alt: "Modern technology infrastructure in Karnataka",
    },
    {
      id: "t2",
      date: "March 15, 2025",
      title: "Karnataka's AI and Machine Learning Initiatives",
      excerpt:
        "The state government launches new AI research centers and partnerships with leading tech companies to advance artificial intelligence capabilities.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6243ae57209c4d57554c7f40bc64b7beea010a17-gYwyDUgRsXonopsv41keWRrzjIV8Y9.jpg",
      alt: "AI research facility in Karnataka",
    },
    {
      id: "t3",
      date: "February 28, 2025",
      title: "Karnataka's Cybersecurity Excellence",
      excerpt:
        "The state establishes new cybersecurity frameworks and training programs to protect digital infrastructure and data.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ab76636beea47b9f254313aec0bf6a3f2de57ca6-c4XD0LDs5RrI7VEtEZJmSnlXHBe36D.jpg",
      alt: "Cybersecurity operations center",
    },
    {
      id: "t4",
      date: "February 14, 2025",
      title: "Karnataka's Fintech Revolution",
      excerpt:
        "The state's fintech sector experiences rapid growth with innovative payment solutions and digital banking services.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/953a18a88ac50c70c275906d207dc5a58e3cbf26%20%282%29-1DWWgC9eKwMXMIt9ybxFtMVU6So1cN.jpg",
      alt: "Digital financial services platform",
    },
    {
      id: "t5",
      date: "February 10, 2025",
      title: "Karnataka's Green Technology Initiatives",
      excerpt:
        "The state leads in sustainable technology adoption with solar power projects and eco-friendly infrastructure development across major cities.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/68994c24e22e9173fc6004a1d4f5dd78460631dc-Vi79QbCWZK6QOFoOgMteWdnLZjU1mi.jpg",
      alt: "Green technology infrastructure in Karnataka",
    },
    {
      id: "t6",
      date: "February 5, 2025",
      title: "Karnataka's Digital Governance Transformation",
      excerpt:
        "The state government implements advanced digital platforms for citizen services, making governance more accessible and efficient for all residents.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6243ae57209c4d57554c7f40bc64b7beea010a17-gYwyDUgRsXonopsv41keWRrzjIV8Y9.jpg",
      alt: "Digital governance platform in Karnataka",
    },
  ],
}

// Fallback posts for other tabs reuse technology data as placeholder
TABS.forEach((tab) => {
  if (!POSTS[tab]) POSTS[tab] = POSTS.Technology
})

export default function TabSection() {
  const [active, setActive] = React.useState(TABS[0])
  const posts = POSTS[active] || []

  // Layout: first 3 are featured (top), next 3 are secondary (bottom)
  const featured = posts.slice(0, 3)
  const secondary = posts.slice(3, 6)

  // Parse date for datetime attribute
  const parseDateTimeAttr = (dateStr) => {
    try {
      const parsed = new Date(dateStr);
      return parsed.toISOString().split('T')[0];
    } catch {
      return '';
    }
  };

  // Handle keyboard navigation for tabs
  const handleTabKeyDown = (e, tab) => {
    const tabIndex = TABS.indexOf(tab)
    
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      const nextTab = TABS[(tabIndex + 1) % TABS.length]
      setActive(nextTab)
      setTimeout(() => {
        document.querySelector(`[role="tab"][aria-selected="true"]`)?.focus()
      }, 0)
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      const prevTab = TABS[(tabIndex - 1 + TABS.length) % TABS.length]
      setActive(prevTab)
      setTimeout(() => {
        document.querySelector(`[role="tab"][aria-selected="true"]`)?.focus()
      }, 0)
    } else if (e.key === 'Home') {
      e.preventDefault()
      setActive(TABS[0])
    } else if (e.key === 'End') {
      e.preventDefault()
      setActive(TABS[TABS.length - 1])
    }
  }

  return (
    <Section as="section" aria-labelledby="most-articles-tabs-heading" role="region">
      <Container>
        <h2 
          id="most-articles-tabs-heading" 
          style={{ position: 'absolute', left: '-9999px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }}
        >
          Karnataka News By Category
        </h2>

        {/* Tab Navigation */}
        <Tabs role="tablist" aria-label="Karnataka news categories">
          {TABS.map((tab) => (
            <TabButton
              key={tab}
              role="tab"
              id={`tab-${tab}`}
              aria-selected={active === tab}
              aria-controls={`panel-${tab}`}
              tabIndex={active === tab ? 0 : -1}
              $active={active === tab}
              onClick={() => setActive(tab)}
              onKeyDown={(e) => handleTabKeyDown(e, tab)}
            >
              {tab}
            </TabButton>
          ))}
        </Tabs>

        <Layout>
          <div 
            id={`panel-${active}`} 
            role="tabpanel" 
            aria-labelledby={`tab-${active}`}
            tabIndex={0}
          >
            <Grid>
              {featured.map((p) => (
                <Card 
                  key={p.id} 
                  as="article" 
                  role="article"
                  aria-labelledby={`card-title-${p.id}`}
                  tabIndex="0"
                >
                  <ImageWrap>
                    <img 
                      src={p.image || "/placeholder.svg"} 
                      alt={p.alt || `Image for ${p.title}`}
                      loading="lazy"
                    />
                  </ImageWrap>
                  <Content>
                    <DateText as="time" dateTime={parseDateTimeAttr(p.date)}>{p.date}</DateText>
                    <Title id={`card-title-${p.id}`} as="h3">{p.title}</Title>
                    <Excerpt>{p.excerpt}</Excerpt>
                  </Content>
                </Card>
              ))}

              {secondary.map((p) => (
                <Card 
                  key={p.id} 
                  as="article" 
                  role="article"
                  aria-labelledby={`card-title-${p.id}`}
                  tabIndex="0"
                >
                  <ImageWrap>
                    <img 
                      src={p.image || "/placeholder.svg"} 
                      alt={p.alt || `Image for ${p.title}`}
                      loading="lazy"
                    />
                  </ImageWrap>
                  <Content>
                    <DateText as="time" dateTime={parseDateTimeAttr(p.date)}>{p.date}</DateText>
                    <Title id={`card-title-${p.id}`} as="h3">{p.title}</Title>
                    <Excerpt>{p.excerpt}</Excerpt>
                  </Content>
                </Card>
              ))}
            </Grid>
          </div>
{/* 
          <Sidebar as="aside" role="complementary" aria-label="Latest Karnataka progress headlines">
            <SideList role="list">
              {sideList.map((item, idx) => (
                <SideItem key={idx} role="listitem" tabIndex="0">
                  <SideDate as="time">{item.date}</SideDate>
                  <SideTitle as="h4">{item.title}</SideTitle>
                </SideItem>
              ))}
            </SideList>
            <SeeMoreWrap>
              <SeeMoreBtn 
                type="button" 
                onClick={() => alert("Load more Karnataka progress news...")}
                aria-label="Load more Karnataka progress news"
              >
                See More
              </SeeMoreBtn>
            </SeeMoreWrap>
          </Sidebar> */}
        </Layout>
      </Container>
    </Section>
  )
}
