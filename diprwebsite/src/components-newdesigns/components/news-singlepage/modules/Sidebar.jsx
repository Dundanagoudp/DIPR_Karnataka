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
  SocialMediaAction,
  PopularNewsList,
  PopularNewsItem,
  PopularNewsImage,
  PopularNewsContent,
  PopularNewsDate,
  PopularNewsTitle,
  TrendingList,
  TrendingItem,
  TrendingNumber,
  TrendingContent,
  TrendingTitle,
  TrendingDate,
  CategoryMenu,
  CategoryItem,
  CategoryLink,
  NewsletterBox,
  NewsletterTitle,
  NewsletterText,
  NewsletterForm,
  NewsletterInput,
  NewsletterButton,
  CalendarWidget,
  CalendarTitle,
  CalendarDate,
  CalendarEvent,
  MostCommentedList,
  MostCommentedItem,
  MostCommentedTitle,
  MostCommentedComments,
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
            <PopularNewsContent>
              <PopularNewsDate>March 10, 2024</PopularNewsDate>
              <PopularNewsTitle>
                Golf Legend Somana Reads Resume to Professional Competition After Long Layoff
              </PopularNewsTitle>
            </PopularNewsContent>
          </PopularNewsItem>
          
          <PopularNewsItem>
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
            <PopularNewsContent>
              <PopularNewsDate>March 9, 2024</PopularNewsDate>
              <PopularNewsTitle>
                Karnataka's New Wildlife Conservation Initiative Gains International Recognition
              </PopularNewsTitle>
            </PopularNewsContent>
          </PopularNewsItem>
          
          <PopularNewsItem>
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
            <PopularNewsContent>
              <PopularNewsDate>March 8, 2024</PopularNewsDate>
              <PopularNewsTitle>
                Heritage Tourism Booms in Northern Karnataka Districts
              </PopularNewsTitle>
            </PopularNewsContent>
          </PopularNewsItem>
          
          <PopularNewsItem>
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
            <PopularNewsContent>
              <PopularNewsDate>March 7, 2024</PopularNewsDate>
              <PopularNewsTitle>
                Community-Led Environmental Projects Transform Rural Karnataka
              </PopularNewsTitle>
            </PopularNewsContent>
          </PopularNewsItem>
          
          <PopularNewsItem>
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
            <PopularNewsContent>
              <PopularNewsDate>March 6, 2024</PopularNewsDate>
              <PopularNewsTitle>
                New Agricultural Technologies Boost Farmer Incomes in Karnataka
              </PopularNewsTitle>
            </PopularNewsContent>
          </PopularNewsItem>
        </PopularNewsList>
      </SidebarSection>

      {/* Trending Now Section */}
      <SidebarSection>
        <SectionTitle>TRENDING NOW</SectionTitle>
        <TrendingList>
          <TrendingItem>
            <TrendingNumber>1</TrendingNumber>
            <TrendingContent>
              <TrendingTitle>Karnataka's Green Revolution Reaches New Heights</TrendingTitle>
              <TrendingDate>March 10, 2024</TrendingDate>
            </TrendingContent>
          </TrendingItem>
          
          <TrendingItem>
            <TrendingNumber>2</TrendingNumber>
            <TrendingContent>
              <TrendingTitle>Heritage Sites See Record Tourist Footfall</TrendingTitle>
              <TrendingDate>March 9, 2024</TrendingDate>
            </TrendingContent>
          </TrendingItem>
          
          <TrendingItem>
            <TrendingNumber>3</TrendingNumber>
            <TrendingContent>
              <TrendingTitle>Wildlife Conservation Efforts Show Remarkable Results</TrendingTitle>
              <TrendingDate>March 8, 2024</TrendingDate>
            </TrendingContent>
          </TrendingItem>
          
          <TrendingItem>
            <TrendingNumber>4</TrendingNumber>
            <TrendingContent>
              <TrendingTitle>Community Development Programs Transform Rural Areas</TrendingTitle>
              <TrendingDate>March 7, 2024</TrendingDate>
            </TrendingContent>
          </TrendingItem>
          
          <TrendingItem>
            <TrendingNumber>5</TrendingNumber>
            <TrendingContent>
              <TrendingTitle>Technology Integration Boosts Agricultural Productivity</TrendingTitle>
              <TrendingDate>March 6, 2024</TrendingDate>
            </TrendingContent>
          </TrendingItem>
        </TrendingList>
      </SidebarSection>

      {/* Don't Miss It Section */}
      <SidebarSection>
        <SectionTitle>DON'T MISS IT</SectionTitle>
        <TrendingList>
          <TrendingItem>
            <TrendingContent>
              <TrendingTitle>Strategies for Business Recovery and Growth</TrendingTitle>
              <TrendingDate>March 10, 2024</TrendingDate>
            </TrendingContent>
          </TrendingItem>
          
          <TrendingItem>
            <TrendingContent>
              <TrendingTitle>Innovation in Sustainable Development Practices</TrendingTitle>
              <TrendingDate>March 9, 2024</TrendingDate>
            </TrendingContent>
          </TrendingItem>
          
          <TrendingItem>
            <TrendingContent>
              <TrendingTitle>Digital Transformation in Government Services</TrendingTitle>
              <TrendingDate>March 8, 2024</TrendingDate>
            </TrendingContent>
          </TrendingItem>
          
          <TrendingItem>
            <TrendingContent>
              <TrendingTitle>Youth Empowerment Through Skill Development</TrendingTitle>
              <TrendingDate>March 7, 2024</TrendingDate>
            </TrendingContent>
          </TrendingItem>
        </TrendingList>
      </SidebarSection>

      {/* Discover by Category */}
      <SidebarSection>
        <SectionTitle>DISCOVER BY CATEGORY</SectionTitle>
        <CategoryMenu>
          <CategoryItem>
            <CategoryLink href="#">Nature</CategoryLink>
          </CategoryItem>
          <CategoryItem>
            <CategoryLink href="#">Culture</CategoryLink>
          </CategoryItem>
          <CategoryItem>
            <CategoryLink href="#">Travel</CategoryLink>
          </CategoryItem>
          <CategoryItem>
            <CategoryLink href="#">Heritage</CategoryLink>
          </CategoryItem>
          <CategoryItem>
            <CategoryLink href="#">Environment</CategoryLink>
          </CategoryItem>
          <CategoryItem>
            <CategoryLink href="#">Tourism</CategoryLink>
          </CategoryItem>
        </CategoryMenu>
      </SidebarSection>

      {/* Most Commented */}
      <SidebarSection>
        <SectionTitle>MOST COMMENTED</SectionTitle>
        <MostCommentedList>
          <MostCommentedItem>
            <MostCommentedTitle>Karnataka's Environmental Success Stories</MostCommentedTitle>
            <MostCommentedComments>127 comments</MostCommentedComments>
          </MostCommentedItem>
          
          <MostCommentedItem>
            <MostCommentedTitle>Heritage Conservation Challenges and Solutions</MostCommentedTitle>
            <MostCommentedComments>89 comments</MostCommentedComments>
          </MostCommentedItem>
          
          <MostCommentedItem>
            <MostCommentedTitle>Community Development in Rural Karnataka</MostCommentedTitle>
            <MostCommentedComments>76 comments</MostCommentedComments>
          </MostCommentedItem>
        </MostCommentedList>
      </SidebarSection>

      {/* Today in History Calendar Widget */}
      <SidebarSection>
        <CalendarWidget>
          <CalendarTitle>Today in History</CalendarTitle>
          <CalendarDate>March 10, 2024</CalendarDate>
          <CalendarEvent>
            On this day in 1956, Karnataka was formed as a state, 
            bringing together Kannada-speaking regions.
          </CalendarEvent>
        </CalendarWidget>
      </SidebarSection>

      {/* Newsletter Subscription */}
      <SidebarSection>
        <NewsletterBox>
          <NewsletterTitle>Get Weekly Nature Stories</NewsletterTitle>
          <NewsletterText>
            Subscribe to our newsletter for the latest updates on Karnataka's 
            environmental and heritage stories.
          </NewsletterText>
          <NewsletterForm>
            <NewsletterInput 
              type="email" 
              placeholder="Enter your email address"
            />
            <NewsletterButton type="submit">Subscribe</NewsletterButton>
          </NewsletterForm>
        </NewsletterBox>
      </SidebarSection>

      {/* See More Button */}
      <SeeMoreButton>See More</SeeMoreButton>
    </SidebarContainer>
  )
}

export default Sidebar
