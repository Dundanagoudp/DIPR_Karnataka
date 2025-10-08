import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
} from "./Header.styles";

const HeaderTab = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Vartha Janapada", path: "/vartha-janapada" },
    { name: "March of karnataka", path: "/" },
    { name: "State", path: "/state" },
    { name: "District news", path: "/district-news" },
    { name: "Special news", path: "/special-news" },
    { name: "News", path: "/news" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
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
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {({ isActive }) => (
                    <>
                      {item.name}
                      {isActive && <ActiveIndicator />}
                    </>
                  )}
                </NavLinkStyled>
              </NavItem>
            ))}
          </DesktopNav>

          {/* Login Button */}
          <LoginButton>
            Login
          </LoginButton>
        </HeaderContent>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <MobileNav>
            <MobileNavContent>
              {navItems.map((item) => (
                <MobileNavItem key={item.path}>
                  <MobileNavLink
                    to={item.path}
                    onClick={closeMobileMenu}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    {item.name}
                  </MobileNavLink>
                </MobileNavItem>
              ))}
            </MobileNavContent>
          </MobileNav>
        )}
      </Container>
    </HeaderContainer>
  );
};

export default HeaderTab;
