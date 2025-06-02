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
    <HomeContainer>
      {/* {isLoading ? (
        <Loader />
      ) : ( */}
        <>
          <Trending />
          <ContentWrapper>
            <NewsSection>
              <Magzines2/>
            </NewsSection>
            <MagazineSection>
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