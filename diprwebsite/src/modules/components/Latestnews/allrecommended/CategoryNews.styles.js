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
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing(2)};
  
  .tabs-scroll-container {
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: ${theme.spacing(2)};
  }
  
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 ${theme.spacing(1)};
  }
`

export const Title = styled.h2`
  font-size: ${theme.spacing(3)};
  font-weight: bold;
  color: ${theme.colors.black};
  margin-bottom: ${theme.spacing(2)};
  font-family: ${theme.fonts.heading};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(2.5)};
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
  
  /* Hide scrollbar */
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: ${theme.spacing(1)};
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
  
  &:hover {
    color: ${theme.colors.primary};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.5)};
    padding: ${theme.spacing(0.5)} ${theme.spacing(1)};
  }
`

export const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const NewsCard = styled.div`
  background: ${theme.colors.light};
  border-radius: ${theme.spacing(0.5)};
  overflow: hidden;
  box-shadow: 0px ${theme.spacing(0.25)} ${theme.spacing(1)} rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px ${theme.spacing(0.5)} ${theme.spacing(1.5)} rgba(0, 0, 0, 0.1);
  }
`

export const NewsImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
  
  ${NewsCard}:hover & {
    transform: scale(1.05);
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    height: 180px;
  }
`

export const NewsContent = styled.div`
  padding: ${theme.spacing(2)};

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(1.5)};
  }
`

export const NewsCategory = styled.div`
  font-size: ${theme.spacing(1.25)};
  font-weight: bold;
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing(0.75)};
  font-family: ${theme.fonts.accent};
`

export const NewsTitle = styled.h3`
  font-size: ${theme.spacing(2)};
  font-weight: bold;
  color: ${theme.colors.black};
  margin-bottom: ${theme.spacing(1)};
  font-family: ${theme.fonts.heading};
  line-height: 1.3;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.75)};
  }
`

export const NewsText = styled.p`
  font-size: ${theme.spacing(1.5)};
  color: ${theme.colors.black};
  margin-top: ${theme.spacing(1.5)};
  font-family: ${theme.fonts.body};
  line-height: 1.5;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.25)};
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
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.25)};
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

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1)};
    gap: ${theme.spacing(1)};
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
          background-color: ${theme.colors.primary};
          opacity: 0.9;
        }
      }
    }
  }
`

// Skeleton components for loading state
export const SkeletonNewsCard = styled.div`
  background: ${theme.colors.light};
  border-radius: ${theme.spacing(0.5)};
  overflow: hidden;
  box-shadow: 0px ${theme.spacing(0.25)} ${theme.spacing(1)} rgba(0, 0, 0, 0.05);
  height: 400px;
`

export const SkeletonImage = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
`

export const SkeletonTitle = styled.div`
  width: ${(props) => props.width || "100%"};
  height: 24px;
  margin-bottom: ${theme.spacing(1)};
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: 4px;
`

export const SkeletonText = styled.div`
  width: ${(props) => props.width || "100%"};
  height: 16px;
  margin-bottom: ${theme.spacing(1)};
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: 4px;
  
  ${(props) => {
    if (props.count) {
      let styles = ""
      for (let i = 0; i < props.count; i++) {
        styles += `
          &:nth-child(${i + 4}) {
            width: ${90 - i * 10}%;
          }
        `
      }
      return styles
    }
  }}
`

export const SkeletonMeta = styled.div`
  display: flex;
  gap: ${theme.spacing(1)};
  margin-bottom: ${theme.spacing(1.5)};
  
  &::before, &::after {
    content: '';
    display: block;
    height: 14px;
    border-radius: 4px;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: ${shimmer} 1.5s infinite;
  }
  
  &::before {
    width: 30%;
  }
  
  &::after {
    width: 20%;
  }
`

export const SkeletonTab = styled.div`
  width: 80px;
  height: 30px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: 4px;
  margin-right: ${theme.spacing(1.5)};
`

export const SkeletonButton = styled.div`
  width: 100px;
  height: 30px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: 4px;
`

export const ShareIcons = styled.div`
  display: flex;
  gap: ${theme.spacing(1)};
  
  svg {
    width: 24px;
    height: 24px;
  }
`