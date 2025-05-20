import { useState, useEffect } from "react";
import { getLongVideos } from "../services/videoApi/videoApi";
import { formatTimeAgo, formatViewCount, formatDuration } from "../utils/formatters";
import * as S from "./HomePage.styles";

const HomePage = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        const response = await getLongVideos();

        if (response.success && Array.isArray(response.data)) {
          setVideos(response.data);
        } else {
          setError("Failed to load videos");
        }
      } catch (err) {
        setError("An error occurred while fetching videos");
        console.error("Error fetching videos:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return <S.LoadingContainer>Loading videos...</S.LoadingContainer>;
  }

  if (error) {
    return <S.ErrorContainer>{error}</S.ErrorContainer>;
  }

  return (
    <S.HomeContainer>
      <S.VideoGrid>
        {videos.map((video) => (
          <S.VideoCard to={`/video/${video._id}`} key={video._id}>
            <S.ThumbnailContainer>
              <S.Thumbnail src={video.thumbnail || "/placeholder.svg?height=200&width=350"} alt={video.title} />
              <S.Duration>{formatDuration(video.duration || "0:00")}</S.Duration>
            </S.ThumbnailContainer>
            <S.VideoInfo>
              <S.ChannelAvatar>
                <S.AvatarImg
                  src={video.channel?.profileImage || "/placeholder.svg?height=36&width=36"}
                  alt={video.channel?.name || "Channel"}
                />
              </S.ChannelAvatar>
              <S.VideoDetails>
                <S.VideoTitle>{video.title}</S.VideoTitle>
                <S.ChannelName>{video.channel?.name || "Unknown Channel"}</S.ChannelName>
                <S.VideoStats>
                  {formatViewCount(video.total_Views || 0)} views
                  <S.Dot>•</S.Dot>
                  {formatTimeAgo(video.createdAt)}
                </S.VideoStats>
              </S.VideoDetails>
            </S.VideoInfo>
          </S.VideoCard>
        ))}
      </S.VideoGrid>
    </S.HomeContainer>
  );
};

export default HomePage;
