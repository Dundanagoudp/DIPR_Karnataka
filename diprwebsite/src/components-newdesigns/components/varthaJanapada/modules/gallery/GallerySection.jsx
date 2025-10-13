
import { useMemo, useState, useCallback, useEffect } from "react"
import {
  Section,
  GalleryContainer,
  StaticImage,
  CentralCarousel,
  MainCard,
  MainImage,
  Caption,
  NavButton,
  ArrowIcon,
} from "./GallerySection.styles"
import { PhotosApi } from "../../../../../services/gallery/GalleryApi"

export default function GallerySection() {
  const [index, setIndex] = useState(0)
  const [zoom, setZoom] = useState(false)
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch photos from API
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        setLoading(true)
        const response = await PhotosApi.getAllPhotos()
        
        // Filter only approved photos and map to the format we need
        const formattedPhotos = response
          .filter(photo => photo.status === "approved")
          .map(photo => ({
            src: photo.photoImage,
            alt: `Photo by ${photo.createdBy?.displayName || 'Admin'}`,
            id: photo._id
          }))
        
        setPhotos(formattedPhotos)
        setError(null)
      } catch (err) {
        console.error("Error loading gallery photos:", err)
        setError("Failed to load photos")
      } finally {
        setLoading(false)
      }
    }

    fetchPhotos()
  }, [])

  const carouselImages = photos.length > 0 ? photos : []
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

  const active = useMemo(() => carouselImages[index], [index, carouselImages])

  // Calculate side images based on current index
  const leftImages = useMemo(() => {
    if (total === 0) return []
    const prevIndex1 = (index - 1 + total) % total
    const prevIndex2 = (index - 2 + total) % total
    return [carouselImages[prevIndex2], carouselImages[prevIndex1]]
  }, [index, total, carouselImages])

  const rightImages = useMemo(() => {
    if (total === 0) return []
    const nextIndex1 = (index + 1) % total
    const nextIndex2 = (index + 2) % total
    return [carouselImages[nextIndex1], carouselImages[nextIndex2]]
  }, [index, total, carouselImages])

  // Show loading state
  if (loading) {
    return (
      <Section aria-label="Photo Gallery">
        <div style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
          Loading photos...
        </div>
      </Section>
    )
  }

  // Show error state
  if (error) {
    return (
      <Section aria-label="Photo Gallery">
        <div style={{ textAlign: 'center', padding: '2rem', color: '#f44336' }}>
          {error}
        </div>
      </Section>
    )
  }

  // Show message if no photos
  if (photos.length === 0) {
    return (
      <Section aria-label="Photo Gallery">
        <div style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
          No photos available
        </div>
      </Section>
    )
  }

  // Safety check: ensure active image exists
  if (!active) {
    return (
      <Section aria-label="Photo Gallery">
        <div style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
          Loading gallery...
        </div>
      </Section>
    )
  }

  return (
    <Section aria-label="Photo Gallery">
      <GalleryContainer role="region" aria-label="Gallery single row layout">
        {/* Left side images - dynamically change with carousel */}
        {total > 2 && leftImages.map((img, i) => (
          <StaticImage 
            key={img.id || `left-${index}-${i}`} 
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
            {total > 1 && (
              <NavButton 
                aria-label="Previous image" 
                onClick={prev} 
                $position="left"
              >
                <ArrowIcon $position="left" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </ArrowIcon>
              </NavButton>
            )}

            {/* Right Arrow Button */}
            {total > 1 && (
              <NavButton 
                aria-label="Next image" 
                onClick={next} 
                $position="right"
              >
                <ArrowIcon $position="right" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </ArrowIcon>
              </NavButton>
            )}
          </MainCard>
          
          {/* Caption OUTSIDE the card */}
          {/* <Caption>{active.alt}</Caption> */}
        </CentralCarousel>

        {/* Right side images - dynamically change with carousel */}
        {total > 2 && rightImages.map((img, i) => (
          <StaticImage 
            key={img.id || `right-${index}-${i}`} 
            src={img.src} 
            alt={img.alt}
            onClick={() => goTo((index + 1 + i) % total)}
          />
        ))}
      </GalleryContainer>
    </Section>
  )
}
