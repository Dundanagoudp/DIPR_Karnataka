import styled from "styled-components";
import { NavLink } from "react-router-dom";
import theme from "../../../theme/Theme";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  background-color: ${theme.colors.background};
  // box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  border-bottom: 1px solid ${theme.colors.gray[300]};
  border-top: 1px solid ${theme.colors.gray[300]};
`;

export const Container = styled.div`
  max-width: 95%;
  margin: 0 auto;
  padding: 0 ${theme.spacing(2)};
`;

export const HeaderContent = styled.div`
  display: flex;
  height: 56px;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const MobileMenuButton = styled.button`
  display: block;
  padding: ${theme.spacing(1)};
  background: none;
  border: none;
  cursor: pointer;
  border-radius: ${theme.borderRadius.small};
  transition: background-color ${theme.transitions.fast};
  color: ${theme.colors.text};

  &:hover {
    background-color: ${theme.colors.gray[100]};
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.primary};
    outline-offset: 2px;
  }

  @media (min-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const DesktopNav = styled.nav`
  display: none;
  align-items: center;
  gap: ${theme.spacing(1)};

  @media (min-width: ${theme.breakpoints.tablet}) {
    display: flex;
  }
`;

export const NavItem = styled.div`
  position: relative;
`;

export const NavLinkStyled = styled(NavLink)`
  position: relative;
  padding: ${theme.spacing(1)} ${theme.spacing(2)};
  font-size: ${theme.fontSizes.medium};
  font-weight: 500;
  color: ${theme.colors.text};
  text-decoration: none;
  border-radius: ${theme.borderRadius.small};
  transition: all 0.2s ease;
  display: block;

  &:hover {
    background-color: ${theme.colors.gray[100]};
    color: ${theme.colors.primary};
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.primary};
    outline-offset: 2px;
  }

  &.active {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    border-radius: 0;
  }
`;

export const ActiveIndicator = styled.span`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -6px;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid ${theme.colors.primary};
`;

export const LoginButton = styled.button`
  border: 1px solid ${theme.colors.primary};
  color: ${theme.colors.primary};
  background-color: #E9F1FF;
  font-size: ${theme.fontSizes.small};
  padding: ${theme.spacing(1)} ${theme.spacing(2)};
  border-radius: ${theme.borderRadius.small};
  transition: all ${theme.transitions.fast};
  cursor: pointer;
  font-family: ${theme.fonts.body};
  font-weight: 500;

  &:hover {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  }

  &:focus {
    outline: 2px solid ${theme.colors.primary};
    outline-offset: 2px;
  }
`;

// Overlay for mobile sidebar
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: opacity 0.3s ease, visibility 0.3s ease;

  @media (min-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

// Mobile sidebar navigation
export const MobileNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 280px;
  max-width: 85vw;
  background-color: ${theme.colors.white};
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.15);
  z-index: 999;
  transform: translateX(${props => props.isOpen ? '0' : '-100%'});
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  @media (min-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

// Sidebar header with close button
export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: ${theme.spacing(1)} ${theme.spacing(1)};
  background-color: ${theme.colors.white};
`;

// Close button for sidebar
export const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${theme.colors.text || '#000000'};
  cursor: pointer;
  padding: ${theme.spacing(1)};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${theme.borderRadius.small};
  transition: all ${theme.transitions.fast};

  &:hover {
    background-color: ${theme.colors.gray[100]};
    transform: rotate(90deg);
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.primary};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${theme.colors.gray[200]};
  }
`;

export const MobileNavContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${theme.spacing(3)} 0;
  gap: ${theme.spacing(1)};
  flex: 1;
`;

export const MobileNavItem = styled.div`
  width: 100%;
  position: relative;
`;

export const MobileNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: ${theme.spacing(2)} ${theme.spacing(3)};
  font-size: ${theme.fontSizes.medium};
  font-weight: 500;
  color: ${theme.colors.text};
  text-decoration: none;
  transition: all ${theme.transitions.fast};
  border-radius: ${theme.borderRadius.small};
  margin: 0 ${theme.spacing(2)};

  &:hover {
    background-color: ${theme.colors.gray[100]};
    color: ${theme.colors.primary};
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.primary};
    outline-offset: 2px;
  }

  &.active {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    font-weight: 600;
    border-radius: 0;

    &::after {
      content: '';
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: -8px;
      width: 0;
      height: 0;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-top: 8px solid ${theme.colors.primary};
    }

    &:hover {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
    }
  }

  &:active {
    background-color: ${theme.colors.gray[200]};
  }

  &.active:active {
    background-color: ${theme.colors.primary};
  }
`;

// Additional utility styles
export const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(1)};
  font-size: ${theme.fontSizes.large};
  font-weight: 600;
  color: ${theme.colors.primary};
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(2)};
`;

// Animation keyframes
export const fadeIn = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const slideIn = `
  @keyframes slideIn {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;

// Mobile menu animation
export const AnimatedMobileNav = styled(MobileNav)`
  animation: ${slideIn} 0.3s ease-out;
`;

// Responsive breakpoints
export const mediaQueries = {
  mobile: `@media (max-width: ${theme.breakpoints.mobile})`,
  tablet: `@media (min-width: ${theme.breakpoints.tablet})`,
  desktop: `@media (min-width: ${theme.breakpoints.desktop})`,
  large: `@media (min-width: ${theme.breakpoints.large})`,
};
