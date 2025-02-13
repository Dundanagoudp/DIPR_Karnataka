import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLink } from "react-icons/fa";
import Cookies from "js-cookie"; // Import for userId retrieval
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
import { trackClick } from "../../../services/newsApi/NewsApi"; // Import trackClick API
import AddComments from "../comments/AddComments";

const AllNews = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [newsData, setNewsData] = useState([]);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate(); // Use React Router for navigation

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await CategoryApi();
        if (
          response?.data &&
          Array.isArray(response.data) &&
          response.data.length > 0
        ) {
          setCategories(response.data);
        } else {
          console.warn("Empty category API response.");
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
  }, [activeTab]);

  const handleReadMore = async (newsId) => {
    const userId = Cookies.get("userId"); // Retrieve userId from cookies
    if (!userId) {
      alert("User not logged in. Please log in to continue.");
      return;
    }

    try {
      await trackClick({ newsId, userId }); // Register click before navigating
      console.log("Click registered successfully!");
      navigate(`/news/${newsId}`); // Navigate after successful API call
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
      <Title>All News</Title>
      <TabsContainer>
        {categories.length > 0 ? (
          categories.map((category) => (
            <Tab
              key={category._id}
              active={activeTab === category._id}
              onClick={() => setActiveTab(category._id)}
            >
              {category.name}
            </Tab>
          ))
        ) : (
          <Tab>No Categories Available</Tab>
        )}
      </TabsContainer>

      {newsData.length > 0 ? (
        newsData.map((news) => (
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

              {/* Read More Button - Registers Click & Navigates */}
              <ReadMore onClick={() => handleReadMore(news._id)}>
                Read more
              </ReadMore>

              {/* Add comment section */}
              <AddComments newsId={news._id} />

              <NewsMeta>
                {news.isTrending && <TrendingTag>Trending</TrendingTag>}
                <span>
                  {formatDate(news.createdTime)} • {news.readTime || "N/A"}
                </span>
              </NewsMeta>
            </NewsContent>
          </NewsCard>
        ))
      ) : (
        <p>No news available for the selected category.</p>
      )}
    </Container>
  );
};

export default AllNews;
