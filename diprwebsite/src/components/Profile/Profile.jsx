import React from "react";
import { 
  ProfileContainer, 
  ProfileHeader, 
  UserDetailsContainer,
  DetailRow,
  DetailLabel,
  DetailValue,
  SocialIcons 
} from "./Profile.styles";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import ProfileImage from "../../assets/Profile.png";

const Profile = () => {
  // Static user data
  const userInfo = {
    firstName: "Akash",
    lastName: "Sharma",
    email: "Akash@example.com",
    city: "Bangalore",
    joinDate: "January 2023"
  };

  return (
    <ProfileContainer>
      <ProfileHeader>
        <img src={ProfileImage} alt="Profile" />
        <h2>{userInfo.firstName} {userInfo.lastName}</h2>
        <p>Member since {userInfo.joinDate}</p>
      </ProfileHeader>

      <UserDetailsContainer>
        <DetailRow>
          <DetailLabel>First Name:</DetailLabel>
          <DetailValue>{userInfo.firstName}</DetailValue>
        </DetailRow>
        
        <DetailRow>
          <DetailLabel>Last Name:</DetailLabel>
          <DetailValue>{userInfo.lastName}</DetailValue>
        </DetailRow>
        
        <DetailRow>
          <DetailLabel>Email:</DetailLabel>
          <DetailValue>{userInfo.email}</DetailValue>
        </DetailRow>
        
        <DetailRow>
          <DetailLabel>Location:</DetailLabel>
          <DetailValue>{userInfo.city}</DetailValue>
        </DetailRow>
      </UserDetailsContainer>

      <SocialIcons>
        <span>Connect with me:</span>
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
    </ProfileContainer>
  );
};

export default Profile;