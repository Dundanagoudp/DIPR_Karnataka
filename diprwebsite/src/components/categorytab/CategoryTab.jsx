import { useState, useEffect, useContext, useRef } from "react"
import { Link, useLocation } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"
import { gsap } from "gsap"
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
} from "./CategoryTab.styles"
import ProfileImage from "../../assets/Profile.png"
import { FontSizeContext } from "../../context/FontSizeProvider"
import { LanguageContext } from "../../context/LanguageContext"

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
]

const CategoryTab = () => {
  const location = useLocation()
  const [activeTab, setActiveTab] = useState(location.pathname)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { fontSize } = useContext(FontSizeContext)
  const { language } = useContext(LanguageContext)
  const tabsRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)
  
  // Refs for GSAP animations
  const menuRef = useRef(null)
  const overlayRef = useRef(null)
  const menuItemsRef = useRef([])
  const tl = useRef(null)

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev)
  }

  const handleTabClick = (path) => {
    setActiveTab(path)
    closeMenu()
  }

  // Initialize GSAP timeline
  useEffect(() => {
    tl.current = gsap.timeline({ paused: true })
    
    return () => {
      tl.current.kill()
    }
  }, [])

  // Animation setup when isMobile changes
  useEffect(() => {
    if (isMobile && menuRef.current && overlayRef.current) {
      // Setup animations
      tl.current
        .to(overlayRef.current, {
          opacity: 1,
          duration: 0.2,
          ease: "power1.out"
        }, 0)
        .fromTo(menuRef.current, 
          { x: "100%" }, 
          { 
            x: "0%", 
            duration: 0.3, 
            ease: "power2.out" 
          }, 0)
        .fromTo(menuItemsRef.current, 
          { 
            opacity: 0, 
            y: 20 
          }, 
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.2, 
            stagger: 0.05, 
            ease: "back.out" 
          }, 0.2)
    }
  }, [isMobile])

  // Play/reverse animation based on isMenuOpen
  useEffect(() => {
    if (!isMobile) return

    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
      document.body.style.position = "fixed"
      document.body.style.width = "100%"
      tl.current.play()
    } else {
      document.body.style.overflow = "auto"
      document.body.style.position = ""
      document.body.style.width = ""
      tl.current.reverse()
    }
  }, [isMenuOpen, isMobile])

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    setActiveTab(location.pathname)
  }, [location.pathname])

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    const handleResize = () => {
      checkIfMobile()
      if (window.innerWidth > 768) {
        closeMenu()
      }
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    checkIfMobile()
    window.addEventListener("resize", handleResize)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const getLocalizedTabName = (tab) => {
    return tab.name[language] || tab.name.English
  }

  return (
    <>
      {isMobile && (
        <MobileMenuOverlay 
          ref={overlayRef}
          $isOpen={isMenuOpen} 
          onClick={closeMenu} 
        />
      )}
      
      <TabContainer style={{ fontSize: `${fontSize}%` }} $isScrolled={isScrolled}>
        {isMobile && (
          <HamburgerMenu onClick={toggleMenu} $isOpen={isMenuOpen}>
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </HamburgerMenu>
        )}

        {!isMobile ? (
          <TabsWrapper ref={tabsRef}>
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
              <CloseButton onClick={closeMenu}>
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
                >
                  <TabItem 
                    ref={el => menuItemsRef.current[index] = el}
                    $active={activeTab === tab.path}
                  >
                    {getLocalizedTabName(tab)}
                    {activeTab === tab.path && <TabIndicator />}
                  </TabItem>
                </Link>
              ))}
            </MobileMenuContent>
          </TabsWrapper>
        )}

        <div className="right-controls">
          <Link to="/profile">
            {ProfileImage ? (
              <ProfileIcon src={ProfileImage} alt="User Profile" />
            ) : (
              <ProfilePlaceholder size={40} />
            )}
          </Link>
        </div>
      </TabContainer>
    </>
  )
}

export default CategoryTab