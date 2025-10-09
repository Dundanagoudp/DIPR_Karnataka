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
  return (
    <Container>
      <GridLayout>
        {/* Featured Article - Left Column */}
        <FeaturedCard>
          <FeaturedImage>
            <img
              src="/state/state.jpg"
              alt="Fighter jet on display at aviation meet"
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
              <NewsDate>March 20, 2023</NewsDate>
              <NewsAuthor>Dan Davis</NewsAuthor>
            </FeaturedMeta>
            <FeaturedTitle>Garret Scores Hat-Trick in Champions League Win</FeaturedTitle>
            <FeaturedExcerpt>
              In a stunning display of skill and precision, Christian Garret led his team to victory in the Champions
              League with an unforgettable hat-trick. The young striker's exceptional performance has catapulted him to
              the forefront of the football world, with many predicting a bright future ahead.
            </FeaturedExcerpt>
          </FeaturedContent>
        </FeaturedCard>

        {/* Latest News - Center Column */}
        <NewsColumn>
          <ColumnHeader>LATEST NEWS</ColumnHeader>
          <NewsList>
            <NewsItem>
              <NewsItemContent>
                <NewsDate>March 27, 2023</NewsDate>
                <NewsAuthor>Dan Davis</NewsAuthor>
                <NewsTitle>
                  Record-Breaking Sprinter Breaks Her Own World Record at Athletics Meet
                </NewsTitle>
                <p>
                  Sprinter Daria Zachary has broken her own world record in the 100-meter dash at an athletics meet,
                  stunning fans and competitors alike with her blazing speed.
                </p>
              </NewsItemContent>
            </NewsItem>

            <NewsItem>
              <NewsItemContent>
                <NewsDate>March 26, 2023</NewsDate>
                <NewsAuthor>Sacha Cameron</NewsAuthor>
                <NewsTitle>
                  Major League Baseball Season Kicks Off with Exciting New Rule Changes
                </NewsTitle>
                <p>
                  The Major League Baseball season has officially begun, with several exciting rule changes designed to
                  speed up the pace of play and increase scoring.
                </p>
              </NewsItemContent>
            </NewsItem>

            <NewsItem>
              <NewsItemContent>
                <NewsDate>March 25, 2023</NewsDate>
                <NewsAuthor>Rupert Flemings</NewsAuthor>
                <NewsTitle>Race Car Season Starts with Thrilling Race in Melbourne</NewsTitle>
                <p>
                  The Race Car season has kicked off with a thrilling race in Melbourne, Australia, with top drivers
                  competing for the podium in a tight and exciting race.
                </p>
              </NewsItemContent>
              
            </NewsItem>
            
          </NewsList>
        </NewsColumn>

        {/* Popular News - Right Column */}
        <NewsColumn>
          <ColumnHeader>POPULAR NEWS</ColumnHeader>
          <NewsList>
            <PopularItem>
              <PopularThumbnail>
                <img
                  src="/state/2ndimage.jpg"
                  alt="Indian politician speaking at press conference"
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
                <PopularDate>March 19, 2023</PopularDate>
                <PopularTitle>
                  Local Legend Santana Reeds Returns to Professional Competition After Long Layoff
                </PopularTitle>
              </PopularContent>
            </PopularItem>

            <PopularItem>
              <PopularThumbnail>
                <img
                  src="/state/2ndsection.jpg"
                  alt="Aviation display with crowd viewing aircraft"
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
                <PopularDate>March 18, 2023</PopularDate>
                <PopularTitle>
                  Christian Garret Breaks Scoring Record in European Soccer League
                </PopularTitle>
              </PopularContent>
            </PopularItem>

            <PopularItem>
              <PopularThumbnail>
                <img
                  src="/state/sidebar.jpg"
                  alt="Political leader at video conference event"
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
                <PopularDate>March 19, 2023</PopularDate>
                <PopularTitle>
                  Tennis Star Zoe Dmitriov Wins Record Ninth Australian Open Title
                </PopularTitle>
              </PopularContent>
            </PopularItem>

            <PopularItem>
              <PopularThumbnail>
                <img
                  src="/state/sidebar2.jpg"
                  alt="Political statement on anti-incumbency"
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
                <PopularDate>March 18, 2023</PopularDate>
                <PopularTitle>
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
