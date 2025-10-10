
import { useMemo, useState, useCallback, useEffect } from "react"
import {
  Section,
  SectionHeader,
  SectionTitle,
  PageLayout,
  MainCard,
  MainImage,
  Caption,
  NavButton,
  NavIcon,
  ThumbsRail,
  LeftRail,
  RightRail,
  ThumbItem,
  ThumbImage,
  DotsRow,
  Dot,
} from "./GallerySection.styles"

const images = [
  { src: "/state/state.jpg", alt: "Karnataka State Government Building" },
  { src: "/state/newsbaner.png", alt: "News Banner - Government Announcements" },
  { src: "/state/2ndimage.jpg", alt: "Government Office Complex" },
  { src: "/state/2ndsection.jpg", alt: "Administrative Building Section" },
  { src: "/state/rightside.jpg", alt: "Government Department Office" },
  { src: "/state/sidebar.jpg", alt: "Government Conference Room" },
  { src: "/state/sidebar2.jpg", alt: "Government Meeting Hall" },
]

export default function GallerySection() {
  const [index, setIndex] = useState(0)
  const [zoom, setZoom] = useState(false)
  const total = images.length

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

  const active = useMemo(() => images[index], [index])

  // compute two prev and two next thumbnails for side rails
  const idxMod = (n) => (n + total) % total
  const leftThumbs = useMemo(
    () => [idxMod(index - 2), idxMod(index - 1)].map((i) => ({ ...images[i], i })),
    [index, total],
  )
  const rightThumbs = useMemo(
    () => [idxMod(index + 1), idxMod(index + 2)].map((i) => ({ ...images[i], i })),
    [index, total],
  )

  return (
    <Section aria-label="Photo Gallery">
      <SectionHeader>
        <SectionTitle>Photos</SectionTitle>
      </SectionHeader>

      <PageLayout role="region" aria-label="Gallery single-row">
        <LeftRail as={ThumbsRail} role="list" aria-label="Previous images">
          {leftThumbs.map((img) => (
            <ThumbItem
              key={`left-${img.i}`}
              role="listitem"
              aria-label={`Show image ${img.i + 1}`}
              $active={img.i === index}
              onClick={() => goTo(img.i)}
            >
              <ThumbImage src={img.src} alt={img.alt} />
            </ThumbItem>
          ))}
        </LeftRail>

        <MainCard aria-live="polite">
          <MainImage
            src={active.src}
            alt={active.alt}
            $zoomed={zoom}
            onClick={() => setZoom((z) => !z)}
            aria-pressed={zoom}
          />
          <Caption>{active.alt}</Caption>

          <NavButton aria-label="Previous image" onClick={prev} data-pos="left">
            <NavIcon>{"‹"}</NavIcon>
          </NavButton>
          <NavButton aria-label="Next image" onClick={next} data-pos="right">
            <NavIcon>{"›"}</NavIcon>
          </NavButton>
        </MainCard>

        <RightRail as={ThumbsRail} role="list" aria-label="Next images">
          {rightThumbs.map((img) => (
            <ThumbItem
              key={`right-${img.i}`}
              role="listitem"
              aria-label={`Show image ${img.i + 1}`}
              $active={img.i === index}
              onClick={() => goTo(img.i)}
            >
              <ThumbImage src={img.src} alt={img.alt} />
            </ThumbItem>
          ))}
        </RightRail>
      </PageLayout>

      <DotsRow role="tablist" aria-label="Image pagination">
        {images.map((_, i) => (
          <Dot key={i} role="tab" aria-selected={i === index} $active={i === index} onClick={() => goTo(i)} />
        ))}
      </DotsRow>
    </Section>
  )
}
