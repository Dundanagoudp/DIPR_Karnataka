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
  VideoThumbnail,
  VideoTab,
  VideoCard1,
  VideoDetails,
  VideoMeta,
  VideoMetacat,
  Meta1,
} from "../magazine/MagaZine.styles";
import TopicImages from "../../../assets/topic1.png";
import TopicImages2 from "../../../assets/topic2.png";
import TopicImages3 from "../../../assets/topic3.png";
import TopicImages4 from "../../../assets/post1.png";
import videoThumbnail from "../../../assets/v1.png";

import { VideoApi } from "../../../services/categoryapi/CategoryApi";

const topicsData = [
  {
    id: 1,
    source: "The Verge • Google AI",
    title: "Now Google’s Bard AI can talk & respond to visual prompts",
    date: "Jul 13, 2023",
    readTime: "2 min read",
    image: TopicImages,
  },
  {
    id: 2,
    source: "Gizmodo • Watch",
    title: "WatchOS 10 preview: widgets all the way down",
    date: "Jul 10, 2023",
    readTime: "4 min read",
    image: TopicImages2,
  },
  {
    id: 3,
    source: "Work Life • Jobs",
    title: "How Gen Z are disrupting the definition of ‘prestigious’ jobs",
    date: "Jul 24, 2023",
    readTime: "8 min read",
    image: TopicImages3,
    trending: true,
  },
  {
    id: 4,
    source: "The Verge • Tech",
    title: "Instagram’s Threads surpasses 100 million users!",
    date: "Jul 24, 2023",
    readTime: "8 min read",
    image: TopicImages4,
    trending: true,
  },
];

const fallbackVideosData = [
  {
    id: "fallback-1",
    category: "The Verge",
    readTime: "2 min read",
    title: "OpenAI will use Associated Press news stories",
    date: "Jul 13, 2023",
    thumbnail: videoThumbnail,
  },
  {
    id: "fallback-2",
    category: "The Verge",
    readTime: "3 min read",
    title: "Nothing Phone 2 review: the vibes abide",
    date: "Jul 13, 2023",
    thumbnail: videoThumbnail,
  },
];

const MagaZines = () => {
  const [activeTab, setActiveTab] = useState("Topics");
  const [videosData, setVideosData] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const result = await VideoApi(); // API already returns response.data, no need for result.data

        console.log("Received videos data:", result); // Log entire result

        if (result && Array.isArray(result) && result.length > 0) {
          setVideosData(result);
        } else {
          console.warn("No video data found, using fallback data.");
          setVideosData(fallbackVideosData);
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
        setVideosData(fallbackVideosData);
      }
    };

    fetchVideos();
  }, []);

  return (
    <Container>
      <Header>Magazine</Header>
      <TabContainer>
        <Tab active={activeTab === "Topics"} onClick={() => setActiveTab("Topics")}>
          Topics
        </Tab>
        <VideoTab active={activeTab === "Video"} onClick={() => setActiveTab("Video")}>
          Video
        </VideoTab>
      </TabContainer>

      <Content>
        {activeTab === "Topics"
          ? topicsData.map((item) => (
              <Card key={item.id}>
                <Image src={item.image} alt={item.title} />
                <Details>
                  <Meta1>{item.source}</Meta1>
                  <Title>{item.title}</Title>
                  <data style={{ gap: "1%" }}>
                    {item.trending && <span className="trending">Trending</span>}
                    <Meta>{item.date} • {item.readTime}</Meta>
                  </data>
                </Details>
              </Card>
            ))
          : videosData.map((video) => (
              <VideoCard1 key={video.id || video._id}>
                <VideoThumbnail src={video.thumbnail} alt={video.title} />
                <VideoDetails>
                  <VideoMeta>{new Date(video.date || video.createdAt).toDateString()}</VideoMeta>
                  <Title style={{ color: "black", fontWeight: "bold", fontSize: "1.3rem" }}>
                    {video.title}
                  </Title>
                  <VideoMetacat>{video.category}</VideoMetacat>
                </VideoDetails>
              </VideoCard1>
            ))}
      </Content>
    </Container>
  );
};

export default MagaZines;
