import { useState } from 'react';
import articleImage from '/public/state/state.jpg';
import testVideo from '/public/home/testvideos.mp4';
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

const articles = [
  {
    id: 1,
    title: 'THE FIRST-EVER DOUBLE-DECKER FLYOVER BUILT IN SOUTH INDIA HAS BEEN OPENED FOR TRAFFIC ON AN EXPERIMENTAL BASIS.',
    image: articleImage,
    video: testVideo,
    badge: 'BUSINESS',
  },
  {
    id: 2,
    title: 'YADGIR DISTRICT TOURIST PLACES',
    image: articleImage,
    video: testVideo,
    badge: 'BUSINESS',
  },
  {
    id: 3,
    title: 'YADGIR DISTRICT TOURIST PLACES',
    image: articleImage,
    video: testVideo,
    badge: 'BUSINESS',
  },
  {
    id: 4,
    title: 'YADGIR DISTRICT TOURIST PLACES',
    image: articleImage,
    video: testVideo,
    badge: 'BUSINESS',
  },
  {
    id: 5,
    title: 'YADGIR DISTRICT TOURIST PLACES',
    image: articleImage,
    video: testVideo,
    badge: 'BUSINESS',
  },
];

const LongVideos = () => {
  const [mainArticle, ...smallArticles] = articles;
  const [playingVideo, setPlayingVideo] = useState(null);

  const handlePlayClick = (articleId, videoSrc) => {
    setPlayingVideo(playingVideo === articleId ? null : articleId);
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
              {playingVideo === mainArticle.id ? (
                <video
                  src={mainArticle.video}
                  controls
                  autoPlay
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <>
                  <ArticleImage src={mainArticle.image} alt={mainArticle.title} />
                  <Badge>{mainArticle.badge}</Badge>
                  <PlayButton onClick={() => handlePlayClick(mainArticle.id, mainArticle.video)} />
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
              <SmallArticle key={article.id}>
                <ImageContainer>
                  {playingVideo === article.id ? (
                    <video
                      src={article.video}
                      controls
                      autoPlay
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    <>
                      <ArticleImage src={article.image} alt={article.title} />
                      <PlayButton onClick={() => handlePlayClick(article.id, article.video)} />
                    </>
                  )}
                </ImageContainer>
                <ArticleContent>
                  <Badge>{article.badge}</Badge>
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
