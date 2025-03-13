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
  TabsContainer,
  Tab,
} from "../magazinepdf/MagazinePdf.styles";
import { getMagazines, MarchMagazines } from "../../../../services/magazineApi/magazineService";
import { FontSizeContext } from "../../../../context/FontSizeProvider";
import { LanguageContext } from "../../../../context/LanguageContext";

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
  const [activeTab, setActiveTab] = useState("Topics");
  const [magazinesData, setMagazinesData] = useState([]);
  const [marchMagazinesData, setMarchMagazinesData] = useState([]);
  const [bookmarkedMagazines, setBookmarkedMagazines] = useState(new Set());
  const { fontSize } = useContext(FontSizeContext);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const fetchMagazines = async () => {
      try {
        const result = activeTab === "Topics" ? await getMagazines() : await MarchMagazines();
        const data = result.success && Array.isArray(result.data) && result.data.length > 0 ? result.data : [];
        if (activeTab === "Topics") {
          setMagazinesData(data.length ? data : fallbackMagazines);
        } else {
          setMarchMagazinesData(data);
        }
      } catch (error) {
        if (activeTab === "Topics") {
          setMagazinesData(fallbackMagazines);
        } else {
          setMarchMagazinesData([]);
        }
      }
    };

    fetchMagazines();
  }, [activeTab]);

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
    newBookmarkedMagazines.has(magazineId)
      ? newBookmarkedMagazines.delete(magazineId)
      : newBookmarkedMagazines.add(magazineId);
    setBookmarkedMagazines(newBookmarkedMagazines);
  };

  const handleReadMoreClick = (pdfUrl) => {
    window.open(pdfUrl, "_blank");
  };

  const getLocalizedContent = (item, field) => {
    if (language === "English") return item[field] || "No content available";
    if (language === "Hindi") return item.hindi?.[field] || item[field] || "No content available";
    if (language === "Kannada") return item.kannada?.[field] || item[field] || "No content available";
    return item[field] || "No content available";
  };

  const renderMagazines = (magazines) => {
    return magazines.map((magazine) => (
      <MagazineCard key={magazine._id}>
        <MagazineThumbnail
          src={magazine.magazineThumbnail || "https://via.placeholder.com/300"}
          alt={getLocalizedContent(magazine, "title")}
        />
        <MagazineDetails>
          <Title style={{ fontSize: `${fontSize}%` }}>{getLocalizedContent(magazine, "title")}</Title>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: `${fontSize}%` }}>
            <NewsMeta style={{ fontSize: `${fontSize}%` }}>
              {magazine.isTrending && <span>Trending</span>}
              <span>{formatDate(magazine.createdTime)} • {magazine.readTime || "N/A"}</span>
            </NewsMeta>
            <CiBookmark />
          </div>
          <MagazineMetacat>
            <BookmarkIconWrapper
              onClick={() => handleBookmarkClick(magazine._id)}
              isBookmarked={bookmarkedMagazines.has(magazine._id)}
            />
          </MagazineMetacat>
          <ReadMoreButton style={{ fontSize: `${fontSize}%` }} onClick={() => handleReadMoreClick(magazine.magazinePdf)}>
            READ PDF <ReadMoreIcon><FaAngleDoubleRight /></ReadMoreIcon>
          </ReadMoreButton>
        </MagazineDetails>
      </MagazineCard>
    ));
  };

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
        {activeTab === "Topics" && renderMagazines(magazinesData)}
        {activeTab === "March of Karnataka" && renderMagazines(marchMagazinesData)}
      </Content>
    </Container>
  );
};

export default MagazinePdf;