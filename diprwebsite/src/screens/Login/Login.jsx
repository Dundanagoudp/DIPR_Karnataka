import  { useState, useEffect } from "react";
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
import Loader from "../../components/apiloders/ApiLoders";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [showLoader, setShowLoader] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Set a timeout to hide the loader after 3 seconds
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1000);

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
      if (!window.recaptchaVerifier) {
        window.recaptchaVerifier = new RecaptchaVerifier(
          auth,
          "recaptcha-container",
          {
            size: "invisible",
          }
        );
      }

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
      <div id="recaptcha-container"></div>
      <RightSection>
        {!otpSent ? (
          <LoginBox>
            <h2>Login</h2>
            <h5>You’ll receive a 6-digit code to verify next.</h5>

            <label htmlFor="phone">Phone Number</label>
            <InputWrapper>
              <CountryCode>+91</CountryCode>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter phone number"
                value={phone}
                maxLength="10"
                onChange={handleInputChange}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    sendOTP();
                  }
                }}
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
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && index === otp.length - 1) {
                      verifyOTP();
                    }
                  }}
                />
              ))}
            </OtpInputs>
            {error && <ErrorText>{error}</ErrorText>}

            <Button onClick={verifyOTP} disabled={loading}>
              {loading ? "Verifying..." : "Verify & Login"}
            </Button>
          </OtpBox>
        )}
      </RightSection>
    </LoginContainer>
  );
};

export default Login;

// src/components/Login.jsx




// import React, { useState, useEffect } from "react";
// import { auth } from "../../config/firebaseConfig";
// import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// import Cookies from "js-cookie";
// import { LoginApi, startSession } from "../../services/LoginApi";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [phone, setPhone] = useState("");
//   const [otp, setOtp] = useState(["", "", "", "", "", ""]);
//   const [confirmationResult, setConfirmationResult] = useState(null);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [cooldown, setCooldown] = useState(0);

//   const navigate = useNavigate();

//   useEffect(() => {
//     let timer;
//     if (cooldown > 0) {
//       timer = setTimeout(() => setCooldown(cooldown - 1), 1000);
//     }
//     return () => clearTimeout(timer);
//   }, [cooldown]);

// const setupRecaptcha = () => {
//   if (!window.grecaptcha) {
//     console.warn("grecaptcha not loaded yet. Retrying...");
//     setTimeout(setupRecaptcha, 500); // Retry after delay
//     return;
//   }

//   if (!window.recaptchaVerifier) {
//     try {
//       window.recaptchaVerifier = new RecaptchaVerifier(
//         "recaptcha-container",
//         {
//           size: "normal",
//           callback: (response) => {
//             console.log("reCAPTCHA passed:", response);
//           },
//           "expired-callback": () => {
//             console.warn("reCAPTCHA expired");
//           },
//         },
//         auth
//       );

//       window.recaptchaVerifier.render().then((widgetId) => {
//         console.log("reCAPTCHA rendered:", widgetId);
//       });
//     } catch (err) {
//       console.error("RecaptchaVerifier init failed:", err);
//     }
//   }
// };


//   const sendOTP = async () => {
//     if (cooldown > 0) {
//       setError(`Wait ${cooldown} seconds before resending`);
//       return;
//     }

//     if (!phone || phone.length < 10) {
//       setError("Please enter a valid phone number");
//       return;
//     }

//     setLoading(true);
//     setError("");

//     try {
//       const fullPhone = phone.startsWith("+") ? phone : `+91${phone}`;
//       setupRecaptcha();

//       const appVerifier = window.recaptchaVerifier;

//       if (!auth) throw new Error("Firebase Auth is not initialized.");
//       if (!appVerifier) throw new Error("reCAPTCHA not initialized properly.");

//       const confirmation = await signInWithPhoneNumber(
//         auth,
//         fullPhone,
//         appVerifier
//       );

//       setConfirmationResult(confirmation);
//       setCooldown(30);
//     } catch (err) {
//       console.error("sendOTP error:", err);
//       if (err.code === "auth/invalid-app-credential") {
//         setError("Security verification failed. Please refresh the page.");
//       } else if (err.code === "auth/too-many-requests") {
//         setError("Too many attempts. Please wait and try again.");
//       } else if (err.code === "auth/argument-error") {
//         setError("Internal setup issue. Please refresh and try again.");
//       } else {
//         setError(err.message || "Failed to send OTP.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const verifyOTP = async () => {
//     const otpCode = otp.join("");
//     if (otpCode.length !== 6) {
//       setError("Enter a 6-digit OTP.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const result = await confirmationResult.confirm(otpCode);
//       const idToken = await result.user.getIdToken();

//       const loginResponse = await LoginApi(idToken);
//       if (loginResponse.success) {
//         Cookies.set("sessionToken", loginResponse.token, {
//           secure: true,
//           expires: 7,
//         });
//         Cookies.set("userId", loginResponse.userId, {
//           secure: true,
//           expires: 7,
//         });

//         await startSession(loginResponse.userId, "web");

//         const redirectUrl = Cookies.get("redirectUrl");
//         Cookies.remove("redirectUrl");

//         navigate(redirectUrl || "/");
//       } else {
//         setError("Login failed. Try again.");
//       }
//     } catch (err) {
//       console.error("verifyOTP error:", err);
//       setError("Invalid OTP. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleOtpChange = (index, value) => {
//     if (isNaN(value)) return;
//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);

//     if (value && index < 5) {
//       document.getElementById(`otp-input-${index + 1}`)?.focus();
//     }
//   };

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
//       <h2>Login with Phone</h2>

//       <input
//         type="tel"
//         placeholder="Enter phone number"
//         value={phone}
//         onChange={(e) => setPhone(e.target.value)}
//         disabled={loading || !!confirmationResult}
//         style={{ padding: "10px", width: "100%", marginBottom: "10px" }}
//       />

//       {!confirmationResult ? (
//         <button
//           onClick={sendOTP}
//           disabled={loading}
//           style={{ padding: "10px", width: "100%" }}
//         >
//           {loading ? "Sending OTP..." : "Send OTP"}
//         </button>
//       ) : (
//         <>
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               gap: "8px",
//               margin: "20px 0",
//             }}
//           >
//             {otp.map((digit, index) => (
//               <input
//                 key={index}
//                 id={`otp-input-${index}`}
//                 type="text"
//                 maxLength="1"
//                 value={digit}
//                 onChange={(e) => handleOtpChange(index, e.target.value)}
//                 style={{
//                   width: "40px",
//                   height: "40px",
//                   fontSize: "20px",
//                   textAlign: "center",
//                   border: "1px solid #ccc",
//                   borderRadius: "4px",
//                 }}
//               />
//             ))}
//           </div>
//           <button
//             onClick={verifyOTP}
//             disabled={loading}
//             style={{ padding: "10px", width: "100%" }}
//           >
//             {loading ? "Verifying..." : "Verify & Login"}
//           </button>
//         </>
//       )}

//       <div id="recaptcha-container" style={{ marginTop: "20px" }} />

//       {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
//     </div>
//   );
// };

// export default Login;
