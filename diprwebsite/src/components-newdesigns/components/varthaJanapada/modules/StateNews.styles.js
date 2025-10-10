import styled from "styled-components"
import theme from "../../../../theme/Theme"

// ========================================
// OVERALL SECTION
// ========================================
export const Section = styled.section`
  width: 100%;
  padding: 0;
  background: ${theme.colors.background};
  box-sizing: border-box;
`

// ========================================
// HEADER ROW
// ========================================
export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing1(6)};
  padding-bottom: ${theme.spacing1(2)};

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-bottom: ${theme.spacing1(4)};
  }
`

export const Title = styled.h2`
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

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: clamp(18px, 2.2vw, 22px);
  }
`

export const SeeMore = styled.a`
  font-family: ${theme.fonts.heading};
  font-size: 18px;
  font-weight: 600;
  color: ${theme.colors.primary};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: ${theme.spacing1(2)};
  transition: ${theme.transitions.fast};

  &:hover {
    color: ${theme.colors.secondary};
    
    svg, span {
      transform: translateX(6px);
    }
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 15px;
    gap: ${theme.spacing1(1.5)};
  }
`

export const ArrowIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: ${theme.transitions.fast};
  
  svg {
    width: 24px;
    height: 24px;
    transition: ${theme.transitions.fast};
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    svg {
      width: 20px;
      height: 20px;
    }
  }
`

// ========================================
// 2-COLUMN LAYOUT
// ========================================
export const PageLayout = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: ${theme.spacing1(6)};
  width: 100%;
  align-items: start;

  @media (max-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    gap: ${theme.spacing1(4)};
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing1(4)};
  }
`

// ========================================
// LEFT COLUMN: FEATURED CARD
// ========================================
export const FeaturedCard = styled.article`
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  transition: ${theme.transitions.fast};

  &:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
    transform: translateY(-2px);
  }
`

export const FeaturedImage = styled.div`
  position: relative;
  width: 100%;
  min-height: 420px;
  background-image: url(${props => props.$src || '/state/state.jpg'});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;

  @media (max-width: ${theme.breakpoints.desktop}) {
    min-height: 380px;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    min-height: 340px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    min-height: 300px;
  }
`

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.4) 60%,
    rgba(0, 0, 0, 0.7) 100%
  );
  z-index: 1;
`

export const FeaturedContent = styled.div`
  position: relative;
  z-index: 2;
  padding: ${theme.spacing1(6)};
  color: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing1(3)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing1(4)};
    gap: ${theme.spacing1(2)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing1(3)};
    gap: ${theme.spacing1(1.5)};
  }
`

export const Badge = styled.span`
  display: inline-block;
  width: fit-content;
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-family: ${theme.fonts.body};
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding: ${theme.spacing1(1.5)} ${theme.spacing1(3)};
  border-radius: ${theme.borderRadius.small};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 10px;
    padding: ${theme.spacing1(1)} ${theme.spacing1(2)};
  }
`

export const FeaturedTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: clamp(20px, 2.5vw, 28px);
  font-weight: 700;
  line-height: 1.3;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: clamp(18px, 2.2vw, 22px);
  }
`

export const FeaturedExcerpt = styled.p`
  font-family: ${theme.fonts.body};
  font-size: clamp(13px, 1.5vw, 15px);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.92);
  margin: 0;
  max-width: 90%;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: clamp(12px, 1.3vw, 14px);
  }
`

export const MetaBar = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing1(4)};
  padding: ${theme.spacing1(3)} ${theme.spacing1(4)};
  background: ${theme.colors.gray[100]};
  border-top: 1px solid ${theme.colors.gray[200]};

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: ${theme.spacing1(2)};
    padding: ${theme.spacing1(2)} ${theme.spacing1(3)};
    flex-wrap: wrap;
  }
`

export const MetaItem = styled.span`
  font-family: ${theme.fonts.body};
  font-size: 12px;
  color: ${theme.colors.gray[600]};
  display: flex;
  align-items: center;
  gap: ${theme.spacing1(1)};

  &:not(:last-child)::after {
    content: "•";
    margin-left: ${theme.spacing1(2)};
    color: ${theme.colors.gray[400]};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 11px;
  }
`

// ========================================
// MIDDLE COLUMN: STACKED NEWS CARDS
// ========================================
export const MiddleCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing1(4)};

  @media (max-width: ${theme.breakpoints.desktop}) {
    gap: ${theme.spacing1(3)};
  }
`

export const SmallCard = styled.article`
  display: flex;
  gap: ${theme.spacing1(3)};
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.medium};
  overflow: hidden;
  padding: ${theme.spacing1(3)};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: ${theme.transitions.fast};
  cursor: pointer;
  border: 1px solid ${theme.colors.gray[200]};

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
    border-color: ${theme.colors.primary};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: ${theme.spacing1(2)};
    padding: ${theme.spacing1(2)};
  }
`

export const Thumb = styled.div`
  flex-shrink: 0;
  width: 140px;
  height: 100px;
  background-image: url(${props => props.$src || '/state/2ndimage.jpg'});
  background-size: cover;
  background-position: center;
  border-radius: ${theme.borderRadius.small};

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 100px;
    height: 80px;
  }
`

export const SmallContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing1(2)};
  flex: 1;
  justify-content: center;
`

export const SmallBadge = styled.span`
  display: inline-block;
  width: fit-content;
  background: ${theme.colors.light};
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.body};
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding: ${theme.spacing1(1)} ${theme.spacing1(2)};
  border-radius: ${theme.borderRadius.small};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 9px;
  }
`

export const SmallTitle = styled.h4`
  font-family: ${theme.fonts.heading};
  font-size: clamp(14px, 1.8vw, 16px);
  font-weight: 600;
  line-height: 1.4;
  color: ${theme.colors.text};
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: clamp(13px, 1.6vw, 15px);
    -webkit-line-clamp: 2;
  }
`
