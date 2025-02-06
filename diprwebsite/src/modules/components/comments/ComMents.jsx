import React, { useState, useEffect } from "react";
import axios from "axios";
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
  NestedComment,
  NestedUser,
  Actions,
  ActionIcon,
} from "../comments/ComMents.styles";

import profileImg from "../../../assets/comment1.png";
import profileImg1 from "../../../assets/comment2.png";
import { addComment, likeComment } from "../../../services/categoryapi/CategoryApi";

const commentsData = [
  {
    _id: 1,
    user: "tobi",
    success: true,
    comment: "There are so many great little design touches in threads. Really Great",
    replies: 26,
    likes: 112,
    createdTime: "7h",
    profileImg: profileImg,
    nested: {
      user: "h1brd",
      comment: "you can start with @rourkey and @brainsw but theres more folks",
    },
  },
  {
    _id: 2,
    user: "jack",
    verified: true,
    comment: "We wanted flying cars, instead we got 7 Twitter clones.",
    replies: 26,
    likes: 112,
    createdTime: "33m",
    profileImg: profileImg1,
  },
];

const ComMents = () => {
  const [comments, setComments] = useState(commentsData);

  useEffect(() => {
    // Fetch initial comments if needed
    // axios.get("/api/news/comments").then(response => setComments(response.data));
  }, []);

  const handleAddComment = async (newComment) => {
    try {
      const addedComment = await addComment(newComment);
      setComments([...comments, addedComment.data]);
    } catch (err) {
      console.error("Error adding comment:", err);
    }
  };

  const handleLikeComment = async (commentId) => {
    try {
      const updatedComment = await likeComment(commentId);
      setComments(comments.map(comment => 
        comment._id === commentId ? { ...comment, likes: updatedComment.likes } : comment
      ));
    } catch (err) {
      console.error("Error liking comment:", err);
    }
  };

  return (
    <CommentSection>
      {comments.map((comment) => (
        <Comment key={comment._id}>
          <ProfileImage src={comment.profileImg} alt={comment.user} />
          <CommentContent>
            <UserHeader>
              <UserInfo>
                <Username>{comment.user}</Username>
                {comment.verified && <VerifiedIcon>✔</VerifiedIcon>}
              </UserInfo>
              <Time>{comment.createdTime}</Time>
            </UserHeader>
            <CommentText>{comment.comment}</CommentText>
            {comment.nested && (
              <NestedComment>
                <NestedUser>@{comment.nested.user}</NestedUser> {comment.nested.comment}
              </NestedComment>
            )}
            <Actions>
              <ActionIcon>
                <FaComment />
                {comment.replies}
              </ActionIcon>
              <ActionIcon>
                <FaRetweet />
              </ActionIcon>
              <ActionIcon onClick={() => handleLikeComment(comment._id)}>
                <FaHeart />
                {comment.likes}
              </ActionIcon>
            </Actions>
          </CommentContent>
        </Comment>
      ))}
    </CommentSection>
  );
};

export default ComMents;