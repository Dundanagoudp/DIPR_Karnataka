"use client"

import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import {
  Container,
  NewsCard,
  NewsImageWrapper,
  ContentWrapper,
  LeftColumn,
  RightColumn,
  TrendingTag,
  NewsTitle,
  AuthorInfo,
  AuthorAvatar,
  AuthorName,
  PublishTime,
  NewsMeta,
  ReadMoreButton,
  ShimmerImage,
  ShimmerTitle,
  ShimmerText,
  ShimmerButton,
  ShimmerAuthorInfo,
  ShimmerMetaInfo,
} from "./LatestTrending.styles"
import { LanguageContext } from "../../../../context/LanguageContext"
import { FontSizeContext } from "../../../../context/FontSizeProvider"
import { getLatestNews } from "../../../../services/newsApi/NewsApi"

const LatestTrending = () => {
  const [latestNews, setLatestNews] = useState(null)
  const [loading, setLoading] = useState(true)
  const { fontSize } = useContext(FontSizeContext)
  const { language } = useContext(LanguageContext)

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true)
      try {
        const result = await getLatestNews()
        if (result.success && Array.isArray(result.data) && result.data.length > 0) {
          setLatestNews(result.data[0]) // Display only the first latest news item
        } else {
          console.warn("No latest news data found")
          setLatestNews(null)
        }
      } catch (error) {
        console.error("Error fetching latest news:", error)
        setLatestNews(null)
      } finally {
        setTimeout(() => {
          setLoading(false)
        }, 1000) // Simulate network delay for shimmer effect
      }
    }
    fetchNews()
  }, [])

  const getLocalizedContent = (item, field) => {
    if (!item) return ""
    if (language === "English") {
      return item.English?.[field] || item[field] || "No content available"
    } else if (language === "Hindi") {
      return item.hindi?.[field] || item[field] || "No content available"
    } else if (language === "Kannada") {
      return item.kannada?.[field] || item[field] || "No content available"
    }
    return item[field] || "No content available"
  }

  const getLocalizedCategory = (category) => {
    if (!category) return "General"
    if (language === "English") {
      return category.name || "General"
    } else if (language === "Hindi") {
      return category.hindi || category.name || "General"
    } else if (language === "Kannada") {
      return category.kannada || category.name || "General"
    }
    return category.name || "General"
  }

  // Helper function to format date
  const formatDate = (dateString) => {
    if (!dateString) return "Unknown Date"
    const date = new Date(dateString)
    return isNaN(date.getTime())
      ? "Invalid Date"
      : date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
  }

  // Modified getTimeAgo to always return the formatted date string
  const getTimeAgo = (dateString) => {
    return formatDate(dateString)
  }

  const getAuthorInitials = (authorName) => {
    if (!authorName) return "A"
    return authorName
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2)
  }

  if (loading || !latestNews) {
    return (
      <Container style={{ fontSize: `${fontSize}%` }}>
        <NewsCard>
          <ShimmerImage />
          <ContentWrapper>
            <LeftColumn>
              <TrendingTag>#1 on Trending</TrendingTag>
              <ShimmerTitle />
              <AuthorInfo>
                <ShimmerAuthorInfo />
              </AuthorInfo>
              <NewsMeta>
                <ShimmerMetaInfo />
                <ShimmerMetaInfo style={{ width: "60%" }} />
              </NewsMeta>
            </LeftColumn>
            <RightColumn>
              <ShimmerText />
              <ShimmerText style={{ width: "80%" }} />
              <ShimmerButton />
            </RightColumn>
          </ContentWrapper>
        </NewsCard>
      </Container>
    )
  }

  return (
    <Container style={{ fontSize: `${fontSize}%` }}>
      <NewsCard>
        <NewsImageWrapper>
          <img
            src={latestNews.newsImage || "/placeholder.svg?height=400&width=800&query=trending news"}
            alt={getLocalizedContent(latestNews, "title")}
          />
        </NewsImageWrapper>
        <ContentWrapper>
          <LeftColumn>
            <TrendingTag>#1 on Trending</TrendingTag>
            <NewsTitle style={{ fontSize: `${fontSize}%` }}>{getLocalizedContent(latestNews, "title")}</NewsTitle>
            <AuthorInfo>
              <AuthorAvatar>{getAuthorInitials(latestNews.author || "AthleteAdmirer")}</AuthorAvatar>
              <AuthorName style={{ fontSize: `${fontSize}%` }}>{latestNews.author || "AthleteAdmirer"}</AuthorName>
              <PublishTime style={{ fontSize: `${fontSize}%` }}>
                • {getTimeAgo(latestNews.createdTime || latestNews.publishedAt)}
              </PublishTime>
            </AuthorInfo>
            <NewsMeta style={{ fontSize: `${fontSize}%` }}>
              <span>{getLocalizedCategory(latestNews.category)}</span>
            </NewsMeta>
          </LeftColumn>
          <RightColumn>
            <p style={{ fontSize: `${fontSize}%` }}>
              {getLocalizedContent(latestNews, "description").substring(0, 200)}...
            </p>
            <Link to={`/newsdetails/${latestNews._id}`}>
              <ReadMoreButton>Read Full Articles</ReadMoreButton>
            </Link>
          </RightColumn>
        </ContentWrapper>
      </NewsCard>
    </Container>
  )
}

export default LatestTrending
