import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  SignupContainer,
  LeftSection,
  RightSection,
  SignupBox,
  Input,
  Button,
  LinkText,
} from "../signuppage/Signup.styles";
import Logowithtitle from "../../components/Logowithtitle/Logowithtitle";
import { SignupApi } from "../../services/SignupApi";
import { CiMail } from "react-icons/ci";
import Cookies from "js-cookie"; // Import js-cookie

const Signupnumber = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone_Number: "", // Updated to match API field name
    city: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    phone_Number: "", // Updated to match API field name
    city: "",
  });

  const validateField = (name, value) => {
    let errorMsg = "";

    if (value.trim() === "") {
      errorMsg = `${name} is required.`;
    } else if (name === "phone_Number") {
      // Validate phone number: only digits and length between 10 and 15
      const phoneRegex = /^\d{10,15}$/;
      if (!phoneRegex.test(value)) {
        errorMsg = "Enter a valid phone number (10-15 digits).";
      }
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMsg }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    validateField(name, value);
  };

  const isFormValid = () => {
    return (
      formData.firstName.trim() &&
      formData.lastName.trim() &&
      formData.phone_Number.trim() && // Updated to match API field name
      !errors.firstName &&
      !errors.lastName &&
      !errors.phone_Number
    );
  };

  const handleSignup = async () => {
    if (!isFormValid()) return;

    // Construct userData object with phone_Number
    const userData = {
      displayName: `${formData.firstName} ${formData.lastName}`,
      phone_Number: formData.phone_Number,
      profileImage: "yoyoyhoneySingh",
    };

    try {
      const response = await SignupApi(userData);
      console.log("Signup API Response:", response);

      if (response.success) {
        // Store session token and user ID in cookies
        Cookies.set("sessionToken", response.token, {
          expires: 7, // Expires in 7 days
          secure: true, // Ensure cookies are only sent over HTTPS
        });
        Cookies.set("userId", response.userId, {
          expires: 7,
          secure: true,
        });

        console.log("Cookies set successfully:", {
          sessionToken: Cookies.get("sessionToken"),
          userId: Cookies.get("userId"),
        });

        // Navigate to the dashboard
        navigate("/");
      } else {
        console.error("Signup failed:", response.message);
      }
    } catch (err) {
      console.error("Signup API Error:", err);
    }
  };

  return (
    <SignupContainer>
      <LeftSection>
        <Logowithtitle />
      </LeftSection>

      <RightSection>
        <SignupBox>
          <h2>Sign up</h2>

          <label>First name</label>
          <Input
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <p>{errors.firstName}</p>}

          <label>Last name</label>
          <Input
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <p>{errors.lastName}</p>}

          <label>Phone Number</label>
          <Input
            type="text"
            name="phone_Number" // Updated to match API field name
            placeholder="Enter your phone number"
            value={formData.phone_Number}
            onChange={handleChange}
          />
          {errors.phone_Number && <p>{errors.phone_Number}</p>}

          <label>City</label>
          <Input
            type="text"
            name="city"
            placeholder="Enter your city"
            value={formData.city}
            onChange={handleChange}
          />
          {errors.city && <p>{errors.city}</p>}

          <Button disabled={!isFormValid()} onClick={handleSignup}>
            Sign Up
          </Button>
          <Button onClick={() => navigate("/signup")}>
            <CiMail style={{ marginRight: "10px", alignItems: "center" }} />
            Sign Up with Email
          </Button>

          <p>
            Do you have an account? <LinkText onClick={() => navigate("/login")}>Login now</LinkText>
          </p>
        </SignupBox>
      </RightSection>
    </SignupContainer>
  );
};

export default Signupnumber;