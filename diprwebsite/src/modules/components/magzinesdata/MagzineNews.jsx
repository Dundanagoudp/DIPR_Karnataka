import React, { useState, useEffect, useContext } from "react";
import {
  Container,
  Title,
  TabsContainer,
  Tab,
  NewsCard,
  NewsImage,
  NewsContent,
  NewsHeader,
  NewsTitle,
  NewsText,
  ReadMore,
  NewsMeta,
} from "../magzinesdata/MagzineNews.styles"; 
import { getMagazines, MarchMagazines } from "../../../services/magazineApi/magazineService"; // Import both APIs
import { FontSizeContext } from "../../../context/FontSizeProvider";
import { LanguageContext } from "../../../context/LanguageContext";

const fallbackMagazines = [
  {
    id: "fallback-1aaaa",
    title: "Fallback Magazine Title",
    description:
      "This is a placeholder magazine description with limited words for testing purposes, ensuring concise content display.",
    magazineThumbnail: "https://via.placeholder.com/300",
    magazinePdf: "#",
    createdTime: "2025-01-01T00:00:00.000Z",
  },
];

const Magzines = () => {
  const [activeTab, setActiveTab] = useState("Topics");
  const [magazines, setMagazines] = useState([]);
  const [marchMagazines, setMarchMagazines] = useState([]);
  const { fontSize } = useContext(FontSizeContext);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const fetchMagazines = async () => {
      try {
        if (activeTab === "Topics") {
          const result = await getMagazines();
          if (result.success && Array.isArray(result.data) && result.data.length > 0) {
            setMagazines(result.data);
          } else {
            console.warn("No magazine data found, using fallback data.");
            setMagazines(fallbackMagazines);
          }
        } else if (activeTab === "March of Karnataka") {
          const result = await MarchMagazines();
          console.log("March of Karnataka API response:", result); // Debugging log
          if (result.success && Array.isArray(result.data) && result.data.length > 0) {
            setMarchMagazines(result.data);
          } else {
            console.warn("No March of Karnataka data found.");
            setMarchMagazines([]); // Set to empty array instead of fallback data
          }
        }
      } catch (error) {
        console.error("Error fetching magazines:", error);
        if (activeTab === "Topics") {
          setMagazines(fallbackMagazines);
        } else {
          setMarchMagazines([]); // Set to empty array instead of fallback data
        }
      }
    };

    fetchMagazines();
  }, [activeTab]);

  const getLocalizedContent = (magazine, field) => {
    if (language === "English") {
      return magazine.english?.[field] || magazine[field] || "No content available";
    } else if (language === "Hindi") {
      return magazine.hindi?.[field] || magazine[field] || "No content available";
    } else if (language === "Kannada") {
      return magazine.kannada?.[field] || magazine[field] || "No content available";
    }
    return magazine[field] || "No content available";
  };

  const renderMagazines = (magazines) => {
    return magazines.map((magazine) => (
      <NewsCard key={magazine.id || magazine._id}>
        <NewsImage
          src={magazine.magazineThumbnail || "https://via.placeholder.com/300"}
          alt={getLocalizedContent(magazine, "title")}
        />
        <NewsContent>
          <NewsHeader>
            {getLocalizedContent(magazine, "title")}
          </NewsHeader>
          <NewsTitle>
            {getLocalizedContent(magazine, "title")}
          </NewsTitle>
          <NewsText>
            {getLocalizedContent(magazine, "description")
              .split(" ")
              .slice(0, 1)
              .join(" ")}...
          </NewsText>
          <NewsMeta>
            <span>{new Date(magazine.createdTime).toLocaleDateString()}</span>
          </NewsMeta>
          <ReadMore
            href={magazine.magazinePdf || "#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read more
          </ReadMore>
        </NewsContent>
      </NewsCard>
    ));
  };

  return (
    <Container style={{ fontSize: `${fontSize}%` }}>
      <Title style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
        Magazine
      </Title>
      <TabsContainer>
        <Tab
          active={activeTab === "Topics"}
          onClick={() => setActiveTab("Topics")}
        >
          Varthajanapada
        </Tab>
        <Tab
          active={activeTab === "March of Karnataka"}
          onClick={() => setActiveTab("March of Karnataka")}
        >
          March of Karnataka
        </Tab>
      </TabsContainer>

      {activeTab === "Topics" && renderMagazines(magazines)}
      {activeTab === "March of Karnataka" && renderMagazines(marchMagazines)}
    </Container>
  );
};

export default Magzines;