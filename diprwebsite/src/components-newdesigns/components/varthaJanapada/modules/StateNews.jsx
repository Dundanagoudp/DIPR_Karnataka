
"use client"
import {
  Section,
  HeaderRow,
  Title,
  SeeMore,
  PageLayout,
  FeaturedCard,
  FeaturedImage,
  Overlay,
  FeaturedContent,
  Badge,
  FeaturedTitle,
  FeaturedExcerpt,
  MetaBar,
  MetaItem,
  MiddleCol,
  SmallCard,
  Thumb,
  SmallContent,
  SmallBadge,
  SmallTitle,
  SidebarCard,
  SidebarHeader,
  SidebarList,
  SidebarItem,
  Avatar,
  ItemLabel,
} from "./StateNews.styles"

const defaultImg = "/images/hero-meeting.png"

const defaultFeatured = {
  category: "BUSINESS",
  title:
    "The first-ever double-decker flyover built in South India has been opened for traffic on an experimental basis.",
  excerpt:
    "Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est, a mattis tellus.",
  image: defaultImg,
  meta: ["james", "0", "June 19, 2025 06:00pm"],
}

const defaultList = [
  {
    category: "BUSINESS",
    title: "City announces new infrastructure upgrades across districts.",
    image: defaultImg,
  },
  {
    category: "BUSINESS",
    title: "Local industries report stronger quarterly growth figures.",
    image: defaultImg,
  },
  {
    category: "BUSINESS",
    title: "Public transport pilot expands to two more corridors.",
    image: defaultImg,
  },
]

const defaultSites = [
  { label: "Departments", image: defaultImg },
  { label: "Directorates", image: defaultImg },
  { label: "Organizations & Boards List", image: defaultImg },
  { label: "Universities", image: defaultImg },
  { label: "Tenders", image: defaultImg },
  { label: "Covid 19 Home Isolation App", image: defaultImg },
]

export default function StateNews({ featured = defaultFeatured, list = defaultList, sites = defaultSites, onSeeMore }) {
  return (
    <Section aria-labelledby="state-news-heading">
      <HeaderRow>
        <Title id="state-news-heading">State News</Title>
        <SeeMore
          href="#"
          onClick={(e) => {
            if (onSeeMore) {
              e.preventDefault()
              onSeeMore()
            }
          }}
          aria-label="See more state news"
        >
          See more →
        </SeeMore>
      </HeaderRow>

      <PageLayout>
        {/* Left: Featured */}
        <FeaturedCard>
          <FeaturedImage $src={featured.image}>
            <Overlay />
            <FeaturedContent>
              <Badge>{featured.category}</Badge>
              <FeaturedTitle>{featured.title}</FeaturedTitle>
              <FeaturedExcerpt>{featured.excerpt}</FeaturedExcerpt>
            </FeaturedContent>
          </FeaturedImage>
          <MetaBar>
            {featured.meta.map((m, i) => (
              <MetaItem key={i}>{m}</MetaItem>
            ))}
          </MetaBar>
        </FeaturedCard>

        {/* Middle: Stacked list */}
        <MiddleCol>
          {list.map((item, idx) => (
            <SmallCard key={idx}>
              <Thumb $src={item.image} role="img" aria-label={item.title} />
              <SmallContent>
                <SmallBadge>{item.category}</SmallBadge>
                <SmallTitle>{item.title}</SmallTitle>
              </SmallContent>
            </SmallCard>
          ))}
        </MiddleCol>

        {/* Right: Websites */}
        <SidebarCard aria-labelledby="state-sites-heading">
          <SidebarHeader id="state-sites-heading">State Government Websites</SidebarHeader>
          <SidebarList>
            {sites.map((s, i) => (
              <SidebarItem key={i}>
                <Avatar $src={s.image} aria-hidden="true" />
                <ItemLabel>{s.label}</ItemLabel>
              </SidebarItem>
            ))}
          </SidebarList>
        </SidebarCard>
      </PageLayout>
    </Section>
  )
}
