import React, { useContext, useEffect, useState, useRef, useCallback } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
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
  NavigationArrow,
  SkeletonOverlay,
  SkeletonCategory,
  SkeletonInfo,
  SkeletonTitle,
  SkeletonButton,
  SkeletonDotContainer,
  SkeletonDot
} from "./DownloadPdf.styles";
import { BannerApi } from "../../../../services/categoryapi/CategoryApi";
import { FontSizeContext } from "../../../../context/FontSizeProvider";

const MagazineDownloadPdf = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [trendingNews, setTrendingNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const { fontSize } = useContext(FontSizeContext);
  const autoPlayRef = useRef(null);
  const carouselRef = useRef(null);

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
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

  // Navigation functions
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % trendingNews.length);
  }, [trendingNews.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? trendingNews.length - 1 : prevIndex - 1));
  }, [trendingNews.length]);

  const goToSlide = useCallback(
    (index) => {
      setCurrentIndex(index);
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = setInterval(nextSlide, 4000);
      }
    },
    [nextSlide],
  );

  // Auto-play functionality
  useEffect(() => {
    if (trendingNews.length === 0 || loading) return;

    autoPlayRef.current = setInterval(nextSlide, 4000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [trendingNews, loading, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (document.activeElement === carouselRef.current || carouselRef.current?.contains(document.activeElement)) {
        if (e.key === "ArrowLeft") {
          prevSlide();
          e.preventDefault();
        } else if (e.key === "ArrowRight") {
          nextSlide();
          e.preventDefault();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch handlers for swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide();
    } else if (touchStart - touchEnd < -75) {
      prevSlide();
    }
  };

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
      </PdfCarouselContainer>
    );
  }

  return (
    <PdfCarouselContainer
      style={{ fontSize: `${fontSize}%` }}
      ref={carouselRef}
      role="region"
      aria-label="Trending news carousel"
      tabIndex="0"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {trendingNews.map((news, index) => (
        <PdfCarouselItem
          key={news.id}
          active={index === currentIndex}
          bgImage={news.image}
          aria-hidden={index !== currentIndex}
        >
          <PdfOverlay />
          <PdfContentWrapper>
            <div style={{ display: "flex", alignItems: "center", gap: "1%", fontSize: `${fontSize}%` }}>
              <PdfTrendingCategory style={{ fontSize: `${fontSize}%` }}>{news.category}</PdfTrendingCategory>
              <PdfNewsInfo style={{ fontSize: `${fontSize}%` }}>
                • {news.date} • {news.readTime}
              </PdfNewsInfo>
            </div>
            <PdfNewsTitle>{news.title}</PdfNewsTitle>
          </PdfContentWrapper>
          <PdfDownloadButton onClick={() => handleDownload(news.id)}>
            <MdOutlineFileDownload size={20} /> Download PDF
          </PdfDownloadButton>
        </PdfCarouselItem>
      ))}

      {/* Navigation Arrows */}
      <NavigationArrow position="left" onClick={prevSlide} aria-label="Previous slide">
        <FiChevronLeft size={24} />
      </NavigationArrow>
      
      <NavigationArrow position="right" onClick={nextSlide} aria-label="Next slide">
        <FiChevronRight size={24} />
      </NavigationArrow>

      <PdfDotContainer>
        {trendingNews.map((_, index) => (
          <PdfDot
            key={index}
            active={index === currentIndex}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex ? "true" : "false"}
          />
        ))}
      </PdfDotContainer>
    </PdfCarouselContainer>
  );
};

export default MagazineDownloadPdf;