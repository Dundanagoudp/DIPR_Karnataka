import React, { useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { CarouselContainer, CarouselItem, Overlay, ContentWrapper, TrendingCategory, NewsInfo, NewsTitle, ArrowIcon, DotContainer, Dot } from "../Trending/Trending.styles";
import theme from "../../../theme/Theme";
import trendingImage from "../../../assets/trending.png";


const defaultTrendingNews = [
  {
    id: 1,
    category: "Trending",
    date: "Jul 24, 2023",
    readTime: "8 min read",
    title: "A month with DJI Mini 3 Pro",
    image: trendingImage,
    link: "/post/1"
  },
  {
    id: 2,
    category: "Trending",
    date: "Jan 15, 2024",
    readTime: "6 min read",
    title: "Tesla's latest autopilot innovation",
    image: trendingImage,
    link: "/post/2",
  },
  {
    id: 3,
    category: "Trending",
    date: "Feb 1, 2024",
    readTime: "10 min read",
    title: "AI revolution in the creative industry",
    image: trendingImage,
    link: "/post/3",
  },
];

const Trending = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [trendingNews, setTrendingNews] = useState(defaultTrendingNews);


  // ApI call 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTrendingNews();
        console.log("data:", data);
      } catch (error) {
        console.log("error:", error);       
      }
    };
    fetchData();
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % trendingNews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [trendingNews.length]);

  return (
    <CarouselContainer>
      {trendingNews.map((news, index) => (
        <CarouselItem key={news.id} active={index === currentIndex} bgImage={news.image}>
          <Overlay />
          <ContentWrapper>
            <div style={{ display: "flex", alignItems: "center", gap: "1%" }}>
              <TrendingCategory>{news.category}</TrendingCategory>
              <NewsInfo>• {news.date} • {news.readTime}</NewsInfo>
            </div>
            <NewsTitle>{news.title}</NewsTitle>
          </ContentWrapper>
          <ArrowIcon onClick={() => window.location.href = news.link}>
            <FiArrowUpRight size={28} color={theme.colors.background} />
          </ArrowIcon>
        </CarouselItem>
      ))}
       <DotContainer>
        {defaultTrendingNews.map((_, index) => (
          <Dot key={index} active={index === currentIndex} onClick={() => setCurrentIndex(index)} />
        ))}
      </DotContainer>
    </CarouselContainer>
  );
};

export default Trending;
