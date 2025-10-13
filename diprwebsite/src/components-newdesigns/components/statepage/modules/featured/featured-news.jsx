import {
  Section,
  Container,
  LeftImageWrap,
  MainContent,
  MetaRow,
  Tag,
  DateText,
  Sidebar,
  SideCard,
} from "./featured-news.styles"
import { LanguageContext } from "../../../../../context/LanguageContext"
import { getNewsByTypeState } from "../../../../../services/newsApi/NewsApi"
import { useState, useEffect, useContext } from "react"
import { CategoryApi } from "../../../../../services/categoryapi/CategoryApi"

// Define initial states
const initialFeatured = {
  image: "/placeholder.svg",
  category: "",
  date: "",
  title: "",
  excerpt: "",
}

const initialSideItems = [
  {
    image: "/placeholder.svg",
    category: "",
    date: "",
    title: "",
    excerpt: "",
  },
  {
    image: "/placeholder.svg",
    category: "",
    date: "",
    title: "",
    excerpt: "",
  },
]

export default function FeaturedNewsSection() {
  const [rawData, setRawData] = useState([])
  const [loading, setLoading] = useState(true)
  const [featuredNews, setFeaturedNews] = useState(initialFeatured)
  const [sideItems, setSideItems] = useState(initialSideItems)
  const [categories, setCategories] = useState([])
  const { language } = useContext(LanguageContext)


  useEffect(() => {
    const fetchCategories = async () => {
      const response = await CategoryApi()
      if (response?.success && Array.isArray(response.data)) {
        setCategories(response.data)
     
      }
    }
    fetchCategories()
  }, [])
  useEffect(() => {
    const fetchFeaturedNews = async () => {
      try {
        const response = await getNewsByTypeState()
        if (response?.success && Array.isArray(response.data)) {
          setRawData(response.data)
   
        } else {
         
        }
      } catch (error) {
        console.error("Error fetching news data:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchFeaturedNews()
  }, [language])

  useEffect(() => {
    if (rawData.length > 0) {
      const normalized = rawData.map((item) => {
        const langKey = language === "English" ? "English" : language === "Hindi" ? "hindi" : "kannada"
      
               const categoryId = item.category
   
     // Find the category name based on the category ID
     const category = categories.find((cat) => cat._id === categoryId)
     const categoryName = category ? (language === "English" ? category.name : language === "Hindi" ? category.hindi : category.kannada) : "Uncategorized"


        return {
          image: item.newsImage || "/placeholder.svg",
          category: categoryName || "",
          date: item[langKey]?.date || "",
          title: item[langKey]?.title || "",
          excerpt: item[langKey]?.description || "",
        }
      })

      const shuffled = [...normalized].sort(() => Math.random() - 0.5)
      const randomOne = shuffled[0] || initialFeatured
      const randomTwo = shuffled.slice(1, 3) || initialSideItems
      setFeaturedNews(randomOne)
      setSideItems(randomTwo)
    }
  }, [language, rawData, categories])

  return (
    <Section aria-label="Featured news">
      <Container>
        <LeftImageWrap>
          <img src={featuredNews.image || "/placeholder.svg"} alt="Lead story image" loading="eager" />
        </LeftImageWrap>
        <MainContent>
          <MetaRow>
            <Tag aria-label={`Category: ${featuredNews.category}`}>{featuredNews.category}</Tag>
            <DateText dateTime="2025-03-20">{featuredNews.date}</DateText>
          </MetaRow>
          <h2>{featuredNews.title.slice(0, 50) + "..."}</h2>
          <p>{featuredNews.excerpt.slice(0, 150) + "..."}</p>
        </MainContent>
        <Sidebar aria-label="More top stories" role="complementary">
          {sideItems.map((item, idx) => (
            <SideCard key={idx} role="article" aria-label={item.title}>
              <div className="thumb">
                <img src={item.image || "/placeholder.svg"} alt="Story thumbnail" loading="lazy" />
              </div>
              <div>
                <MetaRow>
                  <Tag aria-label={`Category: ${item.category}`}>{item.category}</Tag>
                  <DateText dateTime="2025-03-20">{item.date}</DateText>
                </MetaRow>
                <h3>{item.title.slice(0, 50) + "..."}</h3>
                <p>{item.excerpt.slice(0, 150) + "..."}</p>
              </div>
            </SideCard>
          ))}
        </Sidebar>
      </Container>
    </Section>
  )
}
