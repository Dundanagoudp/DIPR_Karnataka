import React from "react";
import Trending from "../../components/Trending/Trending";
import AllNews from "../../components/allnews/AllNews";
import MagaZines from "../../components/magazine/MagaZine";
import { HomeContainer,
   ContentWrapper, 
   NewsSection, 
   MagazineSection 
  } from "../../pages/Home/Home.styles";

const Home = () => {
  return (
    <HomeContainer>
      <Trending />
      <ContentWrapper>
        <NewsSection>
          <AllNews />
        </NewsSection>
        <MagazineSection>
          <MagaZines />
        </MagazineSection>
      </ContentWrapper>
    </HomeContainer>
  );
};

export default Home;
