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
} from "./Tabsection.styles"

// Demo data for district news
const TABS = ["Local News", "Development", "Education", "Agriculture", "Health", "Culture", "Events"]

const POSTS = {
  "Local News": [
    {
      id: "d1",
      date: "March 20, 2025",
      title: "District Council Approves New Community Development Plan",
      excerpt:
        "The District Council has approved a comprehensive development plan focused on improving local infrastructure and community services.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/68994c24e22e9173fc6004a1d4f5dd78460631dc-Vi79QbCWZK6QOFoOgMteWdnLZjU1mi.jpg",
      alt: "District council meeting",
    },
    {
      id: "d2",
      date: "March 15, 2025",
      title: "Local Farmers Market Opens in District Center",
      excerpt:
        "A new farmers market has opened providing fresh local produce and supporting district agricultural community.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6243ae57209c4d57554c7f40bc64b7beea010a17-gYwyDUgRsXonopsv41keWRrzjIV8Y9.jpg",
      alt: "Farmers market opening",
    },
    {
      id: "d3",
      date: "February 28, 2025",
      title: "District Administration Launches Clean District Initiative",
      excerpt:
        "Officials launch a district-wide cleanliness drive to promote environmental sustainability and public health.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ab76636beea47b9f254313aec0bf6a3f2de57ca6-c4XD0LDs5RrI7VEtEZJmSnlXHBe36D.jpg",
      alt: "Clean district initiative",
    },
    {
      id: "d4",
      date: "February 14, 2025",
      title: "District Youth Programs Receive Additional Funding",
      excerpt:
        "Local youth development programs receive increased funding to expand educational and recreational activities.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/953a18a88ac50c70c275906d207dc5a58e3cbf26%20%282%29-1DWWgC9eKwMXMIt9ybxFtMVU6So1cN.jpg",
      alt: "Youth program announcement",
    },
  ],
}

// Fallback posts for other tabs reuse local news data as placeholder
TABS.forEach((tab) => {
  if (!POSTS[tab]) POSTS[tab] = POSTS["Local News"]
})

export default function TabSection() {
  const [active, setActive] = React.useState(TABS[0])
  const posts = POSTS[active] || []

  // Layout: first 2 are featured (top), next 2 are secondary (bottom)
  const featured = posts.slice(0, 2)
  const secondary = posts.slice(2, 4)
  const sideList = [
    { 
      date: "March 15, 2025", 
      title: "District Sports Meet Brings Together Local Athletes",
      excerpt: "Annual district sports competition showcases talent from schools and clubs across the region."
    },
    { 
      date: "March 05, 2025", 
      title: "New District Library Opens in Community Center",
      excerpt: "State-of-the-art library facility provides modern learning resources for district residents."
    },
    { 
      date: "March 01, 2025", 
      title: "District Health Camp Provides Free Medical Services",
      excerpt: "Free health screening and medical consultation provided to hundreds of district residents."
    },
    { 
      date: "February 28, 2025", 
      title: "District Tourism Board Promotes Local Heritage Sites",
      excerpt: "New initiative to boost district tourism by highlighting historical and cultural landmarks."
    },
    { 
      date: "February 15, 2025", 
      title: "District Farmers Adopt Modern Agricultural Techniques",
      excerpt: "Training programs help local farmers implement advanced farming methods and technology."
    },
    { 
      date: "March 05, 2025", 
      title: "District Road Safety Campaign Launched",
      excerpt: "Comprehensive awareness program aims to reduce traffic accidents on district roads."
    },
    { 
      date: "March 01, 2025", 
      title: "District Skill Development Center Opens for Youth",
      excerpt: "New vocational training center equips young people with job-ready skills."
    },
    { 
      date: "February 28, 2025", 
      title: "District Water Conservation Project Announced",
      excerpt: "Ambitious plan to improve water management and conservation across the district."
    },
    { 
      date: "February 15, 2025", 
      title: "District Cultural Festival Celebrates Local Traditions",
      excerpt: "Three-day festival showcases district's rich cultural heritage and traditional arts."
    },
  ]

  return (
    <Section aria-labelledby="news-tabs-heading">
      <Container>
        <h2 id="news-tabs-heading" style={{ position: "absolute", left: "-9999px" }}>
          District News tabs
        </h2>

        <Tabs role="tablist" aria-label="District news categories">
          {TABS.map((tab) => (
            <TabButton
              key={tab}
              role="tab"
              aria-selected={active === tab}
              aria-controls={`panel-${tab}`}
              $active={active === tab}
              onClick={() => setActive(tab)}
            >
              {tab}
            </TabButton>
          ))}
        </Tabs>

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

          <Sidebar aria-label="Latest district headlines">
            <SideList>
              {sideList.map((item, idx) => (
                <SideItem key={idx}>
                  <SideDate>{item.date}</SideDate>
                  <SideTitle>{item.title}</SideTitle>
                </SideItem>
              ))}
            </SideList>
            <SeeMoreWrap>
              <SeeMoreBtn type="button" onClick={() => alert("Load more district news...")}>
                See More
              </SeeMoreBtn>
            </SeeMoreWrap>
          </Sidebar>
        </Layout>
      </Container>
    </Section>
  )
}

