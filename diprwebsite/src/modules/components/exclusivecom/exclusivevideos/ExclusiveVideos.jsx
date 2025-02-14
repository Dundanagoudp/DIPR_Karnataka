import React, { useState, useEffect } from "react";
import Cookies from "js-cookie"; 
import { FaPlay, FaRegComment, FaPaperPlane } from "react-icons/fa";
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
  LikeCount
} from "../exclusivevideos/ExclusiveVideos.styles";
import { getLongVideos, likeLongVideo, LongVideoaddComment } from "../../../../services/videoApi/videoApi";
import LongVideoComment from "../../videoscomments/LongVideoComment";

const ExclusiveVideos = () => {
  const [videosData, setVideosData] = useState([]);
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const [likedVideos, setLikedVideos] = useState(new Set());
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState("");
  const [userId, setUserId] = useState(null);
  const [likeCounts, setLikeCounts] = useState({});
  const [error, setError] = useState("");
  const [openCommentSection, setOpenCommentSection] = useState(null);

  useEffect(() => {
    const storedUserId = Cookies.get("userId");
    setUserId(storedUserId);
  }, []);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await getLongVideos();
        if (response.success && Array.isArray(response.data)) {
          setVideosData(response.data);
          const initialLikeCounts = {};
          response.data.forEach(video => {
            initialLikeCounts[video._id] = video.likes || 0;
          });
          setLikeCounts(initialLikeCounts);
        } else {
          setVideosData([]);
        }
      } catch (error) {
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

  const handleLikeClick = async (videoId) => {
    if (!userId) {
      return;
    }

    try {
      const isLiked = likedVideos.has(videoId);
      const likeData = { longVideoId: videoId, userId };

      const response = await likeLongVideo(likeData);
      const newLikedVideos = new Set(likedVideos);
      isLiked ? newLikedVideos.delete(videoId) : newLikedVideos.add(videoId);
      setLikedVideos(newLikedVideos);

      setLikeCounts(prevCounts => ({
        ...prevCounts,
        [videoId]: isLiked ? prevCounts[videoId] - 1 : prevCounts[videoId] + 1
      }));
    } catch (error) {
      console.error("Error liking video:", error);
    }
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = async (videoId) => {
    if (!newComment.trim()) {
      alert("Please enter a comment.");
      return;
    }

    if (!userId) {
      setError("User is not logged in.");
      return;
    }

    const commentData = { text: newComment, videoId, userId };

    try {
      const response = await LongVideoaddComment(commentData);
      setComments(prevComments => ({
        ...prevComments,
        [videoId]: [...(prevComments[videoId] || []), response.comment]
      }));

      setNewComment("");
      setError("");
    } catch (err) {
      setError("Failed to add comment. Please try again.");
    }
  };

  const toggleCommentSection = (videoId) => {
    setOpenCommentSection(openCommentSection === videoId ? null : videoId);
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
                    <LikeCount style={{color:"#000"}} >{likeCounts[video._id] || 0}</LikeCount>
                    <FaRegComment 
                      size={25} 
                      onClick={() => toggleCommentSection(video._id)} 
                    />
                    <FaPaperPlane size={25}  />
                  </FlexContainer2>
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

              {/* Animate the opening and closing of the comment section */}
              <AnimatePresence>
                {openCommentSection === video._id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <LongVideoComment videoId={video._id} />
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
