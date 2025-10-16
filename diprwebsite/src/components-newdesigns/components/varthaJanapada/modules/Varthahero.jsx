
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {
  HeroLayout,
  HeroRoot,
  HeroBackground,
  HeroOverlay,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroCta,
  ArrowButton,
  ArrowControls
} from "./Varthahero.styles.js"
import LatestNotification from "./LatestNotification.jsx"

export default function Varthahero({
  title = "Latest Vartha Janapada Magazines",
  subtitle = "",
  ctaLabel = "View",
  href = "#",
  imgSrc = "/public/home/home.png",
  notifications = []
}) {
  const carouselData = [
    {
      image: "/public/home/varthajanapada.png",
      title: "Latest Vartha Janapada Magazines",
      subtitle: "",
      link: "/magazinesvartha"
    },
    {
      image: "/public/state/state.jpg",
      title: "March of Karnataka Magazines",
      subtitle: "",
      link: "/marchofkarnatakmagzine"
    }
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const handlePrevClick = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? carouselData.length - 1 : prev - 1));
  };
  
  const handleNextClick = () => {
    setCurrentImageIndex((prev) => (prev === carouselData.length - 1 ? 0 : prev + 1));
  };
  

  return (
    <HeroLayout aria-label="Home hero">
      {/* Left: Image hero */}
      <HeroRoot aria-label="Featured content">
        <HeroBackground aria-hidden="true" src={carouselData[currentImageIndex].image} />
        <HeroOverlay aria-hidden="true" />
        <ArrowControls>
          <ArrowButton 
            onClick={handlePrevClick} 
            aria-label="Previous magazine"
          >
            <span aria-hidden="true">&#10094;</span>
          </ArrowButton>
          <ArrowButton 
            onClick={handleNextClick} 
            aria-label="Next magazine"
          >
            <span aria-hidden="true">&#10095;</span>
          </ArrowButton>
        </ArrowControls>
        <HeroContent>
          <HeroTitle className="text-balance">
            {carouselData[currentImageIndex].title}
          </HeroTitle>
          {carouselData[currentImageIndex].subtitle ? (
            <HeroSubtitle className="text-pretty">
              {carouselData[currentImageIndex].subtitle}
            </HeroSubtitle>
          ) : null}
          <HeroCta as={Link} to={carouselData[currentImageIndex].link} aria-label={`View - ${carouselData[currentImageIndex].title}`}>
            View
          </HeroCta>
        </HeroContent>
      </HeroRoot>

      {/* Right: Latest notifications */}
      <LatestNotification notifications={notifications} />
    </HeroLayout>
  )
}
