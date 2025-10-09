import React from 'react'
import {
  GlobalScrollbars,
  Wrapper,
  Tabs,
  TabButton,
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
  NewsItemContainer,
  NewsImageContainer,
  NewsImage,
  NewsContentContainer,
  FeatureMetaRow,
  FeatureAuthor,
  FeatureDateText,
  FeatureTagsRow,
  FeatureBadge,
} from "./TabSpecialNews.styles"

// Tab categories
const TABS = ["Special News", "Featured", "Exclusive", "Breaking", "Analysis"]

// Sample data for different tabs
const POSTS = {
  "Special News": {
    leftNews: [
      {
        cat: "Politics",
        date: "March 20, 2025",
        title: "Global Leaders Gather for Climate Summit to Address Urgent Environmental Concerns",
        summary: "As the urgency of addressing climate change reaches unprecedented levels, world leaders from diverse nations are gathering with a common purpose.",
      },
      {
        cat: "Technology",
        date: "March 20, 2025",
        title: "Revolutionary AI Breakthrough Promises to Transform Healthcare Industry",
        summary: "Scientists announce a groundbreaking artificial intelligence system that could revolutionize medical diagnosis and treatment.",
      },
  
    ],
    rightNews: [
      {
        cat: "Entertainment",
        date: "1 hour ago",
        readTime: "10 mins read",
        title: "The MMA Fashion Week 2023: Karen Delancy Launches New Fashion Line",
        image: "/state/2ndimage.jpg",
        alt: "Fashion week event"
      },
      {
        cat: "Technology",
        date: "2 hours ago",
        readTime: "8 mins read",
        title: "Quark Announces Plans for New Electric Car Model",
        image: "/state/2ndsection.jpg",
        alt: "Electric car technology"
      },
      {
        cat: "Politics",
        date: "3 hours ago",
        readTime: "12 mins read",
        title: "Luden Administration to Introduce Climate Change Legislation",
        image: "/state/rightside.jpg",
        alt: "Government building"
      },
      {
        cat: "Health",
        date: "4 hours ago",
        readTime: "6 mins read",
        title: "Health and meditation: New Study Finds Benefits of Meditation for Stress Relief",
        image: "/state/sidebar.jpg",
        alt: "Meditation and wellness"
      },
      {
        cat: "Sports",
        date: "5 hours ago",
        readTime: "9 mins read",
        title: "Olympic Athletes Prepare for Upcoming Games",
        image: "/state/sidebar2.jpg",
        alt: "Olympic athletes training"
      },
      {
        cat: "Environment",
        date: "6 hours ago",
        readTime: "7 mins read",
        title: "New Green Energy Initiative Launched",
        image: "/state/state.jpg",
        alt: "Green energy initiative"
      },
      {
        cat: "Science",
        date: "7 hours ago",
        readTime: "11 mins read",
        title: "Breakthrough in Quantum Computing Research",
        image: "/state/2ndimage.jpg",
        alt: "Quantum computing research"
      },
    ],
    feature: {
      image: "/specilanews/special1.jpg",
      alt: "Global climate summit conference",
      category: "Politics",
      author: "Buzznies",
      date: "Just now",
      readTime: "10 mins read",
      title: "Global Leaders Gather for Climate Summit to Address Urgent Environmental Concerns",
      excerpt: "As the urgency of addressing climate change reaches unprecedented levels, world leaders from diverse nations are gathering with a common purpose: to forge a historic agreement aimed at combating climate change and protecting our planet for future generations.",
    }
  },
  "Featured": {
    leftNews: [
      {
        cat: "Technology",
        date: "March 20, 2025",
        title: "Revolutionary AI Breakthrough Promises to Transform Healthcare Industry",
        summary: "Scientists announce a groundbreaking artificial intelligence system that could revolutionize medical diagnosis and treatment.",
      },
      {
        cat: "Business",
        date: "March 19, 2025",
        title: "Major Tech Companies Announce Historic Partnership for Sustainable Development",
        summary: "Leading technology companies join forces to create innovative solutions for global sustainability challenges.",
      },
      {
        cat: "Health",
        date: "March 19, 2025",
        title: "New Medical Breakthrough in Cancer Treatment Shows Promising Results",
        summary: "Researchers announce promising results in early-stage cancer treatment trials that could change the future of oncology.",
      },
    ],
    rightNews: [
      {
        cat: "Entertainment",
        date: "March 19, 2025",
        title: "The MMA Fashion Week 2023: Karen Delancy Launches New Fashion Line",
        image: "/state/2ndimage.jpg",
        alt: "Fashion week event"
      },
      {
        cat: "Technology",
        date: "March 18, 2025",
        title: "Quark Announces Plans for New Electric Car Model",
        image: "/state/2ndsection.jpg",
        alt: "Electric car technology"
      },
      {
        cat: "Politics",
        date: "March 17, 2025",
        title: "Luden Administration to Introduce Climate Change Legislation",
        image: "/state/rightside.jpg",
        alt: "Government building"
      },
    ],
    feature: {
      image: "/specilanews/special2.jpg",
      alt: "Technology innovation showcase",
      category: "Technology",
      author: "TechNews",
      date: "2 hours ago",
      readTime: "8 mins read",
      title: "Revolutionary AI Breakthrough Promises to Transform Healthcare Industry",
      excerpt: "Scientists announce a groundbreaking artificial intelligence system that could revolutionize medical diagnosis and treatment across the globe.",
    }
  },
  "Exclusive": {
    leftNews: [
      {
        cat: "Business",
        date: "March 19, 2025",
        title: "Major Tech Companies Announce Historic Partnership for Sustainable Development",
        summary: "Leading technology companies join forces to create innovative solutions for global sustainability challenges.",
      },
      {
        cat: "Health",
        date: "March 19, 2025",
        title: "New Medical Breakthrough in Cancer Treatment Shows Promising Results",
        summary: "Researchers announce promising results in early-stage cancer treatment trials that could change the future of oncology.",
      },
      {
        cat: "Education",
        date: "March 18, 2025",
        title: "University Launches New AI Research Program for Future Innovation",
        summary: "Local university introduces cutting-edge artificial intelligence research initiative to prepare students for the future.",
      },
    ],
    rightNews: [
      {
        cat: "Health",
        date: "March 16, 2025",
        title: "Health and meditation: New Study Finds Benefits of Meditation for Stress Relief",
        image: "/state/sidebar.jpg",
        alt: "Meditation and wellness"
      },
      {
        cat: "Sports",
        date: "March 15, 2025",
        title: "Olympic Athletes Prepare for Upcoming Games",
        image: "/state/sidebar2.jpg",
        alt: "Olympic athletes training"
      },
      {
        cat: "Environment",
        date: "March 14, 2025",
        title: "New Green Energy Initiative Launched",
        image: "/state/state.jpg",
        alt: "Green energy initiative"
      },
    ],
    feature: {
      image: "/specilanews/special3.jpg",
      alt: "Exclusive business partnership announcement",
      category: "Business",
      author: "BusinessDaily",
      date: "3 hours ago",
      readTime: "12 mins read",
      title: "Major Tech Companies Announce Historic Partnership for Sustainable Development",
      excerpt: "Leading technology companies join forces to create innovative solutions for global sustainability challenges and environmental protection.",
    }
  },
  "Breaking": {
    leftNews: [
      {
        cat: "Politics",
        date: "March 20, 2025",
        title: "Global Leaders Gather for Climate Summit to Address Urgent Environmental Concerns",
        summary: "As the urgency of addressing climate change reaches unprecedented levels, world leaders from diverse nations are gathering with a common purpose.",
      },
      {
        cat: "Technology",
        date: "March 20, 2025",
        title: "Revolutionary AI Breakthrough Promises to Transform Healthcare Industry",
        summary: "Scientists announce a groundbreaking artificial intelligence system that could revolutionize medical diagnosis and treatment.",
      },
    ],
    rightNews: [
      {
        cat: "Entertainment",
        date: "March 19, 2025",
        title: "The MMA Fashion Week 2023: Karen Delancy Launches New Fashion Line",
        image: "/state/2ndimage.jpg",
        alt: "Fashion week event"
      },
      {
        cat: "Technology",
        date: "March 18, 2025",
        title: "Quark Announces Plans for New Electric Car Model",
        image: "/state/2ndsection.jpg",
        alt: "Electric car technology"
      },
    ],
    feature: {
      image: "/specilanews/special1.jpg",
      alt: "Breaking news climate summit",
      category: "Politics",
      author: "BreakingNews",
      date: "Just now",
      readTime: "5 mins read",
      title: "BREAKING: Global Leaders Unite in Ambitious Climate Accord",
      excerpt: "World leaders from across the globe have come together to forge a historic agreement aimed at combating climate change and protecting our planet.",
    }
  },
  "Analysis": {
    leftNews: [
      {
        cat: "Health",
        date: "March 19, 2025",
        title: "New Medical Breakthrough in Cancer Treatment Shows Promising Results",
        summary: "Researchers announce promising results in early-stage cancer treatment trials that could change the future of oncology.",
      },
      {
        cat: "Education",
        date: "March 18, 2025",
        title: "University Launches New AI Research Program for Future Innovation",
        summary: "Local university introduces cutting-edge artificial intelligence research initiative to prepare students for the future.",
      },
    ],
    rightNews: [
      {
        cat: "Politics",
        date: "March 17, 2025",
        title: "Luden Administration to Introduce Climate Change Legislation",
        image: "/state/rightside.jpg",
        alt: "Government building"
      },
      {
        cat: "Health",
        date: "March 16, 2025",
        title: "Health and meditation: New Study Finds Benefits of Meditation for Stress Relief",
        image: "/state/sidebar.jpg",
        alt: "Meditation and wellness"
      },
    ],
    feature: {
      image: "/specilanews/special2.jpg",
      alt: "In-depth analysis of current events",
      category: "Analysis",
      author: "AnalysisPro",
      date: "4 hours ago",
      readTime: "15 mins read",
      title: "In-Depth Analysis: The Future of Global Healthcare Innovation",
      excerpt: "A comprehensive analysis of how emerging technologies and medical breakthroughs are reshaping the healthcare landscape worldwide.",
    }
  },
}

export default function TabSpecialNews() {
  const [active, setActive] = React.useState(TABS[0])
  const currentData = POSTS[active] || POSTS["Special News"]

  return (
    <Wrapper aria-label="Special news tabs">
      <GlobalScrollbars />
      
      {/* Tab Navigation */}
      <Tabs role="tablist" aria-label="Special news categories">
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

      {/* Content for active tab */}
      <div id={`panel-${active}`} role="tabpanel" aria-labelledby={active} tabIndex={0}>

        <Grid>
          {/* Left side - Feature Image */}
          <Column>
            <FeatureCard>
              <FeatureImage
                src={currentData.feature.image}
                alt={currentData.feature.alt}
              />
              <FeatureOverlay />
              <FeatureContent>
                <FeatureTitle>{currentData.feature.title}</FeatureTitle>
                <FeatureMetaRow>
                  <FeatureAuthor>{currentData.feature.author}</FeatureAuthor>
                  <FeatureDateText>•</FeatureDateText>
                  <FeatureDateText>{currentData.feature.date}</FeatureDateText>
                </FeatureMetaRow>
                <FeatureExcerpt>
                  {currentData.feature.excerpt}
                </FeatureExcerpt>
                <FeatureTagsRow>
                  <FeatureBadge>{currentData.feature.category}</FeatureBadge>
                  <FeatureBadge>{currentData.feature.readTime}</FeatureBadge>
                </FeatureTagsRow>
              </FeatureContent>
            </FeatureCard>
          </Column>

          {/* Right side - News List */}
          <Column>
            <List className="custom-scrollbar" role="feed" aria-label="News list">
              {currentData.rightNews.slice(0, 5).map((n, idx) => (
                <Item key={idx}>
                  <NewsItemContainer>
                    <NewsImageContainer>
                      <NewsImage
                        src={n.image}
                        alt={n.alt}
                      />
                    </NewsImageContainer>
                    <NewsContentContainer>
                      <Headline>{n.title}</Headline>
                      <MetaRow>
                        <DateText>{n.date}</DateText>
                        {n.readTime && (
                          <>
                            <DateText>•</DateText>
                            <DateText>{n.readTime}</DateText>
                          </>
                        )}
                      </MetaRow>
                    </NewsContentContainer>
                  </NewsItemContainer>
                  <Divider />
                </Item>
              ))}

            </List>
          </Column>
        </Grid>
      </div>
    </Wrapper>
  )
}