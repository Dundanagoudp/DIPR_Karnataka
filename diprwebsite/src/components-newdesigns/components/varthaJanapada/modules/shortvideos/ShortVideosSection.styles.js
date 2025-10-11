import styled, { keyframes } from "styled-components"
import theme from "../../../../../theme/Theme"

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`

const shimmerAnimation = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`

// Helper function for responsive values
const responsive = (prop, values) => {
  return `
    ${prop}: ${values.desktop || values.default};
        @media (max-width: ${theme.breakpoints.desktop}) {
      ${prop}: ${values.tablet || values.desktop || values.default};
    }
        @media (max-width: ${theme.breakpoints.tablet}) {
      ${prop}: ${values.mobile || values.tablet || values.desktop || values.default};
    }
  `
}

// Shimmer Effect Components
export const ShimmerContainer = styled.div`
  width: 100%;
`

export const ShimmerThumbnail = styled.div`
  width: 100%;
  aspect-ratio: 9/16;
  border-radius: 0;
  background: linear-gradient(
    to right,
    #f0f0f0 8%,
    #e0e0e0 18%,
    #f0f0f0 33%
  );
  background-size: 800px 104px;
  animation: ${shimmerAnimation} 1.5s infinite linear;
  margin-bottom: ${theme.spacing(1)};
`

export const ShimmerTitle = styled.div`
  height: 20px;
  width: 80%;
  margin-bottom: ${theme.spacing(1)};
  border-radius: 4px;
  background: linear-gradient(
    to right,
    #f0f0f0 8%,
    #e0e0e0 18%,
    #f0f0f0 33%
  );
  background-size: 800px 104px;
  animation: ${shimmerAnimation} 1.5s infinite linear;
`

export const ShimmerChannel = styled.div`
  height: 16px;
  width: 60%;
  border-radius: 4px;
  background: linear-gradient(
    to right,
    #f0f0f0 8%,
    #e0e0e0 18%,
    #f0f0f0 33%
  );
  background-size: 800px 104px;
  animation: ${shimmerAnimation} 1.5s infinite linear;
`

export const ShimmerButton = styled.div`
  height: 30px;
  width: 80px;
  border-radius: ${theme.spacing(2.25)};
  background: linear-gradient(
    to right,
    #f0f0f0 8%,
    #e0e0e0 18%,
    #f0f0f0 33%
  );
  background-size: 800px 104px;
  animation: ${shimmerAnimation} 1.5s infinite linear;
    @media (max-width: ${theme.breakpoints.tablet}) {
    height: 25px;
    width: 70px;
  }
`

// Container Components
export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: ${theme.spacing(1.25)};
  display: flex;
  flex-direction: column;
  outline: 2px solid transparent; 
  outline-offset: 2px;
  transition: outline-color 0.2s ease;
  overflow: hidden;

  &:focus-visible {
    outline-color: ${theme.colors.primary || "#0070f3"}; 
  }
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing(1)};
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(0.75)};
  }
`

export const SectionHeader = styled.div`
  margin-bottom: ${theme.spacing1(2)};
  padding-bottom: ${theme.spacing1(6)};

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-bottom: ${theme.spacing1(1)};
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

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: clamp(18px, 2.3vw, 20px);
    
    &::after {
      width: 200px;
    }
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: clamp(16px, 2vw, 18px);
    
    &::after {
      width: 150px;
    }
  }
`


// Carousel Components
export const CarouselWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  border-radius: 0;
`

export const CarouselTrack = styled.div`
  display: flex;
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform;
  cursor: grab;
  width: 100%;
  
  &:active {
    cursor: grabbing;
  }
`

// Video Card Components
export const VideoCard = styled.div`
  flex: 0 0 calc(100% / 5);
  padding: 0 ${theme.spacing(1)};
  box-sizing: border-box;
  animation: ${fadeIn} 0.5s ease forwards;
    @media (max-width: 1280px) {
    flex: 0 0 25%;
  }
    @media (max-width: ${theme.breakpoints.desktop}) {
    flex: 0 0 33.333%;
  }
    @media (max-width: ${theme.breakpoints.tablet}) {
    flex: 0 0 50%;
    padding: 0 ${theme.spacing(0.5)};
  }
    @media (max-width: 640px) {
    flex: 0 0 100%;
    max-width: ${theme.spacing(37.5)};
    margin: 0 auto;
  }
`

export const VideoThumbnail = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 9/16;
  border-radius: 0;
  overflow: hidden;
  background-color: ${theme.colors.black};
  box-shadow: 0 ${theme.spacing(0.5)} ${theme.spacing(1.5)} rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
    &:hover {
    transform: translateY(-${theme.spacing(0.625)});
    box-shadow: 0 ${theme.spacing(1)} ${theme.spacing(2.5)} rgba(0, 0, 0, 0.15);
  }
    img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
    &:hover img {
    transform: scale(1.05);
  }
    @media (max-width: ${theme.breakpoints.tablet}) {
    max-height: ${theme.spacing(50)};
        &:hover {
      transform: translateY(-${theme.spacing(0.375)});
    }
  }
    @media (max-width: 640px) {
    max-height: ${theme.spacing(43.75)};
  }
`

export const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0.7) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.8;
  transition: opacity 0.3s ease;
  pointer-events: none; /* Allow clicks to pass through to the play button */
  z-index: 2;
  
  &:hover {
    opacity: 1;
  }
`

export const PlayButton = styled.button`
  background: rgba(255, 0, 0, 0.9);
  border: none;
  border-radius: 8px;
  width: ${theme.spacing(8)};
  height: ${theme.spacing(6)};
  cursor: pointer;
  color: ${theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  outline: 2px solid transparent;
  outline-offset: 2px;
  box-shadow: 0 4px 12px rgba(255, 0, 0, 0.3);
  position: relative;
  z-index: 10;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  pointer-events: auto;

  &:focus-visible {
    outline-color: ${theme.colors.primary || "#0070f3"};
    background: rgba(255, 0, 0, 1);
    transform: scale(1.05);
  }
  
  svg {
    filter: drop-shadow(0 0 ${theme.spacing(0.5)} rgba(0, 0, 0, 0.5));
    transition: transform 0.3s ease;
    margin-left: 2px;
    pointer-events: none; /* Prevent SVG from interfering with button clicks */
  }
  
  &:hover {
    background: rgba(255, 0, 0, 1);
    transform: scale(1.05);
    box-shadow: 0 6px 16px rgba(255, 0, 0, 0.4);
    svg {
      transform: scale(1.1);
    }
  }
  
  &:active {
    transform: scale(0.98);
    background: rgba(255, 0, 0, 0.8);
  }
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    width: ${theme.spacing(7)};
    height: ${theme.spacing(5)};
    svg {
      width: ${theme.spacing(4)};
      height: ${theme.spacing(4)};
    }
  }
  
  @media (max-width: 640px) {
    width: ${theme.spacing(6)};
    height: ${theme.spacing(4.5)};
    svg {
      width: ${theme.spacing(3.5)};
      height: ${theme.spacing(3.5)};
    }
  }
`

// Video Info Components
export const VideoInfo = styled.div`
  padding: ${theme.spacing(1.5)} ${theme.spacing(1)};
    @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing(1)} ${theme.spacing(0.5)};
  }
`

export const VideoTitle = styled.h3`
  margin: 0 0 ${theme.spacing(1)} 0;
  ${responsive("font-size", {
    default: "1rem",
    tablet: "0.875rem",
  })}
  font-weight: 500;
  color: ${theme.colors.black};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: ${theme.fonts.body};
    @media (max-width: ${theme.breakpoints.tablet}) {
    margin: 0 0 ${theme.spacing(0.5)} 0;
  }
`

export const ChannelInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
    @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${theme.spacing(0.5)};
  }
`

export const ChannelName = styled.span`
  ${responsive("font-size", {
    default: "0.875rem",
    tablet: "0.75rem",
  })}
  color: ${theme.colors.icons};
  font-family: ${theme.fonts.body};
`

export const SubscribeButton = styled.button`
  background-color: ${theme.colors.black};
  color: ${theme.colors.white};
  border: none;
  border-radius: ${theme.spacing(2.25)};
  padding: ${theme.spacing(0.75)} ${theme.spacing(1.5)};
  ${responsive("font-size", {
    default: "0.875rem",
    tablet: "0.75rem",
  })}
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s ease, transform 0.2s ease;
  font-family: ${theme.fonts.body};
    &:hover {
    background-color: ${theme.colors.text};
    transform: scale(1.05);
  }
    @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing(0.5)} ${theme.spacing(1.25)};
  }
`

// Navigation Components
export const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.direction === "left" ? "left: 10px;" : "right: 10px;")}
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.9);
  color: #333;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  outline: 2px solid transparent;
  outline-offset: 2px;

  &:focus-visible {
    outline-color: ${theme.colors.primary || "#0070f3"};
    background-color: rgba(255, 255, 255, 1);
    transform: translateY(-50%) scale(1.1);
  }
  
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
  
  &:hover:not(:disabled) {
    background-color: rgba(255, 255, 255, 1);
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 1024px) {
    width: 36px;
    height: 36px;
    svg {
      width: 20px;
      height: 20px;
    }
  }
  
  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
    svg {
      width: 18px;
      height: 18px;
    }
  }
  
  @media (max-width: 640px) {
    display: flex;
    width: 30px;
    height: 30px;
    svg {
      width: 16px;
      height: 16px;
    }
  }
`

// Video Player Components
export const VideoPlayer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 9/16;
  border-radius: 0;
  overflow: hidden;
  background-color: ${theme.colors.black};
  box-shadow: 0 ${theme.spacing(0.5)} ${theme.spacing(1.5)} rgba(0, 0, 0, 0.2);
    video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
    @media (max-width: ${theme.breakpoints.tablet}) {
    max-height: ${theme.spacing(50)};
  }
    @media (max-width: 640px) {
    max-height: ${theme.spacing(43.75)};
  }
`

export const ProgressBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${theme.spacing(0.5)};
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 5;
`

export const ProgressIndicator = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #ff0000, #ff5e00);
  width: 0%;
  transition: width 0.1s linear;
  background-size: 200% 100%;
  animation: ${shimmer} 2s infinite linear;
`
