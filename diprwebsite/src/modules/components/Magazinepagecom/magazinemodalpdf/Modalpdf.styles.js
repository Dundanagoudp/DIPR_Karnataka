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

export const PageWrapper = styled.div`
  width: 100%;
  background: ${theme.colors.background};
`

export const Container = styled.div`
  display: flex;
  max-width: 1400px;
  margin: 0 auto;
  padding: ${theme.spacing(3)};
  background: ${theme.colors.background};
  font-family: ${theme.fonts.body};
  border-radius: 12px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    padding: ${theme.spacing(2)};
  }
`

export const SidebarContainer = styled.div`
  width: 220px;
  padding-right: ${theme.spacing(3)};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 100%;
    padding-right: 0;
    margin-bottom: ${theme.spacing(3)};
  }
`

export const MainContent = styled.div`
  flex: 1;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${theme.spacing(3)};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: ${theme.spacing(2)};
  }
`

export const HeaderTitle = styled.h1`
  font-size: ${theme.spacing(4)};
  color: ${theme.colors.black};
  font-family: ${theme.fonts.heading};
  margin: 0 0 ${theme.spacing(0.5)} 0;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(3)};
  }
`

export const HeaderSubtitle = styled.h2`
  font-size: ${theme.spacing(2)};
  color: ${theme.colors.textLight};
  font-family: ${theme.fonts.heading};
  margin: 0;
  font-weight: normal;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.5)};
  }
`

export const ViewToggle = styled.div`
  display: flex;
`

export const ViewToggleButton = styled.button`
  padding: ${theme.spacing(1)} ${theme.spacing(2)};
  border: 1px solid #ccc;
  background: white;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  
  &:hover {
    background: #f5f5f5;
  }
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: ${theme.spacing(3)};

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const MagazineCard = styled.div`
  padding: ${theme.spacing(0)};
  background: ${theme.colors.light};
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: scale(1.02);
  }
`

export const MagazineThumbnail = styled.img`
  width: 100%;
  aspect-ratio: 3/4;
  object-fit: cover;
  border: 4px solid ${theme.colors.primary};
  border-radius: 2px;
`

export const MagazineDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(1)};
  padding: ${theme.spacing(1.5)} ${theme.spacing(0.5)};
`

export const NewsMeta = styled.div`
  display: flex;
  font-size: ${theme.spacing(1.8)};
  color: ${theme.colors.textLight};
  gap: ${theme.spacing(1)};

  @media (max-width: 768px) {
    font-size: ${theme.spacing(1.5)};
  }
`

export const Title = styled.h4`
  font-size: ${theme.spacing(2)};
  color: ${theme.colors.textDark};
  margin: 0;

  @media (max-width: 768px) {
    font-size: ${theme.spacing(1.6)};
  }
`

export const MagazineMetacat = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(1)};
`

export const BookmarkIconWrapper = styled.div`
  cursor: pointer;
  color: ${({ isBookmarked }) => (isBookmarked ? theme.colors.primary : theme.colors.textLight)};
  transition: color 0.2s ease;

  &:hover {
    color: ${theme.colors.primary};
  }
`

export const ReadMoreButton = styled.button`
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: none;
  padding: ${theme.spacing(1)};
  border-radius: 20px;
  font-size: ${theme.spacing(1.5)};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing(0.5)};
  cursor: pointer;
  margin-top: ${theme.spacing(1)};
  width: 100%;

  &:hover {
    background: ${theme.colors.primaryDark};
  }
`

export const ReadMoreIcon = styled.span`
  font-size: ${theme.spacing(1.8)};
`

export const TabsContainer = styled.div`
  display: flex;
  gap: ${theme.spacing(1.5)};
  margin-bottom: ${theme.spacing(2)};
  overflow-x: auto;
  white-space: nowrap;
  scrollbar-width: thin;
  scrollbar-color: transparent;

  &::-webkit-scrollbar {
    height: ${theme.spacing(0.5)};
  }

  &::-webkit-scrollbar-thumb {
    background: ${theme.colors.primary};
    border-radius: ${theme.spacing(0.2)};
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: ${theme.spacing(1)};
  }
`

export const Tab = styled.button`
  background: none;
  border: none;
  font-size: ${theme.spacing(2)};
  cursor: pointer;
  color: ${(props) => (props.active ? theme.colors.primary : theme.colors.black)};
  border-bottom: ${(props) => (props.active ? `${theme.spacing(0.375)} solid ${theme.colors.primary}` : "none")};
  padding: ${theme.spacing(1)};
  font-weight: bold;
  font-family: ${theme.fonts.body};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.75)};
    padding: ${theme.spacing(0.75)};
  }
`

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: left;
  margin-top: 20px;
  padding: 20px;
`

export const ResultsInfo = styled.div`
  font-size: 14px;
  color: ${theme.colors.textLight};
  margin-bottom: ${theme.spacing(2)};
`

// Sidebar filter styles
export const FilterSection = styled.div`
  margin-bottom: ${theme.spacing(3)};
`

export const FilterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing(1.5)};
`

export const FilterTitle = styled.div`
  font-size: 14px;
  color: ${theme.colors.textLight};
`

export const CategoryName = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: ${theme.colors.textDark};
  margin-left: ${theme.spacing(1)};
`

export const FilterItem = styled.div`
  display: flex;
  align-items: center;
  padding: ${theme.spacing(1)} 0;
  cursor: pointer;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  color: ${(props) => (props.active ? theme.colors.black : theme.colors.textLight)};
  border-left: ${(props) => (props.active ? `2px solid ${theme.colors.primary}` : "none")};
  padding-left: ${(props) => (props.active ? theme.spacing(1) : theme.spacing(1.25))};
  font-size: 14px;
  
  &:hover {
    color: ${theme.colors.black};
  }
`

export const FilterIcon = styled.span`
  margin-right: ${theme.spacing(1)};
  color: #999;
`

// Skeleton loading styles
export const SkeletonCard = styled.div`
  padding: ${theme.spacing(0)};
  background: ${theme.colors.light};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(1.5)};
`

export const SkeletonThumbnail = styled.div`
  width: 100%;
  aspect-ratio: 3/4;
  border-radius: 2px;
  background: #e0e0e0;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
  border: 4px solid #e0e0e0;
`

export const SkeletonTitle = styled.div`
  height: 24px;
  width: 90%;
  background: #e0e0e0;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: 4px;
`

export const SkeletonMeta = styled.div`
  height: 16px;
  width: 80%;
  background: #e0e0e0;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: 4px;
  margin-top: 8px;
`

export const SkeletonButton = styled.div`
  height: 36px;
  width: 100%;
  background: #e0e0e0;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: 20px;
  margin-top: 16px;
`
