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
    <SidebarContainer>
      {/* Follow Us Section */}
      <SidebarSection>
        <SectionTitle>FOLLOW US</SectionTitle>
        <SocialMediaList>
          <SocialMediaItem>
            <SocialMediaButton style={{ backgroundColor: '#1877F2' }}>
              <SocialMediaIcon>
                <FaFacebookF />
              </SocialMediaIcon>
              <SocialMediaInfo>
                <SocialMediaStats>135,684</SocialMediaStats>
                <SocialMediaName>Facebook fans</SocialMediaName>
              </SocialMediaInfo>
            </SocialMediaButton>
          </SocialMediaItem>
          
          <SocialMediaItem>
            <SocialMediaButton style={{ backgroundColor: '#1DA1F2' }}>
              <SocialMediaIcon>
                <FaTwitter />
              </SocialMediaIcon>
              <SocialMediaInfo>
                <SocialMediaStats>87,043</SocialMediaStats>
                <SocialMediaName>Twitter followers</SocialMediaName>
              </SocialMediaInfo>
            </SocialMediaButton>
          </SocialMediaItem>
          
          <SocialMediaItem>
            <SocialMediaButton style={{ backgroundColor: '#E4405F' }}>
              <SocialMediaIcon>
                <RiInstagramFill />
              </SocialMediaIcon>
              <SocialMediaInfo>
                <SocialMediaStats>64,350</SocialMediaStats>
                <SocialMediaName>Instagram followers</SocialMediaName>
              </SocialMediaInfo>
            </SocialMediaButton>
          </SocialMediaItem>
          
          <SocialMediaItem>
            <SocialMediaButton style={{ backgroundColor: '#0077B5' }}>
              <SocialMediaIcon>
                <FaLinkedinIn />
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
      <SidebarSection>
        <SectionTitle>POPULAR NEWS</SectionTitle>
        <PopularNewsList>
          <PopularNewsItem>
            <PopularNewsContent>
              <PopularNewsDate>March 19, 2023</PopularNewsDate>
              <PopularNewsTitle>
                Golf Legend Santana Reeds Returns to Professional Competition After Long Layoff
              </PopularNewsTitle>
            </PopularNewsContent>
            <PopularNewsImage>
              <img 
                src="/state/2ndimage.jpg" 
                alt="Popular news" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover' 
                }} 
              />
            </PopularNewsImage>
          </PopularNewsItem>
          
          <PopularNewsItem>
            <PopularNewsContent>
              <PopularNewsDate>March 18, 2023</PopularNewsDate>
              <PopularNewsTitle>
                Christian Garret Breaks Scoring Record in European Soccer League
              </PopularNewsTitle>
            </PopularNewsContent>
            <PopularNewsImage>
              <img 
                src="/state/2ndsection.jpg" 
                alt="Popular news" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover' 
                }} 
              />
            </PopularNewsImage>
          </PopularNewsItem>
          
          <PopularNewsItem>
            <PopularNewsContent>
              <PopularNewsDate>March 19, 2023</PopularNewsDate>
              <PopularNewsTitle>
                Tennis Star Dmitri Ivanov Wins Record Ninth Australian Open Title
              </PopularNewsTitle>
            </PopularNewsContent>
            <PopularNewsImage>
              <img 
                src="/state/rightside.jpg" 
                alt="Popular news" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover' 
                }} 
              />
            </PopularNewsImage>
          </PopularNewsItem>
          
          <PopularNewsItem>
            <PopularNewsContent>
              <PopularNewsDate>March 18, 2023</PopularNewsDate>
              <PopularNewsTitle>
                NBA Announces All-Star Rosters, with Top Players Set to Compete in Las Vegas
              </PopularNewsTitle>
            </PopularNewsContent>
            <PopularNewsImage>
              <img 
                src="/state/sidebar.jpg" 
                alt="Popular news" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover' 
                }} 
              />
            </PopularNewsImage>
          </PopularNewsItem>
          
          <PopularNewsItem>
            <PopularNewsContent>
              <PopularNewsDate>March 18, 2023</PopularNewsDate>
              <PopularNewsTitle>
                NFL Announces Major Expansion Plans for Global Reach
              </PopularNewsTitle>
            </PopularNewsContent>
            <PopularNewsImage>
              <img 
                src="/state/sidebar2.jpg" 
                alt="Popular news" 
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
      <SidebarSection>
        <SectionTitle>DON'T MISS IT</SectionTitle>
        <TrendingList>
          <TrendingItem>
            <TrendingContent>
              <TrendingDate>March 15, 2023</TrendingDate>
              <TrendingTitle>Strategies for Business Recovery and Growth</TrendingTitle>
            </TrendingContent>
          </TrendingItem>
          
          <TrendingItem>
            <TrendingContent>
              <TrendingDate>March 05, 2023</TrendingDate>
              <TrendingTitle>Adapting to New Trends and Technologies in the Digital Age</TrendingTitle>
            </TrendingContent>
          </TrendingItem>
          
          <TrendingItem>
            <TrendingContent>
              <TrendingDate>March 01, 2023</TrendingDate>
              <TrendingTitle>Staying Ahead in a Rapidly Changing Business Environment</TrendingTitle>
            </TrendingContent>
          </TrendingItem>
          
          <TrendingItem>
            <TrendingContent>
              <TrendingDate>February 28, 2023</TrendingDate>
              <TrendingTitle>Embracing Environmental and Social Responsibility for Long-Term Success</TrendingTitle>
            </TrendingContent>
          </TrendingItem>
          
          <TrendingItem>
            <TrendingContent>
              <TrendingDate>February 15, 2023</TrendingDate>
              <TrendingTitle>From Local to Global: Expanding Your Business into New Markets and Cultures</TrendingTitle>
            </TrendingContent>
          </TrendingItem>
        </TrendingList>
        <SeeMoreButton>Read More</SeeMoreButton>
      </SidebarSection>





    </SidebarContainer>
  )
}

export default Sidebar
