import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
} from "../comments/ComMents.styles";
import { getNewsByid } from "../../../services/newsApi/NewsApi";
import { likeComment } from "../../../services/categoryapi/CategoryApi";

const ComMents = () => {
  const { id: newsId } = useParams(); // Extract newsId from the URL
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        setLoading(true);
        const response = await getNewsByid(newsId);
        if (response.success && response.data.comments) {
          setComments(response.data.comments);
        } else {
          console.warn("No comments found.");
        }
      } catch (error) {
        console.error("Error fetching comments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [newsId]);

  const handleLikeComment = async (commentId) => {
    try {
      const updatedComment = await likeComment(commentId);
      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment._id === commentId
            ? { ...comment, likes: updatedComment.likes }
            : comment
        )
      );
    } catch (err) {
      console.error("Error liking comment:", err);
    }
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
              src="https://via.placeholder.com/50"
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
                  <FaHeart />
                </ActionIcon>
              </Actions>
            </CommentContent>
          </Comment>
        ))
      )}
    </CommentSection>
  );
};

export default ComMents;
