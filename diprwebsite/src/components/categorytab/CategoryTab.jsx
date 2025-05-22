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
    path: "/latestnews",
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
  
  // Add a new ref for body scroll handling
  const bodyScrollLockRef = useRef({
    scrollPosition: 0,
    previousBodyStyles: {}
  });

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

  // Update menu handling with better scroll lock
  const lockBodyScroll = () => {
    const scrollPosition = window.pageYOffset;
    bodyScrollLockRef.current = {
      scrollPosition,
      previousBodyStyles: {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left,
        right: document.body.style.right,
        overflow: document.body.style.overflow
      }
    };

    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
  };

  const unlockBodyScroll = () => {
    const { scrollPosition, previousBodyStyles } = bodyScrollLockRef.current;
    
    // Restore previous body styles
    Object.entries(previousBodyStyles).forEach(([key, value]) => {
      document.body.style[key] = value;
    });

    // Restore scroll position
    window.scrollTo(0, scrollPosition);
  };

  // Update menu animations
  useEffect(() => {
    if (!menuRef.current || !overlayRef.current) return;
    
    if (isMenuOpen) {
      lockBodyScroll();
      
      // Animate overlay
      gsap.to(overlayRef.current, {
        opacity: 1,
        visibility: "visible",
        duration: 0.2,
        ease: "power2.out"
      });
      
      // Animate menu
      gsap.to(menuRef.current, {
        x: 0,
        duration: 0.3,
        ease: "power2.out"
      });
      
      // Animate menu items with improved timing
      gsap.fromTo(
        menuItemsRef.current,
        { opacity: 0, x: 20 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.2,
          stagger: 0.03,
          delay: 0.1,
          ease: "power1.out"
        }
      );
    } else {
      // Animate menu items out first
      gsap.to(menuItemsRef.current, {
        opacity: 0,
        x: 20,
        duration: 0.2,
        stagger: 0.02,
        ease: "power1.in"
      });

      // Then animate overlay and menu
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(overlayRef.current, { visibility: "hidden" });
          unlockBodyScroll();
        }
      });
      
      gsap.to(menuRef.current, {
        x: "100%",
        duration: 0.3,
        ease: "power2.in"
      });
    }

    // Cleanup function
    return () => {
      if (isMenuOpen) {
        unlockBodyScroll();
      }
    };
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

  // Add cleanup on unmount
  useEffect(() => {
    return () => {
      if (isMenuOpen) {
        unlockBodyScroll();
      }
    };
  }, []);

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