import styled, { keyframes } from "styled-components"
import theme from "../../../../theme/Theme"

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const MagazineViewContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: ${theme.spacing(3)} ${theme.spacing(15)};
  background: ${theme.colors.gray[100]};
  font-family: ${theme.fonts.body};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing(2)} ${theme.spacing(6)};
  }
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(1.5)} ${theme.spacing(3)};
  }
`

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing(2)};
  padding-bottom: ${theme.spacing(2)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding-bottom: ${theme.spacing(2)};
    gap: ${theme.spacing(2)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-bottom: ${theme.spacing(1.5)};
    padding-bottom: ${theme.spacing(1.5)};
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
  padding: ${theme.spacing(2)};
  background: ${theme.colors.white};
  border-radius: ${theme.spacing(0.5)};
  border-bottom: 1px solid ${theme.colors.gray[300]};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${theme.spacing(1.5)};
    margin-bottom: ${theme.spacing(1)};
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
  display: flex;
  justify-content: center;
  background: ${theme.colors.white};
  padding: ${theme.spacing(2)};
  min-height: 600px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    min-height: 500px;
  }
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(1.5)};
    min-height: 400px;
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
  margin-top: ${theme.spacing(2)};
  padding: ${theme.spacing(2)};
  background-color: ${theme.colors.gray[100]};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    margin-top: ${theme.spacing(2)};
    padding: ${theme.spacing(2)};
  }
  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-top: ${theme.spacing(1.5)};
    padding: ${theme.spacing(1.5)};
  }
`

export const RecommendedHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing(3)};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${theme.spacing(1.5)};
    margin-bottom: ${theme.spacing(2)};
  }
`

export const RecommendedTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(20px, 2.5vw, 20px);
  font-weight: 700;
  color: ${theme.colors.primary};
  margin: 0;
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

export const SeeMoreButton = styled.button`
  background: none;
  border: none;
  color: ${theme.colors.primary};
  font-size: ${theme.fontSizes.medium};
  font-weight: 500;
  font-family: ${theme.fonts.body};
  cursor: pointer;
  padding: ${theme.spacing(0.5)} ${theme.spacing(1)};
  transition: all ${theme.transitions.fast};
  display: flex;
  align-items: center;
  gap: ${theme.spacing(0.5)};
  border-radius: ${theme.borderRadius.small};
  
  svg {
    font-size: 18px;
    transition: all ${theme.transitions.fast};
  }
  
  &:hover {
    color: ${theme.colors.secondary};
    background-color: ${theme.colors.gray[100]};
    
    svg {
      transform: translateX(2px);
    }
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    align-self: flex-end;
    font-size: ${theme.fontSizes.small};
    padding: ${theme.spacing(0.4)} ${theme.spacing(0.8)};
    
    svg {
      font-size: 16px;
    }
  }
`

export const MagazineGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${theme.spacing(3)} ${theme.spacing(2.5)};
  padding: 0 ${theme.spacing(3)};
  
  @media (max-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
    gap: ${theme.spacing(3)} ${theme.spacing(2)};
    padding: 0 ${theme.spacing(2.5)};
  }
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing(2.5)} ${theme.spacing(2)};
    padding: 0 ${theme.spacing(2)};
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing(2)} ${theme.spacing(1.5)};
    padding: 0 ${theme.spacing(1.5)};
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

