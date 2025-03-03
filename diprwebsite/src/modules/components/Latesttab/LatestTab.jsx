import React, { useState, useEffect, useContext } from "react";
import {
  Container,
  Content,
  Title,
  VideoThumbnail,
  VideoCard1,
  VideoDetails,
  NewsMeta,
  VideoMetacat,
  BookmarkIconWrapper,
  TabsContainer,
  Tab,
} from "../Latesttab/LatestTab.styles";
import videoThumbnail from "../../../assets/v1.png";
import { NewsApi, CategoryApi } from "../../../services/categoryapi/CategoryApi";
import { CiBookmark } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { FontSizeContext } from "../../../context/FontSizeProvider";
import { LanguageContext } from "../../../context/LanguageContext"; // Import LanguageContext

const LatestTab = () => {
  const [videosData, setVideosData] = useState([]);
  const [bookmarkedVideos, setBookmarkedVideos] = useState(new Set());
  const [activeTab, setActiveTab] = useState(null);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const { fontSize } = useContext(FontSizeContext);
  const { language } = useContext(LanguageContext); // Get current language from context

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await CategoryApi();
        if (response?.data && Array.isArray(response.data) && response.data.length > 0) {
          setCategories(response.data);
          setActiveTab(response.data[0]._id);
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
        if (response?.data && Array.isArray(response.data) && response.data.length > 0) {
          setVideosData(response.data);
        } else {
          console.warn("Empty news API response.");
          setVideosData([]);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
        setVideosData([]);
      }
    };

    if (activeTab !== null) {
      fetchNews();
    }
  }, [activeTab]);

  const handlePostClick = (postId) => {
    navigate(`/news/${postId}`); 
  };

  const handleBookmarkClick = (videoId) => {
    setBookmarkedVideos((prev) => {
      const newBookmarks = new Set(prev);
      if (newBookmarks.has(videoId)) {
        newBookmarks.delete(videoId);
      } else {
        newBookmarks.add(videoId);
      }
      return newBookmarks;
    });
  };

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

  return (
    <Container style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
      <TabsContainer style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
        {categories.length > 0 ? (
          categories.map((category) => (
            <Tab
              style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}
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
      <Content style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
        {videosData.length > 0 ? (
          videosData.map((video) => (
            <VideoCard1
              key={video._id}
              onClick={() => handlePostClick(video._id)}
            >
              <VideoThumbnail
                src={video.newsImage || videoThumbnail}
                alt={getLocalizedContent(video, "title")}
              />
              <VideoDetails>
                <NewsMeta style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
                  {video.isTrending && <span>Trending</span>}
                  <span style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
                    {video.author || "Unknown Author"} •{" "}
                    {video.category?.name || "General"}
                  </span>
                </NewsMeta>
                <Title style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
                  {getLocalizedContent(video, "title")}
                </Title>
                <VideoMetacat style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
                  {video.category?.name}
                  <BookmarkIconWrapper
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBookmarkClick(video._id);
                    }}
                    isBookmarked={bookmarkedVideos.has(video._id)}
                  >
                    <CiBookmark />
                  </BookmarkIconWrapper>
                </VideoMetacat>
              </VideoDetails>
            </VideoCard1>
          ))
        ) : (
          <p>No Post available.</p>
        )}
      </Content>
    </Container>
  );
};

export default LatestTab;