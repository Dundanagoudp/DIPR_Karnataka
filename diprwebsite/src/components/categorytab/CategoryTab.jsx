import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  TabContainer,
  TabsWrapper,
  TabItem,
  ProfileIcon,
  HamburgerMenu,
} from "../categorytab/CategoryTab.styles";
import ProfileImage from "../../assets/Profile.png";
import { FontSizeContext } from "../../context/FontSizeProvider";

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
  const { fontSize } = useContext(FontSizeContext);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleTabClick = (path) => {
    setActiveTab(path);
    if (window.innerWidth <= 480) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  // Close menu on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 480) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <TabContainer style={{ fontSize: `${fontSize}%` }}>
      <HamburgerMenu onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </HamburgerMenu>
      <TabsWrapper style={{ fontSize: `${fontSize}%` }} isMenuOpen={isMenuOpen}>
        {tabs.map(({ name, path }) => (
          <Link
            key={name}
            to={path}
            onClick={() => handleTabClick(path)}
            style={{ textDecoration: "none" }}
          >
            <TabItem style={{ fontSize: `${fontSize}%` }} active={activeTab === path}>
              {name}
            </TabItem>
          </Link>
        ))}
      </TabsWrapper>
      <Link to="/profile" style={{ marginLeft: "auto", marginRight: "4%" }}>
        <ProfileIcon src={ProfileImage} alt="User Profile" />
      </Link>
    </TabContainer>
  );
};

export default CategoryTab;
