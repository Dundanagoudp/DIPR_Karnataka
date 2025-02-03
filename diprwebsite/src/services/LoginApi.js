import axios from "../config/axios";


export const LoginApi = async (phone) => { 
      try {
        const fullPhoneNumber = `+91${phone}`;
        const response = await axios.post("/api/auth/login", { phone_Number: fullPhoneNumber });
        return response.data;
      } catch (err) {
        throw err;
      }
    };
    