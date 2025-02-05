import styled from "styled-components";
import theme from "../../../theme/Theme";

export const Container = styled.div`
  width: 1200px;
  margin: auto;
  padding: ${theme.spacing(2)};
  background: ${theme.colors.background};
  font-family: ${theme.fonts.body};

  @media (max-width: ${theme.breakpoints.tablet}) {
    max-width: 100%;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    max-width: 100%;
    padding: ${theme.spacing(1)};
    padding-right: ${theme.spacing(1)};
  }
`;

export const Header = styled.h2`
  font-size: ${theme.spacing(3)};
  color: ${theme.colors.black};
  font-family: ${theme.fonts.heading};

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.spacing(3.5)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(3)};
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: ${theme.spacing(6)}; 
  margin-right: ${theme.spacing(4)};
  // padding-bottom: ${theme.spacing(2)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr); /* 2 columns for tablets */
    gap: ${theme.spacing(4)}; /* Reduced gap for tablets */
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr; /* 1 column for mobile */
    gap: ${theme.spacing(2)}; /* Further reduced gap for mobile */
  }
`;

export const VideoCard1 = styled.div`
  padding: ${theme.spacing(2)};
  background: ${theme.colors.light};
  border-radius: ${theme.spacing(1)};
  cursor: pointer;
  box-shadow: 0px ${theme.spacing(0.25)} ${theme.spacing(0.625)} rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 100%; /* Ensure cards take full width of their grid cell */

  @media (max-width: ${theme.breakpoints.mobile}) {
    max-width: 100%;
  }
`;

export const VideoThumbnail = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: ${theme.spacing(1)};
  margin-bottom: ${theme.spacing(1)};
`;

export const VideoDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(1)};
`;

export const VideoMeta = styled.span`
  font-size: ${theme.spacing(2)};
  font-weight: bold;
  margin-top: ${theme.spacing(1)};
  color: ${theme.colors.icons};
`;

export const VideoMetacat = styled.span`
  font-size: ${theme.spacing(2.4)};
  font-weight: bold;
  display: flex;
  color: ${theme.colors.icons};
`;

export const Title = styled.h4`
  font-size: ${theme.spacing(2)};
  font-weight: bold;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing(1)};
  font-family: ${theme.fonts.body};
`;

export const NewsMeta = styled.div`
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

export const BookmarkIconWrapper = styled.div`
  cursor: pointer;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${theme.colors.primary};
  }
`;