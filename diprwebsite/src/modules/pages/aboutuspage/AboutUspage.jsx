import React from "react";
import AboutUsText from "../../components/aboutuscom/aboutustexts/AboutUsTextpage";
import AboutUsRecommendeds from "../../components/aboutuscom/aboutRecommended/RecommendedNews";
import AboutusAllnews from "../../components/aboutuscom/aboutusnews/AboutAllNews";
import {
  PageContainer,
  ContentContainer,
  RecommendedContainer,
  AllNewsContainer
} from "../aboutuspage/AboutUspage.styles";

const AboutUspage = () => (
  <PageContainer>
    <AboutUsText />
    <ContentContainer>
      <RecommendedContainer>
        <AboutUsRecommendeds />
      </RecommendedContainer>
      <AllNewsContainer>
        <AboutusAllnews />
      </AllNewsContainer>
    </ContentContainer>
  </PageContainer>
);

export default AboutUspage;
