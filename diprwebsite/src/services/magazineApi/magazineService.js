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

// get magazine by id
export const getMagazineById = async (id) => {
  try {
    const response = await apiClient.get(`/api/magazine/${id}`);
    console.log("Received data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error loading data:", error);
    throw error;
  }
};

// get magazine2 by id
export const getMagazine2ById = async (id) => {
  try {
    const response = await apiClient.get(`/api/magazine2/${id}`);
    console.log("Received data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error loading data:", error);
    throw error;
  }
};
