const BASE_URL = import.meta.env.VITE_API_URL;

export const getMagazines = async () => {
  try {
    const response = await fetch(`${BASE_URL}api/magazine`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log("Received data:", data);
    return data;
  } catch (error) {
    console.error("Error loading data:", error);
    console.log(error);
    throw error;
  }
};

export const MarchMagazines = async () => {
  try {
    const response = await fetch(`${BASE_URL}api/magazine2`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log("Received data:", data);
    return data;
  } catch (error) {
    console.error("Error loading data:", error);
    console.log(error);
    throw error;
  }
};
