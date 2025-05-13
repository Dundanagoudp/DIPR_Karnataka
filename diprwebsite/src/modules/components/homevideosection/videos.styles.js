import styled, { keyframes } from "styled-components";
import theme from "../../../theme/Theme";

// Keyframes for shimmer effect
const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

// Styled Components
export const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${theme.colors.background};
  font-family: ${theme.fonts.body};
  color: ${theme.colors.text};
`;

export const VideoLayout = styled.div`
  display: flex;
  padding: ${theme.spacing(1)};
  gap: ${theme.spacing(2)};
  max-width: 1300px;
  margin: 0 auto;

  @media (max-width: ${theme.breakpoints.desktop}) {
    flex-direction: column;
  }
`;

export const VideoPlayerSection = styled.div`
  flex: 1;
  min-width: 0;
  position: sticky;
  margin-right: ${theme.spacing(5)};
  top: ${theme.spacing(0.5)};
  height: calc(100vh - ${theme.spacing(2)});
  display: flex;
  flex-direction: column;

  @media (max-width: ${theme.breakpoints.desktop}) {
    position: relative;
    height: auto;
    top: 0;
  }
  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-right: 0;
  }
`;

export const VideoHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${theme.spacing(1)};
`;

export const VideoTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  color: ${theme.colors.text};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`;

export const ChevronRight = styled.span`
  margin-left: ${theme.spacing(0.1)};
  font-size: 1.9rem;
  color: ${theme.colors.text};
`;

export const VideoPlayer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background-color: ${theme.colors.black};
  border-radius: 0.25rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-height: 400px;
`;

export const VideoElement = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const VideoControls = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  padding: ${theme.spacing(0.5)};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ControlButton = styled.button`
  background: none;
  border: none;
  color: ${theme.colors.white};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing(0.25)};
  font-size: 1rem;
  z-index: 1;

  &:hover {
    opacity: 0.8;
  }
`;

export const ProgressBar = styled.div`
  flex: 1;
  height: 0.25rem;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 0.125rem;
  margin: 0 ${theme.spacing(0.5)};
  position: relative;
  cursor: pointer;
`;

export const Progress = styled.div.attrs(props => ({
  $width: props.$width || "0%",
}))`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background-color: ${theme.colors.error};
  border-radius: 0.125rem;
  width: ${props => props.$width};
`;

export const VideoInfo = styled.div`
  margin-top: ${theme.spacing(1)};
  display: flex;
  flex-direction: column;
`;

export const CurrentVideoTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${theme.colors.text};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.2rem;
  }
`;

export const VideoMeta = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(0.5)};
  color: ${theme.colors.textgray};
  font-size: 0.9rem;
`;

export const Separator = styled.span`
  color: ${theme.colors.icons};
`;

export const WatchNextSection = styled.div`
  width: 350px;
  flex-shrink: 0;

  @media (max-width: ${theme.breakpoints.desktop}) {
    width: 100%;
    margin-top: ${theme.spacing(2)};
  }
`;

export const WatchNextHeader = styled.h2`
  font-size: 1.5rem;
  margin-bottom: ${theme.spacing(1)};
  font-weight: 600;
  color: ${theme.colors.text};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.2rem;
  }
`;

export const VideoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(1)};
`;

export const VideoItem = styled.div.attrs(props => ({
  $isActive: props.$isActive || false,
}))`
  display: flex;
  gap: ${theme.spacing(0.75)};
  cursor: pointer;
  padding: ${theme.spacing(0.5)};
  border-radius: 0.25rem;
  transition: background-color 0.2s;
  background-color: ${props => 
    props.$isActive ? theme.colors.bggrey : "transparent"};

  &:hover {
    background-color: ${theme.colors.bggrey};
  }
`;

export const ThumbnailContainer = styled.div`
  position: relative;
  width: 160px;
  height: 90px;
  border-radius: 0.25rem;
  overflow: hidden;
  flex-shrink: 0;

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 120px;
    height: 67.5px;
  }
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const NowPlaying = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: ${theme.colors.white};
  padding: ${theme.spacing(0.25)};
  font-size: 0.7rem;
  text-align: center;
  font-weight: 500;
`;

export const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${theme.colors.white};
  opacity: 0.8;
  font-size: 1.5rem;
  background-color: rgba(0, 0, 0, 0.5);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

export const VideoItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  min-width: 0;
`;

export const VideoItemTitle = styled.h3`
  font-size: 1rem;
  margin: 0;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: ${theme.colors.text};
`;

export const VideoItemMeta = styled.div`
  font-size: 0.8rem;
  color: ${theme.colors.textgray};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(0.25)};
`;

// Shimmer Effect Components
export const ShimmerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(1)};
  padding: ${theme.spacing(1)};
`;

export const ShimmerThumbnail = styled.div`
  width: 160px;
  height: 90px;
  background: linear-gradient(to right, #f0f0f0 8%, #e0e0e0 18%, #f0f0f0 33%);
  background-size: 800px 104px;
  animation: ${shimmer} 1.5s infinite linear;
  border-radius: 0.25rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 120px;
    height: 67.5px;
  }
`;

export const ShimmerTitle = styled.div`
  width: 80%;
  height: 20px;
  background: linear-gradient(to right, #f0f0f0 8%, #e0e0e0 18%, #f0f0f0 33%);
  background-size: 800px 104px;
  animation: ${shimmer} 1.5s infinite linear;
  border-radius: 0.25rem;
  margin-top: ${theme.spacing(1)};
`;

export const ShimmerMeta = styled.div`
  width: 60%;
  height: 16px;
  background: linear-gradient(to right, #f0f0f0 8%, #e0e0e0 18%, #f0f0f0 33%);
  background-size: 800px 104px;
  animation: ${shimmer} 1.5s infinite linear;
  border-radius: 0.25rem;
  margin-top: ${theme.spacing(0.5)};
`;

