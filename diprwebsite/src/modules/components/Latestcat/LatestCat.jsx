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
  CommentSectionWrapper,
  CommentInputWrapper,
  CommentInputField,
  CommentButtonWrapper,
  TrendingTagWrapper,
  NewsMetaWrapper,
  IconWrapper
} from './LatestCat.styles';
import { FaFacebook, FaTwitter, FaLink, FaRegHeart, FaRegComment, FaPaperPlane } from 'react-icons/fa';
import { MdOutlineMessage } from 'react-icons/md';
import Image1 from "../../../assets/post1.png";
import ComMents from '../comments/ComMents';

const dummyNews = [
  {
    _id: "fallback1",
    title: "Breaking News: AI Revolution",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    newsImage: Image1,
    category: "Technology",
    author: "John Doe",
    createdTime: "2023-07-24T10:00:00.000Z",
    readTime: "8 min read",
    isTrending: true,
    url: "https://example.com"
  }
];

const LatestCat = () => {
  const [news, setNews] = useState([]);
  const [showComments, setShowComments] = useState(false); // State to manage comment visibility

  useEffect(() => {
    setNews(dummyNews);
  }, []);

  const toggleComments = () => {
    setShowComments((prev) => !prev); // Toggle the visibility of comments
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
          <NewsImageWrapper>
            <img src={newsItem.newsImage || "https://via.placeholder.com/300"} alt={newsItem.title || "News Image"} />
          </NewsImageWrapper>

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

              {/* Comments section, only visible if showComments is true */}
              {showComments && <ComMents />}
            </NewsTitleWrapper>

            <CommentSectionWrapper>
              <CommentInputWrapper>
                <CommentInputField type="text" placeholder="Add your comment..." />
                <CommentButtonWrapper>
                  <MdOutlineMessage />
                </CommentButtonWrapper>
              </CommentInputWrapper>
            </CommentSectionWrapper>

            <NewsMetaWrapper>
              {newsItem.isTrending && <TrendingTagWrapper>Trending</TrendingTagWrapper>}
              <span>{formatDate(newsItem.createdTime)} • {newsItem.readTime || "N/A"}</span>
            </NewsMetaWrapper>

            <ShareIconsWrapper>
              <FaFacebook onClick={() => shareOnFacebook(newsItem.url)} style={{ cursor: "pointer" }} />
              <FaTwitter onClick={() => shareOnTwitter(newsItem.url)} style={{ cursor: "pointer" }} />
              <FaLink onClick={() => copyLink(newsItem.url)} style={{ cursor: "pointer" }} />
            </ShareIconsWrapper>

            <NewsTextWrapper>
              {newsItem.description || "No description available."}
            </NewsTextWrapper>
          </NewsContentWrapper>
        </NewsCardWrapper>
      ))}
    </Container>
  );
};

export default LatestCat;
