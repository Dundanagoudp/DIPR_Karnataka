import React, { useState, useEffect, useContext } from "react";
import {
  Container,
  TabContainer,
  Tab,
  Content,
  Card,
  Image,
  Details,
  Title,
  Meta,
  Header,
} from "../magazine/MagaZine.styles";
import { getMagazines } from "../../../services/magazineApi/magazineService";
import { FontSizeContext } from "../../../context/FontSizeProvider";
import { LanguageContext } from "../../../context/LanguageContext"; // Import LanguageContext

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

const MagaZines = () => {
  const [activeTab, setActiveTab] = useState("Topics");
  const [magazines, setMagazines] = useState([]);
  const { fontSize } = useContext(FontSizeContext);
  const { language } = useContext(LanguageContext); // Get current language from context

  useEffect(() => {
    const fetchMagazines = async () => {
      try {
        const result = await getMagazines();

        if (
          result.success &&
          Array.isArray(result.data) &&
          result.data.length > 0
        ) {
          setMagazines(result.data);
        } else {
          console.warn("No magazine data found, using fallback data.");
          setMagazines(fallbackMagazines);
        }
      } catch (error) {
        console.error("Error fetching magazines:", error);
        setMagazines(fallbackMagazines);
      }
    };

    fetchMagazines();
  }, []);

  // Function to get the correct language content
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

  return (
    <Container style={{ fontSize: `${fontSize}%` }}>
      <Header style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
        Magazine
      </Header>
      <TabContainer>
        <Tab
          active={activeTab === "Topics"}
          onClick={() => setActiveTab("Topics")}
        >
          New Edition
        </Tab>
      </TabContainer>

      <Content>
        {activeTab === "Topics"
          ? magazines.map((magazine) => (
              <Card key={magazine._id}>
                <Image src={magazine.magazineThumbnail} alt={getLocalizedContent(magazine, "title")} />
                <Details>
                  <Title style={{ fontSize: `${fontSize}%` }}>
                    {getLocalizedContent(magazine, "title")}
                  </Title>
                  <p style={{ fontSize: `${fontSize}%` }}>
                    {getLocalizedContent(magazine, "description")
                      .split(" ")
                      .slice(0, 10)
                      .join(" ")}...
                  </p>
                  <a
                    style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}
                    href={magazine.magazinePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read PDF
                  </a>
                </Details>
              </Card>
            ))
          : "No content available"}
      </Content>
    </Container>
  );
};

export default MagaZines;