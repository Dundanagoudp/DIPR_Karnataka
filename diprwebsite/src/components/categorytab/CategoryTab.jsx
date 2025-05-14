import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  TabContainer,
  TabsWrapper,
  TabItem,
  ProfileIcon,
  ProfilePlaceholder,
  HamburgerMenu,
} from "./CategoryTab.styles";
import ProfileImage from "../../assets/Profile.png";
import { FontSizeContext } from "../../context/FontSizeProvider";
import { LanguageContext } from "../../context/LanguageContext";

const tabs = [
  { 
    name: { 
      English: "Home", 
      Hindi: "होम", 
      Kannada: "ಹೋಮ್" 
    }, 
    path: "/" 
  },
  { 
    name: { 
      English: "Latest News", 
      Hindi: "ताजा खबर", 
      Kannada: "ಇತ್ತೀಚಿನ ಸುದ್ದಿ" 
    }, 
    path: "/latestdata" 
  },
  { 
    name: { 
      English: "Magazine", 
      Hindi: "पत्रिका", 
      Kannada: "ಮ್ಯಾಗಜಿನ್" 
    }, 
    path: "/magazinepages" 
  },
  { 
    name: { 
      English: "Gallery", 
      Hindi: "गैलरी", 
      Kannada: "ಗ್ಯಾಲರಿ" 
    }, 
    path: "/gallery" 
  },
  { 
    name: { 
      English: "About us", 
      Hindi: "हमारे बारे में", 
      Kannada: "ನಮ್ಮ ಬಗ್ಗೆ" 
    }, 
    path: "/aboutuspage" 
  },
  { 
    name: { 
      English: "Contact us", 
      Hindi: "संपर्क करें", 
      Kannada: "ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ" 
    }, 
    path: "/contactus" 
  },
];

const CategoryTab = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { fontSize } = useContext(FontSizeContext);
  const { language } = useContext(LanguageContext);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleTabClick = (path) => {
    setActiveTab(path);
    if (window.innerWidth <= 480) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 480) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getLocalizedTabName = (tab) => {
    return tab.name[language] || tab.name.English;
  };

  return (
    <TabContainer style={{ fontSize: `${fontSize}%` }}>
      <HamburgerMenu onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </HamburgerMenu>

      <TabsWrapper isMenuOpen={isMenuOpen}>
        {tabs.map((tab) => (
          <Link
            key={tab.path}
            to={tab.path}
            onClick={() => handleTabClick(tab.path)}
            style={{ textDecoration: "none" }}
          >
            <TabItem active={activeTab === tab.path}>
              {getLocalizedTabName(tab)}
            </TabItem>
          </Link>
        ))}
      </TabsWrapper>

      <Link to="/profile">
        {ProfileImage ? (
          <ProfileIcon src={ProfileImage} alt="User Profile" />
        ) : (
          <ProfilePlaceholder size={40} />
        )}
      </Link>
    </TabContainer>
  );
};

export default CategoryTab;