import { useContext, useState, useEffect } from "react"
import { MdOutlineFileDownload } from "react-icons/md"
import { useParams, useLocation } from "react-router-dom"
import { getMagazineById, getMagazine2ById } from "../../../../services/magazineApi/magazineService"
import {
  MagazineViewContainer,
  Header,
  Title,
  DownloadButton,
  ContentWrapper,
  MainPdfViewer,
  RecommendedSection,
  LoadingSpinner,
} from "./Magazineview.styles"
import { FontSizeContext } from "../../../../context/FontSizeProvider"
import MagzineRecommed from "../recommendemagzine/MagzineRecommed"

const Magazineview = () => {
  const { id } = useParams()
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const source = params.get("source")
  const { fontSize } = useContext(FontSizeContext)
  const [loading, setLoading] = useState(true)
  const [pdfUrl, setPdfUrl] = useState("")
  const [title, setTitle] = useState("Magazine Title")

  useEffect(() => {
    if (!id) return

    setLoading(true)
    const fetchMagazine = source === "March of Karnataka" ? getMagazine2ById : getMagazineById
    fetchMagazine(id)
      .then((response) => {
        if (response && response.success && response.data) {
          setPdfUrl(response.data.magazinePdf || "")
          setTitle(response.data.title || "Magazine Title")
        } else {
          setPdfUrl("")
          setTitle("Magazine Not Found")
        }
      })
      .catch((error) => {
        console.error("Error fetching magazine:", error)
        setPdfUrl("")
        setTitle("Error Loading Magazine")
      })
      .finally(() => {
        setLoading(false)
      })
  }, [id, source])

  const handleDownload = () => {
    if (pdfUrl) {
      const a = document.createElement("a")
      a.href = pdfUrl
      a.download = `${title.replace(/\s/g, "_")}.pdf`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    } else {
      alert("No PDF URL available for download.")
    }
  }

  return (
    <MagazineViewContainer style={{ fontSize: `${fontSize}%` }}>
      <Header>
        <Title>{title}</Title>
        <DownloadButton onClick={handleDownload} disabled={!pdfUrl}>
          <MdOutlineFileDownload size={20} /> Download
        </DownloadButton>
      </Header>

      <ContentWrapper>
        <MainPdfViewer>
          {loading && <LoadingSpinner />}
          {pdfUrl ? (
            <iframe
              src={pdfUrl}
              width="100%"
              height="100%"
              style={{ border: "none", display: loading ? "none" : "block" }}
              title={title}
              onLoad={() => setLoading(false)} // Hide spinner once iframe content loads
              onError={() => {
                setLoading(false)
                alert("Failed to load PDF. Please check the URL or try again.")
              }}
            >
              Your browser does not support PDFs. Please download the PDF to view it.
            </iframe>
          ) : (
            <div style={{ textAlign: "center", padding: "20px", color: "#666" }}>
              {loading ? "Loading PDF..." : "No PDF available to display."}
            </div>
          )}
        </MainPdfViewer>
      </ContentWrapper>

      <RecommendedSection>
        <MagzineRecommed />
      </RecommendedSection>
    </MagazineViewContainer>
  )
}

export default Magazineview
