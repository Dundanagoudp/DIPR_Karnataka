import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: ${(props) => props.theme.spacing(4)};
`;

export const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${(props) => props.theme.spacing(6)};
  
  @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const VideoCard = styled(Link)`
  display: block;
  transition: transform ${(props) => props.theme.transitions.fast};
  text-decoration: none;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

export const ThumbnailContainer = styled.div`
  position: relative;
  width: 100%;
  border-radius: ${(props) => props.theme.borderRadius.medium};
  overflow: hidden;
  aspect-ratio: 16 / 9;
  background-color: ${(props) => props.theme.colors.lightgray};
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Duration = styled.div`
  position: absolute;
  bottom: ${(props) => props.theme.spacing(2)};
  right: ${(props) => props.theme.spacing(2)};
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: ${(props) => props.theme.spacing(0.5)} ${(props) => props.theme.spacing(1)};
  border-radius: ${(props) => props.theme.borderRadius.small};
  font-size: ${(props) => props.theme.fontSizes.small};
`;

export const VideoInfo = styled.div`
  display: flex;
  margin-top: ${(props) => props.theme.spacing(3)};
`;

export const ChannelAvatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: ${(props) => props.theme.borderRadius.circle};
  background-color: ${(props) => props.theme.colors.lightgray};
  margin-right: ${(props) => props.theme.spacing(3)};
  overflow: hidden;
  flex-shrink: 0;
`;

export const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const VideoDetails = styled.div`
  flex: 1;
`;

export const VideoTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 500;
  margin-bottom: ${(props) => props.theme.spacing(1)};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: ${(props) => props.theme.colors.text};
`;

export const ChannelName = styled.div`
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.lightText};
  margin-bottom: ${(props) => props.theme.spacing(0.5)};
`;

export const VideoStats = styled.div`
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.lightText};
  display: flex;
  align-items: center;
`;

export const Dot = styled.span`
  margin: 0 ${(props) => props.theme.spacing(1)};
  font-size: ${(props) => props.theme.fontSizes.small};
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: ${(props) => props.theme.fontSizes.large};
  color: ${(props) => props.theme.colors.lightText};
`;

export const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: ${(props) => props.theme.fontSizes.large};
  color: ${(props) => props.theme.colors.error};
`;
