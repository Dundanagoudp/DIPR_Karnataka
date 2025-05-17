import { useState, useEffect, useContext, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { gsap } from "gsap";
import {
  TabContainer,
  TabsWrapper,
  TabItem,
  ProfileIcon,
  ProfilePlaceholder,
  HamburgerMenu,
  TabIndicator,
  MobileMenuOverlay,
  MobileMenuHeader,
  CloseButton,
  MobileMenuContent,
  RightControls
} from "./CategoryTab.styles";
import ProfileImage from "../../assets/Profile.png";
import { FontSizeContext } from "../../context/FontSizeProvider";
import { LanguageContext } from "../../context/LanguageContext";

const tabs = [
  {
    name: {
      English: "Home",
      Hindi: "होम",
      Kannada: "ಹೋಮ್",
    },
    path: "/",
  },
  {
    name: {
      English: "Latest News",
      Hindi: "ताजा खबर",
      Kannada: "ಇತ್ತೀಚಿನ ಸುದ್ದಿ",
    },
    path: "/latestdata",
  },
  {
    name: {
      English: "Magazine",
      Hindi: "पत्रिका",
      Kannada: "ಮ್ಯಾಗಜಿನ್",
    },
    path: "/magazinepages",
  },
  {
    name: {
      English: "Gallery",
      Hindi: "गैलरी",
      Kannada: "ಗ್ಯಾಲರಿ",
    },
    path: "/gallery",
  },
  {
    name: {
      English: "About us",
      Hindi: "हमारे बारे में",
      Kannada: "ನಮ್ಮ ಬಗ್ಗೆ",
    },
    path: "/aboutuspage",
  },
  {
    name: {
      English: "Contact us",
      Hindi: "संपर्क करें",
      Kannada: "ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ",
    },
    path: "/contactus",
  },
];

const CategoryTab = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { fontSize } = useContext(FontSizeContext);
  const { language } = useContext(LanguageContext);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  // Refs for elements and animations
  const menuRef = useRef(null);
  const overlayRef = useRef(null);
  const menuItemsRef = useRef([]);
  
  // Store scroll position
  const scrollPos = useRef(0);
  
  // Update active tab when location changes
  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  // Handle resize and scroll events
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleResize = () => {
      checkIfMobile();
      if (window.innerWidth > 768 && isMenuOpen) {
        closeMenu();
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Initial check
    checkIfMobile();
    
    // Add event listeners
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  // Handle menu animations
  useEffect(() => {
    if (!menuRef.current || !overlayRef.current) return;
    
    if (isMenuOpen) {
      // Store current scroll position
      scrollPos.current = window.scrollY;
      
      // Lock body scroll
      document.body.style.overflow = "hidden";
      document.body.style.height = "100%";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${scrollPos.current}px`;
      
      // Animate overlay
      gsap.to(overlayRef.current, {
        opacity: 1,
        visibility: "visible",
        duration: 0.2,
        ease: "power1.out"
      });
      
      // Animate menu
      gsap.to(menuRef.current, {
        x: 0,
        duration: 0.3,
        ease: "power2.out"
      });
      
      // Animate menu items
      gsap.fromTo(
        menuItemsRef.current,
        { opacity: 0, x: 20 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.3,
          stagger: 0.05,
          delay: 0.1,
          ease: "power1.out"
        }
      );
    } else {
      // Animate overlay (out)
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: "power1.in",
        onComplete: () => {
          gsap.set(overlayRef.current, { visibility: "hidden" });
        }
      });
      
      // Animate menu (out)
      gsap.to(menuRef.current, {
        x: "100%",
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          // Unlock body scroll
          document.body.style.overflow = "";
          document.body.style.height = "";
          document.body.style.position = "";
          document.body.style.width = "";
          document.body.style.top = "";
          
          // Restore scroll position
          window.scrollTo(0, scrollPos.current);
        }
      });
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleTabClick = (path) => {
    setActiveTab(path);
    closeMenu();
  };

  const getLocalizedTabName = (tab) => {
    return tab.name[language] || tab.name.English;
  };

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === "Escape" && isMenuOpen) {
        closeMenu();
      }
    };
    
    window.addEventListener("keydown", handleEscKey);
    return () => {
      window.removeEventListener("keydown", handleEscKey);
    };
  }, [isMenuOpen]);

  return (
    <>
      <MobileMenuOverlay 
        ref={overlayRef}
        $isOpen={isMenuOpen} 
        onClick={closeMenu} 
      />
      
      <TabContainer style={{ fontSize: `${fontSize}%` }} $isScrolled={isScrolled}>
        {isMobile && (
          <HamburgerMenu onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </HamburgerMenu>
        )}

        {!isMobile ? (
          <TabsWrapper>
            {tabs.map((tab) => (
              <Link
                key={tab.path}
                to={tab.path}
                onClick={() => handleTabClick(tab.path)}
                style={{ textDecoration: "none" }}
              >
                <TabItem $active={activeTab === tab.path} $isScrolled={isScrolled}>
                  {getLocalizedTabName(tab)}
                  {activeTab === tab.path && <TabIndicator />}
                </TabItem>
              </Link>
            ))}
          </TabsWrapper>
        ) : (
          <TabsWrapper 
            ref={menuRef}
            $isOpen={isMenuOpen} 
            $isMobile={true}
          >
            <MobileMenuHeader>
              <CloseButton onClick={closeMenu} aria-label="Close menu">
                <FaTimes size={24} />
              </CloseButton>
            </MobileMenuHeader>

            <MobileMenuContent>
              {tabs.map((tab, index) => (
                <Link
                  key={tab.path}
                  to={tab.path}
                  onClick={() => handleTabClick(tab.path)}
                  style={{ textDecoration: "none" }}
                  ref={el => menuItemsRef.current[index] = el}
                >
                  <TabItem 
                    $active={activeTab === tab.path}
                    $isMobile={true}
                  >
                    {getLocalizedTabName(tab)}
                    {activeTab === tab.path && <TabIndicator $isMobile={true} />}
                  </TabItem>
                </Link>
              ))}
            </MobileMenuContent>
          </TabsWrapper>
        )}

        <RightControls>
          <Link to="/profile">
            {ProfileImage ? (
              <ProfileIcon src={ProfileImage} alt="User Profile" />
            ) : (
              <ProfilePlaceholder size={40} />
            )}
          </Link>
        </RightControls>
      </TabContainer>
    </>
  );
};

export default CategoryTab;