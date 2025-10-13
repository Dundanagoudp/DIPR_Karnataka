import { Link } from "react-router-dom"
import {
  Section,
  HeaderRow,
  Title,
  SeeMore,
  ArrowIcon,
  PageLayout,
  FeaturedCard,
  FeaturedImage,
  Overlay,
  FeaturedContent,
  Badge,
  FeaturedTitle,
  FeaturedExcerpt,
  MetaBar,
  MetaBarSmall,
  MetaItem,
  MiddleCol,
  SmallCard,
  Thumb,
  SmallContent,
  SmallBadge,
  SmallTitle,
} from "./StateNews.styles"

const defaultFeatured = {
  category: "BUSINESS",
  title:
    "The first-ever double-decker flyover built in South India has been opened for traffic on an experimental basis.",
  excerpt:
    "Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est, a mattis tellus.",
  image: "/state/state.jpg",
  meta: ["james", "0", "June 19, 2025 06:00pm"],
}

const defaultList = [
  {
    category: "BUSINESS",
    title: "City announces new infrastructure upgrades across districts.",
    image: "/state/2ndimage.jpg",
  },
  {
    category: "BUSINESS",
    title: "Local industries report stronger quarterly growth figures.",
    image: "/state/2ndsection.jpg",
  },
  {
    category: "BUSINESS",
    title: "Public transport pilot expands to two more corridors.",
    image: "/state/rightside.jpg",
  },
]

export default function StateNews({ featured = defaultFeatured, list = defaultList, onSeeMore }) {
  return (
    <Section aria-labelledby="state-news-heading">
      <HeaderRow>
        <Title id="state-news-heading">State News</Title>
        <SeeMore
          as={Link}
          to="/state"
          aria-label="See more state news"
        >
          See more
          <ArrowIcon aria-hidden="true">
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path 
                d="M5 12H19M19 12L12 5M19 12L12 19" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </ArrowIcon>
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
            </FeaturedContent>
          </FeaturedImage>
          <MetaBar>
            <FeaturedExcerpt>{featured.excerpt}</FeaturedExcerpt>
          </MetaBar>
          <MetaBarSmall>
            {featured.meta.map((m, i) => (
              <MetaItem key={i}>{m}</MetaItem>
            ))}
          </MetaBarSmall>
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
      </PageLayout>

    </Section>
  )
}
