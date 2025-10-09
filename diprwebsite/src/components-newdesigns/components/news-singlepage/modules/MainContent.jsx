import React from 'react'
import CommentSection from './CommentSection'
import SocialShare from './SocialShare'
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
    <MainContentContainer>
      {/* Location and Date Tags */}
      <LocationTag>Raichur, Karnataka | Nature & Heritage</LocationTag>
      <DateTag>March 10, 2024</DateTag>
      
      {/* Main Article Title */}
      <ArticleTitle>
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
      <AuthorCard>
        <AuthorImage>
          <img 
            src="/header/cm.png" 
            alt="Author" 
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
            <MetaItem>
              <span style={{ marginRight: '4px' }}>👁️</span>
              1,452 views
            </MetaItem>
            <MetaItem>
              <span style={{ marginRight: '4px' }}>💬</span>
              0 Comments
            </MetaItem>
            <MetaItem>
              <span style={{ marginRight: '4px' }}>⏱️</span>
              5 min read
            </MetaItem>
          </ArticleMeta>
        </AuthorInfo>
      </AuthorCard>
      
      {/* Hero Image with Caption */}
      <HeroImage>
        <img 
          src="/state/state.jpg" 
          alt="Raichur's green transformation" 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover' 
          }} 
        />
        <ImageCaption>
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
        <QuoteBlock>
          <QuoteText>
            "The win was a testament to the team's hard work and dedication, as they overcame a 
            formidable opponent to secure a crucial victory."
          </QuoteText>
        </QuoteBlock>
        
        <ArticleParagraph>
          The success of this environmental restoration project has inspired similar initiatives 
          across Karnataka. The community's commitment to preserving their natural heritage while 
          promoting sustainable tourism has set a new standard for environmental conservation in India.
        </ArticleParagraph>
        
        {/* Inline Advertisement/Related Content */}
        <InlineAd>
          <AdContent>
            <div style={{ 
              backgroundColor: '#FFD700', 
              padding: '16px', 
              borderRadius: '8px',
              marginBottom: '12px'
            }}>
              <h4 style={{ margin: '0 0 8px 0', color: '#333' }}>
                IBENCY WON' IDRA KUSHW
              </h4>
              <p style={{ margin: '0', color: '#555', fontSize: '14px' }}>
                Discover more about Karnataka's heritage and culture
              </p>
            </div>
            <AdImage>
              <img 
                src="/header/dcm.png" 
                alt="Related content" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  borderRadius: '4px'
                }} 
              />
            </AdImage>
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
      <ArticleTags>
        <Tag>raichur</Tag>
        <Tag>karnataka</Tag>
        <Tag>nature</Tag>
        <Tag>conservation</Tag>
        <Tag>eco-tourism</Tag>
        <Tag>heritage</Tag>
        <Tag>environment</Tag>
        <Tag>sustainability</Tag>
        <Tag>community</Tag>
        <Tag>transformation</Tag>
      </ArticleTags>
      
      {/* Social Share */}
      <SocialShare />   
      {/* Comment Section */}
      <CommentSection />
    </MainContentContainer>
  )
}

export default MainContent
