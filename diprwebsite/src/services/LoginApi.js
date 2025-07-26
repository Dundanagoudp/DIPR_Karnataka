import apiClient from "./apiClient";

export const LoginApi = async (idToken) => {
  try {
    const response = await apiClient.post("/api/users/login-on-web", { idToken });
    console.log("Login API Response:", response.data);
    return response.data;
  } catch (err) {
    console.error("Login API Error:", err);
    throw err;
  }
};

// start a session
export const startSession = async (userId, platform = "web") => {
  try {
    const response = await apiClient.post("/sessions/start", { userId, platform });
    console.log("Session Start API Response:", response.data);
    return response.data;
  } catch (err) {
    console.error("Session Start API Error:", err);
    throw err;
  }
};

// end-sessions
export const endSession = async (userId, platform = "web") => {
  try {
    const response = await apiClient.post("/sessions/end", { userId, platform });
    console.log("Session End API Response:", response.data);
    return response.data;
  } catch (err) {
    console.error("Session End API Error:", err);
    throw err;
  }
};