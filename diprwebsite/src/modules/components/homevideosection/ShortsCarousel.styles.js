import styled, { keyframes } from "styled-components"

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

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 87%;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 768px) {
    padding: 8px;
  }
`

export const CarouselHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  margin-bottom: 10px;
  
  @media (min-width: 768px) {
    justify-content: flex-end;
    padding: 10px 20px;
  }
`

export const CarouselTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #000;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
`

export const CarouselWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  border-radius: 16px;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 60px;
    height: 100%;
    background: linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,0.8));
    pointer-events: none;
    z-index: 2;
    
    @media (max-width: 768px) {
      width: 30px;
    }
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 60px;
    height: 100%;
    background: linear-gradient(to left, rgba(255,255,255,0), rgba(255,255,255,0.8));
    pointer-events: none;
    z-index: 2;
    
    @media (max-width: 768px) {
      width: 30px;
    }
  }
  
  @media (max-width: 768px) {
    border-radius: 12px;
  }
`

export const CarouselTrack = styled.div`
  display: flex;
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform;
  cursor: grab;
  
  &:active {
    cursor: grabbing;
  }
`

export const VideoCard = styled.div`
  flex: 0 0 calc(100% / 5);
  padding: 0 8px;
  box-sizing: border-box;
  animation: ${fadeIn} 0.5s ease forwards;
  
  @media (max-width: 1280px) {
    flex: 0 0 25%;
  }
  
  @media (max-width: 1024px) {
    flex: 0 0 33.333%;
  }
  
  @media (max-width: 768px) {
    flex: 0 0 50%;
    padding: 0 4px;
  }
  
  @media (max-width: 640px) {
    flex: 0 0 100%;
    max-width: 300px;
    margin: 0 auto;
  }
`

export const VideoThumbnail = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 9/16;
  border-radius: 12px;
  overflow: hidden;
  background-color: #000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
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
  
  @media (max-width: 768px) {
    border-radius: 8px;
    max-height: 400px;
    
    &:hover {
      transform: translateY(-3px);
    }
  }
  
  @media (max-width: 640px) {
    max-height: 350px;
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
  
  &:hover {
    opacity: 1;
  }
`

export const PlayButton = styled.button`
  background: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  cursor: pointer;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  svg {
    filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.5));
    transition: transform 0.3s ease;
  }
  
  &:hover {
    background: rgba(255, 0, 0, 0.7);
    transform: scale(1.1);
    
    svg {
      transform: scale(1.1);
    }
  }
  
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    
    svg {
      width: 30px;
      height: 30px;
    }
  }
  
  @media (max-width: 640px) {
    width: 40px;
    height: 40px;
    
    svg {
      width: 24px;
      height: 24px;
    }
  }
`

export const VideoInfo = styled.div`
  padding: 12px 8px;
  
  @media (max-width: 768px) {
    padding: 8px 4px;
  }
`

export const VideoTitle = styled.h3`
  margin: 0 0 8px 0;
  font-size: 16px;
  font-weight: 500;
  color: #000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (max-width: 768px) {
    font-size: 14px;
    margin: 0 0 4px 0;
  }
`

export const ChannelInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
`

export const ChannelName = styled.span`
  font-size: 14px;
  color: #606060;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`

export const SubscribeButton = styled.button`
  background-color: #000;
  color: white;
  border: none;
  border-radius: 18px;
  padding: 6px 12px;
  font-size: 14px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s ease, transform 0.2s ease;
  
  &:hover {
    background-color: #333;
    transform: scale(1.05);
  }
  
  @media (max-width: 768px) {
    font-size: 12px;
    padding: 4px 10px;
  }
`

export const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.direction === "left" ? "left: 10px;" : "right: 10px;")}
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
  
  &:hover:not(:disabled) {
    background-color: rgba(0, 0, 0, 0.9);
    transform: translateY(-50%) scale(1.1);
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
    display: none;
  }
`

export const VideoPlayer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 9/16;
  border-radius: 12px;
  overflow: hidden;
  background-color: #000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 768px) {
    border-radius: 8px;
    max-height: 400px;
  }
  
  @media (max-width: 640px) {
    max-height: 350px;
  }
`

export const ProgressBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: rgba(255, 255, 255, 0.3);
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
