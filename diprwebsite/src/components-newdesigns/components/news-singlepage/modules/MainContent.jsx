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
    <MainContentContainer as="article" role="article" aria-labelledby="article-title">
      {/* Location and Date Tags */}
      <LocationTag as="div" aria-label="Article location and category">Raichur, Karnataka | Nature & Heritage</LocationTag>
      <DateTag as="time" dateTime="2024-03-10">March 10, 2024</DateTag>
      
      {/* Main Article Title */}
      <ArticleTitle id="article-title" as="h2">
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
      <AuthorCard as="aside" role="complementary" aria-labelledby="author-info-heading">
        <h3 
          id="author-info-heading" 
          style={{ position: 'absolute', left: '-9999px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }}
        >
          Article Author Information
        </h3>
        <AuthorImage>
          <img 
            src="/header/cm.png" 
            alt="Profile photo of author Ram Nath" 
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
          <AuthorName aria-label="Written by Ram Nath">By Ram Nath</AuthorName>
          <ArticleMeta>
            <MetaItem>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }} aria-hidden="true">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              <span aria-label="0 comments on this article">0 Comments</span>
            </MetaItem>
            <MetaItem>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }} aria-hidden="true">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span aria-label="Estimated reading time: 5 minutes">5 min read</span>
            </MetaItem>
          </ArticleMeta>
        </AuthorInfo>
      </AuthorCard>
      
      {/* Hero Image with Caption */}
      <HeroImage as="figure" role="img" aria-labelledby="hero-image-caption">
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
        <ImageCaption id="hero-image-caption" as="figcaption">
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
        <blockquote 
          role="complementary"
          aria-label="Key quote from article"
          style={{
            background: '#f2f2f2',
            padding: '30px 40px',
            margin: '30px 0',
            position: 'relative',
            textAlign: 'center',
            border: 'none'
          }}
        >
          <span style={{
            position: 'absolute',
            fontSize: '60px',
            color: '#ffb6c1',
            top: '10px',
            left: '10px',
            fontFamily: 'serif'
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
            fontFamily: 'serif'
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
      <ArticleTags as="nav" role="navigation" aria-labelledby="article-tags-heading">
        <h3 
          id="article-tags-heading" 
          style={{ position: 'absolute', left: '-9999px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }}
        >
          Article Tags
        </h3>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          <li><Tag as="a" href="#raichur" tabIndex="0">raichur</Tag></li>
          <li><Tag as="a" href="#karnataka" tabIndex="0">karnataka</Tag></li>
          <li><Tag as="a" href="#nature" tabIndex="0">nature</Tag></li>
          <li><Tag as="a" href="#conservation" tabIndex="0">conservation</Tag></li>
          <li><Tag as="a" href="#eco-tourism" tabIndex="0">eco-tourism</Tag></li>
          <li><Tag as="a" href="#heritage" tabIndex="0">heritage</Tag></li>
          <li><Tag as="a" href="#environment" tabIndex="0">environment</Tag></li>
          <li><Tag as="a" href="#sustainability" tabIndex="0">sustainability</Tag></li>
          <li><Tag as="a" href="#community" tabIndex="0">community</Tag></li>
          <li><Tag as="a" href="#transformation" tabIndex="0">transformation</Tag></li>
        </ul>
      </ArticleTags>
      
      {/* Social Share */}
      <SocialShare />   

      </MainContentContainer>
  )
}

export default MainContent
