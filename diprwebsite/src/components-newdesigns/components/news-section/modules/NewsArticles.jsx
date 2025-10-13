import {
  Container,
  GridLayout,
  FeaturedCard,
  FeaturedImage,
  FeaturedContent,
  FeaturedMeta,
  FeaturedTitle,
  FeaturedExcerpt,
  NewsColumn,
  ColumnHeader,
  NewsList,
  NewsItem,
  NewsItemContent,
  NewsTitle,
  NewsDate,
  NewsAuthor,
  PopularItem,
  PopularThumbnail,
  PopularContent,
  PopularTitle,
  PopularDate,
} from "./NewsArticles.styles"

const NewsArticles = () => {
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
    <Container as="section" aria-labelledby="news-articles-heading" role="region">
      <h2 
        id="news-articles-heading" 
        style={{ position: 'absolute', left: '-9999px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }}
      >
        Featured, Latest and Popular News
      </h2>
      
      <GridLayout>
        {/* Featured Article - Left Column */}
        <FeaturedCard 
          as="article" 
          role="article" 
          aria-labelledby="featured-article-title"
          tabIndex="0"
        >
          <FeaturedImage>
            <img
              src="/state/state.jpg"
              alt="Featured story: Fighter jet on display at aviation meet"
              loading="lazy"
              style={{ 
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }}
            />
          </FeaturedImage>
          <FeaturedContent>
            <FeaturedMeta>
              <NewsDate as="time" dateTime="2023-03-20">March 20, 2023</NewsDate>
              <NewsAuthor aria-label="Author: Dan Davis">Dan Davis</NewsAuthor>
            </FeaturedMeta>
            <FeaturedTitle id="featured-article-title" as="h3">
              Garret Scores Hat-Trick in Champions League Win
            </FeaturedTitle>
            <FeaturedExcerpt>
              In a stunning display of skill and precision, Christian Garret led his team to victory in the Champions
              League with an unforgettable hat-trick. The young striker's exceptional performance has catapulted him to
              the forefront of the football world, with many predicting a bright future ahead.
            </FeaturedExcerpt>
          </FeaturedContent>
        </FeaturedCard>

        {/* Latest News - Center Column */}
        <NewsColumn as="div" role="region" aria-labelledby="latest-news-heading">
          <ColumnHeader id="latest-news-heading" as="h3">LATEST NEWS</ColumnHeader>
          <NewsList role="feed" aria-label="Latest news articles" aria-busy="false">
            <NewsItem 
              as="article" 
              role="article"
              aria-labelledby="latest-news-1"
              tabIndex="0"
            >
              <NewsItemContent>
                <NewsDate as="time" dateTime="2023-03-27">March 27, 2023</NewsDate>
                <NewsAuthor aria-label="Author: Dan Davis">Dan Davis</NewsAuthor>
                <NewsTitle id="latest-news-1" as="h4">
                  Record-Breaking Sprinter Breaks Her Own World Record at Athletics Meet
                </NewsTitle>
                <p>
                  Sprinter Daria Zachary has broken her own world record in the 100-meter dash at an athletics meet,
                  stunning fans and competitors alike with her blazing speed.
                </p>
              </NewsItemContent>
            </NewsItem>

            <NewsItem 
              as="article" 
              role="article"
              aria-labelledby="latest-news-2"
              tabIndex="0"
            >
              <NewsItemContent>
                <NewsDate as="time" dateTime="2023-03-26">March 26, 2023</NewsDate>
                <NewsAuthor aria-label="Author: Sacha Cameron">Sacha Cameron</NewsAuthor>
                <NewsTitle id="latest-news-2" as="h4">
                  Major League Baseball Season Kicks Off with Exciting New Rule Changes
                </NewsTitle>
                <p>
                  The Major League Baseball season has officially begun, with several exciting rule changes designed to
                  speed up the pace of play and increase scoring.
                </p>
              </NewsItemContent>
            </NewsItem>

            <NewsItem 
              as="article" 
              role="article"
              aria-labelledby="latest-news-3"
              tabIndex="0"
            >
              <NewsItemContent>
                <NewsDate as="time" dateTime="2023-03-25">March 25, 2023</NewsDate>
                <NewsAuthor aria-label="Author: Rupert Flemings">Rupert Flemings</NewsAuthor>
                <NewsTitle id="latest-news-3" as="h4">Race Car Season Starts with Thrilling Race in Melbourne</NewsTitle>
                <p>
                  The Race Car season has kicked off with a thrilling race in Melbourne, Australia, with top drivers
                  competing for the podium in a tight and exciting race.
                </p>
              </NewsItemContent>
            </NewsItem>
          </NewsList>
        </NewsColumn>

        {/* Popular News - Right Column */}
        <NewsColumn as="div" role="region" aria-labelledby="popular-news-heading">
          <ColumnHeader id="popular-news-heading" as="h3">POPULAR NEWS</ColumnHeader>
          <NewsList role="feed" aria-label="Popular news articles" aria-busy="false">
            <PopularItem 
              as="article" 
              role="article"
              aria-labelledby="popular-news-1"
              tabIndex="0"
            >
              <PopularThumbnail>
                <img
                  src="/state/2ndimage.jpg"
                  alt="Thumbnail: Local Legend Santana Reeds at press conference"
                  loading="lazy"
                  style={{ 
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />
              </PopularThumbnail>
              <PopularContent>
                <PopularDate as="time" dateTime="2023-03-19">March 19, 2023</PopularDate>
                <PopularTitle id="popular-news-1" as="h4">
                  Local Legend Santana Reeds Returns to Professional Competition After Long Layoff
                </PopularTitle>
              </PopularContent>
            </PopularItem>

            <PopularItem 
              as="article" 
              role="article"
              aria-labelledby="popular-news-2"
              tabIndex="0"
            >
              <PopularThumbnail>
                <img
                  src="/state/2ndsection.jpg"
                  alt="Thumbnail: Aviation display event"
                  loading="lazy"
                  style={{ 
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />
              </PopularThumbnail>
              <PopularContent>
                <PopularDate as="time" dateTime="2023-03-18">March 18, 2023</PopularDate>
                <PopularTitle id="popular-news-2" as="h4">
                  Christian Garret Breaks Scoring Record in European Soccer League
                </PopularTitle>
              </PopularContent>
            </PopularItem>

            <PopularItem 
              as="article" 
              role="article"
              aria-labelledby="popular-news-3"
              tabIndex="0"
            >
              <PopularThumbnail>
                <img
                  src="/state/sidebar.jpg"
                  alt="Thumbnail: Tennis champion Zoe Dmitriov"
                  loading="lazy"
                  style={{ 
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />
              </PopularThumbnail>
              <PopularContent>
                <PopularDate as="time" dateTime="2023-03-19">March 19, 2023</PopularDate>
                <PopularTitle id="popular-news-3" as="h4">
                  Tennis Star Zoe Dmitriov Wins Record Ninth Australian Open Title
                </PopularTitle>
              </PopularContent>
            </PopularItem>

            <PopularItem 
              as="article" 
              role="article"
              aria-labelledby="popular-news-4"
              tabIndex="0"
            >
              <PopularThumbnail>
                <img
                  src="/state/sidebar2.jpg"
                  alt="Thumbnail: NBA All-Star announcement"
                  loading="lazy"
                  style={{ 
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />
              </PopularThumbnail>
              <PopularContent>
                <PopularDate as="time" dateTime="2023-03-18">March 18, 2023</PopularDate>
                <PopularTitle id="popular-news-4" as="h4">
                  NBA Announces All-Star Roster, with Top Players Set to Compete in Las Vegas
                </PopularTitle>
              </PopularContent>
            </PopularItem>
          </NewsList>
        </NewsColumn>
      </GridLayout>
    </Container>
  )
}

export default NewsArticles
