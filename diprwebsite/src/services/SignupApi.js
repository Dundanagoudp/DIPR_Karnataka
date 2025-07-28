import apiClient from "./apiClient";

export const SignupApi = async (userData) => {
  try {
    const response = await apiClient.post("/api/auth/signup", userData);
    console.log("Signup API Response:", response.data);
    return response.data;
  } catch (err) {
    console.error("Signup API Error:", err);
    throw err;
  }
};