import { 
  ProfileContainer, 
  ProfileHeader, 
  UserDetailsContainer,
  DetailRow,
  DetailLabel,
  DetailValue,
} from "./Profile.styles";
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


    </ProfileContainer>
  );
};

export default Profile;