import apiClient from "../apiClient";

// Search API for magazines
// export const SearchMagazineApi = async (query) => {
//   try {
//     const response = await apiClient.get(`/api/magazine/searchmagazine?query=${encodeURIComponent(query)}`);
//     console.log("Search Magazine API Response:", response.data);
//     return response.data;
//   } catch (err) {
//     console.error("API Error:", err);
//     throw err;
//   }
// };

//  {{baseUrl}}/api/search/searchContent?query=updating to version

export const SearchMagazineApi = async (query) => {
  try {
    const response = await apiClient.get(`/api/search/searchContent?query=${encodeURIComponent(query)}`);
    console.log("Search Content API Response:", response.data);
    return response.data;
  } catch (err) {
    console.error("API Error:", err);
    throw err;
  }
}