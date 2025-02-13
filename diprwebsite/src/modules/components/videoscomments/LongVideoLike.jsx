import React, { useState } from "react";
import { FaThumbsUp, FaRegThumbsUp } from "react-icons/fa";
import { LikeContainer } from "../exclusivevideos/ExclusiveVideos.styles";
import { likeVideo } from "../../../../services/videoApi/videoApi"; // Assume this API exists

const LikeButton = ({ videoId, initialLikes }) => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(initialLikes);

  const handleLikeClick = async () => {
    try {
      const response = await likeVideo(videoId); 
      if (response.success) {
        setLiked(!liked);
        setLikesCount(liked ? likesCount - 1 : likesCount + 1);
      }
    } catch (error) {
      console.error("Error liking video:", error);
    }
  };

  return (
    <LikeContainer onClick={handleLikeClick}>
      {liked ? (
        <FaThumbsUp size={30} color="blue" />
      ) : (
        <FaRegThumbsUp size={30} />
      )}
      <span>{likesCount}</span>
    </LikeContainer>
  );
};

export default LikeButton;