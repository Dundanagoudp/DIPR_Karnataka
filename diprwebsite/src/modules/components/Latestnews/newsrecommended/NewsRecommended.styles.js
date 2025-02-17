import styled from "styled-components";
import theme from "../../../../theme/Theme";

export const Container = styled.div`
  margin: auto;
  max-width: 1200px;
  padding: ${theme.spacing(3)};
  background: ${theme.colors.background};
  font-family: ${theme.fonts.body};
  border-radius: 12px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    max-width: 100%;
    padding: ${theme.spacing(2)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    max-width: 100%;
    padding: ${theme.spacing(1)};
    margin: 0;
  }
`;

export const Header = styled.h2`
  font-size: ${theme.spacing(3.5)};
  color: ${theme.colors.black};
  font-family: ${theme.fonts.heading};
  text-align: left;
  margin-bottom: ${theme.spacing(4)};
  letter-spacing: 1px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.spacing(3.5)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(3)};
  }
`;

export const Content = styled.div`
  display: block;
  width: 100%;
`;

export const VideoCard1 = styled.div`
  width: 100%;
  padding: ${theme.spacing(1)};
  background: ${theme.colors.light};
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  margin-bottom: ${theme.spacing(2)};

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(1)};
  }
`;

export const VideoThumbnail = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: ${theme.spacing(1.5)};
`;

export const VideoDetails = styled.div`
  display: block;
`;

export const VideoMeta = styled.span`
  font-size: ${theme.spacing(1.95)};
  font-weight: bold;
  margin-top: ${theme.spacing(1)};
  color: ${theme.colors.secondary};
`;

export const VideoMetacat = styled.span`
  font-size: ${theme.spacing(2)};
  font-weight: bold;
  display: block;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing(1)};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.5)};
  }
`;

export const Title = styled.h4`
  font-size: ${theme.spacing(2.2)};
  font-weight: 600;
  color: ${theme.colors.textDark};
  margin-bottom: ${theme.spacing(1)};
  font-family: ${theme.fonts.body};
  line-height: 1.4;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.8)};
    margin-bottom: ${theme.spacing(0.5)};
    line-height: 1.2;
  }
`;

export const NewsMeta = styled.div`
  display: block;
  margin-top: ${theme.spacing(2)};
  font-size: ${theme.spacing(1.8)};
  color: ${theme.colors.textLight};
  font-family: ${theme.fonts.body};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.7)};
  }
`;

export const BookmarkIconWrapper = styled.div`
  cursor: pointer;
  margin-left: auto;
  display: block;
  color: ${({ isBookmarked }) =>
    isBookmarked ? theme.colors.primary : theme.colors.textLight};
  transition: color 0.2s ease;

  &:hover {
    color: ${theme.colors.primary};
  }
`;