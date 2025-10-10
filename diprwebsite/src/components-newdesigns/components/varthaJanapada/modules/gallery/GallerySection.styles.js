import styled from "styled-components"
import theme from "../../../../../theme/Theme"

export const Section = styled.section`
  width: 100%;
  background: ${theme.colors.background};
  padding-top: ${theme.spacing(5)};
  padding-bottom: ${theme.spacing(6)};
  color: ${theme.colors.text};
  font-family: ${theme.fonts.body};
`

export const SectionHeader = styled.header`
  max-width: 1300px;
  margin: 0 auto ${theme.spacing(3)};
  padding: 0 ${theme.spacing(2)};
`

export const SectionTitle = styled.h2`
  display: inline-block;
  font-family: ${theme.fonts.heading};
  font-size: 1.25rem;
  font-weight: 600;
  color: ${theme.colors.text};
  border-bottom: 2px solid ${theme.colors.primary};
  padding-bottom: ${theme.spacing(0.5)};
`

// Layout (matches user's sample with responsive tweak)
export const PageLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(320px, 640px) 1fr;
  align-items: center;
  gap: ${theme.spacing(4)};
  max-width: 1200px;
  margin: 0 auto;
  padding: ${theme.spacing(2.5)} ${theme.spacing(6)};
  background: ${theme.colors.background};

  @media (max-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: 1fr minmax(260px, 1fr) 1fr;
    gap: ${theme.spacing(3)};
    max-width: 95%;
    padding: ${theme.spacing(2)};
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing(3)};
    padding: ${theme.spacing(1.5)};
  }
`

// Main preview card
export const MainCard = styled.div`
  position: relative;
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.medium};
  box-shadow: 0 8px 20px rgba(${theme.colors.primaryRgb}, 0.15);
  overflow: hidden;
  height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${theme.breakpoints.tablet}) {
    height: 320px;
  }
`

export const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: ${(p) => (p.$zoomed ? "scale(1.6)" : "scale(1)")};
  transition: transform ${theme.transitions.fast};
  cursor: ${(p) => (p.$zoomed ? "zoom-out" : "zoom-in")};
`

// Navigation buttons (simple, card-like)
export const NavButton = styled.button`
  position: absolute;
  top: 50%;
  ${(p) => (p["data-pos"] === "left" ? "left: 12px;" : "right: 12px;")}
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border: none;
  border-radius: ${theme.borderRadius.circle};
  background: ${theme.colors.white};
  box-shadow: 0 4px 12px rgba(${theme.colors.primaryRgb}, 0.25);
  color: ${theme.colors.primary};
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: transform ${theme.transitions.fast}, box-shadow ${theme.transitions.fast};

  &:hover {
    transform: translateY(-50%) scale(1.05);
    box-shadow: 0 6px 16px rgba(${theme.colors.primaryRgb}, 0.3);
  }

  &:active {
    transform: translateY(-50%) scale(0.98);
  }
`

export const NavIcon = styled.span`
  font-size: 22px;
  line-height: 1;
`

// Thumbnails column (cards)
export const ThumbsRail = styled.div`
  display: flex;
  gap: ${theme.spacing(2)};
  align-items: center;
  justify-content: center;
  overflow-x: auto;
  padding: ${theme.spacing(1)} 0;
  flex-direction: row;
  flex-wrap: nowrap;
`

export const LeftRail = styled(ThumbsRail)``
export const RightRail = styled(ThumbsRail)``

// Pagination dots (optional)
export const DotsRow = styled.div`
  display: flex;
  gap: ${theme.spacing(1)};
  justify-content: center;
  align-items: center;
  margin-top: ${theme.spacing(3)};
`

export const Dot = styled.button`
  width: 8px;
  height: 8px;
  border-radius: ${theme.borderRadius.circle};
  border: none;
  background: ${(p) => (p.$active ? theme.colors.primary : theme.colors.gray[300])};
  transition: background ${theme.transitions.fast};
  cursor: pointer;

  &:hover {
    background: ${theme.colors.primary};
  }
`

// Thumbnail item component
export const ThumbItem = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: ${theme.borderRadius.medium};
  overflow: hidden;
  cursor: pointer;
  transition: transform ${theme.transitions.fast}, box-shadow ${theme.transitions.fast};
  border: 2px solid ${(p) => (p.$active ? theme.colors.primary : 'transparent')};
  background: ${theme.colors.white};
  box-shadow: ${(p) => 
    p.$active 
      ? `0 4px 12px rgba(${theme.colors.primaryRgb}, 0.3)` 
      : `0 2px 8px rgba(0, 0, 0, 0.1)`
  };
  flex-shrink: 0;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 16px rgba(${theme.colors.primaryRgb}, 0.2);
  }

  @media (max-width: ${theme.breakpoints.desktop}) {
    width: 80px;
    height: 80px;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 70px;
    height: 70px;
  }
`

// Thumbnail image component
export const ThumbImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity ${theme.transitions.fast};

  ${ThumbItem}:hover & {
    opacity: 0.8;
  }
`

// Caption component
export const Caption = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  color: ${theme.colors.white};
  padding: ${theme.spacing(2)} ${theme.spacing(1.5)} ${theme.spacing(1)};
  margin: 0;
  font-size: ${theme.fontSizes.medium};
  font-weight: 500;
  text-align: center;
  line-height: 1.4;
  font-family: ${theme.fonts.body};
`