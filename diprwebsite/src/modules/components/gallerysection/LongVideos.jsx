import { useState, useEffect } from "react"
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom"
import { FaRegComment, FaHeart, FaComment, FaRetweet } from "react-icons/fa"
import { AiOutlineLike } from "react-icons/ai"
import { motion, AnimatePresence } from "framer-motion"
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

  if (loading) {
    return (
      <Container>
        <MainContent>
          <VideoPlayerContainer>
            <ShimmerEffect style={{ height: "400px", borderRadius: "8px", marginBottom: "16px" }} />
            <ShimmerEffect style={{ height: "24px", width: "70%", marginBottom: "8px" }} />
            <ShimmerEffect style={{ height: "16px", width: "40%", marginBottom: "16px" }} />
            <ShimmerEffect style={{ height: "80px", width: "100%", marginBottom: "24px" }} />
            <ShimmerEffect style={{ height: "24px", width: "30%", marginBottom: "16px" }} />
            <ShimmerEffect style={{ height: "40px", width: "100%", marginBottom: "16px" }} />
            <ShimmerEffect style={{ height: "80px", width: "100%" }} />
          </VideoPlayerContainer>
          <VideoSidebar>
            <ShimmerEffect style={{ height: "24px", width: "50%", marginBottom: "16px" }} />
            {[1, 2, 3, 4].map((item) => (
              <ShimmerEffect key={item} style={{ height: "90px", width: "100%", marginBottom: "12px" }} />
            ))}
          </VideoSidebar>
        </MainContent>
      </Container>
    )
  }

  return (
    <Container>
      <MainContent>
        <VideoPlayerContainer>
          {selectedVideo && (
            <>
              <VideoWrapper>
                <MainVideo id={selectedVideo._id} controls autoPlay>
                  <source src={selectedVideo.video_url} type="video/mp4" />
                  Your browser does not support the video tag.
                </MainVideo>
              </VideoWrapper>

              <VideoInfo>
                <VideoTitle>{selectedVideo.title}</VideoTitle>
                <VideoStats>
                  <span>{new Date(selectedVideo.createdAt).toLocaleDateString()}</span>
                  <VideoActions></VideoActions>
                </VideoStats>
                <VideoDescription>{selectedVideo.description}</VideoDescription>
              </VideoInfo>

              <CommentsContainer>
                <InteractionContainer>
                  <LikeContainer>
                    <FlexContainer2>
                      <AiOutlineLike
                        style={{ cursor: "pointer" }}
                        size={30}
                        color={likedVideos.has(selectedVideo._id) ? "blue" : "#000"}
                        onClick={() => handleLikeClick(selectedVideo._id)}
                      />
                      <LikeCount>{likeCounts[selectedVideo._id] || 0}</LikeCount>
                      <FaRegComment
                        style={{ cursor: "pointer" }}
                        size={25}
                        onClick={() => toggleCommentSection(selectedVideo._id)}
                      />
                    </FlexContainer2>
                  </LikeContainer>

                  <CommentInputContainer>
                    <CommentInput
                      type="text"
                      value={newComments[selectedVideo._id] || ""}
                      onChange={(e) => handleCommentChange(selectedVideo._id, e)}
                      placeholder="Add a comment..."
                    />
                    <CommentButton onClick={() => handleAddComment(selectedVideo._id)}>Add Comment</CommentButton>
                  </CommentInputContainer>
                </InteractionContainer>

                {error && <ErrorMessage>{error}</ErrorMessage>}

                <AnimatePresence>
                  {openCommentSection === selectedVideo._id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <CommentsHeader>Comments ({comments[selectedVideo._id]?.length || 0})</CommentsHeader>
                      <CommentsList>
                        {comments[selectedVideo._id]?.length > 0 ? (
                          comments[selectedVideo._id].map((comment) => (
                            <Comment key={comment._id}>
                              <UserAvatar
                                src={comment.user?.profileImage || "/placeholder.svg?height=40&width=40"}
                                alt="User"
                              />
                              <CommentContent>
                                <CommentHeader>
                                  <Username>{comment.user?.displayName || "User"}</Username>
                                  <CommentTime>{new Date(comment.createdTime).toLocaleTimeString()}</CommentTime>
                                </CommentHeader>
                                <CommentText>{comment.comment}</CommentText>
                                <CommentActions>
                                  <CommentAction onClick={() => handleLikeComment(comment._id, selectedVideo._id)}>
                                    <FaHeart /> <span>{comment.likes || 0}</span>
                                  </CommentAction>
                                  <CommentAction>
                                    <FaRetweet />
                                  </CommentAction>
                                  <CommentAction>
                                    <FaComment />
                                  </CommentAction>
                                </CommentActions>
                              </CommentContent>
                            </Comment>
                          ))
                        ) : (
                          <NoComments>No comments yet. Be the first to comment!</NoComments>
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
          <SidebarHeader>More Videos</SidebarHeader>
          <VideoList>
            {videosData.map((video) => (
              <VideoItem
                key={video._id}
                className={selectedVideo?._id === video._id ? "active" : ""}
                onClick={() => handleVideoSelect(video)}
              >
                <ThumbnailContainer>
                  <Thumbnail src={video.thumbnail || "/placeholder.svg?height=90&width=160"} alt={video.title} />
                  <VideoDuration>2:19</VideoDuration>
                </ThumbnailContainer>
                <VideoItemInfo>
                  <VideoItemTitle>{video.title}</VideoItemTitle>
                  <VideoItemViews>{new Date(video.createdAt).toLocaleDateString()}</VideoItemViews>
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
