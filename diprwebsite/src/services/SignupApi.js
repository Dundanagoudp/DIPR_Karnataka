const VITE_API_URL = import.meta.env.VITE_API_URL;

export const SignupApi = async (userData) => {
  try {
    const response = await fetch(`${VITE_API_URL}api/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData), 
      credentials: "include", 
    });

    const data = await response.json();

    // Log the response for debugging (remove in production)
    console.log("Signup API Response:", data);

    if (!response.ok) {
      // Throw an error if the response is not OK
      throw new Error(data.message || "Signup failed. Please try again.");
    }

    return data; 
  } catch (err) {
    console.error("Signup API Error:", err);
    throw err; 
  }
};