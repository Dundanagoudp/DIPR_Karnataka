import styled from "styled-components"

const COLORS = {
  primary: "#1E88E5",
  foreground: "#111111",
  background: "#ffffff",
  muted: "#F2F4F7",
  accent: "#FFC107",
}

export const Section = styled.section`
  width: 100%;
  background: ${COLORS.background};
  color: ${COLORS.foreground};
  padding: 24px 16px;

  @media (max-width: 480px) {
    padding: 16px 12px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    padding: 20px 14px;
  }
`

export const Container = styled.div`
  max-width: 90%;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 480px) {
    max-width: 100%;
    padding: 0 12px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    max-width: 95%;
    padding: 0 16px;
  }
`

export const Tabs = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  align-items: center;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 12px;
  margin-bottom: 32px;

  @media (max-width: 480px) {
    flex-wrap: nowrap;
    gap: 16px;
    padding-bottom: 8px;
    margin-bottom: 20px;
    overflow-x: auto;
    overflow-y: hidden;
    scrollbar-width: none;
    -ms-overflow-style: none;
    -webkit-overflow-scrolling: touch;
    
    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    flex-wrap: nowrap;
    gap: 20px;
    padding-bottom: 10px;
    margin-bottom: 24px;
    overflow-x: auto;
    overflow-y: hidden;
    scrollbar-width: none;
    -ms-overflow-style: none;
    -webkit-overflow-scrolling: touch;
    
    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    flex-wrap: nowrap;
    gap: 24px;
    overflow-x: auto;
    overflow-y: hidden;
    scrollbar-width: none;
    -ms-overflow-style: none;
    -webkit-overflow-scrolling: touch;
    
    &::-webkit-scrollbar {
      display: none;
    }
  }
`

export const TabButton = styled.button`
  background: transparent;
  border: 0;
  padding: 12px 16px;
  font-size: 16px;
  cursor: pointer;
  position: relative;
  color: ${(p) => (p.$active ? "#000000" : "#4b5563")};
  outline: none;
  font-weight: 500;
  white-space: nowrap;
  flex-shrink: 0;

  @media (max-width: 480px) {
    padding: 8px 12px;
    font-size: 14px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    padding: 10px 14px;
    font-size: 15px;
  }

  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -13px;
    height: 3px;
    width: ${(p) => (p.$active ? "100%" : "0")};
    background: #000000;
    transition: width 0.2s ease;

    @media (max-width: 480px) {
      bottom: -9px;
      height: 2px;
    }
  }

  &:hover {
    color: ${COLORS.primary};
  }
`

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 32px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }
`

export const Card = styled.article`
  background: ${COLORS.background};
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

export const ImageWrap = styled.div`
  width: 100%;
  aspect-ratio: 5 / 5;
  background: ${COLORS.muted};

  @media (max-width: 480px) {
    aspect-ratio: 4 / 3;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    aspect-ratio: 16 / 9;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`

export const Content = styled.div`
  padding: 20px 20px 24px;

  @media (max-width: 480px) {
    padding: 16px 16px 20px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    padding: 18px 18px 22px;
  }
`

export const DateText = styled.p`
  color: ${COLORS.primary};
  font-size: 13px;
  margin: 0 0 10px;
  font-weight: 500;

  @media (max-width: 480px) {
    font-size: 12px;
    margin: 0 0 8px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 12px;
    margin: 0 0 9px;
  }
`

export const Title = styled.h3`
  font-size: 20px;
  line-height: 1.4;
  margin: 0 0 12px;
  font-weight: 600;

  @media (max-width: 480px) {
    font-size: 16px;
    line-height: 1.3;
    margin: 0 0 10px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 18px;
    line-height: 1.35;
    margin: 0 0 11px;
  }
`

export const Excerpt = styled.p`
  font-size: 15px;
  color: #525252;
  line-height: 1.6;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 1.5;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 14px;
    line-height: 1.55;
  }
`

export const Sidebar = styled.aside`
  border: none;
  padding: 20px;
  height: fit-content;
  border-radius: 0;

  @media (max-width: 480px) {
    padding: 16px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    padding: 18px;
  }
`

export const SideList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 20px;

  @media (max-width: 480px) {
    gap: 16px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    gap: 18px;
  }
`

export const SideItem = styled.li`
  border-bottom: none;
  padding-bottom: 0;
`

export const SideDate = styled.span`
  display: block;
  color: ${COLORS.primary};
  font-size: 13px;
  margin-bottom: 8px;
  font-weight: 500;

  @media (max-width: 480px) {
    font-size: 12px;
    margin-bottom: 6px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 7px;
  }
`

export const SideTitle = styled.h4`
  font-size: 16px;
  margin: 0;
  color: ${COLORS.foreground};
  line-height: 1.3;
  font-weight: 600;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 1.25;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 15px;
    line-height: 1.28;
  }
`

export const SideExcerpt = styled.p`
  font-size: 13px;
  color: #6b7280;
  line-height: 1.4;
  margin: 8px 0 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 1.35;
    margin: 6px 0 0;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 12px;
    line-height: 1.38;
    margin: 7px 0 0;
  }
`

export const SeeMoreWrap = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: center;

  @media (max-width: 480px) {
    margin-top: 12px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    margin-top: 14px;
  }
`

export const SeeMoreBtn = styled.button`
  background: ${COLORS.primary};
  color: ${COLORS.background};
  border: 0;
  margin-top: 30px;
  padding: 12px 24px;
  font-size: 14px;
  cursor: pointer;
  width: 100%;

  @media (max-width: 480px) {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 13px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    margin-top: 24px;
    padding: 11px 22px;
    font-size: 13px;
  }

  &:hover {
    filter: brightness(0.95);
  }
`
