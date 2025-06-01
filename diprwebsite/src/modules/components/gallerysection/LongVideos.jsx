import { useState, useEffect } from "react"
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom"
import { FaRegComment, FaHeart, FaComment, FaRetweet, FaComments } from "react-icons/fa"
import { AiOutlineLike } from "react-icons/ai"
import { motion, AnimatePresence } from "framer-motion"
import { SlCalender } from "react-icons/sl";
import { getLongVideos, likeLongVideo, LongVideoaddComment } from "../../../services/videoApi/videoApi"
import {
  Container,
  MainContent,
  VideoPlayerContainer,
  VideoWrapper,
  MainVideo,
  VideoInfo,
  VideoTitle,
  VideoStats,
  VideoActions,
  VideoDescription,
  CommentsContainer,
  CommentsHeader,
  CommentInputContainer,
  CommentInput,
  CommentButton,
  ErrorMessage,
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
  NoComments,
  VideoSidebar,
  SidebarHeader,
  VideoList,
  VideoItem,
  ThumbnailContainer,
  Thumbnail,
  VideoDuration,
  VideoItemInfo,
  VideoItemTitle,
  VideoItemViews,
  ShimmerEffect,
  InteractionContainer,
  LikeContainer,
  FlexContainer2,
  LikeCount,
} from "./LongVideos.styles"
import { IoIosTimer } from "react-icons/io";
import { BiSolidMoviePlay } from "react-icons/bi";
import { User } from 'lucide-react';


const LongVideos = () => {
  const [videosData, setVideosData] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [playingVideoId, setPlayingVideoId] = useState(null)
  const [likedVideos, setLikedVideos] = useState(new Set())
  const [comments, setComments] = useState({})
  const [newComments, setNewComments] = useState({})
  const [userId, setUserId] = useState(null)
  const [likeCounts, setLikeCounts] = useState({})
  const [error, setError] = useState("")
  const [debouncingLike, setDebouncingLike] = useState(false)
  const [openCommentSection, setOpenCommentSection] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const storedUserId = Cookies.get("userId")
    setUserId(storedUserId)
  }, [])

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true)
      try {
        const response = await getLongVideos()
        if (response.success && Array.isArray(response.data)) {
          setVideosData(response.data)
          if (response.data.length > 0) {
            setSelectedVideo(response.data[0])
            setPlayingVideoId(response.data[0]._id)
          }

          // Initialize like counts and comments
          const initialLikeCounts = {}
          const initialComments = {}
          response.data.forEach((video) => {
            initialLikeCounts[video._id] = video.total_Likes || 0
            if (video.Comments && Array.isArray(video.Comments)) {
              initialComments[video._id] = video.Comments.map((comment) => ({
                ...comment,
                likes: comment.total_Likes || 0,
              }))
            } else {
              initialComments[video._id] = []
            }
          })
          setLikeCounts(initialLikeCounts)
          setComments(initialComments)
        } else {
          setVideosData([])
        }
      } catch (error) {
        console.error("Error fetching videos:", error)
        setVideosData([])
      } finally {
        setLoading(false)
      }
    }

    fetchVideos()
  }, [])

  const handleVideoSelect = (video) => {
    setSelectedVideo(video)
    setPlayingVideoId(video._id)
    setOpenCommentSection(null)
    
    // Force the video to load and play
    setTimeout(() => {
      const videoElement = document.getElementById(video._id)
      if (videoElement) {
        videoElement.load() // Reload the video source
        videoElement.play().catch(error => {
          console.log("Auto-play prevented:", error)
        })
      }
    }, 100)
  }

  const handleLikeClick = async (videoId) => {
    if (!userId) {
      Cookies.set("redirectUrl", window.location.pathname)
      navigate("/login")
      return
    }

    if (debouncingLike) return

    setDebouncingLike(true)

    setTimeout(async () => {
      try {
        const isLiked = likedVideos.has(videoId)
        const likeData = { longVideoId: videoId, userId }
        const response = await likeLongVideo(likeData)

        const newLikedVideos = new Set(likedVideos)
        isLiked ? newLikedVideos.delete(videoId) : newLikedVideos.add(videoId)
        setLikedVideos(newLikedVideos)

        setLikeCounts((prevCounts) => ({
          ...prevCounts,
          [videoId]: response.data?.total_Likes || prevCounts[videoId] + (isLiked ? -1 : 1),
        }))
      } catch (error) {
        console.error("Error liking video:", error)
      } finally {
        setDebouncingLike(false)
      }
    }, 500)
  }

  const handleCommentChange = (videoId, e) => {
    setNewComments((prevComments) => ({
      ...prevComments,
      [videoId]: e.target.value,
    }))
  }

  const handleAddComment = async (videoId) => {
    if (!userId) {
      Cookies.set("redirectUrl", window.location.pathname)
      navigate("/login")
      return
    }

    const commentText = newComments[videoId]?.trim()
    if (!commentText) {
      alert("Please enter a comment.")
      return
    }

    const commentData = { text: commentText, videoId, userId }

    try {
      const response = await LongVideoaddComment(commentData)
      const newComment = response.data?.comment

      setComments((prevComments) => ({
        ...prevComments,
        [videoId]: [...(prevComments[videoId] || []), newComment],
      }))

      setNewComments((prevComments) => ({
        ...prevComments,
        [videoId]: "",
      }))

      setError("")
      window.location.reload()
    } catch (err) {
      setError("Failed to add comment. Please try again.")
    }
  }

  const toggleCommentSection = (videoId) => {
    if (!userId) {
      Cookies.set("redirectUrl", window.location.pathname)
      navigate("/login")
      return
    }

    setOpenCommentSection(openCommentSection === videoId ? null : videoId)
  }

  const handleLikeComment = async (commentId, videoId) => {
    if (!userId) {
      Cookies.set("redirectUrl", window.location.pathname)
      navigate("/login")
      return
    }

    try {
      const likeData = { commentId, userId }
      const response = await likeLongVideo(likeData)

      setComments((prevComments) => ({
        ...prevComments,
        [videoId]: prevComments[videoId].map((comment) =>
          comment._id === commentId ? { ...comment, likes: response.data?.total_Likes || comment.likes + 1 } : comment,
        ),
      }))
    } catch (error) {
      console.error("Error liking comment:", error)
    }
  }

  // Skeleton Loader Component
  const SkeletonLoader = () => (
    <Container>
      <MainContent>
        <VideoPlayerContainer>
          <ShimmerEffect height="400px" marginBottom="20px" />
          <ShimmerEffect height="32px" width="70%" marginBottom="12px" />
          <ShimmerEffect height="20px" width="40%" marginBottom="16px" />
          <ShimmerEffect height="80px" width="100%" marginBottom="24px" />
          
          <InteractionContainer>
            <ShimmerEffect height="40px" width="200px" />
            <ShimmerEffect height="40px" width="300px" />
          </InteractionContainer>
          
          <ShimmerEffect height="24px" width="30%" marginBottom="16px" />
          
          {[1, 2, 3].map((item) => (
            <div key={item} style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
              {/* <ShimmerEffect height="44px" width="44px" style={{ borderRadius: '50%' }} /> */}
              <div style={{ flex: 1 }}>
                <ShimmerEffect height="16px" width="60%" marginBottom="8px" />
                <ShimmerEffect height="40px" width="100%" marginBottom="8px" />
                {/* <ShimmerEffect height="16px" width="30%" /> */}
              </div>
            </div>
          ))}
        </VideoPlayerContainer>

        <VideoSidebar>
          <ShimmerEffect height="28px" width="50%" marginBottom="20px" />
          {[1, 2, 3, 4].map((item) => (
            <div key={item} style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
              <ShimmerEffect height="78px" width="140px" />
              <div style={{ flex: 1 }}>
                <ShimmerEffect height="16px" width="100%" marginBottom="8px" />
                <ShimmerEffect height="14px" width="60%" />
              </div>
            </div>
          ))}
        </VideoSidebar>
      </MainContent>
    </Container>
  )

  if (loading) {
    return <SkeletonLoader />
  }

  return (
    <Container>
      <MainContent>
        <VideoPlayerContainer>
          {selectedVideo && (
            <>
              <VideoWrapper>
                <MainVideo 
                  key={selectedVideo._id} // Add key prop to force re-render
                  id={selectedVideo._id} 
                  controls 
                  autoPlay
                  onLoadStart={() => console.log("Video loading started")}
                  onCanPlay={() => console.log("Video can play")}
                >
                  <source src={selectedVideo.video_url} type="video/mp4" />
                  Your browser does not support the video tag.
                </MainVideo>
              </VideoWrapper>

              <VideoInfo>
                <VideoTitle>{selectedVideo.title}</VideoTitle>
                <VideoStats>
                  <span><SlCalender style={{color: "#000000", marginRight: "5px"}} /> {new Date(selectedVideo.createdAt).toLocaleDateString()}</span>
                  <VideoActions>
                  </VideoActions>
                </VideoStats>
                <VideoDescription>{selectedVideo.description}</VideoDescription>
              </VideoInfo>

              <CommentsContainer>
                <InteractionContainer>
                  <LikeContainer>
                    <FlexContainer2>
                      <AiOutlineLike
                        size={28}
                        color={likedVideos.has(selectedVideo._id) ? "#667eea" : "#6c757d"}
                        onClick={() => handleLikeClick(selectedVideo._id)}
                        style={{ cursor: "pointer" }}
                      />
                      <LikeCount>{likeCounts[selectedVideo._id] || 0}</LikeCount>
                      <FaRegComment
                        size={24}
                        color="#6c757d"
                        onClick={() => toggleCommentSection(selectedVideo._id)}
                        style={{ cursor: "pointer" }}
                      />
                    </FlexContainer2>
                  </LikeContainer>

                  <CommentInputContainer>
                    <CommentInput
                      type="text"
                      value={newComments[selectedVideo._id] || ""}
                      onChange={(e) => handleCommentChange(selectedVideo._id, e)}
                      placeholder="Share your thoughts..."
                    />
                    <CommentButton onClick={() => handleAddComment(selectedVideo._id)}>
                      <FaComments /> Comment
                    </CommentButton>
                  </CommentInputContainer>
                </InteractionContainer>

                {error && <ErrorMessage>⚠️ {error}</ErrorMessage>}

                <AnimatePresence>
                  {openCommentSection === selectedVideo._id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <CommentsHeader>
                        <FaComments /> Comments ({comments[selectedVideo._id]?.length || 0})
                      </CommentsHeader>
                      <CommentsList>
                        {comments[selectedVideo._id]?.length > 0 ? (
                          comments[selectedVideo._id].map((comment) => (
                            <Comment key={comment._id}>
                                  <User />
                              <CommentContent>
                                <CommentHeader>
                                  <Username>
                                     {comment.user?.displayName || "Anonymous User"}
                                  </Username>
                                  <CommentTime>
                                    <IoIosTimer style={{color: "#6c757d"}}/> {new Date(comment.createdTime).toLocaleTimeString()}
                                  </CommentTime>
                                </CommentHeader>
                                <CommentText>{comment.comment}</CommentText>
                                {/* <CommentActions>
                                  <CommentAction onClick={() => handleLikeComment(comment._id, selectedVideo._id)}>
                                    <FaHeart color="#e74c3c" />
                                    <span>{comment.likes || 0}</span>
                                  </CommentAction>
                                  <CommentAction>
                                    <FaRetweet color="#17a2b8" />
                                    <span>Share</span>
                                  </CommentAction>
                                  <CommentAction>
                                    <FaComment color="#6c757d" />
                                    <span>Reply</span>
                                  </CommentAction>
                                </CommentActions> */}
                              </CommentContent>
                            </Comment>
                          ))
                        ) : (
                          <NoComments>
                            💭 No comments yet. Be the first to share your thoughts!
                          </NoComments>
                        )}
                      </CommentsList>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CommentsContainer>
            </>
          )}
        </VideoPlayerContainer>

        <VideoSidebar>
          <SidebarHeader><BiSolidMoviePlay style={{color: "#1E88E5"}} /> More Videos</SidebarHeader>
          <VideoList>
            {videosData.map((video) => (
              <VideoItem
                key={video._id}
                className={selectedVideo?._id === video._id ? "active" : ""}
                onClick={() => {
                  console.log("Video selected:", video.title) // Debug log
                  handleVideoSelect(video)
                }}
                style={{ cursor: 'pointer' }} // Ensure cursor shows it's clickable
              >
                <ThumbnailContainer>
                  <Thumbnail 
                    src={video.thumbnail || "/placeholder.svg?height=78&width=140"} 
                    alt={video.title}
                  />
                </ThumbnailContainer>
                <VideoItemInfo>
                  <VideoItemTitle>{video.title}</VideoItemTitle>
                  <VideoItemViews>
                    <SlCalender style={{color: "#000000"}} /> {new Date(video.createdAt).toLocaleDateString()}
                  </VideoItemViews>
                </VideoItemInfo>
              </VideoItem>
            ))}
          </VideoList>
        </VideoSidebar>
      </MainContent>
    </Container>
  )
}

export default LongVideos