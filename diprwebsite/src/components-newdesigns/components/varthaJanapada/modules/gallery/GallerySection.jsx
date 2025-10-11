
import { useMemo, useState, useCallback, useEffect } from "react"
import {
  Section,
  SectionHeader,
  SectionTitle,
  GalleryContainer,
  StaticImage,
  CentralCarousel,
  MainCard,
  MainImage,
  Caption,
  NavButton,
  ArrowIcon,
} from "./GallerySection.styles"

const carouselImages = [
  { src: "/state/state.jpg", alt: "Karnataka State Government Building" },
  { src: "/state/newsbaner.png", alt: "News Banner - Government Announcements" },
  { src: "/state/2ndimage.jpg", alt: "Government Office Complex" },
  { src: "/state/2ndsection.jpg", alt: "Administrative Building Section" },
  { src: "/state/rightside.jpg", alt: "Government Department Office" },
  { src: "/state/sidebar.jpg", alt: "Government Conference Room" },
  { src: "/state/sidebar2.jpg", alt: "Government Meeting Hall" },
]

const staticImages = [
  { src: "/state/sidebar.jpg", alt: "Government Conference Room" },
  { src: "/state/sidebar2.jpg", alt: "Government Meeting Hall" },
  { src: "/state/rightside.jpg", alt: "Government Department Office" },
  { src: "/state/2ndsection.jpg", alt: "Administrative Building Section" },
]

export default function GallerySection() {
  const [index, setIndex] = useState(0)
  const [zoom, setZoom] = useState(false)
  const total = carouselImages.length

  const next = useCallback(() => {
    setZoom(false)
    setIndex((i) => (i + 1) % total)
  }, [total])

  const prev = useCallback(() => {
    setZoom(false)
    setIndex((i) => (i - 1 + total) % total)
  }, [total])

  const goTo = useCallback((i) => {
    setZoom(false)
    setIndex(i)
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next()
      if (e.key === "ArrowLeft") prev()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [next, prev])

  const active = useMemo(() => carouselImages[index], [index])

  // Calculate side images based on current index
  const leftImages = useMemo(() => {
    const prevIndex1 = (index - 1 + total) % total
    const prevIndex2 = (index - 2 + total) % total
    return [carouselImages[prevIndex2], carouselImages[prevIndex1]]
  }, [index, total])

  const rightImages = useMemo(() => {
    const nextIndex1 = (index + 1) % total
    const nextIndex2 = (index + 2) % total
    return [carouselImages[nextIndex1], carouselImages[nextIndex2]]
  }, [index, total])

  return (
    <Section aria-label="Photo Gallery">
      <SectionHeader>
        <SectionTitle>Photos</SectionTitle>
      </SectionHeader>

      <GalleryContainer role="region" aria-label="Gallery single row layout">
        {/* Left side images - dynamically change with carousel */}
        {leftImages.map((img, i) => (
          <StaticImage 
            key={`left-${index}-${i}`} 
            src={img.src} 
            alt={img.alt}
            onClick={() => goTo((index - 2 + i + total) % total)}
          />
        ))}

        {/* Central Carousel */}
        <CentralCarousel aria-live="polite">
          <MainCard>
            <MainImage
              src={active.src}
              alt={active.alt}
              $zoomed={zoom}
              onClick={() => setZoom((z) => !z)}
              aria-pressed={zoom}
            />

            {/* Left Arrow Button */}
            <NavButton 
              aria-label="Previous image" 
              onClick={prev} 
              $position="left"
              title="Previous"
            >
              <ArrowIcon $position="left">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </ArrowIcon>
            </NavButton>

            {/* Right Arrow Button */}
            <NavButton 
              aria-label="Next image" 
              onClick={next} 
              $position="right"
              title="Next"
            >
              <ArrowIcon $position="right">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </ArrowIcon>
            </NavButton>
          </MainCard>
          
          {/* Caption OUTSIDE the card */}
          <Caption>{active.alt}</Caption>
        </CentralCarousel>

        {/* Right side images - dynamically change with carousel */}
        {rightImages.map((img, i) => (
          <StaticImage 
            key={`right-${index}-${i}`} 
            src={img.src} 
            alt={img.alt}
            onClick={() => goTo((index + 1 + i) % total)}
          />
        ))}
      </GalleryContainer>
    </Section>
  )
}
