import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import {
  Container,
  MainContentWrapper,
  SidebarWrapper,
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
  ShimmerText,
  SidebarTitle,
  RelatedArticleCard,
  RelatedArticleImage,
  RelatedArticleContent,
  RelatedArticleTitle,
  RelatedArticleMeta
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
import { getRecommendations } from "../../../services/recommened/RecommenedApis";
import ComMents from "../comments/ComMents";
import AddComments from "../comments/AddComments";
import { FontSizeContext } from "../../../context/FontSizeProvider";
import { LanguageContext } from "../../../context/LanguageContext";
import { logReadingHistory } from "../../../services/recommened/RecommenedApis";

const LatestCat = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [loading, setLoading] = useState(true);
  const [sidebarLoading, setSidebarLoading] = useState(true);
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

  useEffect(() => {
    const fetchRelatedArticles = async () => {
      if (!userId) {
        setSidebarLoading(false);
        return;
      }

      try {
        setSidebarLoading(true);
        const result = await getRecommendations(userId);
        
        if (result && Array.isArray(result.news) && result.news.length > 0) {
          // Filter out the current article and get first 4 related articles
          const filtered = result.news
            .filter(article => article._id !== id)
            .slice(0, 3);
          setRelatedArticles(filtered);
        } else if (result && Array.isArray(result) && result.length > 0) {
          const filtered = result
            .filter(article => article._id !== id)
            .slice(0, 3);
          setRelatedArticles(filtered);
        } else {
          setRelatedArticles([]);
        }
      } catch (error) {
        console.error("Error fetching related articles:", error);
        setRelatedArticles([]);
      } finally {
        setSidebarLoading(false);
      }
    };

    fetchRelatedArticles();
  }, [id, userId]);

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

  const getTimeAgo = (dateString) => {
    if (!dateString) return "Unknown time";
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return "Just now";
    if (diffInHours < 24) return `${diffInHours} hours ago`;
    if (diffInHours < 48) return "1 day ago";
    return formatDate(dateString);
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

  useEffect(() => {
    if (news && userId) {
      const historyData = {
        userId,
        contentId: news._id, // Correct key for backend
        contentType: "news",
        // timeSpent: 0 // optional, if you want to track later
      };
      console.log("Logging reading history:", historyData);
      logReadingHistory(historyData);
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

  if (loading || !news) {
    return (
      <Container>
        <MainContentWrapper>
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
        </MainContentWrapper>
        <SidebarWrapper>
          <SidebarTitle>Related Articles</SidebarTitle>
          {[1, 2, 3, 4].map((i) => (
            <RelatedArticleCard key={i}>
              <ShimmerImage style={{ height: '120px', marginBottom: '10px' }} />
              <ShimmerTitle style={{ height: '20px', marginBottom: '8px' }} />
              <ShimmerText style={{ height: '15px', width: '60%' }} />
            </RelatedArticleCard>
          ))}
        </SidebarWrapper>
      </Container>
    );
  }

  return (
    <Container>
      <MainContentWrapper>
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


            <NewsTextWrapper style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
              {getLocalizedContent(news, "description")}
            </NewsTextWrapper>
          </NewsContentWrapper>
        </NewsCardWrapper>
      </MainContentWrapper>

      <SidebarWrapper>
        <SidebarTitle style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
          Related Articles
        </SidebarTitle>
        
        {sidebarLoading ? (
          [1, 2, 3, 4].map((i) => (
            <RelatedArticleCard key={i}>
              <ShimmerImage style={{ height: '120px', marginBottom: '10px' }} />
              <ShimmerTitle style={{ height: '20px', marginBottom: '8px' }} />
              <ShimmerText style={{ height: '15px', width: '60%' }} />
            </RelatedArticleCard>
          ))
        ) : relatedArticles.length > 0 ? (
          relatedArticles.map((article) => (
            <RelatedArticleCard key={article._id}>
              <RelatedArticleImage
                src={article.newsImage}
                alt={getLocalizedContent(article, "title")}
              />
              <RelatedArticleContent>
                <RelatedArticleTitle style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
                  {getLocalizedContent(article, "title")}
                </RelatedArticleTitle>
                <RelatedArticleMeta style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
                  {article.author || "Unknown Author"} • {getTimeAgo(article.createdTime)}
                </RelatedArticleMeta>
              </RelatedArticleContent>
            </RelatedArticleCard>
          ))
        ) : (
          <div style={{ padding: '1rem', textAlign: 'center', color: '#888' }}>
            No related articles found.
          </div>
        )}
      </SidebarWrapper>
    </Container>
  );
};

export default LatestCat;