import { useState, useEffect } from 'react';
import { getLongVideos } from "../../../../../services/videoApi/videoApi";
import {
  ArticlesSection,
  Container,
  SectionHeader,
  Title,
  ArticlesGrid,
  MainArticle,
  SmallArticlesGrid,
  SmallArticle,
  ImageContainer,
  ArticleImage,
  PlayButton,
  Badge,
  ArticleContent,
  ArticleTitle,
} from './LongVideos.styles';

const LongVideos = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [playingVideo, setPlayingVideo] = useState(null);
  
  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      try {
        const response = await getLongVideos();
        if (response && Array.isArray(response.data)) {
          setArticles(response.data);
        } else {
          setArticles([]);
          setError('Failed to load videos');
        }
      } catch (error) {
        console.error('Error fetching videos:', error);
        setError('Error loading videos');
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };
    
    fetchVideos();
  }, []);
  
  // If no articles are loaded yet, return null or loading state
  if (loading) {
    return (
      <ArticlesSection>
        <Container>
          <SectionHeader>
            <Title>Latest Videos</Title>
          </SectionHeader>
          <div>Loading videos...</div>
        </Container>
      </ArticlesSection>
    );
  }
  
  if (error || articles.length === 0) {
    return (
      <ArticlesSection>
        <Container>
          <SectionHeader>
            <Title>Latest Videos</Title>
          </SectionHeader>
          <div>{error || 'No videos available'}</div>
        </Container>
      </ArticlesSection>
    );
  }
  
  // Get the main article and up to 4 small articles
  const mainArticle = articles[0];
  const smallArticles = articles.slice(1, 5);

  const handlePlayClick = (articleId, videoSrc) => {
    setPlayingVideo(playingVideo === articleId ? null : articleId);
    
    // Force the video to load and play after a short delay
    setTimeout(() => {
      const videoElement = document.getElementById(articleId);
      if (videoElement) {
        videoElement.load(); // Reload the video source
        videoElement.play().catch((error) => {
          console.error("Error playing video:", error);
        });
      }
    }, 100);
  };

  return (
    <ArticlesSection>
      <Container>
        <SectionHeader>
          <Title>Latest Videos</Title>
        </SectionHeader>

        <ArticlesGrid>
          {/* Main Large Article */}
          <MainArticle>
            <ImageContainer large>
              {playingVideo === mainArticle._id ? (
                <video
                  id={mainArticle._id}
                  src={mainArticle.video_url}
                  controls
                  autoPlay
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  aria-label={mainArticle.title}
                />
              ) : (
                <>
                  <ArticleImage 
                    src={mainArticle.thumbnail || '/public/home/home.png'} 
                    alt={mainArticle.title} 
                  />
                  <Badge>{mainArticle.category?.name || 'VIDEO'}</Badge>
                  <PlayButton 
                    onClick={() => handlePlayClick(mainArticle._id, mainArticle.video_url)} 
                    aria-label={`Play ${mainArticle.title}`} 
                  />
                  <ArticleContent>
                    <ArticleTitle large>{mainArticle.title}</ArticleTitle>
                  </ArticleContent>
                </>
              )}
            </ImageContainer>
          </MainArticle>

          {/* Small Articles Grid */}
          <SmallArticlesGrid>
            {smallArticles.map((article) => (
              <SmallArticle key={article._id}>
                <ImageContainer>
                  {playingVideo === article._id ? (
                    <video
                      id={article._id}
                      src={article.video_url}
                      controls
                      autoPlay
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      aria-label={article.title}
                    />
                  ) : (
                    <>
                      <ArticleImage 
                        src={article.thumbnail || '/public/home/home.png'} 
                        alt={article.title} 
                      />
                      <PlayButton 
                        onClick={() => handlePlayClick(article._id, article.video_url)} 
                        aria-label={`Play ${article.title}`} 
                      />
                    </>
                  )}
                </ImageContainer>
                <ArticleContent>
                  <Badge>{article.category?.name || 'VIDEO'}</Badge>
                  <ArticleTitle>{article.title}</ArticleTitle>
                </ArticleContent>
              </SmallArticle>
            ))}
          </SmallArticlesGrid>
        </ArticlesGrid>
      </Container>
    </ArticlesSection>
  );
};

export default LongVideos;
