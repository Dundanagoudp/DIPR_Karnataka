import React, { useState, useEffect, useContext } from "react";
import {
  Container,
  Content,
  Title,
  Header,
  VideoThumbnail,
  VideoCard1,
  VideoDetails,
  NewsMeta,
  VideoMetacat,
  BookmarkIconWrapper,
} from "../Recommended/RecomMended.styles";
import videoThumbnail from "../../../assets/v1.png";
import { CiBookmark } from "react-icons/ci";
import { getRecommendedNews } from "../../../services/newsApi/NewsApi";
import { FontSizeContext } from "../../../context/FontSizeProvider";
import { LanguageContext } from "../../../context/LanguageContext"; // Import LanguageContext

// Helper function to get cookies by name
const getCookie = (name) => {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? decodeURIComponent(match[2]) : null;
};

const RecomMended = () => {
  const [videosData, setVideosData] = useState([]);
  const [bookmarkedVideos, setBookmarkedVideos] = useState(new Set());
  const { fontSize } = useContext(FontSizeContext);
  const { language } = useContext(LanguageContext); // Get current language from context

  useEffect(() => {
    const userId = getCookie("userId");

    if (userId) {
      const fetchVideos = async () => {
        try {
          const result = await getRecommendedNews(userId);
          console.log("Received videos data:", result);

          if (
            result &&
            result.success &&
            Array.isArray(result.data) &&
            result.data.length > 0
          ) {
            setVideosData(result.data);
          } else {
            console.warn("No video data found, using fallback data.");
            setVideosData(fallbackVideosData);
          }
        } catch (error) {
          console.error("Error fetching videos:", error);
          setVideosData(fallbackVideosData);
        }
      };

      fetchVideos();
    } else {
      console.error("No userId found in cookies.");
    }
  }, [language]); // Re-fetch videos when language changes

  // Function to get the correct language content
  const getLocalizedContent = (video, field) => {
    if (language === "English") {
      return video[field] || "No content available";
    } else if (language === "Hindi") {
      return video.hindi?.[field] || video[field] || "No content available";
    } else if (language === "Kannada") {
      return video.kannada?.[field] || video[field] || "No content available";
    }
    return video[field] || "No content available";
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

  const handleBookmarkClick = (videoId) => {
    const newBookmarkedVideos = new Set(bookmarkedVideos);
    if (newBookmarkedVideos.has(videoId)) {
      newBookmarkedVideos.delete(videoId);
    } else {
      newBookmarkedVideos.add(videoId);
    }
    setBookmarkedVideos(newBookmarkedVideos);
  };

  return (
    <Container style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
      <Header style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
        Recommended for you
      </Header>
      <Content>
        {videosData.map((video) => (
          <VideoCard1 key={video._id}>
            <VideoThumbnail
              src={video.newsImage || videoThumbnail}
              alt={getLocalizedContent(video, "title")}
            />
            <VideoDetails>
              <NewsMeta style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
                {video.isTrending && <span>Trending</span>}
                <span style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
                  {formatDate(video.publishedAt)} • {video.readTime || "N/A"}
                </span>
              </NewsMeta>
              <Title style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
                {getLocalizedContent(video, "title")}
              </Title>
              <VideoMetacat style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
                {video.category.name}
                <BookmarkIconWrapper
                  onClick={() => handleBookmarkClick(video._id)}
                  isBookmarked={bookmarkedVideos.has(video._id)}
                >
                  <CiBookmark />
                </BookmarkIconWrapper>
              </VideoMetacat>
            </VideoDetails>
          </VideoCard1>
        ))}
      </Content>
    </Container>
  );
};

export default RecomMended;