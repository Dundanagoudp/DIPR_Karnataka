import React, { useState, useEffect, useRef } from "react";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaExpand, FaRegComment, FaHeart } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineLike } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import Cookies from "js-cookie";
import { useNavigate, Link } from "react-router-dom";
import { getLongVideos, likeLongVideo, LongVideoaddComment } from "../../../services/videoApi/videoApi";
import {
  PageContainer,
  VideoLayout,
  VideoPlayerSection,
  VideoPlayer,
  VideoElement,
  VideoControls,
  ControlButton,
  ProgressBar,
  Progress,
  VideoInfo,
  CurrentVideoTitle,
  VideoMeta,
  WatchNextSection,
  VideoList,
  VideoItem,
  ThumbnailContainer,
  Thumbnail,
  NowPlaying,
  PlayButton,
  VideoItemInfo,
  VideoItemTitle,
  VideoItemMeta,
  ShimmerContainer,
  ShimmerThumbnail,
  ShimmerTitle,
  ShimmerMeta,
  VideoOverlay,
  LargePlayButton,
  CommentsContainer,
  InteractionContainer,
  LikeContainer,
  FlexContainer2,
  LikeCount,
  CommentInputContainer,
  CommentInput,
  CommentButton,
  CommentsList,
  Comment,
  UserAvatar,
  CommentContent,
  CommentHeader,
  Username,
  CommentTime,
  CommentText,
  CommentActions,
  CommentAction,
  NoComments
} from "../gallerysection/LongVideos.styles";

const LongVideos = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState([]);
  const [progress, setProgress] = useState(0);
  const [likedVideos, setLikedVideos] = useState(new Set());
  const [comments, setComments] = useState({});
  const [newComments, setNewComments] = useState({});
  const [userId, setUserId] = useState(null);
  const [likeCounts, setLikeCounts] = useState({});
  const [openCommentSection, setOpenCommentSection] = useState(null);

  const videoRef = useRef(null);
  const progressBarRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserId = Cookies.get("userId");
    setUserId(storedUserId);
  }, []);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        const response = await getLongVideos();
        if (response.success) {
          setVideos(response.data);
          if (response.data.length > 0) {
            setActiveVideo(response.data[0]?._id);
            const initialLikeCounts = {};
            const initialComments = {};
            response.data.forEach(video => {
              initialLikeCounts[video._id] = video.total_Likes || 0;
              initialComments[video._id] = video.Comments || [];
            });
            setLikeCounts(initialLikeCounts);
            setComments(initialComments);
          }
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchVideos();
  }, []);

  useEffect(() => {
    if (!videoRef.current) return;
    isPlaying ? videoRef.current.play().catch(() => setIsPlaying(false)) : videoRef.current.pause();
  }, [isPlaying, activeVideo]);

  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = isMuted;
  }, [isMuted]);

  const handleVideoSelect = (id) => {
    setActiveVideo(id);
    setIsPlaying(true);
    setOpenCommentSection(null);
  };

  const togglePlay = () => setIsPlaying(!isPlaying);
  const toggleMute = () => setIsMuted(!isMuted);

  const handleProgressClick = (e) => {
    if (!videoRef.current || !progressBarRef.current) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const pos = (e.pageX - rect.left) / progressBarRef.current.offsetWidth;
    videoRef.current.currentTime = pos * videoRef.current.duration;
    setProgress(pos * 100);
  };

  const handleLikeClick = async (videoId) => {
    if (!userId) return navigate("/login");
    try {
      const isLiked = likedVideos.has(videoId);
      const response = await likeLongVideo({ longVideoId: videoId, userId });
      setLikedVideos(prev => isLiked ? new Set([...prev].filter(id => id !== videoId)) : new Set([...prev, videoId]));
      setLikeCounts(prev => ({ ...prev, [videoId]: response.data?.total_Likes || prev[videoId] + (isLiked ? -1 : 1) }));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleAddComment = async (videoId) => {
    if (!userId) return navigate("/login");
    const commentText = newComments[videoId]?.trim();
    if (!commentText) return;
    try {
      const response = await LongVideoaddComment({ text: commentText, videoId, userId });
      setComments(prev => ({ ...prev, [videoId]: [...(prev[videoId] || []), response.data?.comment] }));
      setNewComments(prev => ({ ...prev, [videoId]: "" }));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const currentVideo = videos.find(video => video._id === activeVideo) || videos[0];

  return (
    <PageContainer>
      <VideoLayout>
        <VideoPlayerSection>
          {loading ? (
            <ShimmerContainer>
              <ShimmerThumbnail />
              <ShimmerTitle />
              <ShimmerMeta />
            </ShimmerContainer>
          ) : (
            <>
              <VideoPlayer>
                <VideoElement
                  ref={videoRef}
                  src={currentVideo?.video_url}
                  poster={currentVideo?.thumbnail}
                  onClick={togglePlay}
                  onEnded={() => setIsPlaying(false)}
                />
                {!isPlaying && (
                  <VideoOverlay>
                    <LargePlayButton onClick={togglePlay}><FaPlay /></LargePlayButton>
                  </VideoOverlay>
                )}
                <VideoControls>
                  <ControlButton onClick={togglePlay}>{isPlaying ? <FaPause /> : <FaPlay />}</ControlButton>
                  <ProgressBar ref={progressBarRef} onClick={handleProgressClick}>
                    <Progress $width={`${progress}%`} />
                  </ProgressBar>
                  <ControlButton onClick={toggleMute}>{isMuted ? <FaVolumeMute /> : <FaVolumeUp />}</ControlButton>
                  <ControlButton onClick={() => videoRef.current?.requestFullscreen()}><FaExpand /></ControlButton>
                </VideoControls>
              </VideoPlayer>
              <VideoInfo>
                <CurrentVideoTitle>{currentVideo?.title}</CurrentVideoTitle>
                <VideoMeta>{new Date(currentVideo?.createdAt).toLocaleDateString()}</VideoMeta>
              </VideoInfo>

              {currentVideo && (
                <CommentsContainer>
                  <InteractionContainer>
                    <LikeContainer>
                      <FlexContainer2>
                        <AiOutlineLike
                          size={30}
                          color={likedVideos.has(currentVideo._id) ? "blue" : "#000"}
                          onClick={() => handleLikeClick(currentVideo._id)}
                        />
                        <LikeCount>{likeCounts[currentVideo._id] || 0}</LikeCount>
                        <FaRegComment
                          size={25}
                          onClick={() => setOpenCommentSection(prev => prev === currentVideo._id ? null : currentVideo._id)}
                        />
                      </FlexContainer2>
                    </LikeContainer>
                    <CommentInputContainer>
                      <CommentInput
                        value={newComments[currentVideo._id] || ""}
                        onChange={(e) => setNewComments(prev => ({ ...prev, [currentVideo._id]: e.target.value }))}
                        placeholder="Add a comment..."
                      />
                      <CommentButton onClick={() => handleAddComment(currentVideo._id)}>Add Comment</CommentButton>
                    </CommentInputContainer>
                  </InteractionContainer>

                  <AnimatePresence>
                    {openCommentSection === currentVideo._id && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: "hidden" }}
                      >
                        <CommentsList>
                          {comments[currentVideo._id]?.length > 0 ? (
                            comments[currentVideo._id].map(comment => (
                              <Comment key={comment._id}>
                                <UserAvatar src={comment.user?.profileImage || "/placeholder.svg"} />
                                <CommentContent>
                                  <CommentHeader>
                                    <Username>{comment.user?.displayName || "User"}</Username>
                                    <CommentTime>{new Date(comment.createdTime).toLocaleTimeString()}</CommentTime>
                                  </CommentHeader>
                                  <CommentText>{comment.comment}</CommentText>
                                  <CommentActions>
                                    <CommentAction><FaHeart /> {comment.likes || 0}</CommentAction>
                                  </CommentActions>
                                </CommentContent>
                              </Comment>
                            ))
                          ) : <NoComments>No comments yet</NoComments>}
                        </CommentsList>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CommentsContainer>
              )}
            </>
          )}
        </VideoPlayerSection>

        <WatchNextSection>
          <VideoList>
            {loading ? Array(4).fill().map((_, i) => (
              <VideoItem key={i}>
                <ShimmerThumbnail />
                <ShimmerTitle />
                <ShimmerMeta />
              </VideoItem>
            )) : videos.map(video => (
              <VideoItem key={video._id} $isActive={video._id === activeVideo} onClick={() => handleVideoSelect(video._id)}>
                <ThumbnailContainer>
                  <Thumbnail src={video.thumbnail} />
                  {video._id === activeVideo ? <NowPlaying>NOW PLAYING</NowPlaying> : <PlayButton><FaPlay /></PlayButton>}
                </ThumbnailContainer>
                <VideoItemInfo>
                  <VideoItemTitle>{video.title}</VideoItemTitle>
                  <VideoItemMeta>
                    <div>{new Date(video.createdAt).toLocaleDateString()}</div>
                  </VideoItemMeta>
                </VideoItemInfo>
              </VideoItem>
            ))}
          </VideoList>
        </WatchNextSection>
      </VideoLayout>
    </PageContainer>
  );
};

export default LongVideos;