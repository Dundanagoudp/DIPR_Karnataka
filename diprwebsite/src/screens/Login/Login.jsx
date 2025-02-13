import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  auth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "../../config/firebaseConfig";
import { LoginApi } from "../../services/LoginApi";
import Cookies from "js-cookie"; // For storing session
import {
  LoginContainer,
  RightSection,
  LoginBox,
  InputWrapper,
  CountryCode,
  Input,
  Button,
  ErrorText,
} from "../Login/Login.styles";
import Logowithtitle from "../../components/Logowithtitle/Logowithtitle";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
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

  const sendOTP = async () => {
    if (error || phone.length < 10) return;

    setLoading(true);
    try {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
        }
      );

      const confirmation = await signInWithPhoneNumber(
        auth,
        `+91${phone}`,
        window.recaptchaVerifier
      );
      setConfirmationResult(confirmation);
      setOtpSent(true);
      alert("OTP sent successfully!");
    } catch (err) {
      console.error("Error sending OTP:", err);
      setError("Failed to send OTP. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const verifyOTP = async () => {
    if (!otp || otp.length !== 6) {
      setError("Enter a valid 6-digit OTP.");
      return;
    }

    setLoading(true);
    try {
      const result = await confirmationResult.confirm(otp);
      const idToken = await result.user.getIdToken(); // Firebase ID Token

      // Send only idToken to backend for session management
      const loginResponse = await LoginApi(idToken);

      console.log("Login API Response:", loginResponse); // Debugging step

      if (loginResponse.success) {
        // Store sessionToken and userId in cookies
        Cookies.set("sessionToken", loginResponse.token, {
          expires: 7,
          secure: true,
        });
        Cookies.set("userId", loginResponse.userId, {
          expires: 7,
          secure: true,
        });

        console.log("User ID stored in cookies:", Cookies.get("userId")); // Debugging

        alert("Login successful!");
        navigate("/"); // Redirect to homepage or dashboard
      } else {
        setError("Login failed. Please try again.");
      }
    } catch (err) {
      console.error("Error verifying OTP:", err.message);
      setError("Invalid OTP. Please try again.");
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

          {!otpSent ? (
            <>
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

              <Button
                onClick={sendOTP}
                disabled={error || phone.length < 10 || loading}
              >
                {loading ? "Sending..." : "Send OTP"}
              </Button>
            </>
          ) : (
            <>
              <label>Enter OTP</label>
              <Input
                type="text"
                placeholder="Enter 6-digit OTP"
                value={otp}
                maxLength="6"
                onChange={(e) => setOtp(e.target.value)}
              />
              {error && <ErrorText>{error}</ErrorText>}

              <Button onClick={verifyOTP} disabled={loading}>
                {loading ? "Verifying..." : "Verify & Login"}
              </Button>
            </>
          )}
          <div id="recaptcha-container"></div>
        </LoginBox>
      </RightSection>
    </LoginContainer>
  );
};

export default Login;
