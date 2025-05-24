"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Play, Heart, MessageCircle, Send } from "lucide-react"
import { getVideos, ShortlikeVideo, ShortVideoaddComment } from "../../../services/videoApi/videoApi"
import {
  CarouselContainer,
  CarouselHeader,
  CarouselTitle,
  CarouselWrapper,
  CarouselTrack,
  VideoCard,
  VideoThumbnail,
  VideoOverlay,
  PlayButton,
  VideoInfo,
  ChannelInfo,
  NavigationButton,
  VideoTitle,
  VideoPlayer,
  ProgressBar,
  ProgressIndicator,
  ShimmerContainer,
  ShimmerThumbnail,
  ShimmerTitle,
  // New styled components for likes and comments
  InteractionContainer,
  LikeButton,
  CommentButton,
  LikeCount,
  CommentCount,
  CommentSection,
  CommentList,
  CommentItem,
  CommentAuthor,
  CommentText,
  CommentTime,
  CommentInputContainer,
  CommentInput,
  CommentSubmitButton,
  InteractionOverlay,
  CarouselTitleWrapper
} from "../gallerysection/ShortsVideos.styles"
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md"
// import { CarouselTitleWrapper } from "./ShortsCarousel.styles"
import Cookies from "js-cookie"

const ShortsCarousel2 = () => {
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [playingVideoId, setPlayingVideoId] = useState(null)
  const [progress, setProgress] = useState(0)
  const trackRef = useRef(null)
  const containerRef = useRef(null)
  const videoRef = useRef(null)
  const [visibleVideos, setVisibleVideos] = useState(5)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  // New state for likes and comments
  const [likedVideos, setLikedVideos] = useState({})
  const [likeCounts, setLikeCounts] = useState({})
  const [comments, setComments] = useState({})
  const [commentInput, setCommentInput] = useState({})
  const [showComments, setShowComments] = useState({})
  const [userId, setUserId] = useState(null)
  const [debouncingLike, setDebouncingLike] = useState(false)

  useEffect(() => {
    // Get user ID from cookies
    const storedUserId = Cookies.get("userId")
    setUserId(storedUserId)
  }, [])

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true)
        const response = await getVideos()
        if (response.success && Array.isArray(response.data)) {
          setVideos(response.data)

          // Initialize like counts and comments from API data
          const initialLikeCounts = {}
          const initialComments = {}
          const initialLikedStatus = {}

          response.data.forEach((video) => {
            initialLikeCounts[video._id] = video.total_Likes || 0
            initialComments[video._id] = video.Comments || []
            initialLikedStatus[video._id] = false // We'll need to check if user liked it in a real app
          })

          setLikeCounts(initialLikeCounts)
          setComments(initialComments)
          setLikedVideos(initialLikedStatus)
        } else {
          // If no videos or error, create placeholder data
          const placeholderVideos = Array(10)
            .fill()
            .map((_, index) => ({
              _id: `placeholder-${index}`,
              title: `Shorts Video ${index + 1}`,
              thumbnail: `/placeholder.svg?height=400&width=225&text=Video ${index + 1}`,
              video_url: "",
              total_Likes: Math.floor(Math.random() * 1000),
              Comments: [],
            }))
          setVideos(placeholderVideos)
        }
      } catch (error) {
        console.error("Error fetching videos:", error)
        // Create placeholder data on error
        const placeholderVideos = Array(10)
          .fill()
          .map((_, index) => ({
            _id: `placeholder-${index}`,
            title: `Shorts Video ${index + 1}`,
            thumbnail: `/placeholder.svg?height=400&width=225&text=Video ${index + 1}`,
            video_url: "",
            total_Likes: Math.floor(Math.random() * 1000),
            Comments: [],
          }))
        setVideos(placeholderVideos)
      } finally {
        setLoading(false)
      }
    }

    fetchVideos()
  }, [])

  useEffect(() => {
    const updateVisibleVideos = () => {
      const width = window.innerWidth
      if (width < 640) {
        setVisibleVideos(1)
        setIsMobile(true)
        setIsTablet(false)
      } else if (width < 768) {
        setVisibleVideos(2)
        setIsMobile(false)
        setIsTablet(true)
      } else if (width < 1024) {
        setVisibleVideos(3)
        setIsMobile(false)
        setIsTablet(true)
      } else if (width < 1280) {
        setVisibleVideos(4)
        setIsMobile(false)
        setIsTablet(false)
      } else {
        setVisibleVideos(5)
        setIsMobile(false)
        setIsTablet(false)
      }
    }

    updateVisibleVideos()
    window.addEventListener("resize", updateVisibleVideos)

    return () => {
      window.removeEventListener("resize", updateVisibleVideos)
    }
  }, [])

  // Handle video progress
  useEffect(() => {
    let interval
    if (playingVideoId && videoRef.current) {
      interval = setInterval(() => {
        if (videoRef.current) {
          const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100
          setProgress(currentProgress)
        }
      }, 100)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [playingVideoId])

  const handleNext = () => {
    if (currentIndex < videos.length - visibleVideos) {
      setCurrentIndex(currentIndex + 1)
      scrollToIndex(currentIndex + 1)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
      scrollToIndex(currentIndex - 1)
    }
  }

  const scrollToIndex = (index) => {
    if (trackRef.current) {
      const cardWidth = trackRef.current.children[0]?.offsetWidth || 0
      const scrollPosition = index * cardWidth
      trackRef.current.style.transform = `translateX(-${scrollPosition}px)`
    }
  }

  const handlePlayClick = (videoId) => {
    // If clicking the same video, toggle play/pause
    if (videoId === playingVideoId) {
      setPlayingVideoId(null)
    } else {
      setPlayingVideoId(videoId)
      // Initialize comment input for this video if not already done
      if (!commentInput[videoId]) {
        setCommentInput((prev) => ({ ...prev, [videoId]: "" }))
      }
    }
  }

  // Handle like functionality
  const handleLikeClick = async (videoId, event) => {
    // Prevent event from bubbling up to parent elements
    event.stopPropagation()

    if (!userId) {
      // Redirect to login or show login prompt
      alert("Please login to like videos")
      return
    }

    if (debouncingLike) return
    setDebouncingLike(true)

    try {
      // Toggle like status
      const newLikedStatus = !likedVideos[videoId]

      // Update UI immediately for better UX
      setLikedVideos((prev) => ({ ...prev, [videoId]: newLikedStatus }))
      setLikeCounts((prev) => ({
        ...prev,
        [videoId]: newLikedStatus ? prev[videoId] + 1 : Math.max(prev[videoId] - 1, 0),
      }))

      // Call API to update like status
      await ShortlikeVideo({ videoId, userId })
    } catch (error) {
      console.error("Error liking video:", error)
      // Revert UI changes on error
      setLikedVideos((prev) => ({ ...prev, [videoId]: !prev[videoId] }))
      setLikeCounts((prev) => ({
        ...prev,
        [videoId]: !likedVideos[videoId] ? prev[videoId] + 1 : Math.max(prev[videoId] - 1, 0),
      }))
      alert("Failed to like video. Please try again.")
    } finally {
      setTimeout(() => setDebouncingLike(false), 500)
    }
  }

  // Toggle comment section visibility
  const handleCommentClick = (videoId, event) => {
    event.stopPropagation()
    setShowComments((prev) => ({ ...prev, [videoId]: !prev[videoId] }))
  }

  // Handle comment input change
  const handleCommentInputChange = (videoId, value) => {
    setCommentInput((prev) => ({ ...prev, [videoId]: value }))
  }

  // Submit a new comment
  const handleSubmitComment = async (videoId, event) => {
    event.stopPropagation()

    if (!userId) {
      alert("Please login to comment")
      return
    }

    if (!commentInput[videoId]?.trim()) {
      return
    }

    try {
      // Call API to add comment
      const response = await ShortVideoaddComment({
        text: commentInput[videoId],
        videoId,
        userId,
      })

      // Update comments state with new comment
      if (response && response.comment) {
        setComments((prev) => ({
          ...prev,
          [videoId]: [...(prev[videoId] || []), response.comment],
        }))

        // Clear input field
        setCommentInput((prev) => ({ ...prev, [videoId]: "" }))
      }
    } catch (error) {
      console.error("Error adding comment:", error)
      alert("Failed to add comment. Please try again.")
    }
  }

  // Touch and mouse events for dragging
  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.pageX - trackRef.current.offsetLeft)
    setScrollLeft(trackRef.current.scrollLeft)
  }

  const handleTouchStart = (e) => {
    setIsDragging(true)
    setStartX(e.touches[0].pageX - trackRef.current.offsetLeft)
    setScrollLeft(trackRef.current.scrollLeft)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - trackRef.current.offsetLeft
    const walk = (x - startX) * 2
    const newIndex = currentIndex - Math.sign(walk) * (Math.abs(walk) > 50 ? 1 : 0)

    if (newIndex >= 0 && newIndex <= videos.length - visibleVideos) {
      setCurrentIndex(newIndex)
      scrollToIndex(newIndex)
    }

    if (Math.abs(walk) > 50) {
      setIsDragging(false)
    }
  }

  const handleTouchMove = (e) => {
    if (!isDragging) return
    const x = e.touches[0].pageX - trackRef.current.offsetLeft
    const walk = (x - startX) * 2
    const newIndex = currentIndex - Math.sign(walk) * (Math.abs(walk) > 50 ? 1 : 0)

    if (newIndex >= 0 && newIndex <= videos.length - visibleVideos) {
      setCurrentIndex(newIndex)
      scrollToIndex(newIndex)
    }

    if (Math.abs(walk) > 50) {
      setIsDragging(false)
    }
  }

  // Format date for comments
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString()
  }

  return (
    <CarouselContainer ref={containerRef}>
      <CarouselHeader>
        <CarouselTitleWrapper>
          <CarouselTitle>View All</CarouselTitle>
          <MdOutlineKeyboardDoubleArrowRight style={{ fontSize: "1.5rem" }} />
        </CarouselTitleWrapper>
      </CarouselHeader>

      <CarouselWrapper onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp} onTouchEnd={handleMouseUp}>
        {!isMobile && (
          <NavigationButton direction="left" onClick={handlePrev} disabled={currentIndex === 0 || loading}>
            <ChevronLeft size={24} />
          </NavigationButton>
        )}

        <CarouselTrack
          ref={trackRef}
          style={{ transform: `translateX(-${currentIndex * (100 / visibleVideos)}%)` }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {loading
            ? Array(visibleVideos)
                .fill()
                .map((_, index) => (
                  <VideoCard key={`shimmer-${index}`}>
                    <ShimmerContainer>
                      <ShimmerThumbnail />
                      <VideoInfo>
                        <ShimmerTitle />
                        <ChannelInfo>
                          {/* <ShimmerChannel /> */}
                          {/* <ShimmerButton /> */}
                        </ChannelInfo>
                      </VideoInfo>
                    </ShimmerContainer>
                  </VideoCard>
                ))
            : videos.map((video) => (
                <VideoCard key={video._id}>
                  {playingVideoId === video._id ? (
                    <VideoPlayer>
                      <video
                        ref={videoRef}
                        controls
                        autoPlay
                        loop
                        src={
                          video.video_url || "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                        }
                      >
                        Your browser does not support the video tag.
                      </video>
                      <ProgressBar>
                        <ProgressIndicator style={{ width: `${progress}%` }} />
                      </ProgressBar>

                      {/* Interaction overlay for likes and comments */}
                      <InteractionOverlay>
                        <InteractionContainer>
                          <LikeButton isLiked={likedVideos[video._id]} onClick={(e) => handleLikeClick(video._id, e)}>
                            <Heart size={24} fill={likedVideos[video._id] ? "#ff0000" : "none"} />
                            <LikeCount>{likeCounts[video._id] || 0}</LikeCount>
                          </LikeButton>

                          <CommentButton
                            isActive={showComments[video._id]}
                            onClick={(e) => handleCommentClick(video._id, e)}
                          >
                            <MessageCircle size={24} />
                            <CommentCount>{comments[video._id]?.length || 0}</CommentCount>
                          </CommentButton>
                        </InteractionContainer>
                      </InteractionOverlay>

                      {/* Comment section */}
                      {showComments[video._id] && (
                        <CommentSection onClick={(e) => e.stopPropagation()}>
                          <CommentList>
                            {comments[video._id]?.length > 0 ? (
                              comments[video._id].map((comment, index) => (
                                <CommentItem key={comment._id || index}>
                                  <CommentAuthor>{comment.user?.displayName || "Anonymous"}</CommentAuthor>
                                  <CommentText>{comment.comment || comment.text}</CommentText>
                                  <CommentTime>{formatDate(comment.createdTime || comment.createdAt)}</CommentTime>
                                </CommentItem>
                              ))
                            ) : (
                              <CommentItem>No comments yet. Be the first to comment!</CommentItem>
                            )}
                          </CommentList>

                          <CommentInputContainer>
                            <CommentInput
                              type="text"
                              placeholder="Add a comment..."
                              value={commentInput[video._id] || ""}
                              onChange={(e) => handleCommentInputChange(video._id, e.target.value)}
                              onClick={(e) => e.stopPropagation()}
                            />
                            <CommentSubmitButton
                              onClick={(e) => handleSubmitComment(video._id, e)}
                              disabled={!commentInput[video._id]?.trim()}
                            >
                              <Send size={20} />
                            </CommentSubmitButton>
                          </CommentInputContainer>
                        </CommentSection>
                      )}
                    </VideoPlayer>
                  ) : (
                    <VideoThumbnail>
                      <img src={video.thumbnail || "/placeholder.svg?height=400&width=225"} alt={video.title} />
                      <VideoOverlay>
                        <PlayButton onClick={() => handlePlayClick(video._id)}>
                          <Play size={40} />
                        </PlayButton>
                      </VideoOverlay>
                    </VideoThumbnail>
                  )}

                  <VideoInfo>
                    <VideoTitle>{video.title || "Farmers' Empowerment"}</VideoTitle>
                    <ChannelInfo>
                      {/* <ChannelName>Channel Name</ChannelName> */}
                      {/* <SubscribeButton>Subscribe</SubscribeButton> */}
                    </ChannelInfo>
                  </VideoInfo>
                </VideoCard>
              ))}
        </CarouselTrack>

        {!isMobile && (
          <NavigationButton
            direction="right"
            onClick={handleNext}
            disabled={currentIndex >= videos.length - visibleVideos || loading}
          >
            <ChevronRight size={24} />
          </NavigationButton>
        )}
      </CarouselWrapper>
    </CarouselContainer>
  )
}

export default ShortsCarousel2
