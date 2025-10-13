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
    <Wrapper as="section" aria-labelledby="special-news-tabs-heading" role="region">
      <GlobalScrollbars />
      <h2 
        id="special-news-tabs-heading" 
        style={{ position: 'absolute', left: '-9999px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }}
      >
        Special News Categories
      </h2>
      
      {/* Tab Navigation */}
      <Tabs role="tablist" aria-label="Special news categories">
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

      {/* Content for active tab */}
      <div 
        id={`panel-${active}`} 
        role="tabpanel" 
        aria-labelledby={`tab-${active}`}
        tabIndex={0}
      >
        <Grid>
          {/* Left side - Feature Image */}
          <Column as="div" role="region" aria-labelledby="featured-article-title">
            <h3 
              id="featured-article-title" 
              style={{ position: 'absolute', left: '-9999px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }}
            >
              Featured {active} Article
            </h3>
            <FeatureCard 
              as="article" 
              role="article"
              aria-labelledby={`feature-title-${active}`}
              tabIndex="0"
            >
              <FeatureImage
                src={currentData.feature.image}
                alt={currentData.feature.alt || `Featured ${active} story`}
                loading="lazy"
              />
              <FeatureOverlay aria-hidden="true" />
              <FeatureContent>
                <FeatureTitle id={`feature-title-${active}`} as="h4">
                  {currentData.feature.title}
                </FeatureTitle>
                <FeatureMetaRow>
                  <FeatureAuthor aria-label={`Author: ${currentData.feature.author}`}>
                    {currentData.feature.author}
                  </FeatureAuthor>
                  <FeatureDateText aria-hidden="true">•</FeatureDateText>
                  <FeatureDateText as="time">{currentData.feature.date}</FeatureDateText>
                </FeatureMetaRow>
                <FeatureExcerpt>
                  {currentData.feature.excerpt}
                </FeatureExcerpt>
                <FeatureTagsRow role="list" aria-label="Article tags">
                  <FeatureBadge role="listitem" aria-label={`Category: ${currentData.feature.category}`}>
                    {currentData.feature.category}
                  </FeatureBadge>
                  <FeatureBadge role="listitem" aria-label={`Reading time: ${currentData.feature.readTime}`}>
                    {currentData.feature.readTime}
                  </FeatureBadge>
                </FeatureTagsRow>
              </FeatureContent>
            </FeatureCard>
          </Column>

          {/* Right side - News List */}
          <Column as="div" role="region" aria-labelledby="news-list-heading">
            <h3 
              id="news-list-heading" 
              style={{ position: 'absolute', left: '-9999px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }}
            >
              {active} Articles
            </h3>
            <List className="custom-scrollbar" role="feed" aria-label={`${active} news articles`} aria-busy="false">
              {currentData.rightNews.slice(0, 5).map((n, idx) => (
                <Item 
                  key={idx} 
                  as="article" 
                  role="article"
                  aria-labelledby={`news-item-${active}-${idx}`}
                  tabIndex="0"
                >
                  <NewsItemContainer>
                    <NewsImageContainer>
                      <NewsImage
                        src={n.image}
                        alt={n.alt || `Thumbnail for ${n.title}`}
                        loading="lazy"
                      />
                    </NewsImageContainer>
                    <NewsContentContainer>
                      <Headline id={`news-item-${active}-${idx}`} as="h5">{n.title}</Headline>
                      <MetaRow>
                        <DateText as="time">{n.date}</DateText>
                        {n.readTime && (
                          <>
                            <DateText aria-hidden="true">•</DateText>
                            <DateText aria-label={`Reading time: ${n.readTime}`}>{n.readTime}</DateText>
                          </>
                        )}
                      </MetaRow>
                    </NewsContentContainer>
                  </NewsItemContainer>
                  <Divider aria-hidden="true" />
                </Item>
              ))}
            </List>
          </Column>
        </Grid>
      </div>
    </Wrapper>
  )
}