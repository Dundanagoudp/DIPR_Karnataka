import React, { useState, useEffect, useContext } from "react";
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
import { FontSizeContext } from "../../../../context/FontSizeProvider";
import { LanguageContext } from "../../../../context/LanguageContext"; 
import Loader from "../../../../components/apiloders/ApiLoders"; 

const LatestNewsRecommended = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { fontSize } = useContext(FontSizeContext);
  const { language } = useContext(LanguageContext); 

  useEffect(() => {
    const fetchNews = async () => {
      const userId = Cookies.get("userId");
      if (!userId) {
        alert("User not logged in. Redirecting to login page...");
        Cookies.set("redirectUrl", window.location.pathname);
        navigate("/login");
        setLoading(false);
        return;
      }

      try {
        const response = await getRecommendedNews(userId);
        if (response?.data && Array.isArray(response.data) && response.data.length > 0) {
          console.log("Received news data:", response.data);
          setNewsData(response.data);
        } else {
          console.warn("Empty news API response.");
          setNewsData([]);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
        setNewsData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [navigate]);

  const handleReadMore = async (newsId) => {
    const userId = Cookies.get("userId");
    if (!userId) {
      alert("User not logged in. Redirecting to login page...");
      Cookies.set("redirectUrl", window.location.pathname);
      navigate("/login");
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

  const getLocalizedContent = (news, field) => {
    if (language === "English") {
      return news[field] || "No content available";
    } else if (language === "Hindi") {
      return news.hindi?.[field] || news[field] || "No content available";
    } else if (language === "Kannada") {
      return news.kannada?.[field] || news[field] || "No content available";
    }
    return news[field] || "No content available";
  };

  // Show Loader only when loading is true and newsData is empty
  if (loading || newsData.length === 0) {
    return <Loader />;
  }

  return (
    <Container style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
      <Title style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>Articles</Title>

      {newsData.map((news) => (
        <NewsCard key={news._id}>
          <NewsImage
            src={news.newsImage || "https://via.placeholder.com/300"}
            alt={getLocalizedContent(news, "title")}
          />
          <NewsContent style={{ fontSize: `${fontSize}%` }}>
            <NewsHeader style={{ fontSize: `${fontSize}%` }}>
              {news.author || "Unknown Author"} •{" "}
              {news.category?.name || "General"}
            </NewsHeader>
            <NewsTitle style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
              {getLocalizedContent(news, "title")}
            </NewsTitle>

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
                fontSize: `${fontSize}%`,
              }}
            >
              {getLocalizedContent(news, "description")}
            </NewsText>

            <ReadMore style={{ fontSize: `${fontSize}%` }} onClick={() => handleReadMore(news._id)}>
              Read more
            </ReadMore>

            <AddComments style={{ fontSize: `${fontSize}%` }} newsId={news._id} />

            <NewsMeta style={{ fontSize: `${fontSize}%` }}>
              {news.isTrending && <TrendingTag>Trending</TrendingTag>}
              <span style={{ fontSize: `${fontSize}%` }}>
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