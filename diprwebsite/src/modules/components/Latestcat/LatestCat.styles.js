import styled, { keyframes } from "styled-components";
import theme from "../../../theme/Theme";

const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

export const Container = styled.div`
  margin: auto;
  max-width: 1200px;
  margin-top: ${theme.spacing(5)};
  padding: 0 ${theme.spacing(5)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing(1)}; 
    max-width: 100%;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(1.9)}; 
  }
`;

export const NewsCardWrapper = styled.div`
  background: ${theme.colors.light};
  border-radius: ${theme.spacing(1)};
  overflow: hidden;
  padding: ${theme.spacing(2)};
  margin-bottom: ${theme.spacing(2)};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing(1.9)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(1.5)};
    max-width: 100%;
  }
`;

export const NewsImageWrapper = styled.div`
  img {
    width: 100%;
    border-radius: ${theme.spacing(1)};
    height: auto;
    object-fit: cover;
  
    @media (max-width: ${theme.breakpoints.tablet}) {
      height: 40vh;
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
      height: 30vh;
    }
  }
`;

export const NewsContentWrapper = styled.div`
  padding: ${theme.spacing(2)};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(1.5)};
  }
`;

export const NewsHeaderWrapper = styled.div`
  font-size: ${theme.spacing(2.8)};
  color: ${theme.colors.icons};
  font-weight: bold;
  font-family: ${theme.fonts.accent};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(2.2)};
  }
`;

export const NewsTitleWrapper = styled.h2`
  font-size: ${theme.spacing(2.5)};
  color: ${theme.colors.black};
  font-family: ${theme.fonts.heading};
  margin-bottom: ${theme.spacing(1)};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(2)};
  }
`;

export const ShareIconsWrapper = styled.div`
  display: flex;
  margin-top: ${theme.spacing(1.5)};
  gap: ${theme.spacing(3)};
  font-size: ${theme.spacing(3.3)};
  margin: ${theme.spacing(1)} 0;
  color: ${theme.colors.icons};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(2.5)};
    gap: ${theme.spacing(2)};
  }
`;

export const NewsMetaWrapper = styled.div`
  display: flex;
  margin-top: ${theme.spacing(2.5)};
  font-size: ${theme.spacing(1.75)};
  color: ${theme.colors.black};
  font-family: ${theme.fonts.body};
  margin-top: ${theme.spacing(2.95)};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.5)};
  }
`;

export const TrendingTagWrapper = styled.span`
  background: ${theme.colors.error};
  color: ${theme.colors.background};
  font-size: ${theme.spacing(1.5)};
  font-weight: bold;
  margin-right: ${theme.spacing(3)};
  padding: ${theme.spacing(0.6)} ${theme.spacing(1)};
  border-radius: ${theme.spacing(0.625)};
  font-family: ${theme.fonts.monospace};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.25)};
    margin-right: ${theme.spacing(2)};
  }
`;

export const NewsTextWrapper = styled.p`
  font-size: ${theme.spacing(2.1)};
  color: ${theme.colors.black};
  line-height: 1.3;
  margin-top: ${theme.spacing(2.8)};
  font-family: ${theme.fonts.body};
  column-count: 2;
  column-gap: ${theme.spacing(4)}; 
  text-align: justify;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.75)};
    column-count: 1;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(2)};
  margin: ${theme.spacing(1.5)} 0;

  svg {
    font-size: ${theme.spacing(2.5)};
    color: ${({ theme }) => theme.colors.black};
    cursor: pointer;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

// Shimmer effect components
export const ShimmerWrapper = styled.div`
  width: 100%;
`;

export const ShimmerImage = styled.div`
  width: 100%;
  height: 300px;
  background: #f6f7f8;
  background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
  background-size: 800px 104px;
  animation: ${shimmer} 1.5s infinite linear;
  border-radius: ${theme.spacing(1)};
  margin-bottom: ${theme.spacing(2)};

  @media (max-width: ${theme.breakpoints.mobile}) {
    height: 200px;
  }
`;

export const ShimmerLine = styled.div`
  width: 60%;
  height: 20px;
  background: #f6f7f8;
  background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
  background-size: 800px 104px;
  animation: ${shimmer} 1.5s infinite linear;
  margin-bottom: ${theme.spacing(2)};
`;

export const ShimmerTitle = styled.div`
  width: 100%;
  height: 30px;
  background: #f6f7f8;
  background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
  background-size: 800px 104px;
  animation: ${shimmer} 1.5s infinite linear;
  margin-bottom: ${theme.spacing(2)};
`;

export const ShimmerText = styled.div`
  width: 100%;
  height: 15px;
  background: #f6f7f8;
  background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
  background-size: 800px 104px;
  animation: ${shimmer} 1.5s infinite linear;
  margin-bottom: ${theme.spacing(1.5)};

  &:last-child {
    width: 80%;
  }
`;