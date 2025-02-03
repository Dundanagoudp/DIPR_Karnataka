import styled from "styled-components";
import theme from "../../../theme/Theme";


export const CarouselContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  overflow: hidden;
  position: relative;
  border-radius: 10px;
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
`;

export const TrendingTag = styled.div`
  background: ${theme.colors.error}; /* Red background for trending */
  color: white;
  padding: 5px 10px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 4px;
  display: inline-block;
  margin-bottom: 8px;
`;

export const NewsInfo = styled.div`
  color: ${theme.colors.light};
  font-size: 14px;
  margin-bottom: 5px;
`;

export const NewsTitle = styled.h2`
  color: ${theme.colors.white};
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ArrowIcon = styled.div`
  position: absolute;
  bottom: 15px;
  right: 15px;
  background: rgba(0, 0, 0, 0.5);
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
