import styled from "styled-components";
import theme from "../../../theme/Theme";

export const CarouselContainer = styled.div`
  width: 85%;
  height: 450px;
  overflow: hidden;
  position: relative;
  border-radius: ${theme.spacing(1)};
  margin: ${theme.spacing(2)} auto;
`;

export const CarouselItem = styled.div`
  flex: 1 0 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: ${theme.spacing(2)};
  background-image: ${({ bgImage }) => `url(${bgImage})`};
  background-size: cover;
  background-position: center;
  transition: opacity 1s ease-in-out;
  opacity: ${({ active }) => (active ? 1 : 0)};
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: ${theme.spacing(1)};
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  border-radius: ${theme.spacing(1)};
`;

export const ContentWrapper = styled.div`
  position: absolute;
  bottom: ${theme.spacing(2)};
  left: ${theme.spacing(2)};
  right: ${theme.spacing(2)};
  z-index: 2;
  display: flex;
  flex-direction: column;
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
  margin-bottom: ${theme.spacing(4)};
`;

// Styling the Arrow Icon as a button
export const ArrowIcon = styled.button`
  position: absolute;
  bottom: ${theme.spacing(5)};
  right: ${theme.spacing(6)};
  padding: ${theme.spacing(2)};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: transparent;
  border: none;
  transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    background: rgba(0, 0, 0, 0.8);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.4);
  }

  &:focus {
    outline: none;
  }
`;

// Dots for carousel indicators
export const DotContainer = styled.div`
  position: absolute;
  top: 10px;  /* Adjusted to match the middle top position */
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: ${theme.spacing(1)};
`;

export const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ active }) => (active ? theme.colors.primary : "#888")};
  transition: background 0.3s ease;
  cursor: pointer;

  &:hover {
    background: ${theme.colors.primary};
  }
`;
