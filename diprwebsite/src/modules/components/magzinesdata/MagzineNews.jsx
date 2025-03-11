import React, { useState, useEffect, useContext, useCallback } from "react";
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
import { getMagazines, MarchMagazines } from "../../../services/magazineApi/magazineService";
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

  const fetchMagazines = useCallback(async () => {
    try {
      if (activeTab === "Topics") {
        const result = await getMagazines();
        if (result.success && Array.isArray(result.data) && result.data.length > 0) {
          setMagazines(result.data);
        } else {
          setMagazines(fallbackMagazines);
        }
      } else if (activeTab === "March of Karnataka") {
        const result = await MarchMagazines();
        if (result.success && Array.isArray(result.data) && result.data.length > 0) {
          setMarchMagazines(result.data);
        } else {
          setMarchMagazines([]);
        }
      }
    } catch (error) {
      if (activeTab === "Topics") {
        setMagazines(fallbackMagazines);
      } else {
        setMarchMagazines([]);
      }
    }
  }, [activeTab]);

  useEffect(() => {
    fetchMagazines();
  }, [fetchMagazines]);

  const getLocalizedContent = useCallback(
    (magazine, field) => {
      const localizedField = magazine[language.toLowerCase()]?.[field] || magazine[field] || "No content available";
      return localizedField;
    },
    [language]
  );

  const renderMagazines = useCallback(
    (magazines) => {
      return magazines.map((magazine) => (
        <NewsCard key={magazine.id || magazine._id}>
          <NewsImage
            src={magazine.magazineThumbnail || "https://via.placeholder.com/300"}
            alt={getLocalizedContent(magazine, "title")}
            aria-label={getLocalizedContent(magazine, "title")}
          />
          <NewsContent>
            <NewsHeader>{getLocalizedContent(magazine, "title")}</NewsHeader>
            <NewsTitle>{getLocalizedContent(magazine, "title")}</NewsTitle>
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
              aria-label={`Read more about ${getLocalizedContent(magazine, "title")}`}
            >
              Read more
            </ReadMore>
          </NewsContent>
        </NewsCard>
      ));
    },
    [getLocalizedContent]
  );

  return (
    <>
      <Title style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
        Magazine
      </Title>
      <Container style={{ fontSize: `${fontSize}%` }}>
        <TabsContainer>
          <Tab
            active={activeTab === "Topics"}
            onClick={() => setActiveTab("Topics")}
            aria-selected={activeTab === "Topics"}
          >
            Varthajanapada
          </Tab>
          <Tab
            active={activeTab === "March of Karnataka"}
            onClick={() => setActiveTab("March of Karnataka")}
            aria-selected={activeTab === "March of Karnataka"}
          >
            March of Karnataka
          </Tab>
        </TabsContainer>

        {activeTab === "Topics" && renderMagazines(magazines)}
        {activeTab === "March of Karnataka" && renderMagazines(marchMagazines)}
      </Container>
    </>
  );
};

export default Magzines;