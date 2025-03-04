import React, { useState, useEffect, useContext } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
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
} from "../magazinepdf/MagazinePdf.styles";
import { getMagazines } from "../../../../services/magazineApi/magazineService";
import { FontSizeContext } from "../../../../context/FontSizeProvider";
import { LanguageContext } from "../../../../context/LanguageContext"; // Import LanguageContext

// Fallback data
const fallbackMagazines = [
  {
    _id: "fallback-1",
    title: "Fallback Magazine Title",
    magazineThumbnail: "https://via.placeholder.com/300",
    createdTime: "2025-01-01T00:00:00.000Z",
    readTime: "5 min",
    category: { name: "Technology" },
    isTrending: true,
    magazinePdf: "#",
  },
];

const MagazinePdf = () => {
  const [magazinesData, setMagazinesData] = useState([]);
  const [bookmarkedMagazines, setBookmarkedMagazines] = useState(new Set());
  const { fontSize } = useContext(FontSizeContext);
  const { language } = useContext(LanguageContext); 

  useEffect(() => {
    const fetchMagazines = async () => {
      try {
        const result = await getMagazines();
        if (result.success && Array.isArray(result.data) && result.data.length > 0) {
          setMagazinesData(result.data);
        } else {
          console.warn("No magazine data found, using fallback data.");
          setMagazinesData(fallbackMagazines);
        }
      } catch (error) {
        console.error("Error fetching magazines:", error);
        setMagazinesData(fallbackMagazines);
      }
    };

    fetchMagazines();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return "Unknown Date";
    const date = new Date(dateString);
    return isNaN(date.getTime())
      ? "Invalid Date"
      : date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        });
  };

  const handleBookmarkClick = (magazineId) => {
    const newBookmarkedMagazines = new Set(bookmarkedMagazines);
    if (newBookmarkedMagazines.has(magazineId)) {
      newBookmarkedMagazines.delete(magazineId);
    } else {
      newBookmarkedMagazines.add(magazineId);
    }
    setBookmarkedMagazines(newBookmarkedMagazines);
  };

  const handleReadMoreClick = (pdfUrl) => {
    window.open(pdfUrl, "_blank"); // Open PDF in a new tab
  };

  // Function to get the correct language content
  const getLocalizedContent = (item, field) => {
    if (language === "English") {
      return item[field] || "No content available";
    } else if (language === "Hindi") {
      return item.hindi?.[field] || item[field] || "No content available";
    } else if (language === "Kannada") {
      return item.kannada?.[field] || item[field] || "No content available";
    }
    return item[field] || "No content available";
  };

  return (
    <Container style={{ fontSize: `${fontSize}%` }}>
      <Header style={{ fontSize: `${fontSize}%` }}>Magazine</Header>
      <Content style={{ fontSize: `${fontSize}%` }}>
        {magazinesData.map((magazine) => (
          <MagazineCard key={magazine._id}>
            <MagazineThumbnail
              src={magazine.magazineThumbnail || "https://via.placeholder.com/300"}
              alt={getLocalizedContent(magazine, "title")}
            />
            <MagazineDetails>
              <Title style={{ fontSize: `${fontSize}%` }}>
                {getLocalizedContent(magazine, "title")}
              </Title>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: `${fontSize}%` }}>
                <NewsMeta style={{ fontSize: `${fontSize}%` }}>
                  {magazine.isTrending && <span>Trending</span>}
                  <span style={{ fontSize: `${fontSize}%` }}>
                    {formatDate(magazine.createdTime)} • {magazine.readTime || "N/A"}
                  </span>
                </NewsMeta>
                <CiBookmark />
              </div>

              <MagazineMetacat>
                <BookmarkIconWrapper
                  onClick={() => handleBookmarkClick(magazine._id)}
                  isBookmarked={bookmarkedMagazines.has(magazine._id)}
                >
                </BookmarkIconWrapper>
              </MagazineMetacat>

              <ReadMoreButton style={{ fontSize: `${fontSize}%` }} onClick={() => handleReadMoreClick(magazine.magazinePdf)}>
                READ PDF <ReadMoreIcon><FaAngleDoubleRight /></ReadMoreIcon>
              </ReadMoreButton>
            </MagazineDetails>
          </MagazineCard>
        ))}
      </Content>
    </Container>
  );
};

export default MagazinePdf;