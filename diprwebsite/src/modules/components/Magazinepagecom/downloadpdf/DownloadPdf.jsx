import React, { useEffect, useState } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { 
  PdfCarouselContainer, 
  PdfCarouselItem, 
  PdfOverlay, 
  PdfContentWrapper, 
  PdfTrendingCategory, 
  PdfNewsInfo, 
  PdfNewsTitle, 
  PdfArrowIcon, 
  PdfDotContainer, 
  PdfDot,
  PdfDownloadButton
} from "../downloadpdf/DownloadPdf.styles"; 
import { BannerApi } from "../../../../services/categoryapi/CategoryApi";

const fallbackNews = [
  {
    id: "1",
    category: "Trending",
    date: "02/05/2025",
    readTime: "5 min read",
    title: "Breaking: AI is Changing the World",
    image: "https://via.placeholder.com/800x400", 
    link: "/post/1",
  },
  {
    id: "2",
    category: "Technology",
    date: "02/04/2025",
    readTime: "4 min read",
    title: "New Tech Trends in 2025",
    image: "https://via.placeholder.com/800x400",
    link: "/post/2",
  },
];

const MagazineDownloadPdf = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [trendingNews, setTrendingNews] = useState(fallbackNews); // Start with fallback data

  // Fetch API Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await BannerApi();
        console.log("Fetched Banner Data:", data);
        
        const formattedData = data.map((item) => ({
          id: item._id,
          category: "Trending",  
          date: new Date(item.createdTime).toLocaleDateString(), 
          readTime: "5 min read", 
          title: item.title,
          image: item.bannerImage,
          link: `/post/${item._id}` 
        }));

        setTrendingNews(formattedData.length ? formattedData : fallbackNews);
      } catch (error) {
        console.error("Error fetching banner data:", error);
        setTrendingNews(fallbackNews); // Use fallback data on error
      }
    };

    fetchData();
  }, []);

  // Auto-Slide Effect
  useEffect(() => {
    if (trendingNews.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % trendingNews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [trendingNews]);


//   dummy data for api call
  const handleDownload = async (id) => {
    try {
      const response = await pdfdownoald(id);
      if (!response.ok) {
        throw new Error("Failed to download PDF");
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `Magazine_${id}.pdf`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading the PDF:", error);
    }
  };

  return (
    <PdfCarouselContainer>
      {trendingNews.map((news, index) => (
        <PdfCarouselItem key={news.id} active={index === currentIndex} bgImage={news.image}>
          <PdfOverlay />
          <PdfContentWrapper>
            <div style={{ display: "flex", alignItems: "center", gap: "1%" }}>
              <PdfTrendingCategory>{news.category}</PdfTrendingCategory>
              <PdfNewsInfo>• {news.date} • {news.readTime}</PdfNewsInfo>
            </div>
            <PdfNewsTitle>{news.title}</PdfNewsTitle>
          </PdfContentWrapper>

          {/* Download Button */}
          <PdfDownloadButton onClick={() => handleDownload(news.id)}>
            Download Pdf. <MdOutlineFileDownload size={20} />
          </PdfDownloadButton>
        </PdfCarouselItem>
      ))}

      {/* Dots for navigation */}
      <PdfDotContainer>
        {trendingNews.map((_, index) => (
          <PdfDot key={index} active={index === currentIndex} onClick={() => setCurrentIndex(index)} />
        ))}
      </PdfDotContainer>
    </PdfCarouselContainer>
  );
};

export default MagazineDownloadPdf;
