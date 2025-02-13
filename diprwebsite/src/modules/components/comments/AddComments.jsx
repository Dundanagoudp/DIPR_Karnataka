import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { addComment } from "../../../services/newsApi/NewsApi";

const AddComments = ({ newsId }) => {
  // Accept newsId as prop
  const [text, setText] = useState("");
  const [userId, setUserId] = useState(null);
  const [error, setError] = useState("");


  useEffect(() => {
    const storedUserId = Cookies.get("userId");
    console.log("Retrieved User ID from Cookies:", storedUserId);
    setUserId(storedUserId);
  }, []);

  // Handle comment submission
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

    // API expects `text`, `newsId`, and `userId`
    const commentData = { text, newsId, userId };

    try {
      const response = await addComment(commentData);
      console.log("Comment added successfully:", response);
      setText(""); // Clear the input field after submission
      setError("");
      window.location.reload();
    } catch (err) {
      console.error("Error adding comment:", err);

      setError("Failed to add comment. Please try again.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a comment..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" disabled={!userId}>
          Submit
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default AddComments;
