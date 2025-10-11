import React, { useContext, useState } from "react"
import { MdOutlineFileDownload } from "react-icons/md"
import { IoChevronDownOutline } from "react-icons/io5"
import {
  MagazineViewContainer,
  SectionHeader,
  TitleWrapper,
  PageTitle,
  Breadcrumb,
  HeaderSection,
  MainDownloadButton,
  YearFilterWrapper,
  YearFilterIcon,
  YearFilter,
  ContentWrapper,
  MainPdfViewer,
  RecommendedSection,
  RecommendedTitle,
  MagazineGrid,
  MagazineCard,
  MagazineImageWrapper,
  MagazineImage,
  DownloadButton
} from "./MagzineIdview.styles"
import { Helmet } from "react-helmet"
import { ImFolderDownload } from "react-icons/im"
import theme from "../../../../theme/Theme"

// Import magazine images for recommended section
import magazine1 from '/public/magzines/magzines.jpg'
import magazine2 from '/public/magzines/m2.jpg'
import magazine3 from '/public/magzines/m3.jpg'
import { FontSizeContext } from "../../../../context/FontSizeProvider"

const recommendedMagazines = [
  { id: 1, image: magazine1, title: 'Karnataka Budget 2024-25', edition: '2024 · Feb-March budget - 25' },
  { id: 2, image: magazine2, title: 'Incredible Karnataka', edition: 'March 2025 Edition' },
  { id: 3, image: magazine3, title: 'ಸ್ವಯಂಕಿಂಗ್ ಪ್ರಸಂಗ', edition: 'March 2025 Edition' },
  { id: 4, image: magazine1, title: 'Karnataka Budget 2024-25', edition: '2024 · Feb-March budget - 25' },
]

export default function MagzineIdview() {
  const { fontSize } = useContext(FontSizeContext)
  const [pdfUrl] = useState("https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf") // Static PDF URL for demo
  const [title] = useState("Karnataka budget 2024 - 25")
  const [selectedYear, setSelectedYear] = useState('2024')

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

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value)
    // Add filter logic here if needed
  }

  const handleRecommendedDownload = (magazineTitle) => {
    console.log(`Downloading: ${magazineTitle}`)
    alert(`Downloading: ${magazineTitle}`)
  }

  return (
    <MagazineViewContainer style={{ fontSize: `${fontSize}%` }} role="region" aria-label="Magazine PDF viewer">
      <Helmet>
        <title>{title} | Karnataka Varthe</title>
        <meta
          name="description"
          content={`Read the latest edition: ${title}`}
        />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content={`Digital magazine: ${title}`}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="/default-magazine-cover.jpg"
        />
        <meta property="og:url" content={window.location.href} />
      </Helmet>
      
      <SectionHeader>
        <TitleWrapper>
          <PageTitle>Latest Vartha Janapada Magazines</PageTitle>
          <Breadcrumb>2000 / {title}</Breadcrumb>
        </TitleWrapper>
        <YearFilterWrapper>
          <YearFilter value={selectedYear} onChange={handleYearChange}>
            <option value="">Select Year</option>
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </YearFilter>
          <YearFilterIcon>
            <IoChevronDownOutline />
          </YearFilterIcon>
        </YearFilterWrapper>
      </SectionHeader>

      <HeaderSection>
        <h1 style={{ margin: 0, fontSize: '20px', fontWeight: 600, color: '#000', fontFamily: theme.fonts.body }}>{title}</h1>
        <MainDownloadButton onClick={handleDownload}>
          <MdOutlineFileDownload size={18} />
          Download
        </MainDownloadButton>
      </HeaderSection>

      <ContentWrapper>
        <MainPdfViewer>
          {pdfUrl ? (
            <iframe
              src={pdfUrl}
              width="100%"
              height="100%"
              style={{ border: "none" }}
              title={title}
            >
              Your browser does not support PDFs. Please download the PDF to view it.
            </iframe>
          ) : (
            <div style={{ textAlign: "center", padding: "20px", color: "#666" }} role="status" aria-live="polite">
              No PDF available to display.
            </div>
          )}
        </MainPdfViewer>
      </ContentWrapper>

      <RecommendedSection>
        <RecommendedTitle>Recommended Magazine</RecommendedTitle>
        <MagazineGrid>
          {recommendedMagazines.map((magazine) => (
            <MagazineCard key={magazine.id}>
              <MagazineImageWrapper>
                <MagazineImage src={magazine.image} alt={magazine.title} />
              </MagazineImageWrapper>
              
              <DownloadButton onClick={() => handleRecommendedDownload(magazine.title)}>
                <ImFolderDownload />
                Download
              </DownloadButton>
            </MagazineCard>
          ))}
        </MagazineGrid>
      </RecommendedSection>
    </MagazineViewContainer>
  )
}
