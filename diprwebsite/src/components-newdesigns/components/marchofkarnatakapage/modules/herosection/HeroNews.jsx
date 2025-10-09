import React from "react"
import { IoChevronBack, IoChevronForward } from "react-icons/io5"
import {
  HeroWrap,
  HeroMedia,
  OverlayCard,
  Title,
  Excerpt,
  BottomBar,
  Dots,
  Dot,
  Arrows,
  ArrowBtn,
  RightDivider,
} from "./Heronews.styles"

const FALLBACK_ITEMS = [
  {
    title:
      "Karnataka's Journey of Progress: From Ancient Heritage to Modern Development",
    excerpt:
      "Explore the remarkable transformation of Karnataka, showcasing its rich cultural heritage and rapid modernization across various sectors.",
    image: "/state/state.jpg",
  },
  {
    title: "Karnataka's IT Revolution: Silicon Valley of India",
    excerpt: "Discover how Karnataka became the technology hub of India, driving innovation and digital transformation.",
    image: "/state/sidebar.jpg",
  },
  {
    title: "Karnataka's Educational Excellence: Nurturing Future Leaders",
    excerpt: "Learn about Karnataka's world-class educational institutions and their contribution to national development.",
    image: "/state/sidebar2.jpg",
  },
]

export default function NewsHero({ items = FALLBACK_ITEMS }) {
  const [index, setIndex] = React.useState(0)
  const len = items.length

  const go = (next) => {
    setIndex((i) => (i + (next ? 1 : -1) + len) % len)
  }

  const current = items[index]

  return (
    <HeroWrap aria-roledescription="carousel" aria-label="March of Karnataka stories">
      <HeroMedia>
        {/* Background image */}
        <img src={current.image || "/placeholder.svg"} alt="" aria-hidden="true" />
        {/* Overlay card */}

      </HeroMedia>
      <OverlayCard>
          <Title>{current.title}</Title>
          <Excerpt>{current.excerpt}</Excerpt>

          <BottomBar>
            <Dots role="tablist" aria-label="Slide progress">
              {items.map((_, i) => (
                <Dot
                  key={i}
                  onClick={() => setIndex(i)}
                  $active={i === index}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === index ? "true" : undefined}
                />
              ))}
            </Dots>

            <Arrows>
              <ArrowBtn aria-label="Previous" onClick={() => go(false)}>
                <IoChevronBack size={25} />
              </ArrowBtn>
              <ArrowBtn aria-label="Next" onClick={() => go(true)}>
                <IoChevronForward size={25} />
              </ArrowBtn>
            </Arrows>
          </BottomBar>
        </OverlayCard>
        <RightDivider />

    </HeroWrap>
  )
}
