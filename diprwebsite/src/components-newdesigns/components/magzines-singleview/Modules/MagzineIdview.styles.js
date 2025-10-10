import styled, { keyframes } from "styled-components"
import theme from "../../../../theme/Theme"

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const MagazineViewContainer = styled.div`
  max-width: 90%;
  margin: 0 auto;
  padding: ${theme.spacing(3)};
  background: ${theme.colors.gray[100]};
  font-family: ${theme.fonts.body};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing(2)};
  }
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(1.5)};
  }
`

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing(3)};
  padding-bottom: ${theme.spacing(3)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding-bottom: ${theme.spacing(2.5)};
    gap: ${theme.spacing(2)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-bottom: ${theme.spacing(2)};
    padding-bottom: ${theme.spacing(2)};
    flex-direction: column;
    align-items: flex-start;
    gap: ${theme.spacing(1.5)};
  }
`

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(1)};
`

export const PageTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(20px, 2.5vw, 20px);
  font-weight: 700;
  color: ${theme.colors.primary};
  margin: 0;
  margin-bottom: ${theme.spacing(2)};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 250px;
    height: 1px;
    background: ${theme.colors.gray[700]};
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: clamp(18px, 2.3vw, 20px);
    
    &::after {
      width: 200px;
    }
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: clamp(16px, 2vw, 18px);
    
    &::after {
      width: 150px;
    }
  }
`

export const Breadcrumb = styled.p`
  font-size: ${theme.fontSizes.medium};
  font-family: ${theme.fonts.body};
  color: ${theme.colors.text};
  margin: 0;
  font-weight: 400;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fontSizes.small};
  }
`

export const YearFilterWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 100%;
    
    select {
      width: 100%;
    }
  }
`

export const YearFilterIcon = styled.div`
  position: absolute;
  right: ${theme.spacing(1.5)};
  pointer-events: none;
  display: flex;
  align-items: center;
  color: ${theme.colors.primary};
  font-size: 18px;
`

export const YearFilter = styled.select`
  padding: ${theme.spacing(1)} ${theme.spacing(4)} ${theme.spacing(1)} ${theme.spacing(2)};
  font-size: ${theme.fontSizes.medium};
  font-family: ${theme.fonts.body};
  color: ${theme.colors.text};
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.gray[300]};
  border-radius: 0;
  cursor: pointer;
  outline: none;
  transition: all ${theme.transitions.fast};
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);

  &:hover {
    border-color: ${theme.colors.primary};
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12);
  }

  &:focus {
    border-color: ${theme.colors.primary};
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fontSizes.small};
    padding: ${theme.spacing(0.75)} ${theme.spacing(3.5)} ${theme.spacing(0.75)} ${theme.spacing(1.5)};
  }
`

export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing(3)};
  padding: ${theme.spacing(2)};
  background: ${theme.colors.white};
  border-radius: ${theme.spacing(0.5)};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${theme.spacing(1.5)};
    margin-bottom: ${theme.spacing(2)};
    padding: ${theme.spacing(1.5)};
  }
`

export const MainDownloadButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(0.75)};
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: ${theme.spacing(1.25)} ${theme.spacing(2)};
  font-size: ${theme.fontSizes.medium};
  font-weight: 500;
  border-radius: ${theme.borderRadius.medium};
  border: none;
  cursor: pointer;
  transition: all ${theme.transitions.fast};
  font-family: ${theme.fonts.body};
  
  svg {
    font-size: 18px;
  }
  
  &:hover {
    background-color: ${theme.colors.secondary};
    box-shadow: 0 4px 8px rgba(${theme.colors.primaryRgb}, 0.3);
  }
  
  &:active {
    transform: scale(0.98);
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 100%;
    justify-content: center;
    font-size: ${theme.fontSizes.small};
    padding: ${theme.spacing(1)} ${theme.spacing(1.5)};
  }
`

export const DownloadButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing(0.5)};
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: none;
  border-radius: ${theme.borderRadius.medium};
  padding: ${theme.spacing(1.5)} ${theme.spacing(1.25)};
  font-size: ${theme.fontSizes.small};
  font-weight: 500;
  cursor: pointer;
  margin: ${theme.spacing(2.5)} auto ${theme.spacing(2.5)};
  transition: all ${theme.transitions.fast};
  font-family: ${theme.fonts.body};
  width: fit-content;
  max-width: 200px;
  
  svg {
    font-size: 18px;
  }
  
  &:hover {
    background-color: ${theme.colors.secondary};
    box-shadow: 0 4px 8px rgba(${theme.colors.primaryRgb}, 0.3);
  }
  
  &:active {
    transform: scale(0.98);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    margin: ${theme.spacing(2)} auto ${theme.spacing(2)};
    padding: ${theme.spacing(1.25)} ${theme.spacing(1)};
    font-size: 12px;
    max-width: 150px;
    
    svg {
      font-size: 16px;
    }
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    margin: ${theme.spacing(1.5)} auto ${theme.spacing(1.5)};
    padding: ${theme.spacing(1)} ${theme.spacing(0.875)};
    font-size: 11px;
    max-width: 120px;
    
    svg {
      font-size: 14px;
    }
  }
`

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: ${theme.spacing(2)};
  background: ${theme.colors.white};
  border-radius: ${theme.spacing(1)};
  padding: ${theme.spacing(2)};
  min-height: 600px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 120px 1fr;
    min-height: 500px;
  }
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 80px 1fr;
    padding: ${theme.spacing(1.5)};
    min-height: 400px;
    gap: ${theme.spacing(1)};
  }
`

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(1.5)};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: ${theme.spacing(1)};
  }
`

export const Thumbnail = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 4;
  background: ${theme.colors.white};
  border-radius: ${theme.spacing(0.5)};
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 3px solid ${props => props.active ? theme.colors.primary : theme.colors.gray[300]};
  box-shadow: ${props => props.active ? '0 0 10px rgba(30, 136, 229, 0.5)' : '0 2px 4px rgba(0, 0, 0, 0.1)'};
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: ${props => props.active ? 1 : 0.8};
  }
  
  &:hover {
    transform: scale(1.05);
    border-color: ${theme.colors.primary};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    
    img {
      opacity: 1;
    }
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    border-width: 2px;
  }
`

export const PageNumber = styled.div`
  position: absolute;
  bottom: 4px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 2px 8px;
  border-radius: 3px;
  font-size: 12px;
  font-weight: 600;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 10px;
    padding: 1px 6px;
  }
`

export const MainPdfViewer = styled.div`
  flex: 1;
  background: ${theme.colors.white};
  border-radius: ${theme.spacing(0.5)};
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${theme.colors.gray[300]};

  iframe {
    border: none;
  }
`

export const LoadingSpinner = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid ${theme.colors.primary};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
  position: absolute;
  z-index: 1;
`

export const RecommendedSection = styled.div`
  margin-top: ${theme.spacing(4)};
  padding: ${theme.spacing(2)};
  background-color: ${theme.colors.gray[100]};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    margin-top: ${theme.spacing(3)};
    padding: ${theme.spacing(2)};
  }
  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-top: ${theme.spacing(2.5)};
    padding: ${theme.spacing(1.5)};
  }
`

export const RecommendedTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(20px, 2.5vw, 20px);
  font-weight: 700;
  color: ${theme.colors.primary};
  margin: 0;
  margin-bottom: ${theme.spacing(3)};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 250px;
    height: 1px;
    background: ${theme.colors.gray[700]};
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: clamp(18px, 2.3vw, 20px);
    margin-bottom: ${theme.spacing(2.5)};
    
    &::after {
      width: 200px;
    }
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: clamp(16px, 2vw, 18px);
    margin-bottom: ${theme.spacing(2)};
    
    &::after {
      width: 150px;
    }
  }
`

export const MagazineGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${theme.spacing(4)} ${theme.spacing(3)};
  padding: ${theme.spacing(3)} ${theme.spacing(3)} 0;
  
  @media (max-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
    gap: ${theme.spacing(3.5)} ${theme.spacing(2.5)};
    padding: ${theme.spacing(2.5)} ${theme.spacing(2.5)} 0;
  }
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing(3)} ${theme.spacing(2)};
    padding: ${theme.spacing(2)} ${theme.spacing(2)} 0;
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing(2.5)} ${theme.spacing(1.5)};
    padding: ${theme.spacing(1.5)} ${theme.spacing(1.5)} 0;
  }
`

export const MagazineCard = styled.div`
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  
  &:hover {
    transform: translateY(-4px);
  }
`

export const MagazineImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  background-color: ${theme.colors.gray[200]};
  position: relative;
  cursor: pointer;
`

export const MagazineImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  ${MagazineCard}:hover & {
    transform: scale(1.05);
  }
`

export const MagazineInfo = styled.div`
  padding: ${theme.spacing(1.5)} ${theme.spacing(1)} ${theme.spacing(1)};
  text-align: left;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing(1.25)} ${theme.spacing(0.75)} ${theme.spacing(0.75)};
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(1)} ${theme.spacing(0.5)} ${theme.spacing(0.5)};
  }
`

export const MagazineCardTitle = styled.h3`
  font-size: ${theme.fontSizes.medium};
  font-weight: 600;
  color: ${theme.colors.text};
  margin: 0 0 6px 0;
  line-height: 1.4;
  font-family: ${theme.fonts.heading};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 14px;
    margin: 0 0 4px 0;
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 12px;
    margin: 0 0 3px 0;
  }
`

export const MagazineEdition = styled.span`
  font-size: ${theme.fontSizes.small};
  color: ${theme.colors.lightText};
  font-weight: 400;
  display: block;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 12px;
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 11px;
  }
`

