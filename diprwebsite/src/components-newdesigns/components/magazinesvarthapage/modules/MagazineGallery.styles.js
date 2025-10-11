import styled from 'styled-components';
import theme from "../../../../theme/Theme";

export const MagazineContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: ${theme.spacing(2)} ${theme.spacing(2.5)};
  background-color: ${theme.colors.gray[100]};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing(2)} ${theme.spacing(2)};
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(1.5)} ${theme.spacing(1.5)};
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing(2)};
  padding-bottom: ${theme.spacing(3)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding-bottom: ${theme.spacing(2.5)};
    gap: ${theme.spacing(2)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-bottom: ${theme.spacing(1.5)};
    padding-bottom: ${theme.spacing(2)};
    flex-direction: column;
    align-items: flex-start;
    gap: ${theme.spacing(1.5)};
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(1)};
`;

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
`;

export const SelectedYearText = styled.p`
  font-size: ${theme.fontSizes.medium};
  font-family: ${theme.fonts.body};
  color: ${theme.colors.text};
  margin: 0;
  font-weight: 400;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fontSizes.small};
  }
`;

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
`;

export const YearFilterIcon = styled.div`
  position: absolute;
  right: ${theme.spacing(1.5)};
  pointer-events: none;
  display: flex;
  align-items: center;
  color: ${theme.colors.primary};
  font-size: 18px;
`;

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
`;

export const MagazineGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing(4)} ${theme.spacing(3)};
  padding: 0 ${theme.spacing(3)};
  
  @media (max-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing(3.5)} ${theme.spacing(2.5)};
    padding: 0 ${theme.spacing(2.5)};
  }
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing(3)} ${theme.spacing(2)};
    padding: 0 ${theme.spacing(2)};
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing(2.5)} ${theme.spacing(1.5)};
    padding: 0 ${theme.spacing(1.5)};
  }
`;

export const MagazineCard = styled.div`
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  
  &:hover {
    transform: translateY(-4px);
  }
`;

export const MagazineImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  background-color: ${theme.colors.gray[200]};
  position: relative;
`;

export const MagazineImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  ${MagazineCard}:hover & {
    transform: scale(1.05);
  }
`;

export const MagazineTitle = styled.div`
  padding: ${theme.spacing(2)} ${theme.spacing(2.5)} ${theme.spacing(1.5)};
  text-align: left;
  
  h3 {
    font-size: ${theme.fontSizes.large};
    font-weight: 600;
    color: ${theme.colors.text};
    margin: 0 0 6px 0;
    line-height: 1.4;
    font-family: ${theme.fonts.heading};
  }
  
  span {
    font-size: ${theme.fontSizes.small};
    color: ${theme.colors.lightText};
    font-weight: 400;
  }
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing(1.75)} ${theme.spacing(2)} ${theme.spacing(1.25)};
    
    h3 {
      font-size: 16px;
    }
    
    span {
      font-size: 13px;
    }
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(1.5)} ${theme.spacing(1.5)} ${theme.spacing(1)};
    
    h3 {
      font-size: 14px;
    }
    
    span {
      font-size: 12px;
    }
  }
`;

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
`;

