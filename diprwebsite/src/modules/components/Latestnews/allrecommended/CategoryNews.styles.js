import styled, { keyframes } from "styled-components"
import theme from "../../../../theme/Theme"

// Shimmer animation for skeleton loading
const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: ${theme.spacing(2)};
  
  .tabs-scroll-container {
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: ${theme.spacing(2)};
  }
  
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing(1.5)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(1)};
  }
`

export const Title = styled.h2`
  font-size: ${theme.spacing(3)};
  font-weight: bold;
  color: ${theme.colors.black};
  margin-bottom: ${theme.spacing(2)};
  font-family: ${theme.fonts.heading};

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.spacing(2.75)};
    margin-bottom: ${theme.spacing(1.75)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(2.5)};
    margin-bottom: ${theme.spacing(1.5)};
  }
`

export const TabsContainer = styled.div`
  display: flex;
  gap: ${theme.spacing(1.5)};
  margin-bottom: ${theme.spacing(3)};
  overflow-x: auto;
  white-space: nowrap;
  padding-bottom: ${theme.spacing(1)};
  flex: 1;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  
  /* Hide scrollbar */
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    gap: ${theme.spacing(1.25)};
    margin-bottom: ${theme.spacing(2.5)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: ${theme.spacing(1)};
    margin-bottom: ${theme.spacing(2)};
  }
`

export const ScrollButton = styled.button`
  background: ${theme.colors.light};
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 2;
  color: ${theme.colors.primary};
  
  &:hover {
    background: ${theme.colors.background};
  }
  
  &:focus {
    outline: none;
  }
  
  margin: ${(props) => (props.direction === "left" ? "0 10px 0 0" : "0 0 0 10px")};

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 25px;
    height: 25px;
    margin: ${(props) => (props.direction === "left" ? "0 5px 0 0" : "0 0 0 5px")};
  }
`

export const Tab = styled.button`
  background: none;
  border: none;
  font-size: ${theme.spacing(1.75)};
  cursor: pointer;
  color: ${(props) => (props.active ? theme.colors.primary : theme.colors.black)};
  border-bottom: ${(props) => (props.active ? `2px solid ${theme.colors.primary}` : "none")};
  padding: ${theme.spacing(0.75)} ${theme.spacing(1.5)};
  font-weight: bold;
  font-family: ${theme.fonts.body};
  transition: all 0.2s ease;
  white-space: nowrap;
  
  &:hover {
    color: ${theme.colors.primary};
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.spacing(1.6)};
    padding: ${theme.spacing(0.6)} ${theme.spacing(1.25)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.5)};
    padding: ${theme.spacing(0.5)} ${theme.spacing(1)};
  }
`

export const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${theme.spacing(2.5)};
  margin-top: ${theme.spacing(2)};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: ${theme.spacing(2)};
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing(1.5)};
  }
`

export const NewsCard = styled.div`
  background: ${theme.colors.light};
  border-radius: ${theme.spacing(0.5)};
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-bottom: 0;
    
    &:hover {
      transform: translateY(-3px);
    }
  }
`

export const NewsImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    height: 180px;
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    height: 160px;
  }
`

export const NewsContent = styled.div`
  padding: ${theme.spacing(2)};
  flex: 1;
  display: flex;
  flex-direction: column;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing(1.5)};
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(1.25)};
  }
`

export const NewsCategory = styled.div`
  font-size: ${theme.spacing(1.25)};
  font-weight: bold;
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing(0.75)};
  font-family: ${theme.fonts.accent};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.1)};
    margin-bottom: ${theme.spacing(0.5)};
  }
`

export const NewsTitle = styled.h3`
  font-size: ${theme.spacing(2)};
  font-weight: bold;
  color: ${theme.colors.black};
  margin-bottom: ${theme.spacing(1)};
  font-family: ${theme.fonts.heading};
  line-height: 1.3;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.spacing(1.85)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.75)};
    margin-bottom: ${theme.spacing(0.75)};
  }
`

export const NewsText = styled.p`
  font-size: ${theme.spacing(1.5)};
  color: ${theme.colors.black};
  margin-top: ${theme.spacing(1.5)};
  font-family: ${theme.fonts.body};
  line-height: 1.5;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.spacing(1.35)};
    margin-top: ${theme.spacing(1.25)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.25)};
    margin-top: ${theme.spacing(1)};
  }
`

export const ReadMore = styled.a`
  color: ${theme.colors.primary};
  font-size: ${theme.spacing(1.5)};
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  display: inline-block;
  margin-top: ${theme.spacing(1)};
  transition: color 0.2s ease;
  
  &:hover {
    text-decoration: underline;
  }
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.spacing(1.35)};
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.25)};
    margin-top: ${theme.spacing(0.75)};
  }
`

export const NewsMeta = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(1.5)};
  font-size: ${theme.spacing(1.25)};
  color: ${theme.colors.icons};
  margin-bottom: ${theme.spacing(1)};
  font-family: ${theme.fonts.body};

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.spacing(1.1)};
    gap: ${theme.spacing(1.25)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1)};
    gap: ${theme.spacing(1)};
    margin-bottom: ${theme.spacing(0.75)};
  }
`

export const ReadTime = styled.span`
  font-weight: bold;
`

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: ${theme.spacing(3)} 0;
  
  .MuiPagination-root {
    .MuiPaginationItem-root {
      font-family: ${theme.fonts.body};
      
      &.Mui-selected {
        background-color: ${theme.colors.primary};
        color: white;
        
        &:hover {
          background-color: ${theme.colors.primaryDark};
        }
      }
    }
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    margin: ${theme.spacing(2.5)} 0;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin: ${theme.spacing(2)} 0;
    
    .MuiPagination-root {
      .MuiPaginationItem-root {
        min-width: 32px;
        height: 32px;
        font-size: 14px;
      }
    }
  }
`

// Skeleton loading components
export const SkeletonNewsCard = styled.div`
  background: ${theme.colors.light};
  border-radius: ${theme.spacing(0.5)};
  overflow: hidden;
  height: ${(props) => (props.isFeatured ? "400px" : "350px")};

  @media (max-width: ${theme.breakpoints.tablet}) {
    height: ${(props) => (props.isFeatured ? "350px" : "330px")};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    height: ${(props) => (props.isFeatured ? "300px" : "280px")};
  }
`

export const SkeletonImage = styled.div`
  width: 100%;
  height: ${(props) => props.height || "200px"};
  background: linear-gradient(to right, #f6f7f8 8%, #edeef1 18%, #f6f7f8 33%);
  background-size: 800px 104px;
  animation: ${shimmer} 1.2s linear infinite;

  @media (max-width: ${theme.breakpoints.tablet}) {
    height: ${(props) => props.height || "190px"};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    height: ${(props) => props.height || "180px"};
  }
`

export const SkeletonTitle = styled.div`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "20px"};
  margin: ${theme.spacing(1)} 0;
  background: linear-gradient(to right, #f6f7f8 8%, #edeef1 18%, #f6f7f8 33%);
  background-size: 800px 104px;
  animation: ${shimmer} 1.2s linear infinite;
  border-radius: 4px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    height: ${(props) => props.height || "16px"};
  }
`

export const SkeletonText = styled.div`
  width: ${(props) => props.width || "100%"};
  height: 16px;
  margin: ${theme.spacing(0.5)} 0;
  background: linear-gradient(to right, #f6f7f8 8%, #edeef1 18%, #f6f7f8 33%);
  background-size: 800px 104px;
  animation: ${shimmer} 1.2s linear infinite;
  border-radius: 4px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    height: 14px;
  }
`

export const SkeletonTab = styled.div`
  width: 100px;
  height: 32px;
  background: linear-gradient(to right, #f6f7f8 8%, #edeef1 18%, #f6f7f8 33%);
  background-size: 800px 104px;
  animation: ${shimmer} 1.2s linear infinite;
  border-radius: 16px;
  margin-right: ${theme.spacing(1)};

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 80px;
    height: 28px;
  }
`

export const SkeletonMeta = styled.div`
  width: 60%;
  height: 16px;
  margin: ${theme.spacing(1)} 0;
  background: linear-gradient(to right, #f6f7f8 8%, #edeef1 18%, #f6f7f8 33%);
  background-size: 800px 104px;
  animation: ${shimmer} 1.2s linear infinite;
  border-radius: 4px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    height: 14px;
  }
`

export const ShareIcons = styled.div`
  display: flex;
  gap: ${theme.spacing(1)};
  
  svg {
    width: 24px;
    height: 24px;
  }
`