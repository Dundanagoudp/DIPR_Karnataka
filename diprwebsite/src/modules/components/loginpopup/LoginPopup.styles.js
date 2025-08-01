import styled from "styled-components"
import theme from "../../../theme/Theme"

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7); /* Dark overlay */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Ensure it's on top of other content */
`

export const PopupContainer = styled.div`
  background: #282828; /* Dark background from image */
  border-radius: 16px; /* Rounded corners */
  padding: ${theme.spacing(4)};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 380px; /* Adjust as needed */
  width: 90%; /* Responsive width */
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5); /* Subtle shadow */
  font-family: ${theme.fonts.body};

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(3)};
    border-radius: 12px;
  }
`

export const Title = styled.h2`
  font-size: 1.5rem; /* Adjust based on image */
  font-weight: 700; /* Bold */
  color: ${theme.colors.white}; /* White text */
  margin-bottom: ${theme.spacing(1.5)};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.3rem;
    margin-bottom: ${theme.spacing(1)};
  }
`

export const Subtitle = styled.p`
  font-size: 1rem; /* Adjust based on image */
  color: #b3b3b3; /* Lighter white/gray text */
  margin-bottom: ${theme.spacing(3)};
  line-height: 1.4;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.9rem;
    margin-bottom: ${theme.spacing(2)};
  }
`

export const SignInButton = styled.button`
  background: ${theme.colors.white}; /* White button background */
  color: #000000; /* Black text on button */
  border: none;
  border-radius: 28px; /* Highly rounded button */
  padding: ${theme.spacing(1.5)} ${theme.spacing(4)};
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;
  width: 100%; /* Full width button */
  max-width: 250px; /* Max width for the button */

  &:hover {
    background-color: #f0f0f0; /* Slightly darker white on hover */
    transform: translateY(-2px);
  }

  &:active {
    background-color: #e0e0e0;
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.primary}; /* Focus indicator */
    outline-offset: 2px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(1.25)} ${theme.spacing(3)};
    font-size: 1rem;
  }
`
