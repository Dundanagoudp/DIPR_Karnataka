import apiClient from "../apiClient";

export const LoginApi = async (idToken) => {
  try {
    const response = await apiClient.post("/api/users/login-on-web", { idToken });
    return response.data;
  } catch (err) {
    throw err;
  }
};

// start a session
export const startSession = async (userId, platform = "web") => {
  try {
    const response = await apiClient.post("/sessions/start", { userId, platform });
    return response.data;
  } catch (err) {
    throw err;
  }
};

// end-sessions
export const endSession = async (userId, platform = "web") => {
  try {
    const response = await apiClient.post("/sessions/end", { userId, platform });
    return response.data;
  } catch (err) {
    throw err;
  }
};