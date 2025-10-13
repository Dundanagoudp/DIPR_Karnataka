import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa"
import { RiInstagramFill } from "react-icons/ri"
import {
  SidebarContainer,
  SidebarSection,
  SectionTitle,
  SocialMediaList,
  SocialMediaItem,
  SocialMediaButton,
  SocialMediaIcon,
  SocialMediaInfo,
  SocialMediaName,
  SocialMediaStats,
  PopularNewsList,
  PopularNewsItem,
  PopularNewsImage,
  PopularNewsContent,
  PopularNewsDate,
  PopularNewsTitle,
  TrendingList,
  TrendingItem,
  TrendingContent,
  TrendingTitle,
  TrendingDate,
  SeeMoreButton
} from './Sidebar.styles'

const Sidebar = () => {
  return (
    <SidebarContainer as="aside" role="complementary" aria-label="Article sidebar">
      {/* Follow Us Section */}
      <SidebarSection as="section" aria-labelledby="follow-heading">
        <SectionTitle id="follow-heading" as="h3">FOLLOW US</SectionTitle>
        <SocialMediaList role="list" aria-label="Social media links">
          <SocialMediaItem role="listitem">
            <SocialMediaButton style={{ backgroundColor: '#1877F2' }} aria-label="Follow us on Facebook - 135,684 fans">
              <SocialMediaIcon>
                <FaFacebookF aria-hidden="true" />
              </SocialMediaIcon>
              <SocialMediaInfo>
                <SocialMediaStats>135,684</SocialMediaStats>
                <SocialMediaName>Facebook fans</SocialMediaName>
              </SocialMediaInfo>
            </SocialMediaButton>
          </SocialMediaItem>
          
          <SocialMediaItem role="listitem">
            <SocialMediaButton style={{ backgroundColor: '#1DA1F2' }} aria-label="Follow us on Twitter - 87,043 followers">
              <SocialMediaIcon>
                <FaTwitter aria-hidden="true" />
              </SocialMediaIcon>
              <SocialMediaInfo>
                <SocialMediaStats>87,043</SocialMediaStats>
                <SocialMediaName>Twitter followers</SocialMediaName>
              </SocialMediaInfo>
            </SocialMediaButton>
          </SocialMediaItem>
          
          <SocialMediaItem role="listitem">
            <SocialMediaButton style={{ backgroundColor: '#E4405F' }} aria-label="Follow us on Instagram - 64,350 followers">
              <SocialMediaIcon>
                <RiInstagramFill aria-hidden="true" />
              </SocialMediaIcon>
              <SocialMediaInfo>
                <SocialMediaStats>64,350</SocialMediaStats>
                <SocialMediaName>Instagram followers</SocialMediaName>
              </SocialMediaInfo>
            </SocialMediaButton>
          </SocialMediaItem>
          
          <SocialMediaItem role="listitem">
            <SocialMediaButton style={{ backgroundColor: '#0077B5' }} aria-label="Follow us on LinkedIn - 42,341 followers">
              <SocialMediaIcon>
                <FaLinkedinIn aria-hidden="true" />
              </SocialMediaIcon>
              <SocialMediaInfo>
                <SocialMediaStats>42,341</SocialMediaStats>
                <SocialMediaName>LinkedIn followers</SocialMediaName>
              </SocialMediaInfo>
            </SocialMediaButton>
          </SocialMediaItem>
        </SocialMediaList>
      </SidebarSection>

      {/* Popular News Section */}
      <SidebarSection as="section" aria-labelledby="popular-heading">
        <SectionTitle id="popular-heading" as="h3">POPULAR NEWS</SectionTitle>
        <PopularNewsList as="ul" role="list" aria-label="Popular news articles">
          <PopularNewsItem as="li" role="listitem" tabIndex="0">
            <PopularNewsContent>
              <PopularNewsDate as="time" dateTime="2023-03-19">March 19, 2023</PopularNewsDate>
              <PopularNewsTitle as="h4">
                Golf Legend Santana Reeds Returns to Professional Competition After Long Layoff
              </PopularNewsTitle>
            </PopularNewsContent>
            <PopularNewsImage>
              <img 
                src="/state/2ndimage.jpg" 
                alt="Golf legend Santana Reeds in professional competition" 
                loading="lazy"
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover' 
                }} 
              />
            </PopularNewsImage>
          </PopularNewsItem>
          
          <PopularNewsItem as="li" role="listitem" tabIndex="0">
            <PopularNewsContent>
              <PopularNewsDate as="time" dateTime="2023-03-18">March 18, 2023</PopularNewsDate>
              <PopularNewsTitle as="h4">
                Christian Garret Breaks Scoring Record in European Soccer League
              </PopularNewsTitle>
            </PopularNewsContent>
            <PopularNewsImage>
              <img 
                src="/state/2ndsection.jpg" 
                alt="Christian Garret celebrating soccer record" 
                loading="lazy"
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover' 
                }} 
              />
            </PopularNewsImage>
          </PopularNewsItem>
          
          <PopularNewsItem as="li" role="listitem" tabIndex="0">
            <PopularNewsContent>
              <PopularNewsDate as="time" dateTime="2023-03-19">March 19, 2023</PopularNewsDate>
              <PopularNewsTitle as="h4">
                Tennis Star Dmitri Ivanov Wins Record Ninth Australian Open Title
              </PopularNewsTitle>
            </PopularNewsContent>
            <PopularNewsImage>
              <img 
                src="/state/rightside.jpg" 
                alt="Dmitri Ivanov holding Australian Open trophy" 
                loading="lazy"
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover' 
                }} 
              />
            </PopularNewsImage>
          </PopularNewsItem>
          
          <PopularNewsItem as="li" role="listitem" tabIndex="0">
            <PopularNewsContent>
              <PopularNewsDate as="time" dateTime="2023-03-18">March 18, 2023</PopularNewsDate>
              <PopularNewsTitle as="h4">
                NBA Announces All-Star Rosters, with Top Players Set to Compete in Las Vegas
              </PopularNewsTitle>
            </PopularNewsContent>
            <PopularNewsImage>
              <img 
                src="/state/sidebar.jpg" 
                alt="NBA All-Star players announcement" 
                loading="lazy"
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover' 
                }} 
              />
            </PopularNewsImage>
          </PopularNewsItem>
          
          <PopularNewsItem as="li" role="listitem" tabIndex="0">
            <PopularNewsContent>
              <PopularNewsDate as="time" dateTime="2023-03-18">March 18, 2023</PopularNewsDate>
              <PopularNewsTitle as="h4">
                NFL Announces Major Expansion Plans for Global Reach
              </PopularNewsTitle>
            </PopularNewsContent>
            <PopularNewsImage>
              <img 
                src="/state/sidebar2.jpg" 
                alt="NFL expansion plans announcement" 
                loading="lazy"
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover' 
                }} 
              />
            </PopularNewsImage>
          </PopularNewsItem>
        </PopularNewsList>
      </SidebarSection>


      {/* Don't Miss It Section */}
      <SidebarSection as="section" aria-labelledby="trending-heading">
        <SectionTitle id="trending-heading" as="h3">DON'T MISS IT</SectionTitle>
        <TrendingList as="ul" role="list" aria-label="Trending articles">
          <TrendingItem as="li" role="listitem" tabIndex="0">
            <TrendingContent>
              <TrendingDate as="time" dateTime="2023-03-15">March 15, 2023</TrendingDate>
              <TrendingTitle as="h4">Strategies for Business Recovery and Growth</TrendingTitle>
            </TrendingContent>
          </TrendingItem>
          
          <TrendingItem as="li" role="listitem" tabIndex="0">
            <TrendingContent>
              <TrendingDate as="time" dateTime="2023-03-05">March 05, 2023</TrendingDate>
              <TrendingTitle as="h4">Adapting to New Trends and Technologies in the Digital Age</TrendingTitle>
            </TrendingContent>
          </TrendingItem>
          
          <TrendingItem as="li" role="listitem" tabIndex="0">
            <TrendingContent>
              <TrendingDate as="time" dateTime="2023-03-01">March 01, 2023</TrendingDate>
              <TrendingTitle as="h4">Staying Ahead in a Rapidly Changing Business Environment</TrendingTitle>
            </TrendingContent>
          </TrendingItem>
          
          <TrendingItem as="li" role="listitem" tabIndex="0">
            <TrendingContent>
              <TrendingDate as="time" dateTime="2023-02-28">February 28, 2023</TrendingDate>
              <TrendingTitle as="h4">Embracing Environmental and Social Responsibility for Long-Term Success</TrendingTitle>
            </TrendingContent>
          </TrendingItem>
          
          <TrendingItem as="li" role="listitem" tabIndex="0">
            <TrendingContent>
              <TrendingDate as="time" dateTime="2023-02-15">February 15, 2023</TrendingDate>
              <TrendingTitle as="h4">From Local to Global: Expanding Your Business into New Markets and Cultures</TrendingTitle>
            </TrendingContent>
          </TrendingItem>
        </TrendingList>
        <SeeMoreButton as="button" type="button" aria-label="Load more trending articles">Read More</SeeMoreButton>
      </SidebarSection>





    </SidebarContainer>
  )
}

export default Sidebar
