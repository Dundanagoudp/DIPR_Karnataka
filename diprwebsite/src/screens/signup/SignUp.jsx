import React, { useState } from "react";
import {
  SignupContainer,
  LeftSection,
  RightSection,
  SignupBox,
  Input,
  Button,
  LinkText,
} from "../signup/Signup.styles";
import Logowithtitle from "../../components/Logowithtitle/Logowithtitle";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    city: "Bangalore",
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
          {errors.firstName && <p style={{ color: "red", fontSize: "0.9rem" }}>{errors.firstName}</p>}

          <label>Last name</label>
          <Input
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <p style={{ color: "red", fontSize: "0.9rem" }}>{errors.lastName}</p>}

          <label>Email</label>
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: "red", fontSize: "0.9rem" }}>{errors.email}</p>}

          <label>City</label>
          <Input
            type="text"
            name="city"
            placeholder="Enter your city"
            value={formData.city}
            onChange={handleChange}
          />
          {errors.city && <p style={{ color: "red", fontSize: "0.9rem" }}>{errors.city}</p>}

          <Button disabled={!isFormValid()}>Sign Up</Button>

          <p>
            Do you have an account? <LinkText>Login now</LinkText>
          </p>
        </SignupBox>
      </RightSection>
    </SignupContainer>
  );
};

export default Signup;
