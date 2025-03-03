import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import {
  NavContainer,
  NewsTicker,
  NewsItem,
  NewsWrapper
} from "../navbar/NavBar.styles";
import { NewsApi } from "../../services/categoryapi/CategoryApi";
import { FontSizeContext } from "../../context/FontSizeProvider";

const NavBar = () => {
  const [headlines, setHeadlines] = useState([]);
  const { fontSize } = useContext(FontSizeContext);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await NewsApi();
        console.log("Received news data:", data);
        
        if (data && data.data && Array.isArray(data.data)) {
          setHeadlines(data.data.map(article => article.title));
        } else {
          console.error("Invalid data format received", data);
          setHeadlines([]);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <NavContainer style={{ fontSize: `${fontSize}%` }}>
      <NewsWrapper>
        <NewsTicker style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
          {headlines.map((headline, index) => (
            <NewsItem style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined} key={index}>{headline}</NewsItem>
          ))}
        </NewsTicker>
      </NewsWrapper>
    </NavContainer>
  );
};

export default NavBar;