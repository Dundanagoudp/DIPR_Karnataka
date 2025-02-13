const BASE_URL = import.meta.env.VITE_API_URL;

export const getNews = async () => {
  try {
    const response = await fetch(`${BASE_URL}api/news`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log("Received data:", data);
    return data;
  } catch (error) {
    console.error("Error loading data:", error);
    console.log(error);
    throw error;
  }
};

export const getNewsByid = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}api/news/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log("Received data:", data);
    return data;
  } catch (error) {
    console.error("Error loading data:", error);
    console.log(error);
    throw error;
  }
};
export const addComment = async (commentData) => {
  try {
    console.log("Sending comment data:", commentData); // Check if the comment data is being passed

    const response = await fetch(`${BASE_URL}api/news/addComment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentData), // Send comment data
      credentials: "include", // Ensures cookies are included with the request
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Something went wrong with adding comment."
      );
    }

    console.log("Comment added successfully:", data); // Log the response from the API
    return data;
  } catch (err) {
    console.error("Error adding comment:", err);
    throw err;
  }
};

export const likeNews = async (commentData) => {
  try {
    const response = await fetch(`${BASE_URL}api/comments/like`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentData),
      credentials: "include", // Ensures cookies are included with the request
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(
        data.message || "Something went wrong with adding comment."
      );
    }
    return data;
  } catch (err) {
    console.error("Error adding comment:", err);
    throw err;
  }
};

export const trackClick = async (newsData) => {
  try {
    const response = await fetch(`${BASE_URL}api/users/track-news-click`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newsData),
      credentials: "include",
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(
        data.message || "Something went wrong with adding comment."
      );
    }
    return data;
  } catch (err) {
    console.error("Error adding comment:", err);
    throw err;
  }
};

export const getRecommendedNews = async (userId) => {
  try {
    const response = await fetch(
      `${BASE_URL}api/users/recommendations/${userId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log("Received data from this api:", data);
    return data;
  } catch (error) {
    console.error("Error loading data:", error);
    console.log(error);
    throw error;
  }
};
