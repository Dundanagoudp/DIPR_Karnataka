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
  PaginationWrapper, // New wrapper for pagination
} from "../Latesttab/LatestTab.styles";
import videoThumbnail from "../../../assets/v1.png";
import { NewsApi, CategoryApi } from "../../../services/categoryapi/CategoryApi";
import { CiBookmark } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { FontSizeContext } from "../../../context/FontSizeProvider";
import { LanguageContext } from "../../../context/LanguageContext";
import { Pagination } from "@mui/material"; // Import MUI Pagination

const LatestTab = () => {
  const [videosData, setVideosData] = useState([]);
  const [bookmarkedVideos, setBookmarkedVideos] = useState(new Set());
  const [activeTab, setActiveTab] = useState(null);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Pagination state
  const itemsPerPageDesktop = 8; // Max 8 videos per page on desktop
  const itemsPerPageMobile = 5; // Max 5 videos per page on mobile/tablet
  const navigate = useNavigate();
  const { fontSize } = useContext(FontSizeContext);
  const { language } = useContext(LanguageContext);

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

  // Pagination logic
  const isMobile = window.innerWidth <= 768; // Check for mobile/tablet view
  const itemsPerPage = isMobile ? itemsPerPageMobile : itemsPerPageDesktop;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = videosData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
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
        {currentItems.length > 0 ? (
          currentItems.map((video) => (
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

      {/* Pagination */}
      <PaginationWrapper>
        <Pagination
          count={Math.ceil(videosData.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
        />
      </PaginationWrapper>
    </Container>
  );
};

export default LatestTab;