import styled from "styled-components";
import theme from "../../theme/Theme";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${theme.spacing(4)};
  background-color: ${(props) => (props.lightMode ? "#fff" : "#2d2d2d")};
  color: ${(props) => (props.lightMode ? "#000" : "#fff")};
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;  
  align-items: center;
  margin-bottom: ${theme.spacing(3)};
`;

export const ProfileHeader = styled.div`
  margin-bottom: ${theme.spacing(3)};
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  h2 {
    font-size: 24px;
    font-weight: bold;
  }

  p {
  margin-top: -20px;
    font-size: 16px;

  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: ${theme.spacing(2)};
  
  a {
    text-decoration: none;
    svg {
      font-size: 24px;
      color: ${theme.colors.light};
      cursor: pointer;
      background-color: ${(props) => (props.lightMode ? "#fff" : "#2d2d2d")};
      padding: ${theme.spacing(0.5)};
      border-radius: 5px;
      &:hover {
        color: ${theme.colors.primary};
      }
    }
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: ${theme.spacing(2)};
  width: 100%;
  max-width: 400px;
`;

export const FormLabel = styled.label`
  font-size: 16px;
  font-weight: bold;

`;

export const FormInput = styled.input`
  padding: ${theme.spacing(1.5)};
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid ${theme.colors.light};
`;

export const UpdateButton = styled.button`
  padding: ${theme.spacing(2)};
  background-color: ${theme.colors.primary};
  color: #fff;
  font-size: 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.secondary};
  }
`;

export const LightModeToggle = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(1)};
`;

/* Toggle switch styling */
export const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${theme.colors.light};
    transition: 0.4s;
    border-radius: 34px;
  }

  input:checked + .slider {
    background-color: ${theme.colors.primary};
  }

  .slider::before {
    content: "";
    position: absolute;
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + .slider::before {
    transform: translateX(26px);
  }
`;


