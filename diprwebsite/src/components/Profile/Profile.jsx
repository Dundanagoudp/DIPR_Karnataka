import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";  
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { 
  ProfileContainer, 
  ProfileHeader, 
  SocialIcons, 
  FormContainer, 
  FormLabel, 
  FormInput, 
  UpdateButton, 
  LightModeToggle, 
  TopSection, 
  LogoutButton, 
  ToggleSwitch 
} from "./Profile.styles";
import ProfileImage from "../../assets/Profile.png"; 

const Profile = () => {
  const [lightMode, setLightMode] = useState(true); // ✅ Default: Light mode ON

  useEffect(() => {
    const savedMode = localStorage.getItem("lightMode");
    if (savedMode !== null) {
      setLightMode(JSON.parse(savedMode));
    }
  }, []);

  const toggleLightMode = () => {
    setLightMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("lightMode", JSON.stringify(newMode)); // ✅ Save mode in localStorage
      return newMode;
    });
  };

  const [userInfo, setUserInfo] = useState({
    firstName: "user",
    lastName: "example",
    email: "userexample@gmail.com",
    city: "Bangalore",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User info updated:", userInfo);
  };

  return (
    <ProfileContainer lightMode={lightMode}>
      <TopSection>
        <SocialIcons>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
        </SocialIcons>

        <LightModeToggle>
          <span>Light Mode</span>
          <ToggleSwitch>
            <input type="checkbox" checked={lightMode} onChange={toggleLightMode} />
            <span className="slider"></span>
          </ToggleSwitch>
        </LightModeToggle>

        
      </TopSection>
     

      <ProfileHeader>
        <div style={{display: "flex", alignItems: "center" , gap: "1rem"}}>
        <img src={ProfileImage} alt="Profile" />
        <div style={{}}>
        <h2>User Name</h2>
        <p>{userInfo.email}</p>
        </div>
        </div>
        
        
        <LogoutButton>
        <div >
          <RiLogoutCircleRFill />
          </div>
          <div>
          <Link to="/logout">Log Out</Link>
          </div>
        </LogoutButton>
      </ProfileHeader>
      
      <FormContainer onSubmit={handleSubmit}>
        <FormLabel>First Name</FormLabel>
        <FormInput
          type="text"
          name="firstName"
          value={userInfo.firstName}
          onChange={handleInputChange}
        />
        
        <FormLabel>Last Name</FormLabel>
        <FormInput
          type="text"
          name="lastName"
          value={userInfo.lastName}
          onChange={handleInputChange}
        />
        
        <FormLabel>Email</FormLabel>
        <FormInput
          type="email"
          name="email"
          value={userInfo.email}
          onChange={handleInputChange}
        />
        
        <FormLabel>City</FormLabel>
        <FormInput
          type="text"
          name="city"
          value={userInfo.city}
          onChange={handleInputChange}
        />
        
        <UpdateButton type="submit">Update Changes</UpdateButton>
      </FormContainer>
    </ProfileContainer>
  );
};

export default Profile;
