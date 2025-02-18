import React, { useState, useEffect } from "react";
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
 
  return (
    <Container>
      <Header>Magazine</Header>
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
                <Image src={magazine.magazineThumbnail} alt={magazine.title} />
                <Details>
                  {/* <Meta1>{new Date(magazine.createdTime).toDateString()}</Meta1> */}
                  <Title>{magazine.title}</Title>
                  <p>
                    {magazine.description.split(" ").slice(0, 10).join(" ")}...
                  </p>
                  <a
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