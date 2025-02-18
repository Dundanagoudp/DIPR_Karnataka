const VITE_API_URL = import.meta.env.VITE_API_URL;

// Search API for magazines
export const SearchMagazineApi = async (query) => {
  try {
    const response = await fetch(
      `${VITE_API_URL}api/magazine/searchmagazine?query=${encodeURIComponent(query)}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );

    const data = await response.json();
    console.log("Search Magazine API Response:", data);

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong with the search.");
    }

    return data;
  } catch (err) {
    console.error("API Error:", err);
    throw err;
  }
};