import { useState, useEffect, useContext, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import Cookies from "js-cookie"
import {
  Container,
  Title,
  TabsContainer,
  Tab,
  MainContentWrapper,
  FeaturedNewsCard,
  FeaturedNewsImageOverlay,
  FeaturedNewsContent,
  FeaturedNewsTitle,
  FeaturedNewsMeta,
  FeaturedNewsDescription,
  FeaturedNewsBottomTags,
  FeaturedNewsTag,
  FeaturedNewsReadTime,
  RelatedArticlesWrapper,
  RelatedArticleCard,
  RelatedArticleImage,
  RelatedArticleContent,
  RelatedArticleTitle,
  RelatedArticleMeta,
  ScrollButton,
  PaginationWrapper,
  SkeletonFeaturedNewsCard,
  SkeletonFeaturedImage,
  SkeletonFeaturedTitle,
  SkeletonFeaturedMeta,
  SkeletonFeaturedDescription,
  SkeletonFeaturedBottomTags,
  SkeletonRelatedArticleCard,
  SkeletonRelatedImage,
  SkeletonRelatedTitle,
  SkeletonRelatedMeta,
  SkeletonTab,
} from "./CategoryNews.styles"
import { trackClick } from "../../../../services/newsApi/NewsApi"
import { CategoryApi, NewsApi } from "../../../../services/categoryapi/CategoryApi"
import { FontSizeContext } from "../../../../context/FontSizeProvider"
import { LanguageContext } from "../../../../context/LanguageContext"
import Pagination from "@mui/material/Pagination"

const CategoryNews = () => {
  const [activeTab, setActiveTab] = useState(null)
  const [categories, setCategories] = useState([])
  const [newsData, setNewsData] = useState([])
  const [loading, setLoading] = useState(true)
  const [categoriesLoading, setCategoriesLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5 // 1 featured + 4 related
  const tabsRef = useRef(null)
  const navigate = useNavigate()
  const { fontSize } = useContext(FontSizeContext)
  const { language } = useContext(LanguageContext)

  // Scroll tabs left or right
  const scrollTabs = (direction) => {
    if (tabsRef.current) {
      const scrollAmount = 200
      if (direction === "left") {
        tabsRef.current.scrollLeft -= scrollAmount
      } else {
        tabsRef.current.scrollLeft += scrollAmount
      }
    }
  }

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setCategoriesLoading(true)
        const response = await CategoryApi()
        if (response?.data && Array.isArray(response.data)) {
          setCategories(response.data)
        }
      } catch (error) {
        console.error("Error fetching categories:", error)
      } finally {
        setTimeout(() => {
          setCategoriesLoading(false)
        }, 800)
      }
    }
    fetchCategories()
  }, [])

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true)
        const response = await NewsApi(activeTab)
        if (response?.data && Array.isArray(response.data)) {
          setNewsData(response.data)
          setCurrentPage(1) // Reset to first page when changing categories
        } else {
          console.warn("Empty news API response.")
          setNewsData([])
        }
      } catch (error) {
        console.error("Error fetching news:", error)
        setNewsData([])
      } finally {
        setTimeout(() => {
          setLoading(false)
        }, 1000)
      }
    }
    fetchNews()
  }, [activeTab])

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentNewsSlice = newsData.slice(indexOfFirstItem, indexOfLastItem)

  const featuredNews = currentNewsSlice[0]
  const relatedNews = currentNewsSlice.slice(1)

  const handlePageChange = (event, value) => {
    setCurrentPage(value)
    document.getElementById("news-grid")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleReadMore = async (newsId) => {
    const userId = Cookies.get("userId")
    try {
      if (userId) {
        await trackClick({ newsId, userId })
        console.log("Click registered successfully!")
      }
      navigate(`/news/${newsId}`)
    } catch (error) {
      console.error("Error registering click:", error)
      navigate(`/news/${newsId}`)
    }
  }

  const getTimeAgo = (dateString) => {
    if (!dateString) return "Unknown time"
    const date = new Date(dateString)
    const now = new Date()
    const diffInSeconds = Math.floor((now - date) / 1000)
    const diffInMinutes = Math.floor(diffInSeconds / 60)
    const diffInHours = Math.floor(diffInMinutes / 60)
    const diffInDays = Math.floor(diffInHours / 24)

    if (diffInMinutes < 1) return "Just now"
    if (diffInMinutes < 60) return `${diffInMinutes} min${diffInMinutes !== 1 ? "s" : ""} ago`
    if (diffInHours < 24) return `${diffInHours} hour${diffInHours !== 1 ? "s" : ""} ago`
    if (diffInDays === 1) return "1 day ago"
    if (diffInDays < 7) return `${diffInDays} days ago`
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const getLocalizedContent = (news, field) => {
    if (!news) return "Loading..."
    if (language === "English") {
      return news[field] || "No content available"
    } else if (language === "Hindi") {
      return news.hindi?.[field] || news[field] || "No content available"
    } else if (language === "Kannada") {
      return news.kannada?.[field] || news[field] || "No content available"
    }
    return news[field] || "No content available"
  }

  const getLocalizedCategoryName = (category) => {
    if (!category) return "General"
    if (language === "English") {
      return category.name || "General"
    } else if (language === "Hindi") {
      return category.hindi || category.name || "General"
    } else if (language === "Kannada") {
      return category.kannada || category.name || "General"
    }
    return category.name || "General"
  }

  // Render skeleton loaders for tabs
  const renderSkeletonTabs = () =>
    Array(5)
      .fill(0)
      .map((_, index) => <SkeletonTab key={`skeleton-tab-${index}`} />)

  // Render skeleton loaders for news cards
  const renderSkeletonCards = () => (
    <>
      <SkeletonFeaturedNewsCard>
        <SkeletonFeaturedImage />
        <FeaturedNewsContent>
          <SkeletonFeaturedTitle width="30%" />
          <SkeletonFeaturedTitle width="90%" />
          <SkeletonFeaturedMeta />
          <SkeletonFeaturedDescription count={3} />
          <SkeletonFeaturedBottomTags />
        </FeaturedNewsContent>
      </SkeletonFeaturedNewsCard>
      <RelatedArticlesWrapper>
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <SkeletonRelatedArticleCard key={`skeleton-related-${index}`}>
              <SkeletonRelatedImage />
              <RelatedArticleContent>
                <SkeletonRelatedTitle />
                <SkeletonRelatedMeta />
              </RelatedArticleContent>
            </SkeletonRelatedArticleCard>
          ))}
      </RelatedArticlesWrapper>
    </>
  )

  return (
    <Container style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
      <Title style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
        {activeTab ? categories.find((c) => c._id === activeTab)?.name || "Category News" : "Latest All News"}
      </Title>
      <div className="tabs-scroll-container">
        <ScrollButton direction="left" onClick={() => scrollTabs("left")}>
          <FaChevronLeft />
        </ScrollButton>
        <TabsContainer
          ref={tabsRef}
          style={{
            fontSize: `${fontSize}%`,
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
          className="hide-scrollbar"
        >
          {categoriesLoading ? (
            renderSkeletonTabs()
          ) : (
            <>
              <Tab
                key="all"
                active={activeTab === null}
                onClick={() => setActiveTab(null)}
                style={{ fontSize: `${fontSize}%` }}
              >
                All
              </Tab>
              {categories.map((category) => (
                <Tab
                  key={category._id}
                  active={activeTab === category._id}
                  onClick={() => setActiveTab(category._id)}
                  style={{ fontSize: `${fontSize}%` }}
                >
                  {getLocalizedCategoryName(category)}
                </Tab>
              ))}
            </>
          )}
        </TabsContainer>
        <ScrollButton direction="right" onClick={() => scrollTabs("right")}>
          <FaChevronRight />
        </ScrollButton>
      </div>
      <MainContentWrapper id="news-grid">
        {loading ? (
          renderSkeletonCards()
        ) : newsData.length === 0 ? (
          <div style={{ textAlign: "center", padding: "20px", gridColumn: "1 / -1" }}>No articles found</div>
        ) : (
          <>
            {featuredNews && (
              <FeaturedNewsCard
                onClick={() => handleReadMore(featuredNews._id)}
                style={{
                  backgroundImage: `url(${featuredNews.newsImage || "/placeholder.svg?height=400&width=800"})`,
                }}
              >
                <FeaturedNewsImageOverlay />
                <FeaturedNewsContent>
                  <FeaturedNewsTitle style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
                    {getLocalizedContent(featuredNews, "title")}
                  </FeaturedNewsTitle>
                  <FeaturedNewsMeta style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
                    <img
                      src="/placeholder.svg?height=16&width=16"
                      alt="Buzznies"
                      style={{ width: "16px", height: "16px", marginRight: "4px" }}
                    />
                    <span>Buzznies</span> • <span>{getTimeAgo(featuredNews.createdTime)}</span>
                  </FeaturedNewsMeta>
                  <FeaturedNewsDescription style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
                    {getLocalizedContent(featuredNews, "description")}
                  </FeaturedNewsDescription>
                  <FeaturedNewsBottomTags>
                    <FeaturedNewsTag style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
                      {getLocalizedCategoryName(featuredNews.category)}
                    </FeaturedNewsTag>
                    <FeaturedNewsReadTime style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
                      {featuredNews.readTime || "10 mins read"}
                    </FeaturedNewsReadTime>
                  </FeaturedNewsBottomTags>
                </FeaturedNewsContent>
              </FeaturedNewsCard>
            )}

            <RelatedArticlesWrapper>
              {relatedNews.length > 0 ? (
                relatedNews.map((news) => (
                  <RelatedArticleCard key={news._id} onClick={() => handleReadMore(news._id)}>
                    <RelatedArticleImage
                      src={news.newsImage || "/placeholder.svg?height=80&width=80&query=related news thumbnail"}
                      alt={getLocalizedContent(news, "title")}
                    />
                    <RelatedArticleContent>
                      <RelatedArticleTitle style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
                        {getLocalizedContent(news, "title")}
                      </RelatedArticleTitle>
                      <RelatedArticleMeta style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
                        <span>{getTimeAgo(news.createdTime)}</span> • <span>{news.readTime || "10 mins read"}</span>
                      </RelatedArticleMeta>
                    </RelatedArticleContent>
                  </RelatedArticleCard>
                ))
              ) : (
                <div style={{ textAlign: "center", padding: "20px", color: "#666" }}>No related articles available</div>
              )}
            </RelatedArticlesWrapper>
          </>
        )}
      </MainContentWrapper>

      {!loading && newsData.length > 0 && (
        <PaginationWrapper>
          <Pagination
            count={Math.ceil(newsData.length / itemsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            size="large"
            variant="outlined"
            shape="rounded"
          />
        </PaginationWrapper>
      )}
    </Container>
  )
}

export default CategoryNews
