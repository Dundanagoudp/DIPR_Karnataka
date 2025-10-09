
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
      "District Development Projects Gain Momentum with New Infrastructure Initiatives",
    excerpt:
      "Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.",
    image: "/state/state.jpg",
  },
  {
    title: "District unveils new community center for local residents.",
    excerpt: "Quisque aliquet velit sit amet sem interdum, ac facilisis massa aliquet.",
    image: "/state/sidebar.jpg",
  },
  {
    title: "District announces education program for underprivileged students.",
    excerpt: "Mauris non tempor quam, et lacinia sapien. Maecenas ac est sit amet augue pharetra.",
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
    <HeroWrap aria-roledescription="carousel" aria-label="Top stories">
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

