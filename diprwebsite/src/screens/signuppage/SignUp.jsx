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
import { FaMobileAlt } from "react-icons/fa";
import Cookies from "js-cookie"; 

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
  });

  const validateField = (name, value) => {
    let errorMsg = "";

    if (value.trim() === "") {
      errorMsg = `${name} is required.`;
    } else if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        errorMsg = "Enter a valid email address.";
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
      formData.email.trim() &&
      !errors.firstName &&
      !errors.lastName &&
      !errors.email
    );
  };

  const handleSignup = async () => {
    if (!isFormValid()) return;

    const userData = {
      displayName: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      profileImage: "yoyoyhoneySingh", // Replace with actual profile image logic
    };

    try {
      const response = await SignupApi(userData);
      console.log("Signup API Response:", response);

      if (response.success) {
        // Store session token and user ID in cookies
        Cookies.set("sessionToken", response.token, {
          expires: 7, 
          secure: true, 
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

          <label>Email</label>
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}

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
          <Button onClick={() => navigate("/signupnumber")}>
            <FaMobileAlt style={{ marginRight: "10px", alignItems: "center" }} /> Sign Up with Phone
          </Button>

          <p>
            Do you have an account? <LinkText onClick={() => navigate("/login")}>Login now</LinkText>
          </p>
        </SignupBox>
      </RightSection>
    </SignupContainer>
  );
};

export default Signup;