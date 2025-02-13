import React, { useState, useEffect } from "react";
import { FaPlay, FaThumbsUp, FaRegThumbsUp, FaComment } from "react-icons/fa";
import {
  CarouselContainer,
  CarouselItem,
  ContentWrapper,
  NewsInfo,
  NewsTitle,
  NewsTicker,
  NewsItem,
  NavContainer,
  NewsWrapper,
  CarouselInner,
  VideoContainer,
  PlayIconContainer,
  LikeContainer,
  CommentContainer,
  CommentInput,
  CommentButton,
  InteractionContainer,
  FlexContainer,
} from "../exclusivevideos/ExclusiveVideos.styles";
import { getLongVideos } from "../../../../services/videoApi/videoApi";

const ExclusiveVideos = () => {
  const [videosData, setVideosData] = useState([]);
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const [likedVideos, setLikedVideos] = useState(new Set());
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await getLongVideos();
        if (response.success && Array.isArray(response.data)) {
          setVideosData(response.data);
        } else {
          console.warn("No video data found.");
          setVideosData([]);
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
        setVideosData([]);
      }
    };

    fetchVideos();
  }, []);

  const handlePlayClick = (videoId) => {
    setPlayingVideoId(videoId);
  };

  const handleHoverVideo = (videoId, isHovered) => {
    const videoElement = document.getElementById(videoId);
    if (videoElement) {
      if (isHovered && playingVideoId === videoId) {
        videoElement.play();
      } else {
        videoElement.pause();
      }
    }
  };

  const handleLikeClick = (videoId) => {
    const newLikedVideos = new Set(likedVideos);
    if (newLikedVideos.has(videoId)) {
      newLikedVideos.delete(videoId);
    } else {
      newLikedVideos.add(videoId);
    }
    setLikedVideos(newLikedVideos);
  };

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleAddComment = (videoId) => {
    if (newComment.trim()) {
      const updatedComments = { ...comments };
      if (!updatedComments[videoId]) {
        updatedComments[videoId] = [];
      }
      updatedComments[videoId].push(newComment);
      setComments(updatedComments);
      setNewComment("");
    }
  };

  return (
    <CarouselContainer>
      <CarouselInner>
        {videosData.map((video) => (
          <CarouselItem key={video._id} bgImage={video.thumbnail}>
            <ContentWrapper>
              <VideoContainer
                onMouseEnter={() => handleHoverVideo(video._id, true)}
                onMouseLeave={() => handleHoverVideo(video._id, false)}
              >
                {playingVideoId === video._id ? (
                  <video
                    id={video._id}
                    controls
                    autoPlay
                    loop
                    width="100%"
                    height="100%"
                  >
                    <source src={video.video_url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <>
                    <PlayIconContainer onClick={() => handlePlayClick(video._id)}>
                      <FaPlay size={40} color="#fff" />
                    </PlayIconContainer>
                    <FlexContainer>
                      <NewsInfo>
                        {new Date(video.createdAt).toLocaleDateString()} • 5 min watch
                      </NewsInfo>
                      <NewsTitle>{video.title}</NewsTitle>
                      <NavContainer>
                      <NewsWrapper>
                        <NewsTicker>
                          <NewsItem>{video.description}</NewsItem>
                        </NewsTicker>
                      </NewsWrapper>
                    </NavContainer>
                    </FlexContainer>
                 
                  </>
                )}
              </VideoContainer>

              {playingVideoId !== video._id && (
                <>
                  {comments[video._id] && comments[video._id].length > 0 && (
                    <div>
                      {comments[video._id].map((comment, index) => (
                        <NewsTicker key={index}>
                          <NewsItem>{comment}</NewsItem>
                        </NewsTicker>
                      ))}
                    </div>
                  )}

                  <InteractionContainer>
                    <LikeContainer onClick={() => handleLikeClick(video._id)}>
                      {likedVideos.has(video._id) ? (
                        <FaThumbsUp size={30} color="blue" />
                      ) : (
                        <FaRegThumbsUp size={30} />
                      )}
                    </LikeContainer>

                    <CommentContainer>
                      <CommentInput
                        type="text"
                        value={newComment}
                        onChange={handleCommentChange}
                        placeholder="Add a comment..."
                      />
                      <CommentButton onClick={() => handleAddComment(video._id)}>
                        Add Comment
                      </CommentButton>
                    </CommentContainer>
                  </InteractionContainer>
                </>
              )}
            </ContentWrapper>
          </CarouselItem>
        ))}
      </CarouselInner>
    </CarouselContainer>
  );
};

export default ExclusiveVideos;