import React, { useState, useEffect } from "react";
import { FaFacebook, FaTwitter, FaLink } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
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
  CommentSection,
  CommentInputWrapper,
  CommentInput,
  CommentButton,
  TrendingTag,
  NewsMeta,
  Title,
} from "../allnews/AllNews.styles";
import { CategoryApi, NewsApi } from "../../../services/categoryapi/CategoryApi";

const AllNews = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [newsData, setNewsData] = useState([]);
  const [categories, setCategories] = useState([]);

  // Fetch categories dynamically from API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await CategoryApi();
        if (response?.data && Array.isArray(response.data) && response.data.length > 0) {
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

  // Fetch news based on the active tab (category)
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await NewsApi(activeTab);
        if (response?.data && Array.isArray(response.data) && response.data.length > 0) {
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

  // Social Media Sharing
  const shareOnFacebook = (url) => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank");
  };

  const shareOnTwitter = (url) => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`, "_blank");
  };

  const copyLink = (url) => {
    navigator.clipboard.writeText(url);
    alert("Link copied to clipboard!");
  };

  // Format Date
  const formatDate = (dateString) => {
    if (!dateString) return "Unknown Date";
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? "Invalid Date" : date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
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

      {/* Display news based on the selected category */}
      {newsData.length > 0 ? (
        newsData.map((news) => (
          <NewsCard key={news._id}>
            <NewsImage src={news.newsImage || "https://via.placeholder.com/300"} alt={news.title || "News Image"} />
            <NewsContent>
              <NewsHeader>
                {news.author || "Unknown Author"} • {news.category?.name || "General"}
              </NewsHeader>
              <NewsTitle>{news.title || "Untitled News"}</NewsTitle>

              <ShareIcons>
                <FaFacebook onClick={() => shareOnFacebook(news.url)} style={{ cursor: "pointer" }} />
                <FaTwitter onClick={() => shareOnTwitter(news.url)} style={{ cursor: "pointer" }} />
                <FaLink onClick={() => copyLink(news.url)} style={{ cursor: "pointer" }} />
              </ShareIcons>

              <NewsText>{news.description || "No description available."}</NewsText>
              <ReadMore href={news.url || "#"} target="_blank" rel="noopener noreferrer">
                Read more
              </ReadMore>

              <CommentSection>
                <CommentInputWrapper>
                  <CommentInput type="text" placeholder="Add your comment..." />
                  <CommentButton>
                    <MdOutlineMessage />
                  </CommentButton>
                </CommentInputWrapper>
              </CommentSection>

              <NewsMeta>
                {news.isTrending && <TrendingTag>Trending</TrendingTag>}
                <span>{formatDate(news.createdTime)} • {news.readTime || "N/A"}</span>
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