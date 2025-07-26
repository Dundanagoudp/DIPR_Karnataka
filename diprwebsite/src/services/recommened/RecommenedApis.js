const BASE_URL = import.meta.env.VITE_API_URL;

// Reading History API
export const logReadingHistory = async (historyData) => {
  try {
    const response = await fetch(`${BASE_URL}api/reading-history`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(historyData),
      credentials: "include",
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to log reading history");
    }

    console.log("Reading history logged:", data);
    return data;
  } catch (error) {
    console.error("Error logging reading history:", error);
    throw error;
  }
};

export const getReadingHistory = async (userId) => {
  try {
    const response = await fetch(`${BASE_URL}api/reading-history/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch reading history");
    }

    console.log("Reading history data:", data);
    return data;
  } catch (error) {
    console.error("Error getting reading history:", error);
    throw error;
  }
};

// Recommendations API
export const getRecommendations = async (userId) => {
  try {
    const response = await fetch(`${BASE_URL}api/recommendations/recommendations/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch recommendations");
    }

    console.log("Recommendations data:", data);
    return data;
  } catch (error) {
    console.error("Error getting recommendations:", error);
    throw error;
  }
};