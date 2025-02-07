import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa"; // Import play icon
import {
  CarouselContainer,
  CarouselItem,
  Overlay,
  ContentWrapper,
  TrendingCategory,
  NewsInfo,
  NewsTitle,
  NewsTicker,
  NewsItem,
  NavContainer,
  NewsWrapper,
  CarouselInner,
  VideoContainer,
  PlayIconContainer,
} from "../exclusivevideos/ExclusiveVideos.styles";
import videos from "../../../../assets/videos.png";

// Fallback Data
const fallbackVideos = [
  {
    id: 1,
    category: "Trending",
    date: "Feb 7, 2025",
    readTime: "5 min watch",
    title: "The Future of AI",
    thumbnail: videos,
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
  },
  {
    id: 2,
    category: "Tech",
    date: "Feb 6, 2025",
    readTime: "3 min watch",
    title: "Exploring the Metaverse",
    thumbnail: videos,
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
  },
];

const ExclusiveVideos = () => {
  const [trendingVideos, setTrendingVideos] = useState([]);
  const [playingVideoId, setPlayingVideoId] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("https://your-backend-api.com/api/videos");
        if (!response.ok) throw new Error("Failed to fetch videos");
        const data = await response.json();
        setTrendingVideos(data.length > 0 ? data : fallbackVideos);
      } catch (error) {
        console.error("Error fetching videos:", error);
        setTrendingVideos(fallbackVideos);
      }
    };

    fetchVideos();
  }, []);

  const headlines =
    trendingVideos.length > 0
      ? trendingVideos.map((video) => video.title)
      : ["No trending videos available"];

  const handlePlayClick = (videoId) => {
    setPlayingVideoId(videoId);
  };

  return (
    <CarouselContainer>
      <CarouselInner>
        {trendingVideos.map((video) => (
          <CarouselItem key={video.id} bgImage={video.thumbnail}>
            <Overlay />
            <ContentWrapper>
              <div style={{ display: "flex", alignItems: "center", gap: "1%" }}>
                <TrendingCategory>{video.category}</TrendingCategory>
                <NewsInfo>• {video.date} • {video.readTime}</NewsInfo>
              </div>
              <NewsTitle>{video.title}</NewsTitle>

              {/* Video Player */}
              {/* <VideoContainer>
                {playingVideoId === video.id ? (
                  <video controls autoPlay>
                    <source src={video.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <PlayIconContainer onClick={() => handlePlayClick(video.id)}>
                    <FaPlay size={50} color="#fff" />
                  </PlayIconContainer>
                )}
              </VideoContainer> */}

              <NavContainer>
                <NewsWrapper>
                  <NewsTicker>
                    {headlines.map((headline, index) => (
                      <NewsItem key={index}>{headline}</NewsItem>
                    ))}
                  </NewsTicker>
                </NewsWrapper>
              </NavContainer>
            </ContentWrapper>
          </CarouselItem>
        ))}
      </CarouselInner>
    </CarouselContainer>
  );
};

export default ExclusiveVideos;