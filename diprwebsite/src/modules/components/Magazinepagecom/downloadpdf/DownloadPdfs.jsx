import React, { useContext, useEffect, useState } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import {
  PdfCarouselContainer,
  PdfCarouselItem,
  PdfOverlay,
  PdfContentWrapper,
  PdfTrendingCategory,
  PdfNewsInfo,
  PdfNewsTitle,
  PdfDotContainer,
  PdfDot,
  PdfDownloadButton,
  SkeletonOverlay,
  SkeletonCategory,
  SkeletonInfo,
  SkeletonTitle,
  SkeletonButton,
  SkeletonDotContainer,
  SkeletonDot
} from "../downloadpdf/DownloadPdf.styles";
import { BannerApi } from "../../../../services/categoryapi/CategoryApi";
import { FontSizeContext } from "../../../../context/FontSizeProvider";

const MagazineDownloadPdf = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [trendingNews, setTrendingNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const { fontSize } = useContext(FontSizeContext);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await BannerApi();
        const formattedData = data.map((item) => ({
          id: item._id,
          category: "Trending",
          date: new Date(item.createdTime).toLocaleDateString(),
          readTime: "5 min read",
          title: item.title,
          image: item.bannerImage,
          link: `/post/${item._id}`,
        }));
        setTrendingNews(formattedData);
      } catch (error) {
        console.error("Error fetching banner data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (trendingNews.length === 0 || loading) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % trendingNews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [trendingNews, loading]);

  const handleDownload = async (id) => {
    try {
      const response = await pdfdownoald(id);
      if (!response.ok) throw new Error("Failed to download PDF");
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

  if (loading) {
    return (
      <PdfCarouselContainer style={{ fontSize: `${fontSize}%` }}>
        <PdfCarouselItem style={{ background: "#f0f0f0" }}>
          <SkeletonOverlay />
          <PdfContentWrapper>
            <div style={{ display: "flex", alignItems: "center", gap: "1%", fontSize: `${fontSize}%` }}>
              <SkeletonCategory />
              <SkeletonInfo />
            </div>
            <SkeletonTitle />
            <SkeletonTitle style={{ width: "60%" }} />
          </PdfContentWrapper>
          <SkeletonButton>
            <MdOutlineFileDownload size={20} />
          </SkeletonButton>
          <SkeletonDotContainer>
            <SkeletonDot />
            <SkeletonDot />
            <SkeletonDot />
          </SkeletonDotContainer>
        </PdfCarouselItem>
      </PdfCarouselContainer>
    );
  }

  return (
    <PdfCarouselContainer style={{ fontSize: `${fontSize}%` }}>
      {trendingNews.map((news, index) => (
        <PdfCarouselItem key={news.id} active={index === currentIndex} bgImage={news.image}>
          <PdfOverlay />
          <PdfContentWrapper>
            <div style={{ display: "flex", alignItems: "center", gap: "1%", fontSize: `${fontSize}%` }}>
              <PdfTrendingCategory style={{ fontSize: `${fontSize}%` }}>{news.category}</PdfTrendingCategory>
              <PdfNewsInfo style={{ fontSize: `${fontSize}%` }}>• {news.date} • {news.readTime}</PdfNewsInfo>
            </div>
            <PdfNewsTitle>{news.title}</PdfNewsTitle>
          </PdfContentWrapper>
          <PdfDownloadButton onClick={() => handleDownload(news.id)}>
            Download Pdf <MdOutlineFileDownload size={20} />
          </PdfDownloadButton>
        </PdfCarouselItem>
      ))}
      <PdfDotContainer>
        {trendingNews.map((_, index) => (
          <PdfDot key={index} active={index === currentIndex} onClick={() => setCurrentIndex(index)} />
        ))}
      </PdfDotContainer>
    </PdfCarouselContainer>
  );
};

export default MagazineDownloadPdf;