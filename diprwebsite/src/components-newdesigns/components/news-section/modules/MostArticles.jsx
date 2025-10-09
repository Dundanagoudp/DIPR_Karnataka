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


  return (
    <Section aria-labelledby="march-karnataka-tabs-heading">
      <Container>

        <Layout>
          <div id={`panel-${active}`} role="tabpanel" aria-labelledby={active} tabIndex={0}>
            <Grid>
              {featured.map((p) => (
                <Card key={p.id}>
                  <ImageWrap>
                    <img src={p.image || "/placeholder.svg"} alt={p.alt} />
                  </ImageWrap>
                  <Content>
                    <DateText>{p.date}</DateText>
                    <Title>{p.title}</Title>
                    <Excerpt>{p.excerpt}</Excerpt>
                  </Content>
                </Card>
              ))}

              {secondary.map((p) => (
                <Card key={p.id}>
                  <ImageWrap>
                    <img src={p.image || "/placeholder.svg"} alt={p.alt} />
                  </ImageWrap>
                  <Content>
                    <DateText>{p.date}</DateText>
                    <Title>{p.title}</Title>
                    <Excerpt>{p.excerpt}</Excerpt>
                  </Content>
                </Card>
              ))}
              
            </Grid>
          </div>
{/* 
          <Sidebar aria-label="Latest Karnataka progress headlines">
            <SideList>
              {sideList.map((item, idx) => (
                <SideItem key={idx}>
                  <SideDate>{item.date}</SideDate>
                  <SideTitle>{item.title}</SideTitle>
                </SideItem>
              ))}
            </SideList>
            <SeeMoreWrap>
              <SeeMoreBtn type="button" onClick={() => alert("Load more Karnataka progress news...")}>
                See More
              </SeeMoreBtn>
            </SeeMoreWrap>
          </Sidebar> */}
        </Layout>
      </Container>
    </Section>
  )
}
