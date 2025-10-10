import styled from 'styled-components'
import theme from '../../../../../theme/Theme'

export const ArticlesSection = styled.section`
  background: ${theme.colors.background};

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing1(8)} ${theme.spacing1(3)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing1(6)} ${theme.spacing1(2)};
  }
`

export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  
  
`

export const SectionHeader = styled.div`
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

export const CarouselWrapper = styled.div`
  position: relative;
  padding: 0 ${theme.spacing1(3)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 0 ${theme.spacing1(10)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 ${theme.spacing1(8)};
  }
`

export const NavButton = styled.button`
  position: absolute;
  top: 50%;
  ${props => props.position === 'left' ? 'left: 0;' : 'right: 0;'}
  transform: translateY(-50%) ${props => props.position === 'left' ? 'translateX(-16px)' : 'translateX(16px)'};
  z-index: 10;
  background: ${theme.colors.white};
  border: none;
  width: 48px;
  height: 48px;
  border-radius: ${theme.borderRadius.circle};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: ${theme.transitions.fast};
  font-size: 20px;
  color: ${theme.colors.text};

  &:hover:not(:disabled) {
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 40px;
    height: 40px;
    font-size: 18px;
    transform: translateY(-50%) ${props => props.position === 'left' ? 'translateX(-8px)' : 'translateX(8px)'};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 36px;
    height: 36px;
    font-size: 16px;
    transform: translateY(-50%) ${props => props.position === 'left' ? 'translateX(-4px)' : 'translateX(4px)'};
  }
`

export const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing1(6)};

  @media (max-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing1(4)};
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing1(4)};
  }
`

export const ArticleCard = styled.article`
  display: flex;
  flex-direction: column;
  background: transparent;
  overflow: hidden;
  transition: ${theme.transitions.fast};
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
  }
`

export const ArticleImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.desktop}) {
    height: 260px;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    height: 240px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    height: 220px;
  }
`

export const ArticleImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${ArticleCard}:hover & {
    transform: scale(1.05);
  }
`

export const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.1) 100%
  );
  z-index: 1;
`

export const ArticleNumber = styled.div`
  position: absolute;
  bottom: ${theme.spacing1(3)};
  right: ${theme.spacing1(3)};
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  border-radius: ${theme.borderRadius.circle};
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${theme.fonts.heading};
  font-size: 18px;
  font-weight: 700;
  color: ${theme.colors.primary};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  z-index: 10;

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 42px;
    height: 42px;
    font-size: 16px;
    bottom: ${theme.spacing1(2)};
    right: ${theme.spacing1(2)};
  }
`

export const ArticleContent = styled.div`
  padding: ${theme.spacing1(3)} 0 0 0;
  background: transparent;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing1(1.5)};

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing1(2)} 0 0 0;
    gap: ${theme.spacing1(1)};
  }
`

export const ArticleTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: clamp(16px, 1.8vw, 18px);
  font-weight: 700;
  color: ${theme.colors.text};
  margin: 0;
  line-height: 1.5;
  transition: ${theme.transitions.fast};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: clamp(14px, 1.6vw, 16px);
  }
`

export const ArticleDate = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 13px;
  color: ${theme.colors.gray[600]};
  margin: 0;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 12px;
  }
`

export const PaginationDots = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing1(2)};
  margin-top: ${theme.spacing1(8)};

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-top: ${theme.spacing1(6)};
  }
`

export const Dot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: ${theme.borderRadius.circle};
  border: none;
  background: ${props => props.$active ? theme.colors.primary : theme.colors.gray[300]};
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;

  ${props => props.$active && `
    width: 32px;
    border-radius: 5px;
  `}

  &:hover {
    background: ${props => props.$active ? theme.colors.primary : theme.colors.gray[500]};
  }
`

