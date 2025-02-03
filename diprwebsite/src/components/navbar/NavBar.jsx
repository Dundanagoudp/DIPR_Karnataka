import React, { useEffect, useState } from "react";
import {
       NavContainer,
        NewsTicker,
         NewsItem,
          NewsWrapper
       } from "../navbar/NavBar.styles";

const NavBar = () => {
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("https://api.example.com/news"); 
        const data = await response.json();
        setHeadlines(data.headlines); 
      } catch (error) {
        console.error("Error fetching news:", error);
        setHeadlines([
          "Exclusive news headline",
          "Breaking news update",
          "Latest headlines worldwide",
          "Technology innovation news",
          "Exclusive news headline"
        ]);
      }
    };

    fetchNews();
  }, []);

  return (
    <NavContainer>
      <NewsWrapper>
        <NewsTicker>
          {headlines.concat(headlines).map((headline, index) => ( 
            <NewsItem key={index}>{headline}</NewsItem>
          ))}
        </NewsTicker>
      </NewsWrapper>
    </NavContainer>
  );
};

export default NavBar;
