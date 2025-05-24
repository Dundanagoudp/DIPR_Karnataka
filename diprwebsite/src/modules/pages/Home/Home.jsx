import React, { useState, useEffect } from "react";
import Trending from "../../../modules/components/Trending/Trending";
import {
  HomeContainer,
  ContentWrapper,
  NewsSection,
  MagazineSection,
} from "./Home.styles";
import Loader from "../../../components/loder/Loder";
import AllNewsData from "../../../modules/components/allnewssection2/AllNewsData";
import Videos from "../../../modules/components/homevideosection/Videos";
import Magzines2 from "../../../modules/components/magzinemodal/MagzinewithModal";
import ShortsCarousel from "../../../modules/components/homevideosection/ShortsCarousel";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  
// Simulate a 3-second loading time
  // Simulate a loading delay with useEffect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <HomeContainer>
      {isLoading ? (
        <Loader />
      ) : (
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
      )}
    </HomeContainer>
  );
};

export default Home;