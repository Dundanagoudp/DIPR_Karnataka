import React, { useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { 
  CarouselContainer, 
  CarouselItem, 
  TrendingTag, 
  NewsInfo, 
  NewsTitle, 
  ArrowIcon 
} from "../Trending/Trending.styles";

const trendingNews = [
  {
    id: 1,
    category: "Trending",
    date: "Jul 24, 2023",
    readTime: "8 min read",
    title: "A month with DJI Mini 3 Pro",
    image: "https://source.unsplash.com/900x500/?drone,technology",
  },
  {
    id: 2,
    category: "Trending",
    date: "Jan 15, 2024",
    readTime: "6 min read",
    title: "Tesla's latest autopilot innovation",
    image: "https://source.unsplash.com/900x500/?tesla,car",
  },
  {
    id: 3,
    category: "Trending",
    date: "Feb 1, 2024",
    readTime: "10 min read",
    title: "AI revolution in the creative industry",
    image: "https://source.unsplash.com/900x500/?ai,robotics",
  },
];

const Trending = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % trendingNews.length);
    }, 4000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <CarouselContainer>
      {trendingNews.map((news, index) => (
        <CarouselItem 
          key={news.id} 
          active={index === currentIndex} 
          bgImage={news.image}
        >
          <TrendingTag>{news.category}</TrendingTag>
          <NewsInfo>
            {news.date} • {news.readTime}
          </NewsInfo>
          <NewsTitle>{news.title}</NewsTitle>
          <ArrowIcon>
            <FiArrowUpRight size={24} color="#ffffff" />
          </ArrowIcon>
        </CarouselItem>
      ))}
    </CarouselContainer>
  );
};

export default Trending;
