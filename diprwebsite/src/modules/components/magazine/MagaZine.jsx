import React, { useState } from "react";
import { Container, TabContainer, Tab, Content, Card, Image, Details, Title, Meta } from "../magazine/MagaZine.styles";

const topicsData = [
  {
    id: 1,
    source: "The Verge • Google AI",
    title: "Now Google’s Bard AI can talk & respond to visual prompts",
    date: "Jul 13, 2023",
    readTime: "2 min read",
    image: "/images/google-ai.jpg", 
  },
  {
    id: 2,
    source: "Gizmodo • Watch",
    title: "WatchOS 10 preview: widgets all the way down",
    date: "Jul 10, 2023",
    readTime: "4 min read",
    image: "/images/watchos.jpg",
  },
  {
    id: 3,
    source: "Work Life • Jobs",
    title: "How Gen Z are disrupting the definition of ‘prestigious’ jobs",
    date: "Jul 24, 2023",
    readTime: "8 min read",
    image: "/images/jobs.jpg",
    trending: true,
  },
  {
    id: 4,
    source: "The Verge • Tech",
    title: "Instagram’s Threads surpasses 100 million users!",
    date: "Jul 24, 2023",
    readTime: "8 min read",
    image: "/images/threads.jpg",
    trending: true,
  },
];

const videoData = [
  {
    id: 1,
    source: "The Verge",
    title: "OpenAI will use Associated Press news stories",
    date: "Jul 13, 2023",
    readTime: "2 min read",
    image: "/images/openai-news.jpg",
  },
  {
    id: 2,
    source: "The Verge",
    title: "Nothing Phone 2 review: the vibes abide",
    date: "Jul 13, 2023",
    readTime: "3 min read",
    image: "/images/nothing-phone.jpg",
  },
];

const MagaZines = () => {
  const [activeTab, setActiveTab] = useState("Topics");

  return (
    <Container>
      <TabContainer>
        <Tab active={activeTab === "Topics"} onClick={() => setActiveTab("Topics")}>
          Topics
        </Tab>
        <Tab active={activeTab === "Video"} onClick={() => setActiveTab("Video")}>
          Video
        </Tab>
      </TabContainer>

      <Content>
        {(activeTab === "Topics" ? topicsData : videoData).map((item) => (
          <Card key={item.id}>
            <Image src={item.image} alt={item.title} />
            <Details>
              <Meta>{item.source}</Meta>
              <Title>{item.title}</Title>
              <Meta>{item.date} • {item.readTime}</Meta>
              {item.trending && <span className="trending">Trending</span>}
            </Details>
          </Card>
        ))}
      </Content>
    </Container>
  );
};

export default MagaZines;
