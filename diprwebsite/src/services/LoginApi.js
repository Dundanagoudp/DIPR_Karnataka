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
      credentials: "include", // Ensures cookies are included with the request
    });

    const data = await response.json();
    console.log("Login API Response:", data);

    // Parse the response data as JSON

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong with the login.");
    }

    return data; // Return the response data if successful
  } catch (err) {
    throw err; // Handle any errors that occur during the request
  }
};
