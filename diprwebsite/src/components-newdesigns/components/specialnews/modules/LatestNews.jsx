import {
  GlobalScrollbars,
  Wrapper,
  HeaderRow,
  Title,
  Grid,
  Column,
  List,
  Item,
  MetaRow,
  Badge,
  DateText,
  Headline,
  Summary,
  Divider,
  FeatureCard,
  FeatureImage,
  FeatureOverlay,
  FeatureContent,
  FeatureTitle,
  FeatureExcerpt,
  SeeMoreBtn,
} from "./LatestNews.styles"

// Data (sample)
const leftNews = [
  {
    cat: "Technology",
    date: "March 20, 2025",
    title: "XSpacer Launches First Tourist Mission to Space",
    summary:
      "XSpacer has successfully launched its first-ever tourist mission to space, marking a new era of space tourism.",
  },
  {
    cat: "Entertainment",
    date: "March 20, 2025",
    title: "Hollywood Stars Turn Out for Oscars Red Carpet",
    summary:
      "The biggest names in Hollywood turned out for the annual Academy Awards ceremony, dazzling on the red carpet.",
  },
  {
    cat: "Business",
    date: "March 20, 2025",
    title: "Amazing Plans to Expand Its Delivery Network to Rural Areas",
    summary: "Amazing is set to expand its delivery network to rural areas, aiming to reach more customers nationwide.",
  },
  {
    cat: "Technology",
    date: "March 20, 2025",
    title: "XSpacer Launches First Tourist Mission to Space",
    summary:
      "XSpacer has successfully launched its first-ever tourist mission to space, marking a new era of space tourism.",
  },
  {
    cat: "Entertainment",
    date: "March 20, 2025",
    title: "Hollywood Stars Turn Out for Oscars Red Carpet",
    summary:
      "The biggest names in Hollywood turned out for the annual Academy Awards ceremony, dazzling on the red carpet.",
  },
  {
    cat: "Business",
    date: "March 20, 2025",
    title: "Amazing Plans to Expand Its Delivery Network to Rural Areas",
    summary: "Amazing is set to expand its delivery network to rural areas, aiming to reach more customers nationwide.",
  },
  {
    cat: "Technology",
    date: "March 20, 2025",
    title: "XSpacer Launches First Tourist Mission to Space",
    summary:
      "XSpacer has successfully launched its first-ever tourist mission to space, marking a new era of space tourism.",
  },
  {
    cat: "Entertainment",
    date: "March 20, 2025",
    title: "Hollywood Stars Turn Out for Oscars Red Carpet",
    summary:
      "The biggest names in Hollywood turned out for the annual Academy Awards ceremony, dazzling on the red carpet.",
  },
  {
    cat: "Business",
    date: "March 20, 2025",
    title: "Amazing Plans to Expand Its Delivery Network to Rural Areas",
    summary: "Amazing is set to expand its delivery network to rural areas, aiming to reach more customers nationwide.",
  },
  {
    cat: "Sports",
    date: "March 19, 2025",
    title: "Local Football Team Wins Championship",
    summary: "The city's football team secured their first championship in over a decade with a thrilling victory.",
  },
  {
    cat: "Health",
    date: "March 19, 2025",
    title: "New Medical Breakthrough in Cancer Treatment",
    summary: "Researchers announce promising results in early-stage cancer treatment trials.",
  },
  {
    cat: "Education",
    date: "March 18, 2025",
    title: "University Launches New AI Research Program",
    summary: "Local university introduces cutting-edge artificial intelligence research initiative.",
  },
]

const rightNews = [
  {
    cat: "Entertainment",
    date: "March 19, 2025",
    title: "The MMA Fashion Week 2023: Karen Delancy Launches New Fashion Line",
  },
  {
    cat: "Technology",
    date: "March 18, 2025",
    title: "Quark Announces Plans for New Electric Car Model",
  },
  {
    cat: "Politics",
    date: "March 17, 2025",
    title: "Luden Administration to Introduce Climate Change Legislation",
  },
  {
    cat: "Health",
    date: "March 16, 2025",
    title: "Health and meditation: New Study Finds Benefits of Meditation for Stress Relief",
  },
  {
    cat: "Technology",
    date: "March 18, 2025",
    title: "Quark Announces Plans for New Electric Car Model",
  },
  {
    cat: "Politics",
    date: "March 17, 2025",
    title: "Luden Administration to Introduce Climate Change Legislation",
  },
  {
    cat: "Health",
    date: "March 16, 2025",
    title: "Health and meditation: New Study Finds Benefits of Meditation for Stress Relief",
  },
  {
    cat: "Technology",
    date: "March 18, 2025",
    title: "Quark Announces Plans for New Electric Car Model",
  },
  {
    cat: "Politics",
    date: "March 17, 2025",
    title: "Luden Administration to Introduce Climate Change Legislation",
  },
  {
    cat: "Health",
    date: "March 16, 2025",
    title: "Health and meditation: New Study Finds Benefits of Meditation for Stress Relief",
  },
  {
    cat: "Sports",
    date: "March 15, 2025",
    title: "Olympic Athletes Prepare for Upcoming Games",
  },
  {
    cat: "Environment",
    date: "March 14, 2025",
    title: "New Green Energy Initiative Launched",
  },
  {
    cat: "Science",
    date: "March 13, 2025",
    title: "Breakthrough in Quantum Computing Research",
  },
]

export default function LatestNews() {
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
    <Wrapper as="section" aria-labelledby="latest-popular-heading" role="region">
      <GlobalScrollbars />
      <h2 
        id="latest-popular-heading" 
        style={{ position: 'absolute', left: '-9999px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }}
      >
        Latest and Popular News
      </h2>
      
      <HeaderRow role="presentation">
        <Title as="h3" id="latest-news-title">Latest News</Title>
        <Title as="h3" id="popular-news-title">Popular News</Title>
      </HeaderRow>

      <Grid>
        {/* Left column */}
        <Column as="div" role="region" aria-labelledby="latest-news-title">
          <List className="custom-scrollbar" role="feed" aria-label="Latest news articles" aria-busy="false">
            {leftNews.map((n, idx) => (
              <Item 
                key={idx} 
                as="article" 
                role="article"
                aria-labelledby={`latest-news-${idx}`}
                tabIndex="0"
              >
                <MetaRow>
                  <Badge aria-label={`Category: ${n.cat}`}>{n.cat}</Badge>
                  <DateText as="time" dateTime={parseDateTimeAttr(n.date)}>{n.date}</DateText>
                </MetaRow>
                <Headline id={`latest-news-${idx}`} as="h4">{n.title}</Headline>
                <Summary>{n.summary}</Summary>
                <Divider aria-hidden="true" />
              </Item>
            ))}
          </List>
        </Column>

        {/* Center feature */}
        <Column as="div" role="region" aria-labelledby="featured-story-title">
          <h3 
            id="featured-story-title" 
            style={{ position: 'absolute', left: '-9999px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }}
          >
            Featured Story
          </h3>
          <FeatureCard 
            as="article" 
            role="article"
            aria-labelledby="featured-health-title"
            tabIndex="0"
          >
            <FeatureImage
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Placeholder-66HLqyRGGb3vKzMRu4OpqoBnKkaFJ0.png"
              alt="Featured story: Study on social media and mental health"
              loading="lazy"
            />
            <FeatureOverlay aria-hidden="true" />
            <FeatureContent>
              <MetaRow>
                <Badge aria-label="Category: Health">Health</Badge>
                <DateText as="time" dateTime="2025-03-20">March 20, 2025</DateText>
              </MetaRow>
              <FeatureTitle id="featured-health-title" as="h4">
                Study Finds Link Between Social Media Use and Mental Health Issues
              </FeatureTitle>
              <FeatureExcerpt>
                A new study has found a link between excessive social media use and mental health issues, raising
                concerns about impacts on well-being.
              </FeatureExcerpt>
            </FeatureContent>
          </FeatureCard>
        </Column>

        {/* Right column */}
        <Column as="div" role="region" aria-labelledby="popular-news-title">
          <List className="custom-scrollbar" role="feed" aria-label="Popular news articles" aria-busy="false">
            {rightNews.map((n, idx) => (
              <Item 
                key={idx} 
                as="article" 
                role="article"
                aria-labelledby={`popular-news-${idx}`}
                tabIndex="0"
              >
                <MetaRow>
                  <Badge aria-label={`Category: ${n.cat}`}>{n.cat}</Badge>
                  <DateText as="time" dateTime={parseDateTimeAttr(n.date)}>{n.date}</DateText>
                </MetaRow>
                <Headline id={`popular-news-${idx}`} as="h4">{n.title}</Headline>
                <Divider aria-hidden="true" />
              </Item>
            ))}
            <SeeMoreBtn type="button" aria-label="Load more popular news articles">
              See More
            </SeeMoreBtn>
          </List>
        </Column>
      </Grid>
    </Wrapper>
  )
}
