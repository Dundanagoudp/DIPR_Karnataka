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
    city: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setError(emailRegex.test(value) ? "" : "Enter a valid email address.");
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

          <label>Last name</label>
          <Input
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={handleChange}
          />

          <label>Email</label>
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
          {error && <p style={{ color: "red", fontSize: "0.9rem" }}>{error}</p>}

          <label>City</label>
          <Input type="text" name="city" value="Bangalore" disabled />

          <Button disabled={!formData.firstName || !formData.lastName || !formData.email || error}>
            Sign Up
          </Button>

          <p>
            Do you have an account? <LinkText>Login now</LinkText>
          </p>
        </SignupBox>
      </RightSection>
    </SignupContainer>
  );
};

export default Signup;
