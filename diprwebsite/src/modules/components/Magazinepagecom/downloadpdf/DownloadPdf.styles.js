import styled from "styled-components";
import theme from "../../../../theme/Theme";

export const PdfCarouselContainer = styled.div`
  width: 85%;
  height: ${theme.spacing(56.25)}; // 450px = 56.25 * 8px
  overflow: hidden;
  position: relative;
  border-radius: ${theme.spacing(1)};
  margin: ${theme.spacing(1)} auto;

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 90%;
    height: ${theme.spacing(40)}; // 320px = 40 * 8px
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 95%;
    height: ${theme.spacing(30)}; // 240px = 30 * 8px
  }
`;

export const PdfCarouselItem = styled.div`
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

export const PdfOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  border-radius: ${theme.spacing(1)};
`;

export const PdfContentWrapper = styled.div`
  position: absolute;
  bottom: ${theme.spacing(2)};
  left: ${theme.spacing(2)};
  right: ${theme.spacing(2)};
  z-index: 2;
  display: flex;
  flex-direction: column;

  @media (max-width: ${theme.breakpoints.tablet}) {
    bottom: ${theme.spacing(1)};
    left: ${theme.spacing(1)};
    right: ${theme.spacing(1)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    bottom: ${theme.spacing(0.5)};
    left: ${theme.spacing(0.5)};
    right: ${theme.spacing(0.5)};
  }
`;

export const PdfTrendingCategory = styled.div`
  background: ${theme.colors.error};
  color: ${theme.colors.background};
  padding: ${theme.spacing(0.4)} ${theme.spacing(1.5)};
  font-size: ${theme.spacing(1.8)};
  font-weight: bold;
  border-radius: ${theme.spacing(0.5)};
  display: inline-block;
  width: auto;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.spacing(1.5)};
    padding: ${theme.spacing(0.3)} ${theme.spacing(1)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.2)};
    padding: ${theme.spacing(0.2)} ${theme.spacing(0.8)};
  }
`;

export const PdfNewsInfo = styled.div`
  color: ${theme.colors.light};
  font-size: ${theme.spacing(1.9)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.spacing(1.6)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.3)};
  }
`;

export const PdfNewsTitle = styled.h2`
  color: ${theme.colors.background};
  font-size: ${theme.spacing(3.8)};
  font-weight: semibold;
  margin-top: ${theme.spacing(2)};
  margin-bottom: ${theme.spacing(4)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.spacing(3)};
    margin-top: ${theme.spacing(1.5)};
    margin-bottom: ${theme.spacing(3)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(2.5)};
    margin-top: ${theme.spacing(1)};
    margin-bottom: ${theme.spacing(2)};
  }
`;

export const PdfArrowIcon = styled.button`
  position: absolute;
  bottom: ${theme.spacing(5)};
  right: ${theme.spacing(6)};
  padding: ${theme.spacing(2)};
  border-radius: 50%;
  display: flex;
  color: ${theme.colors.background};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: transparent;
  border: none;
  transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-${theme.spacing(1)});
    background: rgba(0, 0, 0, 0.8);
    box-shadow: 0px ${theme.spacing(1)} ${theme.spacing(2)} rgba(0, 0, 0, 0.4);
  }

  &:focus {
    outline: none;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    bottom: ${theme.spacing(4)};
    right: ${theme.spacing(4)};
    padding: ${theme.spacing(1.5)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    bottom: ${theme.spacing(3)};
    right: ${theme.spacing(3)};
    padding: ${theme.spacing(1)};
  }
`;

export const PdfDotContainer = styled.div`
  position: absolute;
  top: ${theme.spacing(1.25)}; // 10px = 1.25 * 8px
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: ${theme.spacing(1)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    top: ${theme.spacing(1)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    top: ${theme.spacing(0.8)};
  }
`;

export const PdfDot = styled.div`
  width: ${theme.spacing(1.25)}; // 10px = 1.25 * 8px
  height: ${theme.spacing(1.25)}; // 10px = 1.25 * 8px
  border-radius: 50%;
  background: ${({ active }) => (active ? theme.colors.primary : "#888")};
  transition: background 0.3s ease;
  cursor: pointer;

  &:hover {
    background: ${theme.colors.primary};
  }
`;

export const PdfDownloadButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(0.625)}; 
  background-color: hsla(0, 0.00%, 100.00%, 0.20);
  color: ${theme.colors.background};
  padding: ${theme.spacing(1.25)} ${theme.spacing(1.875)}; 
  font-size: ${theme.spacing(1.75)}; 
  font-weight: 500;
  border-radius: ${theme.spacing(1)};
  border: none;
  cursor: pointer;
  backdrop-filter: blur(${theme.spacing(0.625)}); 
  transition: background 0.3s ease;
  position: absolute;
  bottom: ${theme.spacing(6)}; 
  right: ${theme.spacing(8.125)}; 

  &:hover {
    background-color: hsla(0, 0.00%, 100.00%, 0.30);
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    bottom: ${theme.spacing(4)};
    right: ${theme.spacing(6)};
    font-size: ${theme.spacing(1.5)};
    padding: ${theme.spacing(1)} ${theme.spacing(1.5)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    bottom: ${theme.spacing(3)};
    right: ${theme.spacing(4)};
    font-size: ${theme.spacing(1.25)};
    padding: ${theme.spacing(0.8)} ${theme.spacing(1.2)};
  }
`;