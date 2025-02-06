import React, { useState } from "react";
import { MdOutlineMessage } from "react-icons/md";
import { CommentSectionWrapper, CommentInputWrapper, CommentInputField, CommentButtonWrapper } from "../comments/ComMents.styles";
import { addComment } from "../../../services/categoryapi/CategoryApi";

const AddComments = ({ newsId, userId }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    if (!comment.trim()) {
      alert("Please enter a comment.");
      return;
    }

    const commentData = {
      user: userId,
      news: newsId,
      comment: comment,
    };

    try {
      const response = await addComment(commentData);
      console.log("Comment added successfully:", response.data);
      setComment(""); 
    } catch (err) {
      console.error("Error adding comment:", err);
      alert("Failed to add comment. Please try again.");
    }
  };

  return (
    <CommentSectionWrapper>
      <CommentInputWrapper onSubmit={handleSubmit}>
        <CommentInputField
          type="text"
          placeholder="Add your comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <CommentButtonWrapper type="submit">
          <MdOutlineMessage />
        </CommentButtonWrapper>
      </CommentInputWrapper>
    </CommentSectionWrapper>
  );
};

export default AddComments;