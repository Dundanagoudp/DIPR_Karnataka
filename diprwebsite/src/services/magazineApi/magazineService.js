import apiClient from "../apiClient";

export const getMagazines = async () => {
  try {
    const response = await apiClient.get("/api/magazine");
    console.log("Received data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error loading data:", error);
    throw error;
  }
};

export const MarchMagazines = async () => {
  try {
    const response = await apiClient.get("/api/magazine2");
    console.log("Received data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error loading data:", error);
    throw error;
  }
};
