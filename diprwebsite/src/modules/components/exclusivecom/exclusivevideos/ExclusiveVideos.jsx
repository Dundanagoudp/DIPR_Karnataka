import React, { useEffect, useState } from "react";
import {
  CarouselContainer,
  CarouselItem,
  Overlay,
  ContentWrapper,
  TrendingCategory,
  NewsInfo,
  NewsTitle,
  NewsTicker,
  NewsItem,
  NavContainer,
  NewsWrapper,
  CarouselInner
} from "../exclusivevideos/ExclusiveVideos.styles";
import Videos from "../../../../assets/Videos.png";

const ExclusiveVideos = () => {
  const [trendingNews, setTrendingNews] = useState([
    {
      id: 1,
      category: "Trending",
      date: "Jul 24, 2023",
      readTime: "8 min read",
      title: "A month with DJI Mini 3",
      image: Videos,
      link: "#",
    },
    {
      id: 2,
      category: "Trending",
      date: "Jul 24, 2023",
      readTime: "8 min read",
      title: "Tech Innovation in 2024",
      image: Videos,
      link: "#",
    },
  ]);

  const headlines = trendingNews.length > 0 ? trendingNews.map(news => news.title) : ["No trending news available"];

  return (
    <CarouselContainer>
      <CarouselInner>
        {trendingNews.length > 0 ? (
          trendingNews.map((news) => (
            <CarouselItem key={news.id} bgImage={news.image}>
              <Overlay />
              <ContentWrapper>
                <div style={{ display: "flex", alignItems: "center", gap: "1%" }}>
                  <TrendingCategory>{news.category}</TrendingCategory>
                  <NewsInfo>• {news.date} • {news.readTime}</NewsInfo>
                </div>
                <NewsTitle>{news.title}</NewsTitle>
                <NavContainer>
                  <NewsWrapper>
                    <NewsTicker>
                      {headlines.map((headline, index) => (
                        <NewsItem key={index}>{headline}</NewsItem>
                      ))}
                    </NewsTicker>
                  </NewsWrapper>
                </NavContainer>
              </ContentWrapper>
            </CarouselItem>
          ))
        ) : (
          <h2>No Exclusive Videos Available</h2>
        )}
      </CarouselInner>
    </CarouselContainer>
  );
};

export default ExclusiveVideos;
