const VITE_API_URL = import.meta.env.VITE_API_URL;

export const RegisterVisitorApi = async () => {
  try {
    // Prepare the request body
    const bodyData = {
      totalVisits: 1,
      time: "2025-03-05T10:00:00Z", 
    };

    // Make the POST request
    const response = await fetch(`${VITE_API_URL}visitors/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyData),
      credentials: "include", 
    });

    // Check if the response is OK
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to register visitor.");
    }

    // Parse and return the response data
    const data = await response.json();
    console.log("Visitor Register API Response:", data);
    return data;
  } catch (err) {
    console.error("Visitor Register API Error:", err);
    throw err; 
  }
};


export const GetTotalVisitorApi = async () => {
      try {
        // Construct the URL with query parameters
        const url = new URL(`${VITE_API_URL}visitors/total`);
        url.searchParams.append("totalVisits", 1); 
        url.searchParams.append("time", "2025-03-05T10:00:00Z"); 
    
        // Make the GET request
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", 
        });
    
        // Check if the response is OK
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to fetch total visitors.");
        }
    
        // Parse and return the response data
        const data = await response.json();
        console.log("Total Visitors API Response:", data);
        return data;
      } catch (err) {
        console.error("Total Visitors API Error:", err);
        throw err; 
      }
    };
