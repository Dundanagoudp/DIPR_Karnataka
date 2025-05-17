import styled, { css } from "styled-components";
import { FaUserCircle } from "react-icons/fa";
import theme from "../../theme/Theme";

export const MobileMenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99;
  backdrop-filter: blur(4px);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s ease;
  will-change: opacity, visibility;

  ${({ $isOpen }) => $isOpen && css`
    opacity: 1;
    visibility: visible;
  `}
`;

export const TabContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.colors.primary};
  padding: ${theme.spacing(0.5)} ${theme.spacing(4)};
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  box-sizing: border-box;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  
  ${({ $isScrolled }) =>
    $isScrolled &&
    css`
      background-color: rgba(${theme.colors.primaryRgb}, 0.95);
      backdrop-filter: blur(10px);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
      padding: ${theme.spacing(0.5)} ${theme.spacing(4)};
    `}

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(1)} ${theme.spacing(2)};
    justify-content: space-between;
  }
`;

export const RightControls = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(1)};
  margin-left: auto;
`;

export const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: ${theme.spacing(1)};
  margin-bottom: ${theme.spacing(2)};
  position: sticky;
  top: 0;
  background-color: ${theme.colors.primary};
  z-index: 1;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${theme.colors.background};
  cursor: pointer;
  padding: ${theme.spacing(1)};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: rotate(90deg);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
    border-radius: 50%;
  }
  
  &:active {
    transform: scale(0.9);
  }
`;

export const HamburgerMenu = styled.button`
  cursor: pointer;
  color: ${theme.colors.background};
  padding: ${theme.spacing(1)};
  z-index: 101;
  transition: transform 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  
  &:hover {
    transform: scale(1.1);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
    border-radius: 50%;
  }
  
  &:active {
    transform: scale(0.95);
  }
`;

export const TabsWrapper = styled.div`
  display: flex;
  gap: ${theme.spacing(1)};
  flex-wrap: nowrap;
  padding: ${theme.spacing(0.8)} 0;
  scroll-behavior: smooth;
  max-width: 100%;
  transition: transform 0.3s ease;
  position: relative;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    gap: ${theme.spacing(0.5)};
  }

  ${({ $isMobile }) => $isMobile && css`
    flex-direction: column;
    background-color: ${theme.colors.primary};
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 80%;
    max-width: 320px;
    padding: ${theme.spacing(2)};
    z-index: 100;
    gap: ${theme.spacing(1.5)};
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);
    overflow-y: auto;
    transform: translateX(100%);
    will-change: transform;

    ${({ $isOpen }) => $isOpen && css`
      transform: translateX(0);
    `}
  `}
`;

export const MobileMenuContent = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  overflow-y: auto;
  padding-bottom: ${theme.spacing(4)};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(1)};
  
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TabIndicator = styled.div`
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  height: 3px;
  background-color: ${theme.colors.background};
  border-radius: 3px;
  
  ${({ $isMobile }) => $isMobile && css`
    width: 5px;
    height: 100%;
    right: -10px;
    left: auto;
    bottom: 0;
  `}
`;

export const TabItem = styled.div`
  padding: ${theme.spacing(1.2)} ${theme.spacing(2)};
  cursor: pointer;
  font-family: ${theme.fonts.heading};
  font-size: 16px;
  font-weight: bold;
  white-space: nowrap;
  color: ${({ $active }) => ($active ? theme.colors.primary : theme.colors.background)};
  background-color: ${({ $active }) => ($active ? theme.colors.background : "transparent")};
  border-radius: ${theme.spacing(1.3)};
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ $active }) => ($active ? 1 : 0.8)};
  position: relative;
  overflow: hidden;
  
  ${({ $isScrolled }) =>
    $isScrolled &&
    css`
      padding: ${theme.spacing(1)} ${theme.spacing(1.5)};
    `}

  &:hover {
    background-color: ${({ $active }) => ($active ? theme.colors.background : theme.colors.light)};
    color: ${({ $active }) => ($active ? theme.colors.primary : theme.colors.primary)};
    opacity: 1;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  &:active {
    transform: translateY(0);
  }

  ${({ $isMobile }) => $isMobile && css`
    width: 100%;
    text-align: left;
    justify-content: flex-start;
    border-radius: ${theme.spacing(0.8)};
    margin-bottom: ${theme.spacing(0.5)};
    padding: ${theme.spacing(1.5)} ${theme.spacing(2)};
    
    &:hover {
      transform: translateX(5px);
      box-shadow: none;
    }
    
    &:active {
      transform: translateX(2px);
    }
  `}
`;

export const ProfileIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
    border-color: ${theme.colors.background};
  }
  
  &:active {
    transform: scale(0.95);
  }
`;

export const ProfilePlaceholder = styled(FaUserCircle)`
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out, filter 0.3s ease;
  color: ${theme.colors.background};

  &:hover {
    transform: scale(1.1);
    filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.5));
  }
  
  &:active {
    transform: scale(0.95);
  }
`;