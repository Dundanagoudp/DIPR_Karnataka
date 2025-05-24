import React, { useState, useEffect } from "react";
import Trending from "../../components/Trending/Trending";
import {
  HomeContainer,
  ContentWrapper,
  NewsSection,
  MagazineSection,
} from "../../pages/Home/Home.styles";
import Loader from "../../../components/loder/Loder";
import AllNewsData from "../../components/allnewssection2/AllNewsData";
import Videos from "../../components/homevideosection/Videos";
import Magzines2 from "../../components/magzinemodal/MagzinewithModal";
import ShortsCarousel from "../../components/homevideosection/ShortsCarousel";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  

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