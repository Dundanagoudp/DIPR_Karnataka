import styled, { keyframes } from "styled-components";
import theme from "../../../../theme/Theme";

const scrollAnimation = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-20%); }
`;

export const CarouselContainer = styled.div`
  width: 800px;
  hight: 450px !important;
  overflow: hidden;
  max-width: 1200px;
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
`;

export const CarouselItem = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  // padding: ${theme.spacing(2)};
  background-image: ${({ bgImage }) => `url(${bgImage})`};
  background-size: cover;
  background-position: center;
  position: relative;
  border-radius: ${theme.spacing(1)};
  overflow: hidden;
  margin-bottom: ${theme.spacing(2)};
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  border-radius: ${theme.spacing(1)};
  // overflow: hidden;
  background: rgba(0, 0, 0, 0.5);
  // padding: ${theme.spacing(2)};
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

export const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: ${theme.spacing(45)};
  // margin-top: ${theme.spacing(2)};
  // display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: ${theme.spacing(1)};

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${theme.spacing(1)};
  }
`;

export const PlayIconContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  border-radius: ${theme.spacing(1)};
  transition: background 0.3s ease;
  position: absolute;
  top: 0;
  left: 0;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
`;

export const InteractionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing(1)} ${theme.spacing(1)};
  margin-top: ${theme.spacing(1)};
  width: 100%;
`;

export const LikeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(1)};
  width: 70%;
`;

export const CommentInput = styled.input`
  width: 100%;
  padding: ${theme.spacing(1)} ${theme.spacing(2)};
  font-size: ${theme.spacing(2)};
  border-radius: ${theme.spacing(1)};
  border: 1px solid ${theme.spacing(1)};
  outline: none;
  transition: border 0.3s;

  &:focus {
    border-color: ${theme.colors.primary};
  }
`;

export const CommentButton = styled.button`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.background};
  font-size: ${theme.spacing(2)};
  padding: ${theme.spacing(0.8)} ${theme.spacing(2)};
  border: none;
  border-radius: ${theme.spacing(1)};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${theme.colors.secondary};
  }
`;

export const NavContainer = styled.nav`
  background-color: ${theme.colors.error};
  margin: ${theme.spacing(2)} 0;
  padding: ${theme.spacing(0.8)} 0;
  overflow: visible;
  margin-right: ${theme.spacing(1)};
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
  color: ${theme.colors.white};
  font-family: ${theme.fonts.heading};
  font-weight: bold;
  padding: 0 ${theme.spacing(2)};
  white-space: nowrap;
`;

export const FlexContainer = styled.div`
  margin-top: 200px;
  margin-left: 10px;
  margin-right: 10px;
  align-items: center;
  gap: 0.5%;
`;