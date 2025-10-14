
import React, { useContext, useEffect, useState } from "react"
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
import { getNews } from "../../../../../services/newsApi/NewsApi"
import { LanguageContext } from "../../../../../context/LanguageContext"

export default function MarchNewsHero() {
  const [index, setIndex] = React.useState(0)
  const { language } = useContext(LanguageContext)

  const [marchNews, setMarchNews] = useState([])
  const [rawData, setRawData] = useState([])
  const [loading, setLoading] = useState(true)

  // Fetch March of Karnataka news (magazineType: "magazine2")
  useEffect(() => {
    let mounted = true
    const fetchMarchNews = async () => {
      try {
        setLoading(true)
        const response = await getNews()
        console.log("March of Karnataka news:", response.data)
        if (response?.success && Array.isArray(response.data)) {
          // Filter by magazineType: "magazine2" (March of Karnataka)
          const filteredData = response.data.filter(item => 
            item.magazineType === "magazine2"
          )
          console.log("Filtered March of Karnataka news:", filteredData)
          if (mounted) {
            setRawData(filteredData)
            setIndex(0)
          }
        } else {
          if (mounted) setRawData([])
        }
      } catch (err) {
        console.error("Error fetching March of Karnataka news:", err)
        if (mounted) setRawData([])
      } finally {
        if (mounted) setLoading(false)
      }
    }
    fetchMarchNews()
    return () => {
      mounted = false
    }
  }, [language])

  // Process data based on language
  useEffect(() => {
    if (rawData.length > 0) {
      const langKey =
        language === "English"
          ? "English"
          : language === "Hindi"
          ? "hindi"
          : "kannada"
      const normalized = rawData.map((it, i) => ({
        id: it._id ?? it.id ?? `api-${i}`,
        title: it[langKey]?.title?.slice(0, 80) + "..." ?? "",
        excerpt: it[langKey]?.description?.slice(0, 150) + "..." ?? "",
        image: it.newsImage ?? "/placeholder.svg",
      }))
      setMarchNews(normalized)
    }
  }, [language, rawData])

  const len = marchNews.length

  // Keep index in-range if items length changes
  useEffect(() => {
    if (len === 0) {
      setIndex(0)
      return
    }
    setIndex((i) => (i >= len ? 0 : i))
  }, [len])

  const go = (next) => {
    if (len === 0) return
    setIndex((i) => (i + (next ? 1 : -1) + len) % len)
  }

  const current = marchNews[index] || marchNews[0] || {}

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
              {marchNews.slice(0, 3).map((_, i) => (
                <Dot
                  key={i}
                  onClick={() => setIndex(i)}
                  $active={i === index}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === index ? "true" : undefined}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setIndex(i);
                    }
                  }}
                />
              ))}
            </Dots>

            <Arrows>
              <ArrowBtn aria-label="Previous" onClick={() => go(false)} onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  go(false);
                }
              }}>
                <IoChevronBack size={25} aria-hidden="true" />
              </ArrowBtn>
              <ArrowBtn aria-label="Next" onClick={() => go(true)} onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  go(true);
                }
              }}>
                <IoChevronForward size={25} aria-hidden="true" />
              </ArrowBtn>
            </Arrows>
          </BottomBar>
        </OverlayCard>
        <RightDivider />

    </HeroWrap>
  )
}
