import styled from "styled-components";
import theme from "../../../theme/Theme";

export const Container = styled.div`
  max-width: ${theme.spacing(100)};
  margin: auto;
  padding: 0 ${theme.spacing(2)};
`;

export const Title = styled.h1`
  font-size: ${theme.spacing(3)};
  color: ${theme.colors.black};
  font-family: ${theme.fonts.heading};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(3.5)};
    
  }
`;

export const TabsContainer = styled.div`
  display: flex;
  gap: ${theme.spacing(1.5)};
  margin-bottom: ${theme.spacing(2)};
  overflow-x: auto;
  white-space: nowrap;
  scrollbar-width: thin ; 
  scrollbar-color:  transparent;

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

export const NewsCard = styled.div`
  background: ${theme.colors.light};
  border-radius: ${theme.spacing(1)};
  overflow: hidden;
  padding: ${theme.spacing(2)};
  box-shadow: 0px ${theme.spacing(0.25)} ${theme.spacing(1.25)} rgba(0, 0, 0, 0.1);
  margin-bottom: ${theme.spacing(2)};

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(1.5)};
  }
`;

export const NewsImage = styled.img`
  width: 100%;
  height: 60vh;
  object-fit: cover;

  @media (max-width: ${theme.breakpoints.tablet}) {
    height: 40vh;
    max-width: 100%;
  }

  @media (max-width: ${theme.breakpoints.tablet}) and (max-width: 1366) {
    height: 40vh;
    max-width: 100%;
  }


  @media (max-width: ${theme.breakpoints.mobile}) {
    height: 30vh;
    width: 100%;
    object-fit: cover;
  }
`;

export const NewsContent = styled.div`
  padding: ${theme.spacing(2)};

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(1.5)};
  }
`;

export const NewsHeader = styled.div`
  font-size: ${theme.spacing(2.8)};
  color: ${theme.colors.icons};
  font-weight: bold;
  font-family: ${theme.fonts.accent};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(2.2)};
  }
`;

export const NewsTitle = styled.h2`
  font-size: ${theme.spacing(2.5)};
  color: ${theme.colors.black};
  font-family: ${theme.fonts.heading};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(2)};
  }
`;

export const ShareIcons = styled.div`
  display: flex;
  gap: ${theme.spacing(3)};
  font-size: ${theme.spacing(3.5)};
  margin: ${theme.spacing(1)} 0;
  color: ${theme.colors.icons};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(2.5)};
    gap: ${theme.spacing(2)};
  }
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

export const TrendingTag = styled.span`
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

export const OutlineDots = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: ${theme.spacing(55)};
  margin-top: ${theme.spacing(0.5)};
  font-size: ${theme.spacing(3)};
  color: ${theme.colors.black};
  font-family: ${theme.fonts.body};

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding-left: ${theme.spacing(2)};
    font-size: ${theme.spacing(2)};
  }
`;

export const ReadMore = styled.a`
  color: ${theme.colors.primary};
  font-size: ${theme.spacing(1.75)};
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
  margin-top: ${theme.spacing(0.5)};
  &:hover {
    text-decoration: underline;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.5)};
  }
`;

export const NewsText = styled.p`
  font-size: ${theme.spacing(2)};
  color: ${theme.colors.black};
  margin-top: ${theme.spacing(2.5)};
  font-family: ${theme.fonts.body};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.75)};
  }
`;