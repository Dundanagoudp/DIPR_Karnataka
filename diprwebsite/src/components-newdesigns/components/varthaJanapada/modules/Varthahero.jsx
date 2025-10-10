
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
  NotificationPanel,
  PanelHeader,
  NotificationList,
  ListItem,
  ListIndex,
  ListBody,
  ListLink,
  ArrowButton,
  ArrowControls
} from "./Varthahero.styles.js"

export default function Varthahero({
  title = "Latest Vartha Janapada Magazines",
  subtitle = "",
  ctaLabel = "View",
  href = "#",
  imgSrc = "/public/home/home.png",
}) {
  const carouselData = [
    {
      image: "/public/home/home.png",
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
  
  const notifications = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum at, a mattis tellus.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum at, a mattis tellus.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum at, a mattis tellus.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum at, a mattis tellus.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum at, a mattis tellus.",
  ]

  return (
    <HeroLayout aria-label="Home hero">
      {/* Left: Image hero */}
      <HeroRoot aria-label="Featured content">
        <HeroBackground aria-hidden="true" src={carouselData[currentImageIndex].image} />
        <HeroOverlay aria-hidden="true" />
        <ArrowControls>
          <ArrowButton 
            onClick={handlePrevClick} 
            aria-label="Previous image"
          >
            &#10094;
          </ArrowButton>
          <ArrowButton 
            onClick={handleNextClick} 
            aria-label="Next image"
          >
            &#10095;
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
      <NotificationPanel aria-label="Latest notifications">
        <PanelHeader>Latest notifications</PanelHeader>
        <NotificationList>
          {notifications.map((text, i) => (
            <ListItem key={i}>
              <ListIndex>{i + 1}.</ListIndex>
              <ListBody>
                {text}
                <ListLink as={Link} to="#" aria-label={`See more notification ${i + 1}`}>
                  See more →
                </ListLink>
              </ListBody>
            </ListItem>
          ))}
        </NotificationList>
      </NotificationPanel>
    </HeroLayout>
  )
}
