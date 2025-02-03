import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginApi } from "../../services/LoginApi";
import {
  LoginContainer,
  RightSection,
  LoginBox,
  InputWrapper,
  CountryCode,
  Input,
  Button,
  SocialButtons,
  Divider,
  GuestButton,
  LinkText,
  ErrorText,
} from "../Login/Login.styles";
import { FaApple } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import Google from "../../assets/Google.png";
import Logowithtitle from "../../components/Logowithtitle/Logowithtitle";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validatePhone = (value) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(value)) {
      setError("Enter a valid 10-digit phone number.");
    } else {
      setError("");
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setPhone(value);
    validatePhone(value);
  };

  const handleLogin = async () => {
    if (error || phone.length < 10) return;
    setLoading(true);

    try {
      const response = await LoginApi(phone);
      console.log("Response:", response);
      alert("OTP sent successfully!");
      navigate("/otp");
    } catch (err) {
      console.error("Error:", err);
      alert("Failed to send OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginContainer>
      <Logowithtitle />
      <RightSection>
        <LoginBox>
          <h2>Login</h2>
          <h5>You’ll receive a 6-digit code to verify next.</h5>
          <label>Phone Number</label>

          <InputWrapper>
            <CountryCode>+91</CountryCode>
            <Input
              type="tel"
              placeholder="Enter phone number"
              value={phone}
              maxLength="10"
              onChange={handleInputChange}
            />
          </InputWrapper>
          {error && <ErrorText>{error}</ErrorText>}

          <Button onClick={handleLogin} disabled={error || phone.length < 10 || loading}>
            {loading ? "Sending..." : "Log In With OTP"}
          </Button>

          <GuestButton>
            <FaUser /> Continue as Guest
          </GuestButton>

          <Divider>
            Or
            <br /> continue with
          </Divider>

          <SocialButtons>
            <button>
              <img src={Google} alt="Google" width="20px" height="20px" /> Google
            </button>
            <button>
              <FaApple /> Apple ID
            </button>
          </SocialButtons>

          <p>
            Don't have an account? <LinkText>Create now</LinkText>
          </p>
        </LoginBox>
      </RightSection>
    </LoginContainer>
  );
};

export default Login;
