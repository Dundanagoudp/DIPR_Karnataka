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
  ShimmerWrapper,
  ShimmerImage,
  ShimmerLine,
  ShimmerTitle,
  ShimmerText
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
import { LanguageContext } from "../../../context/LanguageContext"; 

const LatestCat = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [showComments, setShowComments] = useState(false);
  const [loading, setLoading] = useState(true);
  const userId = Cookies.get("userId");
  const { fontSize } = useContext(FontSizeContext);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const result = await getNewsByid(id);

        if (result.success && result.data) {
          setNews(result.data);
        } else {
          console.warn("No news data found");
          setNews(null);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
        setNews(null);
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
        setNews((prevNews) => {
          const newLikedBy = prevNews.likedBy.includes(userId)
            ? prevNews.likedBy.filter((id) => id !== userId)
            : [...prevNews.likedBy, userId];

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

  const getLocalizedContent = (news, field) => {
    if (!news) return "Loading...";
    if (language === "English") {
      return news[field] || "No content available";
    } else if (language === "Hindi") {
      return news.hindi?.[field] || news[field] || "No content available";
    } else if (language === "Kannada") {
      return news.kannada?.[field] || news[field] || "No content available";
    }
    return news[field] || "No content available";
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

  if (loading || !news) {
    return (
      <Container>
        <NewsCardWrapper>
          <ShimmerWrapper>
            <ShimmerImage />
            <ShimmerLine />
            <ShimmerTitle />
            <ShimmerText />
            <ShimmerText />
            <ShimmerText />
          </ShimmerWrapper>
        </NewsCardWrapper>
      </Container>
    );
  }

  return (
    <Container>
      <NewsCardWrapper key={news._id}>
        <NewsImageWrapper style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
          <img
            src={news.newsImage}
            alt={getLocalizedContent(news, "title")}
          />
        </NewsImageWrapper>

        <NewsContentWrapper style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
          <NewsHeaderWrapper style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
            {news.author || "Unknown Author"} •{" "}
            {news.category?.name || "General"}
          </NewsHeaderWrapper>

          <NewsTitleWrapper style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
            {getLocalizedContent(news, "title")}
          </NewsTitleWrapper>

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

          <AddComments newsId={news?._id || id} />

          <NewsMetaWrapper>
            {news.isTrending && (
              <TrendingTagWrapper style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>Trending</TrendingTagWrapper>
            )}
            <span style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
              {formatDate(news.createdTime)}  {news.readTime}
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
      
          </ShareIconsWrapper>

          <NewsTextWrapper style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
            {getLocalizedContent(news, "description")}
          </NewsTextWrapper>
        </NewsContentWrapper>
      </NewsCardWrapper>
    </Container>
  );
};

export default LatestCat;