import React, { useEffect, useState } from "react";
import AboutUsText from "../../components/aboutuscom/aboutustexts/AboutUsTextpage";
import AboutUsRecommendeds from "../../components/aboutuscom/aboutRecommended/RecommendedNews";
import AboutusAllnews from "../../components/aboutuscom/aboutusnews/AboutAllNews";
import {
  PageContainer,
  ContentContainer,
  RecommendedContainer,
  AllNewsContainer,
} from "../aboutuspage/AboutUspage.styles";
import Loader from "../../../components/loder/Loder"; // Import the Loader component

const AboutUspage = () => {
  const [isLoading, setIsLoading] = useState(true); // State to manage loading

  useEffect(() => {
    // Simulate a 3-second loading time
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after 3 seconds
    }, 3000);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  // Display the Loader while isLoading is true
  if (isLoading) {
    return <Loader />;
  }

  return (
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
};

export default AboutUspage;