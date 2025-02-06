import React, { useEffect, useState } from 'react';
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
  IconWrapper
} from '../magzinedata/MagzineData.styles';
import { FaFacebook, FaTwitter, FaLink, FaRegHeart, FaRegComment, FaPaperPlane } from 'react-icons/fa';
import { motion, AnimatePresence } from "framer-motion";
import Image1 from "../../../../assets/post1.png";
import ComMents from '../../comments/ComMents';
import AddComments from '../../comments/AddComments';


const dummyNews = [
  {
    _id: "fallback1",
    title: "Breaking News: AI Revolution",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitvvv Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitvvvvvvLorem ipsum dolor sit amet, consectetur adipiscing elit...",
    newsImage: Image1,
    category: "Technology",
    author: "John Doe",
    createdTime: "2023-07-24T10:00:00.000Z",
    readTime: "8 min read",
    isTrending: true,
    url: "https://example.com"
  }
];

const MagzineData = () => {
  const [news, setNews] = useState([]);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    setNews(dummyNews);
  }, []);

  const toggleComments = () => {
    setShowComments((prev) => !prev);
  };

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

  const formatDate = (dateString) => {
    if (!dateString) return "Unknown Date";
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? "Invalid Date" : date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
  };

  return (
    <Container>
      {news.map((newsItem) => (
        <NewsCardWrapper key={newsItem._id}>

          <NewsContentWrapper>
            <NewsHeaderWrapper>
              {newsItem.author || "Unknown Author"} • {newsItem.category || "General"}
            </NewsHeaderWrapper>

            <NewsTitleWrapper>
              {newsItem.title || "Untitled News"}
              <IconWrapper>
                <FaRegHeart />
                <FaRegComment onClick={toggleComments} style={{ cursor: "pointer" }} />
                <FaPaperPlane />
              </IconWrapper>
            </NewsTitleWrapper>

            {/* Smoothly Animated Comments Section */}
            <AnimatePresence>
              {showComments && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  style={{ overflow: "hidden" }}
                >
                  <ComMents />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Add comment box section */}
            <AddComments />

            <NewsMetaWrapper>
              {newsItem.isTrending && <TrendingTagWrapper>Trending</TrendingTagWrapper>}
              <span>{formatDate(newsItem.createdTime)} • {newsItem.readTime || "N/A"}</span>
            </NewsMetaWrapper>

            <ShareIconsWrapper>
              <FaFacebook onClick={() => shareOnFacebook(newsItem.url)} style={{ cursor: "pointer" }} />
              <FaTwitter onClick={() => shareOnTwitter(newsItem.url)} style={{ cursor: "pointer" }} />
              <FaLink onClick={() => copyLink(newsItem.url)} style={{ cursor: "pointer" }} />
            </ShareIconsWrapper>

            {/* <NewsTextWrapper>
              {newsItem.description || "No description available."}
            </NewsTextWrapper> */}
          </NewsContentWrapper>
          <NewsImageWrapper>
            <img src={newsItem.newsImage || "https://via.placeholder.com/300"} alt={newsItem.title || "News Image"} />
          </NewsImageWrapper><NewsImageWrapper>
            <img src={newsItem.newsImage || "https://via.placeholder.com/300"} alt={newsItem.title || "News Image"} />
          </NewsImageWrapper>
        </NewsCardWrapper>
      ))}
    </Container>
  );
};

export default MagzineData;