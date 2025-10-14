import SidebarCard from "./sidebar-card"
import { Aside } from "./news-sidebar.styles"
import { useContext, useState, useEffect } from "react"
import { LanguageContext } from "../../../../../context/LanguageContext"
import { getNewsByTypeDistrict } from "../../../../../services/newsApi/NewsApi"

export default function NewsSidebar({
  items = [
    {
      title: "District Tourist Places and Attractions",
      excerpt: "Norem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "June 19, 2025 06:00pm",
      author: "james",
      imageSrc: "/state/sidebar.jpg",
    },
    {
      title: "District Cultural Heritage Sites",
      excerpt: "Norem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "June 19, 2025 06:00pm",
      author: "james",
      imageSrc: "/state/sidebar2.jpg",
    },
  ],
}) {
  const { language } = useContext(LanguageContext)
  const [districtNews, setDistrictNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [rawData, setRawData] = useState([])

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true)
      const response = await getNewsByTypeDistrict()
      console.log(response)
      if (response?.success && Array.isArray(response.data)) {
        setRawData(response.data)
      } else {
        setRawData([])
      }
      setLoading(false)
    }
    fetchNews()
  }, [language])
  
    useEffect(() => {
      if (rawData.length > 0) {
        const normalized = rawData.map((item) => {
          const langKey = language === "English" ? "English" : language === "Hindi" ? "hindi" : "kannada"
          return {
            title: item[langKey]?.title.slice(0, 50) + "..." ?? "",
            excerpt: item[langKey]?.description.slice(0, 150) + "..." ?? "",
            date: item.date,
            author: item.author,
            imageSrc: item.newsImage ?? "/placeholder.svg", // Fixed the double ?? operator issue
          }
        })
  
        const shuffled = [...normalized].sort(() => Math.random() - 0.5)
        const randomTwo = shuffled.slice(0, 2)
        setDistrictNews(randomTwo)
      }
    }, [language, rawData])

  return (
    <Aside role="complementary" aria-labelledby="sidebar-heading">
      <h3 
        id="sidebar-heading" 
        style={{ position: 'absolute', left: '-9999px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }}
      >
        Recent District News
      </h3>
      {districtNews.map((item, index) => (
        <SidebarCard key={index} index={index + 1} {...item} />
      ))}
    </Aside>
  )
}

