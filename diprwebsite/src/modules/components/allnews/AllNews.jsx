import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLink } from "react-icons/fa";
import Cookies from "js-cookie";
import {
  Container,
  TabsContainer,
  Tab,
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
} from "../allnews/AllNews.styles";
import {
  CategoryApi,
  NewsApi,
} from "../../../services/categoryapi/CategoryApi";
import { trackClick } from "../../../services/newsApi/NewsApi";
import AddComments from "../comments/AddComments";
import { FontSizeContext } from "../../../context/FontSizeProvider";

const AllNews = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [newsData, setNewsData] = useState([]);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const { fontSize  } = useContext(FontSizeContext);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await CategoryApi();
        if (response?.data && Array.isArray(response.data) && response.data.length > 0) {
          setCategories(response.data);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await NewsApi(activeTab);
        if (response?.data && Array.isArray(response.data) && response.data.length > 0) {
          setNewsData(response.data);
        } else {
          setNewsData([]);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
        setNewsData([]);
      }
    };

    fetchNews();
  }, [activeTab]);

  const handleReadMore = async (newsId) => {
    const userId = Cookies.get("userId");
    if (!userId) {
      alert("User not logged in. Please log in to continue.");
      return;
    }

    try {
      await trackClick({ newsId, userId });
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
      <Title style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined} >All News</Title>
      <TabsContainer style={{ fontSize: `${fontSize}%` }}>
        {categories.map((category) => (
          <Tab
            key={category._id}
            active={activeTab === category._id}
            onClick={() => setActiveTab(category._id)}
            style={{ fontSize: `${fontSize}%` }}
          >
            {category.name}
          </Tab>
        ))}
      </TabsContainer>

      {newsData.map((news) => (
        <NewsCard style={{ fontSize: `${fontSize}%` }} key={news._id}>
          <NewsImage
            src={news.newsImage || "https://via.placeholder.com/300"}
            alt={news.title || "News Image"}
          />
          <NewsContent style={{ fontSize: `${fontSize}%` }}>
            <NewsHeader style={{ fontSize: `${fontSize}%` }}>
              {news.author || "Unknown Author"} • {news.category?.name || "General"}
            </NewsHeader>
            <NewsTitle style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>{news.title || "Untitled News"}</NewsTitle>

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
                fontSize: `${fontSize}%`
              }}
              
            >
              {news.description || "No description available."}
            </NewsText>

            <ReadMore style={{ fontSize: `${fontSize}%` }} onClick={() => handleReadMore(news._id)}>Read more</ReadMore>

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

export default AllNews;
