import React, { useState, useEffect } from "react";
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
  Tab
} from "../Latesttab/LatestTab.styles";
import videoThumbnail from "../../../assets/v1.png";
import { NewsApi, CategoryApi } from "../../../services/categoryapi/CategoryApi"; 
import { CiBookmark } from "react-icons/ci";
import { useNavigate } from "react-router-dom"; 

const LatestTab = () => {
  const [videosData, setVideosData] = useState([]);
  const [bookmarkedVideos, setBookmarkedVideos] = useState(new Set());
  const [activeTab, setActiveTab] = useState(null);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

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

  const handleBookmarkClick = (postId) => {
    const newBookmarkedVideos = new Set(bookmarkedVideos);
    if (newBookmarkedVideos.has(postId)) {
      newBookmarkedVideos.delete(postId);
    } else {
      newBookmarkedVideos.add(postId);
    }
    setBookmarkedVideos(newBookmarkedVideos);
  };

  const handlePostClick = (postId) => {
    navigate(`/post/${postId}`); 
  };

  return (
    <Container>
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
      <Content>
        {videosData.length > 0 ? (
          videosData.map((video) => (
            <VideoCard1 key={video.id || video._id} onClick={() => handlePostClick(video.id || video._id)}>
              <VideoThumbnail src={video.newsImage || videoThumbnail} alt={video.title || "News Image"} />
              <VideoDetails>
                <NewsMeta>
                  {video.isTrending && <span>Trending</span>}
                  <span>
                    {video.author || "Unknown Author"} • {video.category?.name || "General"}
                  </span>
                </NewsMeta>
                <Title>{video.title || "Untitled News"}</Title>
                <VideoMetacat>
                  {video.category?.name}
                  <BookmarkIconWrapper
                    onClick={(e) => {
                      e.stopPropagation(); 
                      handleBookmarkClick(video.id || video._id);
                    }}
                    isBookmarked={bookmarkedVideos.has(video.id || video._id)}
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