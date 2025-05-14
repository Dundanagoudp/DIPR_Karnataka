import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";
import theme from "../../theme/Theme";

export const TabContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.colors.primary};
  padding: ${theme.spacing(0.2)} ${theme.spacing(4)};
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(1)};
  }
`;

export const HamburgerMenu = styled.div`
  display: none;
  @media (max-width: ${theme.breakpoints.mobile}) {
    display: flex;
    justify-content: flex-start;
    cursor: pointer;
    color: ${theme.colors.background};
    padding: ${theme.spacing(1)};
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
    top: 60px;
    left: 0;
    right: 0;
    padding: ${theme.spacing(2)};
    display: ${({ isMenuOpen }) => (isMenuOpen ? "flex" : "none")};
    z-index: 10;
    gap: ${theme.spacing(1)};
  }
`;

export const TabItem = styled.div`
  padding: ${theme.spacing(1.2)} ${theme.spacing(3)};
  cursor: pointer;
  font-family: ${theme.fonts.heading};
  font-size: 16px;
  font-weight: bold;
  white-space: nowrap;
  color: ${(props) => (props.active ? theme.colors.primary : theme.colors.background)};
  background-color: ${(props) => (props.active ? theme.colors.background : "transparent")};
  border-radius: ${theme.spacing(1.3)};
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.active ? 1 : 0.8)};

  &:hover {
    background-color: ${theme.colors.light};
    color: ${theme.colors.primary};
    opacity: 1;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 100%;
    text-align: center;
  }
`;

export const ProfileIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  margin-left: auto;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-left: 0;
  }
`;

export const ProfilePlaceholder = styled(FaUserCircle)`
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  color: ${theme.colors.background};
  margin-left: auto;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-left: 0;
  }
`;