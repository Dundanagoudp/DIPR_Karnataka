import apiClient from "../apiClient";

export const getNews = async () => {
  try {
    const response = await apiClient.get("/api/news");
    console.log("Received data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error loading data:", error);
    throw error;
  }
};

export const getNewsByid = async (id) => {
  try {
    const response = await apiClient.get(`/api/news/${id}`);
    console.log("Received data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error loading data:", error);
    throw error;
  }
};

export const addComment = async (commentData) => {
  try {
    console.log("Sending comment data:", commentData);
    const response = await apiClient.post("/api/news/addComment", commentData);
    console.log("Comment added successfully:", response.data);
    return response.data;
  } catch (err) {
    console.error("Error adding comment:", err);
    throw err;
  }
};

export const likeNews = async (commentData) => {
  try {
    const response = await apiClient.post("/api/comments/like", commentData);
    return response.data;
  } catch (err) {
    console.error("Error adding comment:", err);
    throw err;
  }
};

export const trackClick = async (newsData) => {
  try {
    const response = await apiClient.post("/api/users/track-news-click", newsData);
    return response.data;
  } catch (err) {
    console.error("Error adding comment:", err);
    throw err;
  }
};

export const getRecommendedNews = async (userId) => {
  try {
    const response = await apiClient.get(`/api/users/recommendations/${userId}`);
    console.log("Received data from this api:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error loading data:", error);
    throw error;
  }
};
