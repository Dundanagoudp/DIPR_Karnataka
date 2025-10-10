import styled from "styled-components"
import theme from "../../../../theme/Theme"

export const PageLayout = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: ${theme.spacing1(7.5)};
  max-width: 100%;
  padding-left: ${theme.spacing1(10)};
  padding-right: ${theme.spacing1(10)};
  padding-top: ${theme.spacing1(2.5)};
  padding-bottom: ${theme.spacing1(2.5)};
  background: ${theme.colors.background};
  box-sizing: border-box;

  @media (max-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing1(5)};
    max-width: 95%;
    padding: ${theme.spacing1(2)};
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing1(2.5)};
    max-width: 100%;
    padding: ${theme.spacing1(1.5)};
  }
`

export const HeroLayout = styled.section`
  display: grid;
  grid-template-columns: 70% 30%;
  gap: ${theme.spacing1(6)};
  align-items: stretch;
  margin-bottom: ${theme.spacing1(4)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing1(4)};
    margin-bottom: ${theme.spacing1(3)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: ${theme.spacing1(3)};
    margin-bottom: ${theme.spacing1(2)};
  }
`

export const HeroRoot = styled.section`
  position: relative;
  min-height: 500px;
  border-radius: ${theme.borderRadius.medium};
  overflow: hidden;
  color: ${theme.colors.white};
  background-color: ${theme.colors.gray[800]};

  @media (max-width: ${theme.breakpoints.tablet}) {
    min-height: 400px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    min-height: 350px;
  }
`

export const ArrowControls = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 2;
  display: flex;
  gap: 8px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    bottom: 10px;
    right: 10px;
  }
`

export const ArrowButton = styled.button`
  background-color: rgba(133, 133, 133, 0.5);
  color: white;
  border: none;
  width: 42px;
  height: 42px;
  border-radius: 115px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s;
  font-size: 16px;
  
  &:hover {
    opacity: 1;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 36px;
    height: 36px;
    font-size: 14px;
  }
`

export const HeroBackground = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  filter: brightness(0.7);
`

export const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.45) 100%);
`

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing1(3)};
  padding: ${theme.spacing1(8)};
  max-width: 780px;
  position: absolute;
  bottom: 0;
  left: 0;
  padding-bottom: ${theme.spacing1(4)};

  @media (max-width: ${theme.breakpoints.desktop}) {
    padding: ${theme.spacing1(6)};
    max-width: 90%;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing1(4)};
    gap: ${theme.spacing1(2)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing1(3)};
    gap: ${theme.spacing1(1.5)};
  }
`

export const HeroTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(20px, 3.2vw, 36px);
  font-weight: 700;
  line-height: 1.2;
  text-shadow: 0 1px 2px rgba(0,0,0,0.25);
  margin: 0;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: clamp(18px, 2.8vw, 24px);
  }
`

export const HeroSubtitle = styled.p`
  font-family: ${theme.fonts.body};
  font-size: clamp(14px, 1.6vw, 18px);
  color: rgba(255,255,255,0.85);
  margin: 0;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: clamp(12px, 1.4vw, 16px);
  }
`

export const HeroCta = styled.a`
  display: inline-block;
  width: fit-content;
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  border-radius:8px;
  padding: ${theme.spacing1(3)} ${theme.spacing1(5)};
  font-weight: 500;
  font-size: 12px;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(${theme.colors.primaryRgb || '0,0,0'}, 0.2);
  transition: ${theme.transitions.fast};

  &:hover {
    filter: brightness(0.95);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing1(2)} ${theme.spacing1(4)};
    font-size: 11px;
  }
`

export const NotificationPanel = styled.aside`
  background-color: ${theme.colors.white};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin-top: ${theme.spacing1(1)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    margin-top: 0;
  }
`

export const PanelHeader = styled.div`
  text-align: center;
  font-family: ${theme.fonts.heading};
  font-weight: 600;
  font-size: 16px;
  padding: ${theme.spacing1(3)} ${theme.spacing1(4)};
  margin-bottom: ${theme.spacing1(2)};
  background-color: ${theme.colors.white};
  color: ${theme.colors.gray[800]};
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.06);
  position: relative;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing1(2)} ${theme.spacing1(3)};
    font-size: 15px;
  }
`

export const NotificationList = styled.ol`
  list-style: none;
  margin: 0;
  padding: ${theme.spacing1(3)};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing1(2)};
  background-color: ${theme.colors.white};

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing1(2)};
    gap: ${theme.spacing1(1.5)};
  }
`

export const ListItem = styled.li`
  display: flex;
  gap: ${theme.spacing1(2)};
  align-items: flex-start;
  padding-bottom: ${theme.spacing1(4)};
  border-bottom: 1px solid ${theme.colors.gray[300]};

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: ${theme.spacing1(1.5)};
    padding-bottom: ${theme.spacing1(3)};
  }
`

export const ListIndex = styled.span`
  min-width: 20px;
  font-family: ${theme.fonts.monospace};
  color: ${theme.colors.gray[500]};
`

export const ListBody = styled.div`
  color: #000000;
  font-family: ${theme.fonts.body};
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
  display: flex;
  flex-direction: column;
  flex: 1;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 13px;
    line-height: 1.4;
  }
`

export const ListLink = styled.a`
  color: ${theme.colors.primary};
  font-weight: 600;
  text-decoration: none;
  margin-left: auto;
  white-space: nowrap;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 12px;
  }
`