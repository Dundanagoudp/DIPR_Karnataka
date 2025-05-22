import styled, { keyframes } from "styled-components"
import theme from "../../../../theme/Theme"

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
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
  
  .main-content {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  @media (max-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    
    .main-content {
      order: 1;
    }
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 ${theme.spacing(1)};
  }
`

export const Title = styled.h2`
  font-size: ${theme.spacing(2.5)};
  font-weight: bold;
  color: ${theme.colors.black};
  font-family: ${theme.fonts.heading};
  margin-bottom: ${theme.spacing(2)};
  grid-column: 1 / -1;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.spacing(2.25)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(2)};
    margin-bottom: ${theme.spacing(1.5)};
  }
`

export const FeaturedNewsCard = styled.div`
  background: ${theme.colors.light};
  border-radius: ${theme.spacing(0.5)};
  overflow: hidden;
  box-shadow: 0px ${theme.spacing(0.25)} ${theme.spacing(1)} rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px ${theme.spacing(0.5)} ${theme.spacing(1.5)} rgba(0, 0, 0, 0.1);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-bottom: ${theme.spacing(1)};
  }
`

export const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: 15px;
  }
`

export const StandardNewsCard = styled.div`
  background: ${theme.colors.light};
  border-radius: ${theme.spacing(0.5)};
  overflow: hidden;
  box-shadow: 0px ${theme.spacing(0.25)} ${theme.spacing(1)} rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px ${theme.spacing(0.5)} ${theme.spacing(1.5)} rgba(0, 0, 0, 0.1);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-bottom: ${theme.spacing(1)};
  }
`

export const NewsImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
  
  ${StandardNewsCard}:hover & {
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
  font-size: ${theme.spacing(1.5)};
  font-weight: bold;
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing(1)};
  font-family: ${theme.fonts.accent};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.25)};
  }
`

export const NewsTitle = styled.h2`
  font-size: ${theme.spacing(2.1)};
  font-weight: bold;
  color: ${theme.colors.black};
  margin-bottom: ${theme.spacing(1)};
  font-family: ${theme.fonts.heading};
  line-height: 1.3;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.spacing(1.9)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.7)};
  }
`

export const NewsText = styled.p`
  font-size: ${theme.spacing(1.75)};
  color: ${theme.colors.black};
  margin-top: ${theme.spacing(1.5)};
  margin-bottom: ${theme.spacing(1.5)};
  font-family: ${theme.fonts.body};
  line-height: 1.5;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.5)};
    margin-top: ${theme.spacing(1)};
    margin-bottom: ${theme.spacing(1)};
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
  gap: ${theme.spacing(2)};
  font-size: ${theme.spacing(1.2)};
  color: ${theme.colors.icons};
  margin-bottom: ${theme.spacing(1.5)};
  font-family: ${theme.fonts.body};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.25)};
    gap: ${theme.spacing(1)};
    margin-bottom: ${theme.spacing(1)};
  }
`

export const ReadTime = styled.span`
  font-weight: bold;
`

export const MostReadSection = styled.div`
  background: ${theme.colors.light};
  border-radius: ${theme.spacing(0.5)};
  padding: ${theme.spacing(1)};
  box-shadow: 0px ${theme.spacing(0.25)} ${theme.spacing(1)} rgba(0, 0, 0, 0.05);
  
  @media (max-width: ${theme.breakpoints.desktop}) {
    order: 0;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(1.5)};
  }
`

export const MostReadTitle = styled.h2`
  font-size: ${theme.spacing(2.5)};
  font-weight: bold;
  color: ${theme.colors.black};
  margin-bottom: ${theme.spacing(2)};
  font-family: ${theme.fonts.heading};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(2)};
    margin-bottom: ${theme.spacing(1.5)};
  }
`

export const MostReadList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(2.5)};

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: ${theme.spacing(2)};
  }
`

export const MostReadItem = styled.div`
  display: flex;
  gap: ${theme.spacing(1.5)};
  cursor: pointer;
  padding: ${theme.spacing(1)} 0;
  border-bottom: 1px solid ${theme.colors.border};
  transition: transform 0.2s ease;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    transform: translateX(5px);
  }
  
  &:hover h3 {
    color: ${theme.colors.primary};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: ${theme.spacing(1)};
    padding: ${theme.spacing(0.75)} 0;
  }
`

export const MostReadNumber = styled.div`
  font-size: ${theme.spacing(3)};
  font-weight: bold;
  color: ${theme.colors.black};
  font-family: ${theme.fonts.heading};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(2.5)};
  }
`

export const MostReadContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(0.5)};

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: ${theme.spacing(0.25)};
  }
`

export const MostReadCategory = styled.div`
  font-size: ${theme.spacing(1.25)};
  font-weight: bold;
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.accent};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.1)};
  }
`

export const MostReadHeadline = styled.h3`
  font-size: ${theme.spacing(1.75)};
  font-weight: bold;
  color: ${theme.colors.black};
  margin: 0;
  font-family: ${theme.fonts.heading};
  transition: color 0.2s ease;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.5)};
  }
`

export const MostReadTime = styled.div`
  font-size: ${theme.spacing(1.25)};
  color: ${theme.colors.icons};
  font-family: ${theme.fonts.body};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.1)};
  }
`

export const SectionDivider = styled.hr`
  border: none;
  border-top: 1px solid ${theme.colors.border};
  margin: ${theme.spacing(3)} 0;
  grid-column: 1 / -1;

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin: ${theme.spacing(2)} 0;
  }
`

export const NewsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  grid-column: 1 / -1;
  
  @media (max-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: ${theme.spacing(3)} 0;
  grid-column: 1 / -1;
  
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

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin: ${theme.spacing(2)} 0;
  }
`

export const SkeletonNewsCard = styled.div`
  background: ${theme.colors.light};
  border-radius: ${theme.spacing(0.5)};
  overflow: hidden;
  box-shadow: 0px ${theme.spacing(0.25)} ${theme.spacing(1)} rgba(0, 0, 0, 0.05);
  height: ${(props) => (props.isFeatured ? "auto" : "350px")};

  @media (max-width: ${theme.breakpoints.mobile}) {
    height: ${(props) => (props.isFeatured ? "auto" : "300px")};
  }
`

export const SkeletonImage = styled.div`
  width: 100%;
  height: ${(props) => props.height || "200px"};
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;

  @media (max-width: ${theme.breakpoints.mobile}) {
    height: ${(props) => props.height || "150px"};
  }
`

export const SkeletonTitle = styled.div`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "24px"};
  margin-bottom: ${theme.spacing(1)};
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: 4px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    height: ${(props) => props.height || "20px"};
  }
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

  @media (max-width: ${theme.breakpoints.mobile}) {
    height: 14px;
  }
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

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-bottom: ${theme.spacing(1)};
    
    &::before, &::after {
      height: 12px;
    }
  }
`