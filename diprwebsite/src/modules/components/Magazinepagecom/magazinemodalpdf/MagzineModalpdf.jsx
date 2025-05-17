import { useState, useEffect, useContext } from "react"
import { FaAngleDoubleRight } from "react-icons/fa"
import { CiBookmark } from "react-icons/ci"
import {
  Container,
  Content,
  Title,
  Header,
  MagazineThumbnail,
  MagazineCard,
  MagazineDetails,
  NewsMeta,
  MagazineMetacat,
  BookmarkIconWrapper,
  ReadMoreButton,
  ReadMoreIcon,
  TabsContainer,
  Tab,
  PaginationWrapper,
  SkeletonCard,
  SkeletonThumbnail,
  SkeletonTitle,
  SkeletonMeta,
  SkeletonButton,
} from "../magazinemodalpdf/Modalpdf.styles"
import { getMagazines, MarchMagazines } from "../../../../services/magazineApi/magazineService"
import { FontSizeContext } from "../../../../context/FontSizeProvider"
import { LanguageContext } from "../../../../context/LanguageContext"
import { Pagination } from "@mui/material"
import PDFModal from "../magazinemodalpdf/ModalPdf"

const MagazinePdf2 = () => {
  const [activeTab, setActiveTab] = useState("Topics")
  const [magazinesData, setMagazinesData] = useState([])
  const [marchMagazinesData, setMarchMagazinesData] = useState([])
  const [bookmarkedMagazines, setBookmarkedMagazines] = useState(new Set())
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(true)

  // PDF Modal state
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedPdf, setSelectedPdf] = useState("")
  const [selectedTitle, setSelectedTitle] = useState("")

  const itemsPerPageDesktop = 8
  const itemsPerPageMobile = 6
  const { fontSize } = useContext(FontSizeContext)
  const { language } = useContext(LanguageContext)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    const fetchMagazines = async () => {
      setLoading(true)
      try {
        const result = activeTab === "Topics" ? await getMagazines() : await MarchMagazines()
        const data = result.success && Array.isArray(result.data) ? result.data : []
        if (activeTab === "Topics") {
          setMagazinesData(data)
        } else {
          setMarchMagazinesData(data)
        }
      } catch (error) {
        if (activeTab === "Topics") {
          setMagazinesData([])
        } else {
          setMarchMagazinesData([])
        }
      } finally {
        setLoading(false)
      }
    }

    fetchMagazines()
    setCurrentPage(1)
  }, [activeTab])

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

  const handleBookmarkClick = (magazineId) => {
    const newBookmarkedMagazines = new Set(bookmarkedMagazines)
    newBookmarkedMagazines.has(magazineId)
      ? newBookmarkedMagazines.delete(magazineId)
      : newBookmarkedMagazines.add(magazineId)
    setBookmarkedMagazines(newBookmarkedMagazines)
  }

  // Updated to open modal instead of new window
  const handleReadMoreClick = (pdfUrl, title) => {
    setSelectedPdf(pdfUrl)
    setSelectedTitle(title)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const getLocalizedContent = (item, field) => {
    if (language === "English") return item[field] || "No content available"
    if (language === "Hindi") return item.hindi?.[field] || item[field] || "No content available"
    if (language === "Kannada") return item.kannada?.[field] || item[field] || "No content available"
    return item[field] || "No content available"
  }

  // Pagination logic
  const itemsPerPage = isMobile ? itemsPerPageMobile : itemsPerPageDesktop
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentMagazines =
    activeTab === "Topics"
      ? magazinesData.slice(indexOfFirstItem, indexOfLastItem)
      : marchMagazinesData.slice(indexOfFirstItem, indexOfLastItem)

  const handlePageChange = (event, value) => {
    setCurrentPage(value)
  }

  const renderSkeleton = () => {
    const skeletonCount = isMobile ? itemsPerPageMobile : itemsPerPageDesktop
    return Array.from({ length: skeletonCount }).map((_, index) => (
      <SkeletonCard key={index}>
        <SkeletonThumbnail />
        <MagazineDetails>
          <SkeletonTitle />
          <SkeletonMeta />
          <SkeletonMeta style={{ width: "60%" }} />
          <SkeletonButton />
        </MagazineDetails>
      </SkeletonCard>
    ))
  }

  const renderMagazines = (magazines) => {
    return magazines.map((magazine) => (
      <MagazineCard key={magazine._id}>
        <MagazineThumbnail src={magazine.magazineThumbnail} alt={getLocalizedContent(magazine, "title")} />
        <MagazineDetails>
          <Title style={{ fontSize: `${fontSize}%` }}>{getLocalizedContent(magazine, "title")}</Title>
          <div
            style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: `${fontSize}%` }}
          >
            <NewsMeta style={{ fontSize: `${fontSize}%` }}>
              {magazine.isTrending && <span>Trending</span>}
              <span>
                {formatDate(magazine.createdTime)} • {magazine.readTime || "N/A"}
              </span>
            </NewsMeta>
            <CiBookmark />
          </div>
          <MagazineMetacat>
            <BookmarkIconWrapper
              onClick={() => handleBookmarkClick(magazine._id)}
              isBookmarked={bookmarkedMagazines.has(magazine._id)}
            />
          </MagazineMetacat>
          <ReadMoreButton
            style={{ fontSize: `${fontSize}%` }}
            onClick={() => handleReadMoreClick(magazine.magazinePdf, getLocalizedContent(magazine, "title"))}
          >
            READ PDF{" "}
            <ReadMoreIcon>
              <FaAngleDoubleRight />
            </ReadMoreIcon>
          </ReadMoreButton>
        </MagazineDetails>
      </MagazineCard>
    ))
  }

  return (
    <Container style={{ fontSize: `${fontSize}%` }}>
      <Header style={{ fontSize: `${fontSize}%` }}>Magazine</Header>
      <TabsContainer>
        <Tab active={activeTab === "Topics"} onClick={() => setActiveTab("Topics")}>
          Varthajanapada
        </Tab>
        <Tab active={activeTab === "March of Karnataka"} onClick={() => setActiveTab("March of Karnataka")}>
          March of Karnataka
        </Tab>
      </TabsContainer>
      <Content style={{ fontSize: `${fontSize}%` }}>
        {loading ? renderSkeleton() : renderMagazines(currentMagazines)}
      </Content>

      {!loading && (
        <PaginationWrapper>
          <Pagination
            count={Math.ceil(
              activeTab === "Topics" ? magazinesData.length / itemsPerPage : marchMagazinesData.length / itemsPerPage,
            )}
            page={currentPage}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
          />
        </PaginationWrapper>
      )}

      {/* PDF Modal */}
      <PDFModal isOpen={modalOpen} onClose={closeModal} pdfUrl={selectedPdf} title={selectedTitle} />
    </Container>
  )
}

export default MagazinePdf2
