const BASE_URL = import.meta.env.VITE_API_URL;

export const getVideos = async () => {
  try {
    const response = await fetch(`${BASE_URL}api/video`, {
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
export const getLongVideos = async () => {
  try {
    const response = await fetch(`${BASE_URL}api/longVideo`, {
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
