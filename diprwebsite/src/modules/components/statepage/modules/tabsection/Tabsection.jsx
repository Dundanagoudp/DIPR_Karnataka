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
  SeeMoreWrap,
  SeeMoreBtn,
} from "./Tabsection.styles"

// Demo data. Images use the provided Source URLs as requested.
const TABS = ["Politics", "Business", "Sports", "Entertainment", "Technology", "Lifestyle", "Health"]

const POSTS = {
  Politics: [
    {
      id: "p1",
      date: "March 20, 2025",
      title: "State Senate Passes Bill to Strengthen Cybersecurity Infrastructure",
      excerpt:
        "The State Senate has passed a bill aimed at improving cybersecurity infrastructure, following the rising threats to digital security.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/68994c24e22e9173fc6004a1d4f5dd78460631dc-Vi79QbCWZK6QOFoOgMteWdnLZjU1mi.jpg",
      alt: "People near a military jet on an airfield",
    },
    {
      id: "p2",
      date: "March 15, 2025",
      title: "Country R and Country C Form New Economic Partnership",
      excerpt:
        "Two nations join hands to strengthen trade ties and promote economic growth with a comprehensive partnership.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6243ae57209c4d57554c7f40bc64b7beea010a17-gYwyDUgRsXonopsv41keWRrzjIV8Y9.jpg",
      alt: "Person speaking at a microphone in a meeting room",
    },
    {
      id: "p3",
      date: "February 28, 2025",
      title: "Government Announces Plans to Tackle Climate Change",
      excerpt:
        "Officials announce plans to reduce emissions and transition to renewable energy sources over the next decade.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ab76636beea47b9f254313aec0bf6a3f2de57ca6-c4XD0LDs5RrI7VEtEZJmSnlXHBe36D.jpg",
      alt: "News-style graphic with a speaker and bold yellow banner text",
    },
    {
      id: "p4",
      date: "February 14, 2025",
      title: "Global Action Called to Address Refugee Crisis",
      excerpt:
        "An international body calls for coordinated action to address the growing refugee crisis across regions.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/953a18a88ac50c70c275906d207dc5a58e3cbf26%20%282%29-1DWWgC9eKwMXMIt9ybxFtMVU6So1cN.jpg",
      alt: "Video conference collage of officials during a virtual meeting",
    },
  ],
}

// Fallback posts for other tabs reuse politics data as placeholder
TABS.forEach((tab) => {
  if (!POSTS[tab]) POSTS[tab] = POSTS.Politics
})

export default function TabSection() {
  const [active, setActive] = React.useState(TABS[0])
  const posts = POSTS[active] || []

  // Layout: first 2 are featured (top), next 2 are secondary (bottom)
  const featured = posts.slice(0, 2)
  const secondary = posts.slice(2, 4)
  const sideList = [
    { date: "March 15, 2025", title: "World Leaders Gather for Climate Summit in Paris" },
    { date: "March 09, 2025", title: "State Congress Passes $1 Trillion Infrastructure Bill" },
    { date: "March 07, 2025", title: "Climate Change Protesters Clash with Police in City L" },
    { date: "February 28, 2025", title: "Administration to Introduce Climate Change Legislation" },
    { date: "February 15, 2025", title: "The Changing Landscape of Political Power" },
  ]

  return (
    <Section aria-labelledby="news-tabs-heading">
      <Container>
        <h2 id="news-tabs-heading" style={{ position: "absolute", left: "-9999px" }}>
          News tabs
        </h2>

        <Tabs role="tablist" aria-label="News categories">
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

          <Sidebar aria-label="Latest headlines">
            <SideList>
              {sideList.map((item, idx) => (
                <SideItem key={idx}>
                  <SideDate>{item.date}</SideDate>
                  <SideTitle>{item.title}</SideTitle>
                </SideItem>
              ))}
            </SideList>
            <SeeMoreWrap>
              <SeeMoreBtn type="button" onClick={() => alert("Load more news...")}>
                See More
              </SeeMoreBtn>
            </SeeMoreWrap>
          </Sidebar>
        </Layout>
      </Container>
    </Section>
  )
}
