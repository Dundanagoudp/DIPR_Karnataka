import { useState, useEffect, useContext, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { FaFacebook, FaTwitter, FaLink, FaChevronLeft, FaChevronRight } from "react-icons/fa"
import Cookies from "js-cookie"
import {
  Container,
  TabsContainer,
  Tab,
  NewsCard,
  NewsImage,
  NewsContent,
  NewsHeader,
  NewsTitle,
  NewsText,
  ShareIcons,
  ReadMore,
  TrendingTag,
  NewsMeta,
  Title,
  PaginationWrapper,
  SkeletonContainer,
  SkeletonImage,
  SkeletonText,
  SkeletonTitle,
  SkeletonTab,
  ScrollButton,
} from "../allnewssection2/AllNewsData.styles"
import { CategoryApi, NewsApi } from "../../../services/categoryapi/CategoryApi"
import { trackClick } from "../../../services/newsApi/NewsApi"
import AddComments from "../comments/AddComments"
import { FontSizeContext } from "../../../context/FontSizeProvider"
import { LanguageContext } from "../../../context/LanguageContext"
import { Pagination } from "@mui/material"

const AllNewsData = () => {
  const [activeTab, setActiveTab] = useState(null)
  const [newsData, setNewsData] = useState([])
  const [categories, setCategories] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [categoriesLoading, setCategoriesLoading] = useState(true)
  const tabsRef = useRef(null)
  const itemsPerPage = 3
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
        setCategoriesLoading(false)
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
        } else {
          setNewsData([])
        }
      } catch (error) {
        console.error("Error fetching news:", error)
        setNewsData([])
      } finally {
        setLoading(false)
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
  }

  const handleReadMore = async (newsId) => {
    const userId = Cookies.get("userId")
    if (!userId) {
      Cookies.set("redirectUrl", window.location.pathname)
      navigate("/login")
      return
    }
    try {
      await trackClick({ newsId, userId })
      navigate(`/news/${newsId}`)
    } catch (error) {
      console.error("Error registering click:", error)
      alert("Error tracking click. Please try again.")
    }
  }

  const handleAddComment = (newsId) => {
    const userId = Cookies.get("userId")
    if (!userId) {
      Cookies.set("redirectUrl", window.location.pathname)
      navigate("/login")
      return
    }
  }

  const shareOnFacebook = (url) => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank")
  }

  const shareOnTwitter = (url) => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`, "_blank")
  }

  const copyLink = (url) => {
    navigator.clipboard.writeText(url)
    alert("Link copied to clipboard!")
  }

  const formatDate = (dateString) => {
    if (!dateString) return "Unknown Date"
    const date = new Date(dateString)
    return isNaN(date.getTime())
      ? "Invalid Date"
      : date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })
  }

  const getLocalizedContent = (item, field) => {
    if (!item) return "Loading..."
    if (language === "English") return item[field] || "No content available"
    if (language === "Hindi") return item.hindi?.[field] || item[field] || "No content available"
    if (language === "Kannada") return item.kannada?.[field] || item[field] || "No content available"
    return item[field] || "No content available"
  }

  const getLocalizedCategoryName = (category) => {
    if (!category) return "Loading..."
    if (language === "English") return category.name || "No content available"
    if (language === "Hindi") return category.hindi || category.name || "No content available"
    if (language === "Kannada") return category.kannada || category.name || "No content available"
    return category.name || "No content available"
  }

  // Skeleton loader for news cards
  const renderSkeletonCards = () => {
    return Array(itemsPerPage)
      .fill(0)
      .map((_, index) => (
        <NewsCard key={`skeleton-${index}`} style={{ fontSize: `${fontSize}%` }}>
          <SkeletonContainer>
            <SkeletonImage />
            <NewsContent style={{ fontSize: `${fontSize}%` }}>
              <SkeletonText width="40%" />
              <SkeletonTitle width="80%" />
              <SkeletonText width="60%" />
              <SkeletonText width="30%" />
              <SkeletonText width="50%" />
            </NewsContent>
          </SkeletonContainer>
        </NewsCard>
      ))
  }

  // Skeleton loader for tabs
  const renderSkeletonTabs = () => {
    return Array(5)
      .fill(0)
      .map((_, index) => <SkeletonTab key={`skeleton-tab-${index}`} style={{ fontSize: `${fontSize}%` }} />)
  }

  return (
    <>
      <Container>
        <Title style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>All News</Title>

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

        {loading
          ? renderSkeletonCards()
          : currentItems.map((news) => (
              <NewsCard style={{ fontSize: `${fontSize}%` }} key={news._id}>
                <NewsImage
                  src={news.newsImage || "https://via.placeholder.com/300"}
                  alt={getLocalizedContent(news, "title")}
                />
                <NewsContent style={{ fontSize: `${fontSize}%` }}>
                  <NewsHeader style={{ fontSize: `${fontSize}%` }}>
                    {news.author || "Unknown Author"} • {getLocalizedContent(news.category, "name") || "General"}
                  </NewsHeader>
                  <NewsTitle style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
                    {getLocalizedContent(news, "title")}
                  </NewsTitle>
                  <ShareIcons>
                    <FaFacebook onClick={() => shareOnFacebook(news.url)} style={{ cursor: "pointer" }} />
                    <FaTwitter onClick={() => shareOnTwitter(news.url)} style={{ cursor: "pointer" }} />
                    {/* <FaLink onClick={() => copyLink(news.url)} style={{ cursor: "pointer" }} /> */}
                  </ShareIcons>
                  <NewsText
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 1,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      fontSize: `${fontSize}%`,
                    }}
                  >
                    {getLocalizedContent(news, "description")}
                  </NewsText>
                  <ReadMore style={{ fontSize: `${fontSize}%` }} onClick={() => handleReadMore(news._id)}>
                    Read more
                  </ReadMore>
                  <AddComments style={{ fontSize: `${fontSize}%` }} newsId={news._id} onAddComment={handleAddComment} />
                  <NewsMeta style={{ fontSize: `${fontSize}%` }}>
                    {news.isTrending && <TrendingTag>Trending</TrendingTag>}
                    <span style={{ fontSize: `${fontSize}%` }}>
                      {formatDate(news.createdTime)} • {news.readTime || "N/A"}
                    </span>
                  </NewsMeta>
                </NewsContent>
              </NewsCard>
            ))}
      </Container>

      {!loading && newsData.length > 0 && (
        <PaginationWrapper>
          <Pagination
            count={Math.ceil(newsData.length / itemsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
          />
        </PaginationWrapper>
      )}
    </>
  )
}

export default AllNewsData