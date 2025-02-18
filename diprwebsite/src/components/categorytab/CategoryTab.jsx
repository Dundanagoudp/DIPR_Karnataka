import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {  FaBars, FaTimes } from "react-icons/fa";
import {
  TabContainer,
  TabsWrapper,
  TabItem,
  ProfileIcon,
  HamburgerMenu,
} from "../categorytab/CategoryTab.styles";
import ProfileImage from "../../assets/Profile.png";
 
const tabs = [
  { name: "All", path: "/" },
  { name: "Latest News", path: "/latestdata" },
  { name: "Magazine", path: "/magazinepages" },
  { name: "Gallery", path: "/Gallery" },
  { name: "About us", path: "/aboutuspage" },
  { name: "Contact us", path: "/contactus" },
];
 
const CategoryTab = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
 
  // Close the menu after clicking a tab if screen width > 480px
  const handleTabClick = (path) => {
    setActiveTab(path);
    if (window.innerWidth <= 480) {
      setIsMenuOpen(false); // Keep the menu open for mobile until the tab is clicked
    }
  };
 
  // Listen for window resize to update the menu state
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 480) {
        setIsMenuOpen(false); // Close menu on larger screens
      }
    };
    window.addEventListener("resize", handleResize);
 
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
 
  return (
    <TabContainer>
      <HamburgerMenu onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </HamburgerMenu>
      <TabsWrapper isMenuOpen={isMenuOpen}>
        {tabs.map(({ name, path }) => (
          <Link
            key={name}
            to={path}
            onClick={() => handleTabClick(path)}
            style={{ textDecoration: "none" }}
          >
            <TabItem active={activeTab === path}>{name}</TabItem>
          </Link>
        ))}
      </TabsWrapper>
            <Link to="/profile" style={{ marginLeft: "auto" , marginRight: "4%" }}>
            <ProfileIcon src={ProfileImage} alt="User Profile" />
      </Link>
    </TabContainer>
  );
};
 
export default CategoryTab;