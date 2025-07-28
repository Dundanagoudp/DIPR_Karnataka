import apiClient from "../apiClient";

// Reading History API
export const logReadingHistory = async (historyData) => {
  try {
    const response = await apiClient.post("/api/reading-history", historyData);
    console.log("Reading history logged:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error logging reading history:", error);
    throw error;
  }
};

export const getReadingHistory = async (userId) => {
  try {
    const response = await apiClient.get(`/api/reading-history/${userId}`);
    console.log("Reading history data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error getting reading history:", error);
    throw error;
  }
};

// Recommendations API
export const getRecommendations = async (userId) => {
  try {
    const response = await apiClient.get(`/api/recommendations/recommendations/${userId}`);
    console.log("Recommendations data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error getting recommendations:", error);
    throw error;
  }
};