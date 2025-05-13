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
  NewsText,
  ReadMore,
  NewsMeta,
  PaginationWrapper,
  ViewAllButton,
  SkeletonCard,
  SkeletonImage,
  SkeletonContent,
  SkeletonText,
  SkeletonButton
} from "../magzinesdata/MagzineNews.styles";
import {
  getMagazines,
  MarchMagazines,
} from "../../../services/magazineApi/magazineService";
import { FontSizeContext } from "../../../context/FontSizeProvider";
import { LanguageContext } from "../../../context/LanguageContext";
import { useNavigate } from "react-router-dom";
import { Pagination } from "@mui/material";

const Magzines = () => {
  const [activeTab, setActiveTab] = useState("Topics");
  const [magazines, setMagazines] = useState([]);
  const [marchMagazines, setMarchMagazines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [topicsPage, setTopicsPage] = useState(1);
  const [marchPage, setMarchPage] = useState(1);
  const itemsPerPage = 8;

  const { fontSize } = useContext(FontSizeContext);
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();

  const fetchMagazines = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      if (activeTab === "Topics") {
        const result = await getMagazines();
        if (result.success && Array.isArray(result.data)) {
          setMagazines(result.data);
        } else {
          setMagazines([]);
        }
      } else if (activeTab === "March of Karnataka") {
        const result = await MarchMagazines();
        if (result.success && Array.isArray(result.data)) {
          setMarchMagazines(result.data);
        } else {
          setMarchMagazines([]);
        }
      }
    } catch (error) {
      setError("Failed to fetch magazines. Please try again later.");
      setMagazines([]);
      setMarchMagazines([]);
    } finally {
      setLoading(false);
    }
  }, [activeTab]);

  useEffect(() => {
    fetchMagazines();
    setTopicsPage(1);
    setMarchPage(1);
  }, [fetchMagazines]);

  const getLocalizedContent = useCallback(
    (magazine, field) => {
      return (
        magazine[language.toLowerCase()]?.[field] ||
        magazine[field] ||
        "No content available"
      );
    },
    [language]
  );

const renderSkeleton = () => {
  return Array(itemsPerPage).fill(0).map((_, index) => (
    <SkeletonCard key={`skeleton-${index}`}>
      <SkeletonImage />
      <SkeletonContent>
        <SkeletonText width="80%" />
        <SkeletonText width="60%" />
        <SkeletonText width="40%" />
        <SkeletonButton />
      </SkeletonContent>
    </SkeletonCard>
  ));
};

  const renderMagazines = useCallback(
    (magazinesArray) => {
      if (loading) return renderSkeleton();
      if (error) return <div style={{ 
        gridColumn: '1 / -1', 
        textAlign: 'center',
        fontSize: `${fontSize}%`,
        color: 'red'
      }}>{error}</div>;
      if (magazinesArray.length === 0) return <div style={{ 
        gridColumn: '1 / -1', 
        textAlign: 'center',
        fontSize: `${fontSize}%`
      }}>No magazines found</div>;

      return magazinesArray.map((magazine) => (
        <NewsCard key={magazine.id || magazine._id}>
          <NewsImage 
            style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}
            src={magazine.magazineThumbnail}
            alt={getLocalizedContent(magazine, "title")}
            aria-label={getLocalizedContent(magazine, "title")}
          />
          <NewsContent>
            <NewsHeader style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
              {getLocalizedContent(magazine, "title")}
            </NewsHeader>
            <NewsText style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
              {getLocalizedContent(magazine, "description")
                .split(" ")
                .slice(0, 10)
                .join(" ")}
              ...
            </NewsText>
            <NewsMeta style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
              <span>
                {new Date(magazine.createdTime).toLocaleDateString()}
              </span>
            </NewsMeta>
            <ReadMore
              style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}
              href={magazine.magazinePdf}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Read more about ${getLocalizedContent(
                magazine,
                "title"
              )}`}
            >
              Read more
            </ReadMore>
          </NewsContent>
        </NewsCard>
      ));
    },
    [getLocalizedContent, loading, error, fontSize]
  );

  const topicsIndexOfLast = topicsPage * itemsPerPage;
  const topicsIndexOfFirst = topicsIndexOfLast - itemsPerPage;
  const topicsCurrentItems = magazines.slice(topicsIndexOfFirst, topicsIndexOfLast);

  const marchIndexOfLast = marchPage * itemsPerPage;
  const marchIndexOfFirst = marchIndexOfLast - itemsPerPage;
  const marchCurrentItems = marchMagazines.slice(marchIndexOfFirst, marchIndexOfLast);

  return (
    <>
      <Title style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
        Magazine
      </Title>
      <Container style={{ fontSize: `${fontSize}%` }}>
        <TabsContainer>
          <Tab 
            style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}
            active={activeTab === "Topics"}
            onClick={() => setActiveTab("Topics")}
            aria-selected={activeTab === "Topics"}
          >
            Varthajanapada
          </Tab>
          <Tab
            style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}
            active={activeTab === "March of Karnataka"}
            onClick={() => setActiveTab("March of Karnataka")}
            aria-selected={activeTab === "March of Karnataka"}
          >
            March of Karnataka
          </Tab>
        </TabsContainer>

        {/* Render news cards or skeleton */}
        {activeTab === "Topics" && renderMagazines(topicsCurrentItems)}
        {activeTab === "March of Karnataka" && renderMagazines(marchCurrentItems)}
      </Container>

      {/* Fixed Pagination and View All Button */}
      <PaginationWrapper style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
        <Pagination
          count={
            activeTab === "Topics"
              ? Math.ceil(magazines.length / itemsPerPage)
              : Math.ceil(marchMagazines.length / itemsPerPage)
          }
          page={activeTab === "Topics" ? topicsPage : marchPage}
          onChange={(event, value) =>
            activeTab === "Topics" ? setTopicsPage(value) : setMarchPage(value)
          }
          variant="outlined"
          shape="rounded"
        />
        <ViewAllButton
          style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}
          variant="contained"
          onClick={() => navigate("/magazinepages")}
        >
          View All
        </ViewAllButton>
      </PaginationWrapper>
    </>
  );
};

export default Magzines;