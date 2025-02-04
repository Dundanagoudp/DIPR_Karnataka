import React, { useState, useEffect } from "react";
import { FaFacebook, FaTwitter, FaLink, FaPaperPlane } from "react-icons/fa";
import {
  Container,
  TabsContainer,
  Tab,
  NewsCard,
  NewsImage,
  NewsContent,
  NewsHeader,
  NewsTitle,
  NewsText,
  ShareIcons,
  ReadMore,
  CommentSection,
  CommentInputWrapper,
  CommentInput,
  CommentButton,
  TrendingTag,
  NewsMeta,
  Title,
  OutlineDots
} from "../allnews/AllNews.styles";
import { MdOutlineMessage } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";
import post1Image from "../../../assets/post1.png"; 
import post2Image from "../../../assets/post2.png";

const tabs = ["Tech", "Science", "Education", "Business", "Sports", "For You"];


const fallbackNewsData = [
  {
    id: 1,
    category: "Tech",
    source: "The Verge",
    title: "Instagram’s Threads surpasses 100 million users!",
    image: post1Image,
    description:
      "Google is adding some new features to its Bard AI chatbot, including the ability for Bard to speak its answers to you and for it to respond to prompts that also include images. The chatbot is also now available in much of the world, including the EU.In a blog post, Google is positioning Bard’s spoken responses as a helpful way to “correct pronunciation of a word or listen to a poem or script.” You’ll be able to hear spoken responses by entering a prompt and selecting the sound icon. Spoken responses will be available in more than 40 languages and are live now, according to Google.",
    date: "Jul 24, 2023",
    readTime: "8 min read",
    isTrending: true,
    url: "https://www.theverge.com/",
  },
  {
    id: 3,
    category: "Tech",
    source: "The Verge",
    title: "July 2023: The best early Prime Day deals!",
    image: post2Image,
    description:
      "Google is adding some new features to its Bard AI chatbot, including the ability for Bard to speak its answers to you and for it to respond to prompts that also include images. The chatbot is also now available in much of the world, including the EU.In a blog post, Google is positioning Bard’s spoken responses as a helpful way to “correct pronunciation of a word or listen to a poem or script.” You’ll be able to hear spoken responses by entering a prompt and selecting the sound icon. Spoken responses will be available in more than 40 languages and are live now, according to Google.",
    date: "Jul 24, 2023",
    readTime: "8 min read",
    isTrending: true,
    url: "https://www.theverge.com/",
  },
  {
    id: 2,
    category: "Science",
    source: "BBC Science",
    title: "NASA discovers water on Mars!",
    image: post1Image,
    description:
      "New studies reveal significant traces of liquid water under the Martian surface...",
    date: "Jan 15, 2024",
    readTime: "5 min read",
    isTrending: false,
    url: "https://www.bbc.com/",
  },
];

const AllNews = () => {
  const [activeTab, setActiveTab] = useState("Tech");
  const [newsData, setNewsData] = useState([]);

  // Fetch news from API based on selected category
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await AllNewsApi(activeTab);
        const data = await response.json();

        if (data.length > 0) {
          setNewsData(data);
        } else {
          setNewsData(fallbackNewsData.filter(news => news.category === activeTab)); // Use static data as fallback
        }
      } catch (error) {
        console.error("Error fetching news:", error);
        setNewsData(fallbackNewsData.filter(news => news.category === activeTab)); // Fallback to static data
      }
    };
    fetchNews();
  }, [activeTab]);

  // Social Media Sharing
  const shareOnFacebook = (url) => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank");
  };

  const shareOnTwitter = (url) => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`, "_blank");
  };

  const copyLink = (url) => {
    navigator.clipboard.writeText(url);
    alert("Link copied to clipboard!");
  };

  return (
    <Container>
      <Title>All News</Title>
      <TabsContainer>
        {tabs.map((tab) => (
          <Tab key={tab} active={activeTab === tab} onClick={() => setActiveTab(tab)}>
            {tab}
          </Tab>
        ))}
      </TabsContainer>

      {newsData.length > 0 ? (
        newsData.map((news) => (
          <NewsCard key={news.id}>
            <NewsImage src={news.image} alt={news.title} />
            <NewsContent>
              <NewsHeader>
                {news.source} • {news.category}
              </NewsHeader>
              <NewsTitle>{news.title}</NewsTitle>

              <ShareIcons>
                <FaFacebook onClick={() => shareOnFacebook(news.url)} style={{ cursor: "pointer" }} />
                <FaTwitter onClick={() => shareOnTwitter(news.url)} style={{ cursor: "pointer" }} />
                <FaLink onClick={() => copyLink(news.url)} style={{ cursor: "pointer" }} />
              </ShareIcons>

              <NewsText>{news.description}</NewsText>
              <ReadMore href={news.url} target="_blank" rel="noopener noreferrer">
                Read more
              </ReadMore>

              {/* Comment Section (Now with Icon Inside Input) */}
              <CommentSection>
                <CommentInputWrapper>
                  <CommentInput type="text" placeholder="Add your comment..." />
                  <CommentButton>
                  <MdOutlineMessage />
                  </CommentButton>
                </CommentInputWrapper>
              </CommentSection>

              <NewsMeta>
                {news.isTrending && <TrendingTag>Trending</TrendingTag>}
                <span>{news.date} • {news.readTime}</span>
             
              </NewsMeta>
        
            </NewsContent>
          </NewsCard>
        ))
      ) : (
        <p>No news available in this category.</p>
      )}
    </Container>
  );
};

export default AllNews;
