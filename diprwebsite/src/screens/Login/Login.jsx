import  { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebaseConfig";
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
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useToast } from "../../context/ToastContext";
const Login = () => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [showLoader, setShowLoader] = useState(true);
  const navigate = useNavigate();
  const { showSuccess, showError, showWarning } = useToast();

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
    // Clear any existing recaptcha
    if (window.recaptchaVerifier) {
      window.recaptchaVerifier.clear();
      window.recaptchaVerifier = null;
    }

    // Create new recaptcha verifier
    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          console.log("reCAPTCHA solved", response);
        },
        'expired-callback': () => {
          console.warn("reCAPTCHA expired");
          // Handle expiration if needed
        }
      }
    );

   
console.log("Sending OTP...");
    const confirmation = await signInWithPhoneNumber(
      auth,
      `+91${phone}`,
      window.recaptchaVerifier
    );
    
    setConfirmationResult(confirmation);
    setOtpSent(true);
    showSuccess("OTP Sent", "OTP has been sent successfully to your phone number!");
  } catch (err) {
    console.error("Error sending OTP:", err);
    const errorMessage = err.message || "Failed to send OTP. Try again.";
    setError(errorMessage);
    showError("OTP Error", errorMessage);
    
    // Reset recaptcha on error
    if (window.recaptchaVerifier) {
      window.recaptchaVerifier.clear();
      window.recaptchaVerifier = null;
    }
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

        showSuccess("Login Successful", "Welcome! You have been logged in successfully.");

        // Check for stored redirect URL
        const redirectUrl = Cookies.get("redirectUrl");
        if (redirectUrl) {
          Cookies.remove("redirectUrl"); // Clear the stored URL
          navigate(redirectUrl); // Redirect to the stored URL (e.g., /Gallery)
        } else {
          navigate("/"); // Default redirect if no URL is stored
        }
      } else {
        const errorMessage = "Login failed. Please try again.";
        setError(errorMessage);
        showError("Login Failed", errorMessage);
      }
    } catch (err) {
      console.error("Error verifying OTP:", err.message);
      const errorMessage = "Invalid OTP. Please try again.";
      setError(errorMessage);
      showError("OTP Verification Failed", errorMessage);
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



// import { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { auth } from "../../config/firebaseConfig";
// import { LoginApi, startSession } from "../../services/LoginApi";
// import Cookies from "js-cookie";
// import {
//   LoginContainer,
//   RightSection,
//   LoginBox,
//   InputWrapper,
//   CountryCode,
//   Input,
//   Button,
//   ErrorText,
//   OtpBox,
//   OtpHeader,
//   OtpInputs,
//   OtpInput,
//   ResendButton,
// } from "../Login/Login.styles";
// import Logowithtitle from "../../components/Logowithtitle/Logowithtitle";
// import Loader from "../../components/apiloders/ApiLoders";
// import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

// const Login = () => {
//   const [phone, setPhone] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [otpSent, setOtpSent] = useState(false);
//   const [otp, setOtp] = useState(["", "", "", "", "", ""]);
//   const [confirmationResult, setConfirmationResult] = useState(null);
//   const [showLoader, setShowLoader] = useState(true);
//   const [resendDisabled, setResendDisabled] = useState(false);
//   const [resendTimer, setResendTimer] = useState(30);
//   const recaptchaVerifierRef = useRef(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowLoader(false);
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     // Initialize reCAPTCHA when component mounts
//     if (!otpSent && !recaptchaVerifierRef.current) {
//       initializeRecaptcha();
//     }
//   }, [otpSent]);

//   useEffect(() => {
//     // Resend OTP timer
//     let timer;
//     if (resendDisabled && resendTimer > 0) {
//       timer = setTimeout(() => {
//         setResendTimer(resendTimer - 1);
//       }, 1000);
//     } else if (resendTimer === 0) {
//       setResendDisabled(false);
//       setResendTimer(30);
//     }
//     return () => clearTimeout(timer);
//   }, [resendDisabled, resendTimer]);

//   const initializeRecaptcha = () => {
//     try {
//       if (recaptchaVerifierRef.current) {
//         recaptchaVerifierRef.current.clear();
//       }

//       recaptchaVerifierRef.current = new RecaptchaVerifier(
//         "recaptcha-container",
//         {
//           size: "invisible",
//           callback: (response) => {
//             console.log("reCAPTCHA verified", response);
//           },
//           'expired-callback': () => {
//             console.log("reCAPTCHA expired");
//             initializeRecaptcha(); // Reinitialize if expired
//           }
//         },
//         auth
//       );
//     } catch (err) {
//       console.error("Error initializing reCAPTCHA:", err);
//       // Fallback to visible reCAPTCHA if invisible fails
//       recaptchaVerifierRef.current = new RecaptchaVerifier(
//         "recaptcha-container",
//         {
//           size: "normal",
//           callback: (response) => {
//             console.log("reCAPTCHA verified", response);
//           },
//         },
//         auth
//       );
//       recaptchaVerifierRef.current.render();
//     }
//   };

//   const validatePhone = (value) => {
//     const phoneRegex = /^[6-9]\d{9}$/;
//     if (!phoneRegex.test(value)) {
//       setError("Enter a valid 10-digit phone number.");
//       return false;
//     }
//     setError("");
//     return true;
//   };

//   const handleInputChange = (e) => {
//     const value = e.target.value.replace(/\D/g, "");
//     setPhone(value);
//     validatePhone(value);
//   };

//   const handleOtpChange = (index, value) => {
//     const newOtp = [...otp];
//     newOtp[index] = value.replace(/\D/g, ""); // Ensure only digits
//     setOtp(newOtp);

//     if (value && index < 5) {
//       document.getElementById(`otp-input-${index + 1}`).focus();
//     } else if (!value && index > 0) {
//       document.getElementById(`otp-input-${index - 1}`).focus();
//     }
//   };

//   const sendOTP = async () => {
//     if (!validatePhone(phone)) return;

//     setLoading(true);
//     try {
//       if (!recaptchaVerifierRef.current) {
//         initializeRecaptcha();
//       }

//       const phoneNumber = `+91${phone}`;
//       const confirmation = await signInWithPhoneNumber(
//         auth,
//         phoneNumber,
//         recaptchaVerifierRef.current
//       );
      
//       setConfirmationResult(confirmation);
//       setOtpSent(true);
//       setError("");
//       setResendDisabled(true);
//     } catch (err) {
//       console.error("Error sending OTP:", err);
//       setError(getFirebaseErrorMessage(err.code) || "Failed to send OTP. Try again.");
      
//       // Reset recaptcha on error
//       if (recaptchaVerifierRef.current) {
//         recaptchaVerifierRef.current.clear();
//         recaptchaVerifierRef.current = null;
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const resendOTP = async () => {
//     setResendDisabled(true);
//     setResendTimer(30);
//     await sendOTP();
//   };

//   const verifyOTP = async () => {
//     const otpValue = otp.join("");
//     if (!otpValue || otpValue.length !== 6) {
//       setError("Enter a valid 6-digit OTP.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const result = await confirmationResult.confirm(otpValue);
//       const idToken = await result.user.getIdToken();

//       const loginResponse = await LoginApi(idToken);

//       if (loginResponse.success) {
//         Cookies.set("sessionToken", loginResponse.token, {
//           expires: 7,
//           secure: true,
//           sameSite: 'strict'
//         });
//         Cookies.set("userId", loginResponse.userId, {
//           expires: 7,
//           secure: true,
//           sameSite: 'strict'
//         });

//         await startSession(loginResponse.userId, "web");

//         const redirectUrl = Cookies.get("redirectUrl");
//         if (redirectUrl) {
//           Cookies.remove("redirectUrl");
//           navigate(redirectUrl);
//         } else {
//           navigate("/");
//         }
//       } else {
//         setError("Login failed. Please try again.");
//       }
//     } catch (err) {
//       console.error("Error verifying OTP:", err);
//       setError(getFirebaseErrorMessage(err.code) || "Invalid OTP. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getFirebaseErrorMessage = (code) => {
//     switch (code) {
//       case 'auth/invalid-phone-number':
//         return 'Invalid phone number format';
//       case 'auth/missing-phone-number':
//         return 'Please enter a phone number';
//       case 'auth/quota-exceeded':
//         return 'Quota exceeded. Try again later';
//       case 'auth/too-many-requests':
//         return 'Too many requests. Please try again later';
//       case 'auth/code-expired':
//         return 'OTP expired. Please request a new one';
//       case 'auth/invalid-verification-code':
//         return 'Invalid OTP. Please try again';
//       case 'auth/session-expired':
//         return 'Session expired. Please start again';
//       default:
//         return 'An error occurred. Please try again';
//     }
//   };

//   if (showLoader) {
//     return <Loader />;
//   }

//   return (
//     <LoginContainer>
//       <Logowithtitle />
//       <div id="recaptcha-container"></div>
//       <RightSection>
//         {!otpSent ? (
//           <LoginBox>
//             <h2>Login</h2>
//             <h5>You will receive a 6-digit code to verify next.</h5>

//             <label htmlFor="phone">Phone Number</label>
//             <InputWrapper>
//               <CountryCode>+91</CountryCode>
//               <Input
//                 id="phone"
//                 type="tel"
//                 placeholder="Enter phone number"
//                 value={phone}
//                 maxLength="10"
//                 onChange={handleInputChange}
//                 onKeyDown={(e) => {
//                   if (e.key === "Enter") {
//                     sendOTP();
//                   }
//                 }}
//               />
//             </InputWrapper>
//             {error && <ErrorText>{error}</ErrorText>}

//             <Button
//               onClick={sendOTP}
//               disabled={!!error || phone.length < 10 || loading}
//             >
//               {loading ? "Sending..." : "Send OTP"}
//             </Button>
//           </LoginBox>
//         ) : (
//           <OtpBox>
//             <OtpHeader>OTP Verification</OtpHeader>
//             <p>
//               OTP has been sent to +91{phone}
//               <br /> Please enter OTP to verify
//             </p>

//             <OtpInputs>
//               {otp.map((digit, index) => (
//                 <OtpInput
//                   key={index}
//                   id={`otp-input-${index}`}
//                   type="tel"
//                   maxLength="1"
//                   value={digit}
//                   onChange={(e) => handleOtpChange(index, e.target.value)}
//                   onKeyDown={(e) => {
//                     if (e.key === "Enter" && index === 5) {
//                       verifyOTP();
//                     }
//                   }}
//                   autoFocus={index === 0}
//                 />
//               ))}
//             </OtpInputs>
//             {error && <ErrorText>{error}</ErrorText>}

//             <Button onClick={verifyOTP} disabled={loading}>
//               {loading ? "Verifying..." : "Verify & Login"}
//             </Button>

//             <ResendButton 
//               onClick={resendOTP} 
//               disabled={resendDisabled}
//             >
//               {resendDisabled ? `Resend OTP in ${resendTimer}s` : 'Resend OTP'}
//             </ResendButton>
//           </OtpBox>
//         )}
//       </RightSection>
//     </LoginContainer>
//   );
// };

// export default Login;