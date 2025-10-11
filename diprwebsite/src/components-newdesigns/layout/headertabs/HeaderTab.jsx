import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import {
  HeaderContainer,
  Container,
  HeaderContent,
  MobileMenuButton,
  DesktopNav,
  NavItem,
  NavLinkStyled,
  ActiveIndicator,
  LoginButton,
  MobileNav,
  MobileNavContent,
  MobileNavItem,
  MobileNavLink,
  Overlay,
  SidebarHeader,
  CloseButton,
} from "./Header.styles";

const HeaderTab = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Vartha Janapada", path: "/" },
    { name: "March of karnataka", path: "/marchofkarnataka" },
    { name: "State", path: "/state" },
    { name: "District news", path: "/district" },
    { name: "Special news", path: "/specialnews" },
    { name: "News", path: "/news" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Check if tab should be active
  const isTabActive = (itemPath) => {
    if (itemPath === "/") {
      return location.pathname === "/" || location.pathname === "/magazinesvartha";
    }
    if (itemPath === "/marchofkarnataka") {
      return location.pathname === "/marchofkarnataka" || location.pathname === "/marchofkarnatakmagzine";
    }
    return location.pathname === itemPath;
  };

  return (
    <HeaderContainer>
      <Container>
        <HeaderContent>
          {/* Mobile menu button */}
          <MobileMenuButton
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </MobileMenuButton>

          {/* Desktop Navigation */}
          <DesktopNav>
            {navItems.map((item) => (
              <NavItem key={item.path}>
                <NavLinkStyled
                  to={item.path}
                  className={isTabActive(item.path) ? "active" : ""}
                >
                  {item.name}
                  {isTabActive(item.path) && <ActiveIndicator />}
                </NavLinkStyled>
              </NavItem>
            ))}
          </DesktopNav>

          {/* Login Button */}
          <LoginButton>
            Login
          </LoginButton>
        </HeaderContent>

        {/* Mobile Navigation Sidebar */}
        <>
          <Overlay isOpen={isMobileMenuOpen} onClick={closeMobileMenu} />
          <MobileNav isOpen={isMobileMenuOpen}>
            <SidebarHeader>
              <CloseButton onClick={closeMobileMenu} aria-label="Close menu">
                <X size={24} />
              </CloseButton>
            </SidebarHeader>
            <MobileNavContent>
              {navItems.map((item) => (
                <MobileNavItem key={item.path}>
                  <MobileNavLink
                    to={item.path}
                    onClick={closeMobileMenu}
                    className={isTabActive(item.path) ? "active" : ""}
                  >
                    {item.name}
                  </MobileNavLink>
                </MobileNavItem>
              ))}
            </MobileNavContent>
          </MobileNav>
        </>
      </Container>
    </HeaderContainer>
  );
};

export default HeaderTab;
