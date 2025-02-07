import styled, { keyframes } from "styled-components";
import theme from "../../../../theme/Theme";

export const CarouselContainer = styled.div`
  width: 70%;
  height: auto;
  overflow: visible;
  position: relative;
  border-radius: ${theme.spacing(1)};
  margin: ${theme.spacing(2)} auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CarouselInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(2)};
  width: 100%;
  overflow: visible;
`;

export const CarouselItem = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: ${theme.spacing(2)};
  background-image: ${({ bgImage }) => `url(${bgImage})`};
  background-size: cover;
  background-position: center;
  position: relative;
  border-radius: ${theme.spacing(1)};
  overflow: hidden;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  border-radius: ${theme.spacing(1)};
  overflow: hidden;
`;

export const ContentWrapper = styled.div`
  position: absolute;
  bottom: ${theme.spacing(2)};
  left: ${theme.spacing(2)};
  right: ${theme.spacing(2)};
  z-index: 2;
  display: flex;
  flex-direction: column;
  border-radius: ${theme.spacing(1)};
  overflow: hidden;
`;

export const TrendingCategory = styled.div`
  background: ${theme.colors.error};
  color: ${theme.colors.background};
  padding: ${theme.spacing(0.4)} ${theme.spacing(1.5)};
  font-size: ${theme.spacing(1.8)};
  font-weight: bold;
  border-radius: ${theme.spacing(0.5)};
  display: inline-block;
  width: auto;
`;

export const NewsInfo = styled.div`
  color: ${theme.colors.light};
  font-size: ${theme.spacing(1.9)};
`;

export const NewsTitle = styled.h2`
  color: ${theme.colors.background};
  font-size: ${theme.spacing(3.8)};
  font-weight: semibold;
  margin-top: ${theme.spacing(2)};
`;

const scrollAnimation = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-20%); }
`;

export const NavContainer = styled.nav`
  background-color: ${theme.colors.error};
  padding: ${theme.spacing(0.5)} 0;
  overflow: visible;
  margin-right: ${theme.spacing(8)};
  white-space: nowrap;
  position: relative;
`;

export const NewsTicker = styled.div`
  display: flex;
  gap: ${theme.spacing(2)};
  animation: ${scrollAnimation} 20s linear infinite;
  min-width: 200%;
  overflow: visible;
`;

export const NewsWrapper = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
`;

export const NewsItem = styled.span`
  color: ${theme.colors.background};
  font-family: ${theme.fonts.heading};
  font-weight: bold;
  padding: 0 ${theme.spacing(2)};
  white-space: nowrap;
`;
