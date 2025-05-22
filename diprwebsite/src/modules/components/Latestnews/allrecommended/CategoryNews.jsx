"use client"

import { useState, useEffect, useContext, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { FaFacebook, FaTwitter, FaChevronLeft, FaChevronRight } from "react-icons/fa"
import Cookies from "js-cookie"
import {
  Container,
  Title,
  TabsContainer,
  Tab,
  NewsGrid,
  NewsCard,
  NewsImage,
  NewsContent,
  NewsCategory,
  NewsTitle,
  NewsText,
  ShareIcons,
  ReadMore,
  NewsMeta,
  ReadTime,
  PaginationWrapper,
  ScrollButton,
  SkeletonNewsCard,
  SkeletonImage,
  SkeletonTitle,
  SkeletonText,
  SkeletonTab,
  SkeletonMeta, // Declare the variable here
} from "../allrecommended/CategoryNews.styles"
import { trackClick } from "../../../../services/newsApi/NewsApi"
import AddComments from "../../comments/AddComments"
import { CategoryApi, NewsApi } from "../../../../services/categoryapi/CategoryApi"
import { FontSizeContext } from "../../../../context/FontSizeProvider"
import { LanguageContext } from "../../../../context/LanguageContext"
import Pagination from "@mui/material/Pagination" // Import Pagination component

const CategoryNews = () => {
  const [activeTab, setActiveTab] = useState(null)
  const [categories, setCategories] = useState([])
  const [newsData, setNewsData] = useState([])
  const [loading, setLoading] = useState(true)
  const [categoriesLoading, setCategoriesLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6
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
        // Add a small delay to show the skeleton effect
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
          console.log("Received news data:", response.data)
          setNewsData(response.data)
          // Reset to first page when changing categories
          setCurrentPage(1)
        } else {
          console.warn("Empty news API response.")
          setNewsData([])
        }
      } catch (error) {
        console.error("Error fetching news:", error)
        setNewsData([])
      } finally {
        // Add a small delay to show the skeleton effect
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
  const currentItems = newsData.slice(indexOfFirstItem, indexOfLastItem)

  const handlePageChange = (event, value) => {
    setCurrentPage(value)
    // Scroll to top of news grid
    document.getElementById("news-grid")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleReadMore = async (newsId) => {
    const userId = Cookies.get("userId")
    try {
      // Track click only if user is logged in
      if (userId) {
        await trackClick({ newsId, userId })
        console.log("Click registered successfully!")
      }
      navigate(`/news/${newsId}`)
    } catch (error) {
      console.error("Error registering click:", error)
      // Still navigate even if tracking fails
      navigate(`/news/${newsId}`)
    }
  }

  const formatDate = (dateString) => {
    if (!dateString) return "Unknown Date"
    const date = new Date(dateString)
    return isNaN(date.getTime())
      ? "Invalid Date"
      : date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
  }

  const getLocalizedContent = (news, field) => {
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
  const renderSkeletonCards = () =>
    Array(itemsPerPage)
      .fill(0)
      .map((_, index) => (
        <SkeletonNewsCard key={`skeleton-card-${index}`}>
          <SkeletonImage />
          <NewsContent>
            <SkeletonTitle width="30%" />
            <SkeletonTitle width="90%" />
            <SkeletonMeta /> 
            <SkeletonText count={2} />
            <SkeletonText width="20%" />
          </NewsContent>
        </SkeletonNewsCard>
      ))

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

      <NewsGrid id="news-grid">
        {loading ? (
          renderSkeletonCards()
        ) : currentItems.length === 0 ? (
          <div style={{ textAlign: "center", padding: "20px", gridColumn: "1 / -1" }}>No articles found</div>
        ) : (
          currentItems.map((news) => (
            <NewsCard key={news._id}>
              <NewsImage
                src={news.newsImage || "https://via.placeholder.com/400x225"}
                alt={getLocalizedContent(news, "title")}
              />
              <NewsContent style={{ fontSize: `${fontSize}%` }}>
                <NewsCategory style={{ fontSize: `${fontSize}%` }}>{news.category?.name || "GENERAL"}</NewsCategory>
                <NewsTitle style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
                  {getLocalizedContent(news, "title")}
                </NewsTitle>
                <NewsMeta style={{ fontSize: `${fontSize}%` }}>
                  <span>{formatDate(news.createdTime)}</span>
                  <ReadTime>{news.readTime || "5 MIN READ"}</ReadTime>
                </NewsMeta>
                <NewsText
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    fontSize: `${fontSize}%`,
                  }}
                >
                  {getLocalizedContent(news, "description")}
                </NewsText>
                <div className="actions">
                 
                  <ReadMore style={{ fontSize: `${fontSize}%` }} onClick={() => handleReadMore(news._id)}>
                    Read more
                  </ReadMore>
                </div>
              </NewsContent>
            </NewsCard>
          ))
        )}
      </NewsGrid>

      {/* Pagination */}
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
