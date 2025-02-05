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
} from './LatestCat.styles';
import { FaFacebook, FaTwitter, FaLink } from 'react-icons/fa';
import { MdOutlineMessage } from 'react-icons/md';
import Image1 from "../../../assets/post1.png";

const dummyNews = [
  {
    _id: "fallback1",
    title: "Breaking News: AI Revolution",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam..",
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

  useEffect(() => {
    // Simulate API call with dummy data
    setNews(dummyNews);
  }, []);

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

            <NewsTitleWrapper>{newsItem.title || "Untitled News"}</NewsTitleWrapper>

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

            <NewsTextWrapper style={{ display: "-webkit-box", WebkitLineClamp: 5, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
              {newsItem.description || "No description available."}
            </NewsTextWrapper>
          </NewsContentWrapper>
        </NewsCardWrapper>
      ))}
    </Container>
  );
};

export default LatestCat;
