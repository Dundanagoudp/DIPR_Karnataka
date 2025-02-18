import React, { useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import {
  CarouselContainer,
  CarouselItem,
  Overlay,
  ContentWrapper,
  TrendingCategory,
  NewsInfo,
  NewsTitle,
  ArrowIcon,
  DotContainer,
  Dot
} from "../Trending/Trending.styles";
import theme from "../../../theme/Theme";
import { BannerApi } from "../../../services/categoryapi/CategoryApi";

const Trending = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [trendingNews, setTrendingNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await BannerApi();
        const formattedData = data.map((item) => ({
          id: item._id,
          category: "Trending",
          date: new Date(item.createdTime).toLocaleDateString(),
          readTime: "5 min read",
          title: item.title,
          image: item.bannerImage,
          link: `/post/${item._id}`
        }));

        setTrendingNews(formattedData);
      } catch (error) {
        console.error("Error fetching banner data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (trendingNews.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % trendingNews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [trendingNews]);

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
        {trendingNews.map((_, index) => (
          <Dot key={index} active={index === currentIndex} onClick={() => setCurrentIndex(index)} />
        ))}
      </DotContainer>
    </CarouselContainer>
  );
};

export default Trending;