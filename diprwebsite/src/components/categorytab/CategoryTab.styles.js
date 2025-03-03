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
  padding: ${theme.spacing(0.8)} 0;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;
  max-width: 100%;
  scroll-snap-type: x mandatory;
  transition: all 0.3s ease;
  position: relative;

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
    z-index: 10;
  }

  @media (min-width: ${theme.breakpoints.tablet}) {
    display: flex;
    position: relative;
  }
`;

export const TabItem = styled.div`
  padding: ${theme.spacing(1.2)} ${theme.spacing(3)};
  cursor: pointer;
  font-family: ${theme.fonts.heading};
  font-size: 16px;
  font-weight: bold;
  white-space: nowrap;
  color: ${(props) => (props.active ? theme.colors.primary : "#ffffff")};
  background-color: ${(props) => (props.active ? "#ffffff" : "transparent")};
  border-radius: ${theme.spacing(1.3)};
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.active ? 1 : 0.6)};

  &:hover {
    background-color: ${theme.colors.light};
    color: ${theme.colors.primary};
    opacity: 1;
  }
`;


export const ProfileIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;