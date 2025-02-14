import React, { useEffect, useState } from "react";
import { FaHeart, FaComment, FaRetweet } from "react-icons/fa";
import {
  CommentSection,
  Comment,
  ProfileImage,
  CommentContent,
  UserHeader,
  UserInfo,
  Username,
  VerifiedIcon,
  Time,
  CommentText,
  Actions,
  ActionIcon,
} from "../videoscomments/LongVideoComment.styles";
import { longVideoComments } from "../../../services/videoApi/videoApi";

const LongVideoComment = ({ videoId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const fetchComments = async () => {
        try {
          setLoading(true);
          const response = await longVideoComments(videoId);
    
          console.log("API Response:", response);
    
          if (response.success && Array.isArray(response.data)) {
            setComments(response.data);
          } else {
            console.warn("No comments found for this video.");
            setComments([]);
          }
        } catch (error) {
          console.error("Error fetching comments:", error);
          // Display a user-friendly error message
          alert("Failed to load comments. Please try again later.");
        } finally {
          setLoading(false);
        }
      };
    
      fetchComments();
    }, [videoId]);

  const handleLikeComment = (commentId) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment._id === commentId
          ? { ...comment, likes: (comment.likes || 0) + 1 }
          : comment
      )
    );
  };

  return (
    <CommentSection>
      {loading ? (
        <p>Loading comments...</p>
      ) : comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        comments.map((comment) => (
          <Comment key={comment._id}>
            <ProfileImage
              src={comment.user.profileImage || "https://via.placeholder.com/50"}
              alt={comment.user.displayName}
            />
            <CommentContent>
              <UserHeader>
                <UserInfo>
                  <Username>{comment.user.displayName}</Username>
                  {comment.user.verified && <VerifiedIcon>✔</VerifiedIcon>}
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
                <ActionIcon onClick={() => handleLikeComment(comment._id)}>
                  <FaHeart /> {comment.likes || 0}
                </ActionIcon>
              </Actions>
            </CommentContent>
          </Comment>
        ))
      )}
    </CommentSection>
  );
};

export default LongVideoComment;