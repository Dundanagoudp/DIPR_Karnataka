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
  return (
    <Wrapper aria-label="Latest and Popular news">
      <GlobalScrollbars />
      <HeaderRow>
        <Title>Latest News</Title>
        <Title>Popular News</Title>
      </HeaderRow>

      <Grid>
        {/* Left column */}
        <Column>
          <List className="custom-scrollbar" role="feed" aria-label="Latest news list">
            {leftNews.map((n, idx) => (
              <Item key={idx}>
                <MetaRow>
                  <Badge aria-label={`Category ${n.cat}`}>{n.cat}</Badge>
                  <DateText>{n.date}</DateText>
                </MetaRow>
                <Headline>{n.title}</Headline>
                <Summary>{n.summary}</Summary>
                <Divider />
              </Item>
            ))}
          </List>
        </Column>

        {/* Center feature */}
        <Column>
          <FeatureCard>
            {/* User requested using Source URL directly */}
            <FeatureImage
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Placeholder-66HLqyRGGb3vKzMRu4OpqoBnKkaFJ0.png"
              alt="City street with vehicles and a building under construction"
            />
            <FeatureOverlay />
            <FeatureContent>
              <MetaRow>
                <Badge>Health</Badge>
                <DateText>March 20, 2025</DateText>
              </MetaRow>
              <FeatureTitle>Study Finds Link Between Social Media Use and Mental Health Issues</FeatureTitle>
              <FeatureExcerpt>
                A new study has found a link between excessive social media use and mental health issues, raising
                concerns about impacts on well-being.
              </FeatureExcerpt>
            </FeatureContent>
          </FeatureCard>
        </Column>

        {/* Right column */}
        <Column>
          <List className="custom-scrollbar" role="feed" aria-label="Popular news list">
            {rightNews.map((n, idx) => (
              <Item key={idx}>
                <MetaRow>
                  <Badge aria-label={`Category ${n.cat}`}>{n.cat}</Badge>
                  <DateText>{n.date}</DateText>
                </MetaRow>
                <Headline>{n.title}</Headline>
                <Divider />
              </Item>
            ))}
            <SeeMoreBtn type="button" aria-label="See more popular news">
              See More
            </SeeMoreBtn>
          </List>
        </Column>
      </Grid>
    </Wrapper>
  )
}
