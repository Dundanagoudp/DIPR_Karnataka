import { useState, useEffect, useContext, useRef } from "react"
import { Link, useLocation } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"
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
  const menuRef = useRef(null)

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev)
  }

  const handleTabClick = (path) => {
    setActiveTab(path)
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
        setIsMenuOpen(false)
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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
      if (menuRef.current) {
        menuRef.current.scrollTop = 0
      }
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMenuOpen])

  return (
    <>
      {isMobile && isMenuOpen && (
        <MobileMenuOverlay $isOpen={isMenuOpen} onClick={toggleMenu} />
      )}
      
      <TabContainer style={{ fontSize: `${fontSize}%` }} $isScrolled={isScrolled}>
        {isMobile && (
          <HamburgerMenu onClick={toggleMenu} $isOpen={isMenuOpen}>
            <FaBars size={24} />
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
          <TabsWrapper $isOpen={isMenuOpen} ref={menuRef} $isMobile={true}>
            <MobileMenuHeader>
              <CloseButton onClick={toggleMenu}>
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
                    $active={activeTab === tab.path}
                    style={{ animationDelay: `${index * 0.05}s` }}
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