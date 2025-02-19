import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import {
  Container,
  NewsCardWrapper,
  NewsImageWrapper,
  NewsContentWrapper,
  NewsHeaderWrapper,
  NewsTitleWrapper,
  NewsTextWrapper,
  ShareIconsWrapper,
  TrendingTagWrapper,
  NewsMetaWrapper,
  IconWrapper,
} from "./LatestCat.styles";
import {
  FaFacebook,
  FaTwitter,
  FaLink,
  FaRegHeart,
  FaHeart,
  FaRegComment,
  FaPaperPlane,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { getNewsByid, likeNews } from "../../../services/newsApi/NewsApi";
import ComMents from "../comments/ComMents";
import AddComments from "../comments/AddComments";
import { FontSizeContext } from "../../../context/FontSizeProvider";

const fallbackNews = {
  _id: "fallback1",
  title: "Fallback News: AI Revolution",
  description:
    "This is placeholder content because the news data couldn't be fetched.",
  newsImage: "https://via.placeholder.com/300",
  category: { name: "Technology" },
  author: "Unknown Author",
  createdTime: "2023-07-24T10:00:00.000Z",
  readTime: "8 min read",
  isTrending: false,
  url: "https://example.com",
  likedBy: [],
  comments: [],
};

const LatestCat = () => {
  const { id } = useParams(); 
  const [news, setNews] = useState(fallbackNews); 
  const [showComments, setShowComments] = useState(false);
  const [loading, setLoading] = useState(true);
  const userId = Cookies.get("userId"); 
  const { fontSize } = useContext(FontSizeContext);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const result = await getNewsByid(id);

        if (result.success && result.data) {
          setNews(result.data);
        } else {
          console.warn("No news data found, using fallback data.");
          setNews(fallbackNews);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
        setNews(fallbackNews);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [id]);

  const toggleComments = () => {
    setShowComments((prev) => !prev);
  };

  const handleLikeNews = async () => {
    if (!userId) {
      alert("You must be logged in to like this news.");
      return;
    }

    try {
      const response = await likeNews({ newsId: news._id, userId });

      if (response.success) {
        // Toggle like status in the frontend
        setNews((prevNews) => {
          const newLikedBy = prevNews.likedBy.includes(userId)
            ? prevNews.likedBy.filter((id) => id !== userId) 
            : [...prevNews.likedBy, userId]; 

          // Store the updated likedBy in localStorage
          localStorage.setItem(
            `likedNews_${news._id}`,
            JSON.stringify(newLikedBy)
          );

          return { ...prevNews, likedBy: newLikedBy };
        });
      }
    } catch (error) {
      console.error("Error liking/unliking news:", error);
    }
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

  // Set the initial like state on component mount
  useEffect(() => {
    if (news && userId) {
      const likedNews = JSON.parse(
        localStorage.getItem(`likedNews_${news._id}`)
      );
      if (likedNews && likedNews.includes(userId)) {
        setNews((prevNews) => ({
          ...prevNews,
          likedBy: likedNews,
        }));
      }
    }
  }, [news, userId]);

  return (
    <Container >
      <NewsCardWrapper key={news._id}>
        <NewsImageWrapper style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
          <img
            src={news.newsImage || "https://via.placeholder.com/300"}
            alt={news.title || "News Image"}
          />
        </NewsImageWrapper>

        <NewsContentWrapper style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
          <NewsHeaderWrapper style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
            {news.author || "Unknown Author"} •{" "}
            {news.category?.name || "General"}
          </NewsHeaderWrapper>

          <NewsTitleWrapper style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
            {news.title || "Untitled News"}
            <IconWrapper style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
              {news.likedBy.includes(userId) ? (
                <FaHeart 
                  onClick={handleLikeNews}
                  style={{ cursor: "pointer", color: "red" }}
                />
              ) : (
                <FaRegHeart 
                  onClick={handleLikeNews}
                  style={{ cursor: "pointer" }}
                />
              )}
              <FaRegComment
                onClick={toggleComments}
                style={{ cursor: "pointer" }}
              />
              <FaPaperPlane />
            </IconWrapper>
          </NewsTitleWrapper>

          {/* Animated Comments Section */}
          <AnimatePresence style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
            {showComments && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ overflow: "hidden" }}
              >
                <ComMents style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined} comments={news.comments || []} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Add comment box */}
          <AddComments newsId={news?._id || id} />

          <NewsMetaWrapper>
            {news.isTrending && (
              <TrendingTagWrapper style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>Trending</TrendingTagWrapper>
            )}
            <span style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
              {formatDate(news.createdTime)} • {news.readTime || "N/A"}
            </span>
          </NewsMetaWrapper>

          <ShareIconsWrapper>
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
          </ShareIconsWrapper>

          <NewsTextWrapper style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
            {news.description?.split(" ").slice(0, 50).join(" ") + "..."}
          </NewsTextWrapper>
        </NewsContentWrapper>
      </NewsCardWrapper>
    </Container>
  );
};

export default LatestCat;
