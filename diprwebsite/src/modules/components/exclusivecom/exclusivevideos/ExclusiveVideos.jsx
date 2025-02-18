import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { FaPlay, FaRegComment, FaPaperPlane, FaHeart, FaComment, FaRetweet } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
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
  CommentSection,
  FlexContainer2,
  LikeCount,
  Comment,
  ProfileImage,
  CommentContent,
  UserHeader,
  UserInfo,
  Username,
  Time,
  CommentText,
  Actions,
  ActionIcon,
} from "../exclusivevideos/ExclusiveVideos.styles";
import { getLongVideos, likeLongVideo, LongVideoaddComment } from "../../../../services/videoApi/videoApi";

const ExclusiveVideos = () => {
  const [videosData, setVideosData] = useState([]);
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const [likedVideos, setLikedVideos] = useState(new Set());
  const [comments, setComments] = useState({});
  const [newComments, setNewComments] = useState({}); // Separate state for each video's comment input
  const [userId, setUserId] = useState(null);
  const [likeCounts, setLikeCounts] = useState({});
  const [error, setError] = useState("");
  const [openCommentSection, setOpenCommentSection] = useState(null);

  // Fetch userId from cookies
  useEffect(() => {
    const storedUserId = Cookies.get("userId");
    setUserId(storedUserId);
  }, []);

  // Fetch videos and initialize likes and comments
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await getLongVideos();
        if (response.success && Array.isArray(response.data)) {
          setVideosData(response.data);

          // Initialize like counts for videos
          const initialLikeCounts = {};
          response.data.forEach((video) => {
            initialLikeCounts[video._id] = video.total_Likes || 0;
          });
          setLikeCounts(initialLikeCounts);

          // Initialize comments and their likes
          const initialComments = {};
          response.data.forEach((video) => {
            if (video.Comments && Array.isArray(video.Comments)) {
              initialComments[video._id] = video.Comments.map((comment) => ({
                ...comment,
                likes: comment.total_Likes || 0,
              }));
            }
          });
          setComments(initialComments);
        } else {
          setVideosData([]);
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
        setVideosData([]);
      }
    };

    fetchVideos();
  }, []);

  // Handle video play
  const handlePlayClick = (videoId) => {
    setPlayingVideoId(videoId);
  };

  // Handle video hover
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

  // Handle like for a video
  const handleLikeClick = async (videoId) => {
    if (!userId) {
      setError("User is not logged in.");
      return;
    }

    try {
      const isLiked = likedVideos.has(videoId);
      const likeData = { longVideoId: videoId, userId };

      const response = await likeLongVideo(likeData);
      const newLikedVideos = new Set(likedVideos);
      isLiked ? newLikedVideos.delete(videoId) : newLikedVideos.add(videoId);
      setLikedVideos(newLikedVideos);

      setLikeCounts((prevCounts) => ({
        ...prevCounts,
        [videoId]: response.data?.total_Likes || prevCounts[videoId] + (isLiked ? -1 : 1),
      }));
    } catch (error) {
      console.error("Error liking video:", error);
    }
  };

  // Handle comment input change for a specific video
  const handleCommentChange = (videoId, e) => {
    setNewComments((prevComments) => ({
      ...prevComments,
      [videoId]: e.target.value,
    }));
  };

  // Handle adding a comment for a specific video
  const handleAddComment = async (videoId) => {
    const commentText = newComments[videoId]?.trim();
    if (!commentText) {
      alert("Please enter a comment.");
      return;
    }

    if (!userId) {
      setError("User is not logged in.");
      return;
    }

    const commentData = { text: commentText, videoId, userId };

    try {
      const response = await LongVideoaddComment(commentData);
      const newComment = response.data?.comment;

      // Update the comment section to reflect the new comment
      setComments((prevComments) => ({
        ...prevComments,
        [videoId]: [...(prevComments[videoId] || []), newComment],
      }));

      // Clear the new comment input
      setNewComments((prevComments) => ({
        ...prevComments,
        [videoId]: "",
      }));
      setError("");

      // Reload the page to reflect the new comment
      window.location.reload();
    } catch (err) {
      setError("Failed to add comment. Please try again.");
    }
  };

  // Toggle comment section
  const toggleCommentSection = (videoId) => {
    if (openCommentSection === videoId) {
      setOpenCommentSection(null);
    } else {
      setOpenCommentSection(videoId);
    }
  };

  // Handle like for a comment
  const handleLikeComment = async (commentId, videoId) => {
    if (!userId) {
      setError("User is not logged in.");
      return;
    }
    
    try {
      const likeData = { commentId, userId };
      const response = await likeLongVideo(likeData); 

      setComments((prevComments) => ({
        ...prevComments,
        [videoId]: prevComments[videoId].map((comment) =>
          comment._id === commentId
            ? { ...comment, likes: response.data?.total_Likes || comment.likes + 1 }
            : comment
        ),
      }));
    } catch (error) {
      console.error("Error liking comment:", error);
    }
  };

  return (
    <CarouselContainer>
      <CarouselInner>
        {videosData.map((video) => (
          <div key={video._id}>
            <CarouselItem bgImage={video.thumbnail}>
              <ContentWrapper>
                <VideoContainer
                  onMouseEnter={() => handleHoverVideo(video._id, true)}
                  onMouseLeave={() => handleHoverVideo(video._id, false)}
                >
                  {playingVideoId === video._id ? (
                    <video id={video._id} controls autoPlay loop width="100%" height="100%">
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
              </ContentWrapper>
            </CarouselItem>

            <CommentSection>
              <InteractionContainer>
                <LikeContainer>
                  <FlexContainer2>
                    <AiOutlineLike
                      size={30}
                      color={likedVideos.has(video._id) ? "blue" : "#000"}
                      onClick={() => handleLikeClick(video._id)}
                    />
                    <LikeCount style={{ color: "#000" }}>{likeCounts[video._id] || 0}</LikeCount>
                    <FaRegComment size={25} onClick={() => toggleCommentSection(video._id)} />
                    <FaPaperPlane size={25} />
                  </FlexContainer2>
                </LikeContainer>

                <CommentContainer>
                  <CommentInput
                    type="text"
                    value={newComments[video._id] || ""}
                    onChange={(e) => handleCommentChange(video._id, e)}
                    placeholder="Add a comment..."
                  />
                  <CommentButton onClick={() => handleAddComment(video._id)}>
                    Add Comment
                  </CommentButton>
                </CommentContainer>
              </InteractionContainer>

              {/* Animate the opening and closing of the comment section */}
              <AnimatePresence>
                {openCommentSection === video._id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    {comments[video._id]?.length === 0 ? (
                      <p>No comments yet.</p>
                    ) : (
                      comments[video._id]?.map((comment) => (
                        <Comment key={comment._id}>
                          <ProfileImage
                            src={comment.user?.profileImage || "https://via.placeholder.com/50"}
                            alt={comment.user?.displayName}
                          />
                          <CommentContent>
                            <UserHeader>
                              <UserInfo>
                                <Username>{comment.user?.displayName}</Username>
                              </UserInfo>
                              <Time>
                                {new Date(comment.createdTime).toLocaleTimeString()}
                              </Time>
                            </UserHeader>
                            <CommentText>{comment.comment}</CommentText>
                            <Actions>
                              <ActionIcon>
                                <FaComment />
                              </ActionIcon>
                              <ActionIcon>
                                <FaRetweet />
                              </ActionIcon>
                              <ActionIcon onClick={() => handleLikeComment(comment._id, video._id)}>
                                <FaHeart /> {comment.likes || 0}
                              </ActionIcon>
                            </Actions>
                          </CommentContent>
                        </Comment>
                      ))
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </CommentSection>
          </div>
        ))}
      </CarouselInner>
    </CarouselContainer>
  );
};

export default ExclusiveVideos;