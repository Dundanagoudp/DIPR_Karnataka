import styled from "styled-components";
import theme from "../../../theme/Theme";

export const Container = styled.div`
  width: 100%;
  max-width: ${theme.spacing(50)};
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
export const TabContainer = styled.div`
  display: flex;
  overflow-x: auto;
  scrollbar-width: thin; /* For Firefox */
  scrollbar-color: ${theme.colors.primary} ${theme.colors.light}; /* For Firefox */

  &::-webkit-scrollbar {
    height: ${theme.spacing(0.5)};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.primary};
    border-radius: ${theme.spacing(0.25)};
  }

  &::-webkit-scrollbar-track {
    background-color: ${theme.colors.light};
  }

  border-bottom: ${theme.spacing(0.25)} solid ${theme.colors.info};
  margin-bottom: ${theme.spacing(2)};

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: ${theme.spacing(1)};
  }
`;

export const Tab = styled.button`
  background: none;
  border: none;
  padding: ${theme.spacing(1)} ${theme.spacing(2)};
  cursor: pointer;
  font-size: ${theme.spacing(2)};
  font-weight: bold;
  color: ${({ active }) =>
    active ? theme.colors.primary : theme.colors.black};
  border-bottom: ${({ active }) =>
    active ? `${theme.spacing(0.375)} solid ${theme.colors.primary}` : "none"};
  white-space: nowrap; /* Prevent text wrapping */

  &:hover {
    color: ${theme.colors.primary};
  }
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.75)};
    padding: ${theme.spacing(0.75)};
  }
`;



export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(2)};
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  padding: ${theme.spacing(1)};
  background: ${theme.colors.light};
  border-radius: ${theme.spacing(1)};
  box-shadow: 0px ${theme.spacing(0.25)} ${theme.spacing(0.625)}
    rgba(0, 0, 0, 0.1);
`;

export const VideoCard = styled(Card)`
  background: ${theme.colors.lightGray};
  box-shadow: 0px ${theme.spacing(0.25)} ${theme.spacing(0.625)}
    rgba(0, 0, 0, 0.2);
`;

export const Image = styled.img`
  width: ${theme.spacing(12)};
  height: ${theme.spacing(12)};
  object-fit: cover;
  border-radius: ${theme.spacing(1.5)};
  margin-right: ${theme.spacing(2)};
`;



export const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h4`
  font-size: ${theme.spacing(2)};
  font-weight: bold;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing(1)};
  font-family: ${theme.fonts.body};
`;

export const Meta = styled.span`
  font-size: ${theme.spacing(1.8)};
  font-weight: bold;
  padding: ${theme.spacing(0.5)} ${theme.spacing(2)};
  margin-top: ${theme.spacing(2)};
  margin-right: ${theme.spacing(2)};
  color: ${theme.colors.icons};
`;

export const TrendingBadge = styled.span`
  font-size: ${theme.spacing(1.25)};
  color: ${theme.colors.background};
  background: ${theme.colors.error};
  padding: ${theme.spacing(0.25)} ${theme.spacing(0.75)};
  border-radius: ${theme.spacing(0.5)};
  font-weight: bold;
`;



export const VideoTitle = styled.h2`
  font-size: ${theme.spacing(3.5)};
  color: ${theme.colors.black};
  font-family: ${theme.fonts.heading};
  font-weight: bold;
`; 

// Media Queries for Responsive Design
export const ResponsiveContainer = styled(Container)`
  @media (max-width: ${theme.breakpoints.desktop}) {
    max-width: 90%;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    max-width: 95%;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    max-width: 100%;
    padding: ${theme.spacing(1)};
  }
`;

export const ResponsiveTabContainer = styled(TabContainer)`
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding-bottom: ${theme.spacing(1)};
  }
`;

export const ResponsiveTab = styled(Tab)`
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.5)};
    padding: ${theme.spacing(0.5)} ${theme.spacing(1)};
  }
`;


export const ResponsiveCard = styled(Card)`
  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ResponsiveImage = styled(Image)`
  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 100%;
    height: auto;
    margin-right: 0;
    margin-bottom: ${theme.spacing(1)};
  }
`;



export const ResponsiveTitle = styled(Title)`
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.5)};
  }
`;

export const ResponsiveMeta = styled(Meta)`
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.2)};
  }
`;



export const ResponsiveVideoTitle = styled(VideoTitle)`
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(2)};
  }
`;
