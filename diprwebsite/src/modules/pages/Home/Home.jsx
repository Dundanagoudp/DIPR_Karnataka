import React, { useState, useEffect } from "react";
import Trending from "../../../modules/components/Trending/Trending";
import {
  HomeContainer,
  ContentWrapper,
  NewsSection,
  MagazineSection,
} from "./Home.styles";
// import Loader from "../../../components/loder/Loder";
import AllNewsData from "../../../modules/components/allnewssection2/AllNewsData";
import Magzines2 from "../../../modules/components/magzinemodal/MagzinewithModal";
import ShortsCarousel from "../../../modules/components/homevideosection/ShortsCarousel";
import Videos from "../../../modules/components/homevideosection/VideosHome";

const Home = () => {
  // const [isLoading, setIsLoading] = useState(true);
  

  // // useEffect(() => {
  // //   const timer = setTimeout(() => {
  // //     setIsLoading(false);
  // //   }, 3000); 

  // //   return () => clearTimeout(timer); 
  // // }, []);

  return (
    <HomeContainer role="main" aria-label="Home page">
      {/* {isLoading ? (
        <Loader />
      ) : ( */}
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
      {/* )} */}
    </HomeContainer>
  );
};

export default Home;