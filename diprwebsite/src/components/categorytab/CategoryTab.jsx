// import React, { useState, useEffect, useContext } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";
// import {
//   TabContainer,
//   TabsWrapper,
//   TabItem,
//   ProfileIcon,
//   HamburgerMenu,
// } from "../categorytab/CategoryTab.styles";
// import ProfileImage from "../../assets/Profile.png";
// import { FontSizeContext } from "../../context/FontSizeProvider";

// const tabs = [
//   { name: "All", path: "/" },
//   { name: "Latest News", path: "/latestdata" },
//   { name: "Magazine", path: "/magazinepages" },
//   { name: "Gallery", path: "/Gallery" },
//   { name: "About us", path: "/aboutuspage" },
//   { name: "Contact us", path: "/contactus" },
// ];

// const CategoryTab = () => {
//   const location = useLocation();
//   const [activeTab, setActiveTab] = useState(location.pathname);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { fontSize } = useContext(FontSizeContext);

//   const toggleMenu = () => setIsMenuOpen((prev) => !prev);

//   const handleTabClick = (path) => {
//     setActiveTab(path);
//     if (window.innerWidth <= 480) {
//       setIsMenuOpen(false);
//     }
//   };

//   useEffect(() => {
//     setActiveTab(location.pathname);
//   }, [location.pathname]);

//   // Close menu on larger screens
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth > 480) {
//         setIsMenuOpen(false);
//       }
//     };
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <TabContainer style={{ fontSize: `${fontSize}%` }}>
//       <HamburgerMenu onClick={toggleMenu}>
//         {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//       </HamburgerMenu>
//       <TabsWrapper style={{ fontSize: `${fontSize}%` }} isMenuOpen={isMenuOpen}>
//         {tabs.map(({ name, path }) => (
//           <Link
//             key={name}
//             to={path}
//             onClick={() => handleTabClick(path)}
//             style={{ textDecoration: "none" }}
//           >
//             <TabItem style={{ fontSize: `${fontSize}%` }} active={activeTab === path}>
//               {name}
//             </TabItem>
//           </Link>
//         ))}
//       </TabsWrapper>
//       <Link to="/profile" style={{ marginLeft: "auto", marginRight: "4%" }}>
//         <ProfileIcon src={ProfileImage} alt="User Profile" />
//       </Link>
//     </TabContainer>
//   );
// };

// export default CategoryTab;


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
import { LanguageContext } from "../../context/LanguageContext"; // Import LanguageContext

// Define tab names in multiple languages
const tabs = [
  { 
    name: { 
      English: "All", 
      Hindi: "सभी", 
      Kannada: "ಎಲ್ಲಾ" 
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
  const { language } = useContext(LanguageContext); // Get the current language from context

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

  // Function to get the tab name based on the selected language
  const getLocalizedTabName = (tab) => {
    return tab.name[language] || tab.name.English; // Fallback to English if the language is not available
  };

  return (
    <TabContainer style={{ fontSize: `${fontSize}%` }}>
      <HamburgerMenu onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </HamburgerMenu>
      <TabsWrapper style={{ fontSize: `${fontSize}%` }} isMenuOpen={isMenuOpen}>
        {tabs.map((tab) => (
          <Link
            key={tab.name.English} // Use English name as the key
            to={tab.path}
            onClick={() => handleTabClick(tab.path)}
            style={{ textDecoration: "none" }}
          >
            <TabItem style={{ fontSize: `${fontSize}%` }} active={activeTab === tab.path}>
              {getLocalizedTabName(tab)}
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