import styled from "styled-components";
import theme from "../../../theme/Theme";

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

export const TabsContainer = styled.div`
  display: flex;
  gap: ${theme.spacing(1.5)};
  margin-bottom: ${theme.spacing(2)};
  overflow-x: auto;
  white-space: nowrap;
  scrollbar-width: thin; 
  scrollbar-color: transparent;

  &::-webkit-scrollbar {
    height: ${theme.spacing(0.5)}; 
  }

  &::-webkit-scrollbar-thumb {
    background: ${theme.colors.primary}; /* Scrollbar color */
    border-radius: ${theme.spacing(0.2)};
  }

  &::-webkit-scrollbar-track {
    background: transparent; 
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: ${theme.spacing(1)};
    padding: 0.5rem;
  }
`;

export const Tab = styled.button`
  background: none;
  border: none;
  font-size: ${theme.spacing(2)};
  cursor: pointer;
  color: ${(props) => (props.active ? theme.colors.primary : theme.colors.black)};
  border-bottom: ${(props) => (props.active ? `${theme.spacing(0.375)} solid ${theme.colors.primary}` : "none")};
  padding: ${theme.spacing(1)};
  font-weight: bold;
  font-family: ${theme.fonts.body};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.75)};
    padding: ${theme.spacing(0.75)};
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${theme.spacing(4)};
  margin-right: ${theme.spacing(4)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing(3)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr); 
    gap: ${theme.spacing(2)};
    margin-right: 0;
    padding: 0.5rem;
  }
`;

export const VideoCard1 = styled.div`
  padding: ${theme.spacing(1)};
  background: ${theme.colors.light};
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  // &:hover {
  //   transform: translateY(-4px);
  //   box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  // }

  @media (max-width: ${theme.breakpoints.mobile}) {
    max-width: 100%;
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
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(0.5)};
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
  display: flex;
  align-items: center;
  color: ${theme.colors.text};
  gap: ${theme.spacing(1)};

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
      color: ${theme.colors.textDark};
  margin-bottom: ${theme.spacing(1)};
  font-family: ${theme.fonts.body};

  }
`;

export const NewsMeta = styled.div`
  display: flex;
  margin-top: ${theme.spacing(2)};
  font-size: ${theme.spacing(1.8)};
  color: ${theme.colors.textLight};
  font-family: ${theme.fonts.body};
  gap: ${theme.spacing(1)};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.7)};
  }
`;

export const BookmarkIconWrapper = styled.div`
  cursor: pointer;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ isBookmarked }) =>
    isBookmarked ? theme.colors.primary : theme.colors.textLight};
  transition: color 0.2s ease;

  &:hover {
    color: ${theme.colors.primary};
  }
`;