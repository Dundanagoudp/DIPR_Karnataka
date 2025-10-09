import styled from "styled-components";
import { NavLink } from "react-router-dom";
import theme from "../../theme/Theme";

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

  &.active {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
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
  background-color: transparent;
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

export const MobileNav = styled.nav`
  display: block;
  padding: ${theme.spacing(2)} 0;
  border-top: 1px solid ${theme.colors.gray[200]};
  background-color: ${theme.colors.white};

  @media (min-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const MobileNavContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(1)};
`;

export const MobileNavItem = styled.div`
  width: 100%;
`;

export const MobileNavLink = styled(NavLink)`
  display: block;
  padding: ${theme.spacing(1)} ${theme.spacing(2)};
  font-size: ${theme.fontSizes.medium};
  font-weight: 500;
  color: ${theme.colors.text};
  text-decoration: none;
  border-radius: ${theme.borderRadius.small};
  transition: all ${theme.transitions.fast};

  &:hover {
    background-color: ${theme.colors.gray[100]};
    color: ${theme.colors.primary};
  }

  &.active {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
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
