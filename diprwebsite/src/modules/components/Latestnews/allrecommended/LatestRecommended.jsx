import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLink } from "react-icons/fa";
import Cookies from "js-cookie"; 
import {
  Container,
  NewsCard,
  NewsImage,
  NewsContent,
  NewsHeader,
  NewsTitle,
  NewsText,
  ShareIcons,
  ReadMore,
  TrendingTag,
  NewsMeta,
  Title,
} from "../allrecommended/LatestRecommended.styles";
import { trackClick } from "../../../../services/newsApi/NewsApi";
import AddComments from "../../comments/AddComments";
import { getRecommendedNews } from "../../../../services/newsApi/NewsApi"; 

const LatestNewsRecommended = () => {
  const [newsData, setNewsData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNews = async () => {
      const userId = Cookies.get("userId"); 
      if (!userId) {
        alert("User not logged in. Please log in to continue.");
        return;
      }

      try {
        const response = await getRecommendedNews(userId); 
        if (
          response?.data &&
          Array.isArray(response.data) &&
          response.data.length > 0
        ) {
          console.log("Received news data:", response.data);
          setNewsData(response.data);
        } else {
          console.warn("Empty news API response.");
          setNewsData([]);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
        setNewsData([]);
      }
    };

    fetchNews();
  }, []);

  const handleReadMore = async (newsId) => {
    const userId = Cookies.get("userId"); 
    if (!userId) {
      alert("User not logged in. Please log in to continue.");
      return;
    }
    try {
      await trackClick({ newsId, userId }); 
      console.log("Click registered successfully!");
      navigate(`/news/${newsId}`);
    } catch (error) {
      console.error("Error registering click:", error);
      alert("Error tracking click. Please try again.");
    }
  };

  const shareOnFacebook = (url) => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  const shareOnTwitter = (url) => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  const copyLink = (url) => {
    navigator.clipboard.writeText(url);
    alert("Link copied to clipboard!");
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Unknown Date";
    const date = new Date(dateString);
    return isNaN(date.getTime())
      ? "Invalid Date"
      : date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        });
  };

  return (
    <Container>
      <Title>Articles</Title>

      {newsData.map((news) => (
        <NewsCard key={news._id}>
          <NewsImage
            src={news.newsImage || "https://via.placeholder.com/300"}
            alt={news.title || "News Image"}
          />
          <NewsContent>
            <NewsHeader>
              {news.author || "Unknown Author"} •{" "}
              {news.category?.name || "General"}
            </NewsHeader>
            <NewsTitle>{news.title || "Untitled News"}</NewsTitle>

            <ShareIcons>
              <FaFacebook
                onClick={() => shareOnFacebook(news.url)}
                style={{ cursor: "pointer" }}
              />
              <FaTwitter
                onClick={() => shareOnTwitter(news.url)}
                style={{ cursor: "pointer" }}
              />
              <FaLink
                onClick={() => copyLink(news.url)}
                style={{ cursor: "pointer" }}
              />
            </ShareIcons>

            <NewsText
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 5,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {news.description || "No description available."}
            </NewsText>

            <ReadMore onClick={() => handleReadMore(news._id)}>
              Read more
            </ReadMore>

            <AddComments newsId={news._id} />

            <NewsMeta>
              {news.isTrending && <TrendingTag>Trending</TrendingTag>}
              <span>
                {formatDate(news.createdTime)} • {news.readTime || "N/A"}
              </span>
            </NewsMeta>
          </NewsContent>
        </NewsCard>
      ))}
    </Container>
  );
};

export default LatestNewsRecommended;
