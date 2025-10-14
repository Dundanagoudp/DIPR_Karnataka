import React, { useContext, useEffect, useState } from 'react'
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
import { LanguageContext } from '../../../../context/LanguageContext'
import { getNewsByid } from '../../../../services/newsApi/NewsApi'
import { useParams } from 'react-router-dom'

const MainContent = () => {
  const {language} = useContext(LanguageContext)
  const {id} = useParams()

  const [rawNews, setRawNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [news, setNews] = useState({
    id: '',
    title: '',
    excerpt: '',
    content: '',
    paragraphs: ['', ''],
    date: '',
    image: '/placeholder.svg',
    category: '',
    author: '',
    authorImage: '/placeholder.svg',
    alt: '',
    tags: [],
    quote: 'The win was a testament to the team\'s hard work and dedication, as they overcame a formidable opponent to secure a crucial victory.',
    comments: 0,
    readingTime: 0
  });
  // get news by id
  useEffect(() => {
    let mounted = true;
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await getNewsByid(id);
        console.log('getNewsByid response', response);
  
        if (!mounted) return;
        // handle both single-object and array responses
        const data = response?.data
          ? Array.isArray(response.data)
            ? response.data
            : [response.data]
          : [];
  
        setRawNews(data);
      } catch (err) {
        console.error('fetchNews error', err);
        setRawNews([]);
      } finally {
        if (mounted) setLoading(false);
      }
    };
    if (id) fetchNews();
    return () => { mounted = false; };
  }, [id]);

  useEffect(() => {
    if (!rawNews || rawNews.length === 0) {
      console.log('rawNews empty', rawNews);
      setNews(null);
      return;
    }
  
    const langKey = language === "English" ? "English" : language === "Hindi" ? "hindi" : "kannada";
  
    try {
      const localized = rawNews.map((item) => {
        // safe category extraction
        const cat = item.category;
        let categoryName = "";
        if (cat) {
          if (typeof cat === "string") {
            categoryName = cat;
          } else if (typeof cat === "object") {
            // cat[langKey] could be string or object
            const localizedCat = cat[langKey];
            categoryName =
              (localizedCat && (typeof localizedCat === "string" ? localizedCat : localizedCat.name)) ||
              cat.name ||
              cat.title ||
              "";
          }
        }
  
        const title = (item[langKey] && item[langKey].title) || item.title || "";
        const excerpt = (item[langKey] && item[langKey].description) || item.description || "";
        let paragraph1 = "";
        let paragraph2 = "";
        if (excerpt.length > 0) {
          // Smart split: try to cut near the middle at the nearest sentence boundary.
          const middle = Math.floor(excerpt.length / 2);
          const splitPoint = excerpt.indexOf('.', middle) !== -1
            ? excerpt.indexOf('.', middle) + 1
            : middle;
        
          paragraph1 = excerpt.slice(0, splitPoint).trim();
          paragraph2 = excerpt.slice(splitPoint).trim();
        }
        return {
          id: item._id,
          title: title ? (title.length > 50 ? title.slice(0, 50) + "..." : title) : "",
          excerpt: excerpt ? (excerpt.length > 150 ? excerpt.slice(0, 150) + "..." : excerpt) : "",
          content :excerpt,
          paragraphs: [paragraph1, paragraph2],
          date: item.publishedAt || item.createdAt
            ? new Date(item.publishedAt || item.createdAt).toLocaleDateString()
            : "",
          image: item.newsImage || "/placeholder.svg",
          category: categoryName,
          author: item.author || "",
          alt: item.title || "",
          tags: item.tags || [],
          quote: item.quote || "The win was a testament to the team's hard work and dedication, as they overcame a formidable opponent to secure a crucial victory.",
        };
      });
  
      console.log('localized =>', localized);
      // this is a single-article page: use the first item as the article object
      setNews(localized[0] || null);
    } catch (err) {
      console.error('localize error', err);
      setNews(null);
    }
  }, [rawNews, language]);

  // Show loading state while data is being fetched
  if (loading) {
    return (
      <MainContentContainer as="article" role="article" aria-labelledby="article-title">
        <div style={{ textAlign: 'center', padding: '50px' }}>
          Loading article...
        </div>
      </MainContentContainer>
    );
  }

  // Don't render if news is null (error state or no data)
  if (!news) {
    return (
      <MainContentContainer as="article" role="article" aria-labelledby="article-title">
        <div style={{ textAlign: 'center', padding: '50px' }}>
          Article not found or unable to load.
        </div>
      </MainContentContainer>
    );
  }

  return (
    <MainContentContainer as="article" role="article" aria-labelledby="article-title">
      {/* Location and Date Tags */}
      <LocationTag as="div" aria-label="Article location and category">Raichur, Karnataka | Nature & Heritage</LocationTag>
      <DateTag as="time" dateTime="2024-03-10">{news.date}</DateTag>
      
      {/* Main Article Title */}
      <ArticleTitle id="article-title" as="h2">
        {news.title}
      </ArticleTitle>
      
      {/* Subheadline */}
      <p style={{ 
        fontSize: '18px', 
        color: '#666', 
        marginBottom: '24px',
        fontStyle: 'italic'
      }}>
        {news.excerpt}
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
            src={news.authorImage} 
            alt={news.author} 
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
          <AuthorName aria-label="Written by {news.author}">By {news.author}</AuthorName>
          <ArticleMeta>
            <MetaItem>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }} aria-hidden="true">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              <span aria-label="0 comments on this article">{news.comments} Comments</span>
            </MetaItem>
            <MetaItem>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }} aria-hidden="true">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span aria-label="Estimated reading time: {news.readingTime} minutes">{news.readingTime} min read</span>
            </MetaItem>
          </ArticleMeta>
        </AuthorInfo>
      </AuthorCard>
      
      {/* Hero Image with Caption */}
      <HeroImage as="figure" role="img" aria-labelledby="hero-image-caption">
        <img 
          src={news.image} 
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
          {news.alt}
        </ImageCaption>
      </HeroImage>
      
      {/* Article Content */}
      <ArticleContent>
        <ArticleParagraph>
          {news.paragraphs[0]}
     
        </ArticleParagraph>
        {/* <ArticleParagraph>
          {news.paragraphs[1]}
        </ArticleParagraph> */}
        
        
        {/* Quote Block */}
        {/* <blockquote 
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
            {news.quote}
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
          {news.paragraphs[1]}
        </ArticleParagraph> */}
        
        {/* Inline Advertisement/Related Content */}
        {/* <InlineAd role="complementary" aria-label="Related content">
          <AdContent>
            <img 
              src="/header/dcm.png" 
              alt="Related content about Raichur development" 
              loading="lazy"
              width="100%"
              height="auto"
            />
          </AdContent>
        </InlineAd> */}
        
        <ArticleParagraph>
          {news.paragraphs[1]}
        </ArticleParagraph>
{/*         
        <ArticleParagraph>
          The local community has embraced this transformation wholeheartedly, with many residents 
          now actively participating in conservation efforts. This grassroots involvement ensures 
          the long-term sustainability of the project and creates a sense of ownership among 
          the local population.
        </ArticleParagraph> */}
      </ArticleContent>
      
      {/* Article Tags */}
      {/* <ArticleTags as="nav" role="navigation" aria-labelledby="article-tags-heading">
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
      </ArticleTags> */}
      
      {/* Social Share */}
      <SocialShare />   

      </MainContentContainer>
  )
}

export default MainContent
