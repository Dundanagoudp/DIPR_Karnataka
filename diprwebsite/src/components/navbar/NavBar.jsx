import { useContext, useEffect, useState } from "react"
import {
  NavContainer,
  NewsWrapper,
  NewsTicker,
  NewsItem,
  LogoContainer,
  NavTitle,
  LoadingIndicator,
} from "./NavBar.styles"
import { NewsApi } from "../../services/categoryapi/CategoryApi"
import { FontSizeContext } from "../../context/FontSizeProvider"
import { LanguageContext } from "../../context/LanguageContext"

const NavBar = () => {
  const [headlines, setHeadlines] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const { fontSize } = useContext(FontSizeContext)
  const { language } = useContext(LanguageContext)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const data = await NewsApi()
        if (data?.data && Array.isArray(data.data)) {
          const localizedHeadlines = data.data.map((article) => getLocalizedContent(article, "title"))
          setHeadlines(localizedHeadlines)
        } else {
          setHeadlines([])
          setError("No news data available")
        }
      } catch (error) {
        console.error("Error fetching news:", error)
        setError("Failed to load news updates")
      } finally {
        setIsLoading(false)
      }
    }

    fetchNews()

    // Set up a refresh interval for the news (every 30 minutes)
    const refreshInterval = setInterval(fetchNews, 30 * 60 * 1000)

    return () => clearInterval(refreshInterval)
  }, [language])

  const getLocalizedContent = (article, field) => {
    if (language === "English") {
      return article[field] || "No content available"
    } else if (language === "Hindi") {
      return article.hindi?.[field] || article[field] || "No content available"
    } else if (language === "Kannada") {
      return article.kannada?.[field] || article[field] || "No content available"
    }
    return article[field] || "No content available"
  }

  return (
    <>
      <NavContainer style={{ fontSize: `${fontSize}%` }} role="complementary" aria-label="News Updates">
        <NewsWrapper>
          {isLoading ? (
            <LoadingIndicator>Loading latest updates...</LoadingIndicator>
          ) : error ? (
            <NewsItem style={{ animation: "none" }}>{error}</NewsItem>
          ) : (
            <NewsTicker
              style={{
                fontSize: `${fontSize}%`,
                animationPlayState: isPaused ? "paused" : "running",
              }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {headlines.length > 0 ? (
                <>
                  {headlines.map((headline, index) => (
                    <NewsItem style={{ fontSize: `${fontSize}%` }} key={index}>
                      {headline}
                    </NewsItem>
                  ))}
                  {/* Duplicate headlines for seamless looping */}
                  {headlines.map((headline, index) => (
                    <NewsItem style={{ fontSize: `${fontSize}%` }} key={`duplicate-${index}`}>
                      {headline}
                    </NewsItem>
                  ))}
                </>
              ) : (
                <NewsItem>No updates available at this time</NewsItem>
              )}
            </NewsTicker>
          )}
        </NewsWrapper>
      </NavContainer>
    </>
  )
}

export default NavBar
