import styled from 'styled-components';
import theme from '../../../theme/Theme';

export const Title = styled.h1`
  font-size: ${theme.spacing(3)};
  margin-bottom: ${theme.spacing(2.5)};
  text-align: left;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.spacing(2.5)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(3.125)};
  }
`;

export const Container = styled.div`
  padding: ${theme.spacing(2.5)};
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing(3)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    padding: ${theme.spacing(2)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(1)};
  }
`;

export const NewsCard = styled.div`
  position: relative;
  width: 100%;
  border-radius: ${theme.spacing(1.25)};
  overflow: hidden;
  box-shadow: 0 ${theme.spacing(0.5)} ${theme.spacing(1)} rgba(0, 0, 0, 0.1);
  aspect-ratio: 1 / 1.5;

  @media (max-width: ${theme.breakpoints.mobile}) {
    aspect-ratio: 1 / 1.2;
  }
`;

export const NewsImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: ${theme.breakpoints.mobile}) {
    aspect-ratio: 1 / 1.2;
  }
`;

export const NewsContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.6);
  color: ${theme.colors.white};
  padding: ${theme.spacing(1.625)};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing(1.25)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(1.5)};
    
  }
`;

export const NewsHeader = styled.h2`
  font-size: ${theme.spacing(2.25)};
  margin-bottom: ${theme.spacing(1.25)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.spacing(2)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.8)};
    margin-bottom: ${theme.spacing(0.625)};
  }
`;

export const NewsTitle = styled.h3`
  font-size: ${theme.spacing(2)};
  margin-bottom: ${theme.spacing(1.25)};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.75)};
    margin-bottom: ${theme.spacing(0.625)};
  }
`;

export const NewsText = styled.p`
  font-size: ${theme.spacing(1.75)};
  margin-bottom: ${theme.spacing(1.25)};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.5)};
    margin-bottom: ${theme.spacing(0.625)};
  }
`;

export const ReadMore = styled.a`
  display: inline-block;
  margin-top: ${theme.spacing(1.875)};
  width: fit-content;
  padding: ${theme.spacing(0.625)} ${theme.spacing(1.25)};
  background-color: ${theme.colors.button};
  color: ${theme.colors.white};
  text-decoration: none;
  border-radius: ${theme.spacing(0.625)};
  font-size: ${theme.spacing(1.75)};

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.5)};
    margin-top: ${theme.spacing(1.25)};
  }
`;

export const NewsMeta = styled.div`
  font-size: ${theme.spacing(1.5)};
  color: ${theme.colors.textgray};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.25)};
  }
`;

export const TabsContainer = styled.div`
  display: flex;
  gap: ${theme.spacing(1)};
  margin-bottom: ${theme.spacing(2)};
  overflow-x: auto;
  white-space: nowrap;
  scrollbar-width: thin;
  scrollbar-color: transparent;

  &::-webkit-scrollbar {
    height: ${theme.spacing(0.5)};
  }

  &::-webkit-scrollbar-thumb {
    background: ${theme.colors.primary};
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