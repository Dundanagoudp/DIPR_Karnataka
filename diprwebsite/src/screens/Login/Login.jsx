import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  auth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "../../config/firebaseConfig";
import { LoginApi, startSession } from "../../services/LoginApi";
import Cookies from "js-cookie";
import {
  LoginContainer,
  RightSection,
  LoginBox,
  InputWrapper,
  CountryCode,
  Input,
  Button,
  ErrorText,
  OtpBox,
  OtpHeader,
  OtpInputs,
  OtpInput,
} from "../Login/Login.styles";
import Logowithtitle from "../../components/Logowithtitle/Logowithtitle";
import Loader from "../../components/apiloders/ApiLoders"; // Corrected import name

const Login = () => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [showLoader, setShowLoader] = useState(true); // State to control loader visibility
  const navigate = useNavigate();

  useEffect(() => {
    // Set a timeout to hide the loader after 3 seconds
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 3000);

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

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

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus to next input
    if (value && index < 5) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
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
    const otpValue = otp.join("");
    if (!otpValue || otpValue.length !== 6) {
      setError("Enter a valid 6-digit OTP.");
      return;
    }

    setLoading(true);
    try {
      const result = await confirmationResult.confirm(otpValue);
      const idToken = await result.user.getIdToken();

      // Step 1: Login the user
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

        // Step 2: Start a session after successful login
        const sessionResponse = await startSession(loginResponse.userId, "web");
        console.log("Session Start API Response:", sessionResponse); // Log session response

        alert("Login successful!");

        // Check for stored redirect URL
        const redirectUrl = Cookies.get("redirectUrl");
        if (redirectUrl) {
          Cookies.remove("redirectUrl"); // Clear the stored URL
          navigate(redirectUrl); // Redirect to the stored URL (e.g., /Gallery)
        } else {
          navigate("/"); // Default redirect if no URL is stored
        }
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

  // Render the loader if showLoader is true
  if (showLoader) {
    return <Loader />;
  }

  return (
    <LoginContainer>
      <Logowithtitle />
      <RightSection>
        {!otpSent ? (
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

            <Button
              onClick={sendOTP}
              disabled={error || phone.length < 10 || loading}
            >
              {loading ? "Sending..." : "Send OTP"}
            </Button>
          </LoginBox>
        ) : (
          <OtpBox>
            <OtpHeader>OTP Verification</OtpHeader>
            <p>
              OTP has been sent on mobile number
              <br /> Please enter OTP to verify the number
            </p>

            <OtpInputs>
              {otp.map((digit, index) => (
                <OtpInput
                  key={index}
                  id={`otp-input-${index}`}
                  type="tel"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                />
              ))}
            </OtpInputs>
            {error && <ErrorText>{error}</ErrorText>}

            <Button onClick={verifyOTP} disabled={loading}>
              {loading ? "Verifying..." : "Verify & Login"}
            </Button>
          </OtpBox>
        )}
        <div id="recaptcha-container"></div>
      </RightSection>
    </LoginContainer>
  );
};

export default Login;