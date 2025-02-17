const BASE_URL = import.meta.env.VITE_API_URL;

// Fetch all videos
export const getVideos = async () => {
  try {
    const response = await fetch(`${BASE_URL}api/video`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Received videos data:", data);
    return data;
  } catch (error) {
    console.error("Error loading videos:", error);
    throw error;
  }
};

// Fetch all long videos
export const getLongVideos = async () => {
  try {
    const response = await fetch(`${BASE_URL}api/longVideo`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Received long videos data:", data);
    return data;
  } catch (error) {
    console.error("Error loading long videos:", error);
    throw error;
  }
};

// Like a long video
export const likeLongVideo = async (commentData) => {
  try {
    const url = `${BASE_URL}api/comments/likeLongVideo`; 
    console.log("Liking video with data:", commentData);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Error: ${response.status} - ${response.statusText} - ${errorText}`);
    }

    const data = await response.json();
    console.log("Like response received:", data);
    return data;
  } catch (error) {
    console.error("Error liking video:", error);
    throw error;
  }
};


// Add a comment to a long video
export const LongVideoaddComment = async (commentData) => {
  try {
    const url = `${BASE_URL}api/longVideo/addComment`;
    console.log("Request URL:", url);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentData), 
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Received comment response:", data);
    return data;
  } catch (error) {
    console.error("Error adding comment:", error);
    throw error;
  }
};

// videos by id
export const getVideoById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}api/video/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    const data = await response.json();
    console.log("Received video data:", data);
    return data;
  } catch (error) {
    console.error("Error loading video:", error);
    throw error;
  }
};


// short videos like


export const ShortlikeVideo = async (commentData) => {
  try {
    const url = `${BASE_URL}/api/comments/likeVideo`; 
    console.log("Liking video with data:", commentData);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Error: ${response.status} - ${response.statusText} - ${errorText}`);
    }

    const data = await response.json();
    console.log("Like response received:", data);
    return data;
  } catch (error) {
    console.error("Error liking video:", error);
    throw error;
  }
};

// short video add commnet

export const ShortVideoaddComment = async (commentData) => {
  try {
    const url = `${BASE_URL}api/video/addComment`;
    console.log("Request URL:", url);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentData), 
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Received comment response:", data);
    return data;
  } catch (error) {
    console.error("Error adding comment:", error);
    throw error;
  }
};


