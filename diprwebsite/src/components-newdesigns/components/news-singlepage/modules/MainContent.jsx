import React from 'react'
import SocialShare from './SocialShare'
import CommentsSection from './CommentsSection'
import {
  MainContentContainer,
  DateTag,
  LocationTag,
  ArticleTitle,
  AuthorCard,
  AuthorImage,
  AuthorInfo,
  AuthorName,
  ArticleMeta,
  MetaItem,
  HeroImage,
  ImageCaption,
  ArticleContent,
  ArticleParagraph,
  QuoteBlock,
  QuoteText,
  InlineAd,
  AdContent,
  AdImage,
  ArticleTags,
  Tag
} from './MainContent.styles'

const MainContent = () => {
  return (
    <MainContentContainer role="article" aria-labelledby="article-title">
      {/* Location and Date Tags */}
      <LocationTag aria-label="Article location and category">Raichur, Karnataka | Nature & Heritage</LocationTag>
      <DateTag dateTime="2024-03-10">March 10, 2024</DateTag>
      
      {/* Main Article Title */}
      <ArticleTitle id="article-title">
        The land of Bisala, Raichur, is now adorned with lush greenery, beckoning nature lovers.
      </ArticleTitle>
      
      {/* Subheadline */}
      <p style={{ 
        fontSize: '18px', 
        color: '#666', 
        marginBottom: '24px',
        fontStyle: 'italic'
      }}>
        A remarkable transformation brings new life to Karnataka's heritage region
      </p>
      
      {/* Author Information Card */}
      <AuthorCard role="complementary" aria-label="Article author information">
        <AuthorImage>
          <img 
            src="/header/cm.png" 
            alt="Author Ram Nath" 
            loading="eager"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '50%'
            }}
          />
        </AuthorImage>
        <AuthorInfo>
          <AuthorName>By Ram Nath</AuthorName>
          <ArticleMeta>
            <MetaItem aria-label="Comment count">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }} aria-hidden="true">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              0 Comments
            </MetaItem>
            <MetaItem aria-label="Reading time">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }} aria-hidden="true">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              5 min read
            </MetaItem>
          </ArticleMeta>
        </AuthorInfo>
      </AuthorCard>
      
      {/* Hero Image with Caption */}
      <HeroImage>
        <img 
          src="/state/state.jpg" 
          alt="Raichur's green transformation showing lush greenery and transformed landscapes" 
          loading="eager"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center"
          }}
        />
        <ImageCaption as="figcaption">
          Raichur's green revival beckons nature lovers to explore its transformed landscapes
        </ImageCaption>
      </HeroImage>
      
      {/* Article Content */}
      <ArticleContent>
        <ArticleParagraph>
          The transformation of Bisala in Raichur district represents a remarkable environmental success story. 
          What was once a barren landscape has been transformed into a lush, green paradise that now attracts 
          nature enthusiasts from across the region. This incredible change has been achieved through 
          dedicated conservation efforts and community participation.
        </ArticleParagraph>
        
        <ArticleParagraph>
          Local authorities, in collaboration with environmental organizations, have implemented 
          comprehensive reforestation programs. These initiatives have not only restored the natural 
          beauty of the area but also created new opportunities for eco-tourism and sustainable 
          development in the region.
        </ArticleParagraph>
        
        {/* Quote Block */}
        <blockquote style={{
          background: '#f2f2f2',
          padding: '30px 40px',
          margin: '30px 0',
          position: 'relative',
          textAlign: 'center',
          border: 'none'
        }}>
          <span style={{
            position: 'absolute',
            fontSize: '60px',
            color: '#ffb6c1',
            top: '10px',
            left: '10px',
            fontFamily: 'serif',
            ariaHidden: 'true'
          }} aria-hidden="true">"</span>
          <p style={{
            fontSize: '18px',
            fontWeight: '500',
            color: '#333',
            margin: '0',
            lineHeight: '1.6'
          }}>
            The win was a testament to the team's hard work and dedication, as they overcame a formidable opponent to secure a crucial victory.
          </p>
          <span style={{
            position: 'absolute',
            fontSize: '60px',
            color: '#ffb6c1',
            bottom: '-20px',
            right: '10px',
            fontFamily: 'serif',
            ariaHidden: 'true'
          }} aria-hidden="true">"</span>
        </blockquote>
        
        <ArticleParagraph>
          The success of this environmental restoration project has inspired similar initiatives 
          across Karnataka. The community's commitment to preserving their natural heritage while 
          promoting sustainable tourism has set a new standard for environmental conservation in India.
        </ArticleParagraph>
        
        {/* Inline Advertisement/Related Content */}
        <InlineAd role="complementary" aria-label="Related content">
          <AdContent>
            <img 
              src="/header/dcm.png" 
              alt="Related content about Raichur development" 
              loading="lazy"
              width="100%"
              height="auto"
            />
          </AdContent>
        </InlineAd>
        
        <ArticleParagraph>
          As visitors explore the newly transformed landscapes of Raichur, they discover not just 
          natural beauty, but also the rich cultural heritage that has been preserved alongside 
          the environmental restoration. The region now offers a perfect blend of nature and 
          culture, making it an ideal destination for travelers seeking authentic experiences.
        </ArticleParagraph>
        
        <ArticleParagraph>
          The local community has embraced this transformation wholeheartedly, with many residents 
          now actively participating in conservation efforts. This grassroots involvement ensures 
          the long-term sustainability of the project and creates a sense of ownership among 
          the local population.
        </ArticleParagraph>
      </ArticleContent>
      
      {/* Article Tags */}
      <ArticleTags role="complementary" aria-label="Article tags">
        <Tag aria-label="Tag: raichur">raichur</Tag>
        <Tag aria-label="Tag: karnataka">karnataka</Tag>
        <Tag aria-label="Tag: nature">nature</Tag>
        <Tag aria-label="Tag: conservation">conservation</Tag>
        <Tag aria-label="Tag: eco-tourism">eco-tourism</Tag>
        <Tag aria-label="Tag: heritage">heritage</Tag>
        <Tag aria-label="Tag: environment">environment</Tag>
        <Tag aria-label="Tag: sustainability">sustainability</Tag>
        <Tag aria-label="Tag: community">community</Tag>
        <Tag aria-label="Tag: transformation">transformation</Tag>
      </ArticleTags>
      
      {/* Social Share */}
      <SocialShare />   

      </MainContentContainer>
  )
}

export default MainContent
