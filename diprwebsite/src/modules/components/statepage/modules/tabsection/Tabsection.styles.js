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
`

export const Container = styled.div`
  max-width: 90%;
  margin: 0 auto;
  padding: 0 20px;
`

export const Tabs = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  align-items: center;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 12px;
  margin-bottom: 32px;
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

  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -13px;
    height: 3px;
    width: ${(p) => (p.$active ? "100%" : "0")};
    background: #000000;
    transition: width 0.2s ease;
  }

  &:hover {
    color: ${COLORS.primary};
  }
`

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
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
  aspect-ratio: 16 / 9;
  background: ${COLORS.muted};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`

export const Content = styled.div`
  padding: 20px 20px 24px;
`

export const DateText = styled.p`
  color: ${COLORS.primary};
  font-size: 13px;
  margin: 0 0 10px;
  font-weight: 500;
`

export const Title = styled.h3`
  font-size: 20px;
  line-height: 1.4;
  margin: 0 0 12px;
  font-weight: 600;
`

export const Excerpt = styled.p`
  font-size: 15px;
  color: #525252;
  line-height: 1.6;
  margin: 0;
`

export const Sidebar = styled.aside`
  background: ${COLORS.background};
  border: 1px solid #e5e7eb;
  padding: 16px;
  height: fit-content;
`

export const SideList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 16px;
`

export const SideItem = styled.li`
  border-bottom: 1px solid #eeeeee;
  padding-bottom: 12px;

  &:last-child {
    border-bottom: 0;
    padding-bottom: 0;
  }
`

export const SideDate = styled.span`
  display: block;
  color: ${COLORS.primary};
  font-size: 12px;
  margin-bottom: 6px;
`

export const SideTitle = styled.h4`
  font-size: 14px;
  margin: 0;
  color: ${COLORS.foreground};
  line-height: 1.45;
`

export const SeeMoreWrap = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: center;
`

export const SeeMoreBtn = styled.button`
  background: ${COLORS.primary};
  color: ${COLORS.background};
  border: 0;
  padding: 10px 16px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    filter: brightness(0.95);
  }
`
