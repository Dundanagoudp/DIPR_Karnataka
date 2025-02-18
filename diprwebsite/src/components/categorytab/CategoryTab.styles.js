import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";
import theme from "../../theme/Theme";

export const TabContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${theme.colors.primary};
  padding-left: ${theme.spacing(4)};
  padding-right: ${theme.spacing(0.5)};
  width: auto;
  max-width: 100%;
  position: relative;
 
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(0.5)};
  }
`;

export const HamburgerMenu = styled.div`
  display: none;
  @media (max-width: ${theme.breakpoints.mobile}) {
    display: flex;
    justify-content: flex-start;
    cursor: pointer;
    color: ${theme.colors.background};
  }
`;

export const TabsWrapper = styled.div`
  display: flex;
  gap: ${theme.spacing(1)};
  flex-wrap: nowrap;
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;
  max-width: 100%;
  scroll-snap-type: x mandatory;
  transition: all 0.3s ease;
  position: relative;  // This ensures that it stays in the correct layout context.

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    background-color: ${theme.colors.primary};
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    padding: ${theme.spacing(2)};
    display: ${({ isMenuOpen }) => (isMenuOpen ? "flex" : "none")};
    z-index: 10;  // Ensure this menu is above other content
  }

  @media (min-width: ${theme.breakpoints.tablet}) {
    display: flex;
    position: relative;
  }
`;

export const TabItem = styled.div`
  padding: ${theme.spacing(2)} ${theme.spacing(2.5)};
  cursor: pointer;
  font-family: ${theme.fonts.heading};
  font-size: 16px;
  font-weight: bold;
  white-space: nowrap;
  color: ${(props) =>
    props.active ? theme.colors.primary : theme.colors.background};
  background-color: ${(props) =>
    props.active ? theme.colors.background : "transparent"};
  border-radius: ${(props) =>
    props.active ? "20px 20px 0 0" : theme.spacing(1)};
  transition: all 0.3s ease-in-out;
  scroll-snap-align: start;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${theme.colors.light};
    color: ${theme.colors.primary};
  }

  ${(props) =>
    props.active &&
    `&::after {
      content: "";
      bottom: -18px;
      left: 10%;
      transform: translateX(-32%);
      height: 20px;
      border-radius: 50px 50px 0 0;
      background-color: ${theme.colors.primary};
      border-radius: 0 0 50px 50px;
    }`}
`;

// export const ProfileIcon = styled(FaUserCircle)`
//   font-size: 30px;
//   color: ${theme.colors.background};
//   // margin-left: auto;
//   // margin-right: 4%;
//   cursor: pointer;

//   &:hover {
//     color: ${theme.colors.light};
//   }
// `;

export const ProfileIcon = styled.img`
  width: 40px; /* Adjust size as needed */
  height: 40px;
  border-radius: 50%; /* Makes it circular */
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
