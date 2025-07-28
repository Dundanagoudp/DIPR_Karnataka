import apiClient from "../apiClient";

export const RegisterVisitorApi = async () => {
  try {
    // Prepare the request body
    const bodyData = {
      totalVisits: 1,
      time: "2025-03-05T10:00:00Z", 
    };

    // Make the POST request
    const response = await apiClient.post("/visitors/register", bodyData);
    console.log("Visitor Register API Response:", response.data);
    return response.data;
  } catch (err) {
    console.error("Visitor Register API Error:", err);
    throw err; 
  }
};

export const GetTotalVisitorApi = async () => {
  try {
    // Construct the URL with query parameters
    const response = await apiClient.get("/visitors/total", {
      params: {
        totalVisits: 1,
        time: "2025-03-05T10:00:00Z"
      }
    });
    
    console.log("Total Visitors API Response:", response.data);
    return response.data;
  } catch (err) {
    console.error("Total Visitors API Error:", err);
    throw err; 
  }
};
