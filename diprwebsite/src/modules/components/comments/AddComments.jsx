import React, { useState, useEffect, useContext } from "react";
import Cookies from "js-cookie";
import { addComment } from "../../../services/newsApi/NewsApi";
import { MdOutlineComment } from "react-icons/md";
import { CommentInputWrapper, CommentInputField, CommentButtonWrapper, ErrorText } from "../comments/ComMents.styles"; 
import { FontSizeContext } from "../../../context/FontSizeProvider";

const AddComments = ({ newsId }) => {
  const [text, setText] = useState("");
  const [userId, setUserId] = useState(null);
  const [error, setError] = useState("");
    const { fontSize  } = useContext(FontSizeContext);


  useEffect(() => {
    const storedUserId = Cookies.get("userId");
    setUserId(storedUserId);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!text.trim()) {
      alert("Please enter a comment.");
      return;
    }

    if (!userId) {
      setError("User is not logged in.");
      return;
    }

    if (!newsId) {
      setError("News ID not found.");
      return;
    }

    const commentData = { text, newsId, userId };
    try {
      const response = await addComment(commentData);
      setText("");
      setError("");
      window.location.reload();
    } catch (err) {
      console.error("Error adding comment:", err);
      setError("Failed to add comment. Please try again.");
    }
  };

  return (
    <div>
      <CommentInputWrapper style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
        <CommentInputField style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}
          type="text"
          placeholder="Add your comments"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <CommentButtonWrapper  onClick={handleSubmit} disabled={!text.trim()}>
          <MdOutlineComment style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined} />
        </CommentButtonWrapper>
      </CommentInputWrapper >
      {error && <ErrorText style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>{error}</ErrorText>}
    </div>
  );
};

export default AddComments;
