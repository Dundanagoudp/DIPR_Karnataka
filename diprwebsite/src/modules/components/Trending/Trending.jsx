import React, { useContext, useEffect, useState } from "react";
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
import { FontSizeContext } from "../../../context/FontSizeProvider";

const Trending = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [trendingNews, setTrendingNews] = useState([]);
      const { fontSize } = useContext(FontSizeContext);


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
    <CarouselContainer style={{ fontSize: `${fontSize}%` }}>
      {trendingNews.map((news, index) => (
        <CarouselItem style={{ fontSize: `${fontSize}%` }} key={news.id} active={index === currentIndex} bgImage={news.image}>
          <Overlay />
          <ContentWrapper>
            <div style={{ display: "flex", alignItems: "center", gap: "1%", fontSize: `${fontSize}%` }}>
              <TrendingCategory style={{ fontSize: `${fontSize}%` }}>{news.category}</TrendingCategory>
              <NewsInfo style={{ fontSize: `${fontSize}%` }}>• {news.date} • {news.readTime}</NewsInfo>
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