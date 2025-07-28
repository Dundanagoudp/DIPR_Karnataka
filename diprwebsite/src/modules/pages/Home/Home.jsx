import Trending from "../../../modules/components/Trending/Trending";
import {
  HomeContainer,
  ContentWrapper,
  NewsSection,
  MagazineSection,
} from "./Home.styles";
import AllNewsData from "../../../modules/components/allnewssection2/AllNewsData";
import Magzines2 from "../../../modules/components/magzinemodal/MagzinewithModal";
import ShortsCarousel from "../../../modules/components/homevideosection/ShortsCarousel";
import Videos from "../../../modules/components/homevideosection/VideosHome";

const Home = () => {

  return (
    <HomeContainer role="main" aria-label="Home page">
        <>
          <Trending />
          <ContentWrapper>
            <NewsSection role="region" aria-label="News section">
              <Magzines2/>
            </NewsSection>
            <MagazineSection role="region" aria-label="Magazine section">
              <AllNewsData/>
            </MagazineSection>       
              <ShortsCarousel/>
            <Videos/>
          </ContentWrapper>
        </>
    </HomeContainer>
  );
};

export default Home;