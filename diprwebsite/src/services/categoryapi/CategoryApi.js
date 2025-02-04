import axios from "../../config/axios";

// Fetch all categories
export const CategoryApi = async () => {
  try {
    const response = await axios.get("/api/category");
    if (!response || !response.data) {
      throw new Error("No data received from API");
    }
    return response.data;
  } catch (err) {
    console.error("API Error:", err);
    throw err;
  }
};

// Fetch news (general or category-specific)
export const NewsApi = async (categoryId = null) => {
  try {
    const endpoint = categoryId ? `/api/news/categories/${categoryId}` : "/api/news";
    const response = await axios.get(endpoint);
    if (!response || !response.data) {
      throw new Error("No data received from API");
    }
    return response.data;
  } catch (error) {
    console.error("Error fetching news data:", error);
    throw error;
  }
};