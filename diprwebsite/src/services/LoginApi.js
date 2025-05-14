// import axios from "../config/axios";
const VITE_API_URL = import.meta.env.VITE_API_URL;

export const LoginApi = async (idToken) => {
  try {
    const response = await fetch(`${VITE_API_URL}api/users/login-on-web`, {
      method: "POST",
      headers: {       
       
        "Content-Type": "application/json", 
      },
      body: JSON.stringify({ idToken }), 
      // credentials: "include", 
    });

    const data = await response.json();
    console.log("Login API Response:", data);

    // Parse the response data as JSON

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong with the login.");
    }

    return data; 
  } catch (err) {
    throw err; 
  }
};


// start a session
export const startSession = async (userId, platform = "web") => {
  try {
    const response = await fetch(`${VITE_API_URL}sessions/start`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, platform }),
      credentials: "include", 
    });

    const data = await response.json();
    console.log("Session Start API Response:", data);

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong with starting the session.");
    }

    return data; 
  } catch (err) {
    throw err; 
  }
};

// end-sessions
export const endSession = async (userId, platform = "web") => {
  try {
    const response = await fetch(`${VITE_API_URL}sessions/end`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, platform }), 
      credentials: "include", 
    });

    const data = await response.json();
    console.log("Session End API Response:", data);

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong with ending the session.");
    }

    return data; 
  } catch (err) {
    throw err; 
  }
};