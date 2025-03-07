import styled from 'styled-components';
import theme from '../../../theme/Theme';

// Title is placed outside the grid container
export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: left;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 20px;  
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 25px;  
  }
`;

// Grid container for magazines
export const Container = styled.div`
  // width: 100%;
  padding: 20px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 columns */
  gap: ${theme.spacing(3)}; 

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr); 
    padding: ${theme.spacing(2)}; /* Adjust padding for smaller screens */
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(1)}; 
    
  }
`;

// Magazine card styling
export const NewsCard = styled.div`
  position: relative;
  width: 100%;  
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  aspect-ratio: 1 / 1.5; 

  @media (max-width: ${theme.breakpoints.mobile}) {
    aspect-ratio: 1 / 1.2; 
    width: 100%;
  }
`;

export const NewsImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: ${theme.breakpoints.mobile}) {
    aspect-ratio: 1 / 1.2; 
    width: 100%;
  }


`;

export const NewsContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  padding: 13px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; 

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 10px; /* Reduce padding on tablet */
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 8px; /* Reduce padding on mobile */
  }
`;

export const NewsHeader = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 16px;  /* Adjust font size for tablet */
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 14px;  /* Adjust font size for mobile */
    margin-bottom: 5px; /* Reduce margin on mobile */
  }
`;

export const NewsTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 10px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 14px;  
    margin-bottom: 5px; 
  }
`;

export const NewsText = styled.p`
  font-size: 14px;
  margin-bottom: 10px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 12px;  /* Smaller font size on mobile */
    margin-bottom: 5px; /* Reduce margin on mobile */
  }
`;

export const ReadMore = styled.a`
  display: inline-block;
  margin-top: 15px;
  width: fit-content;
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 12px;  /* Smaller font size on mobile */
    margin-top: 10px; /* Reduce margin on mobile */
  }
`;

export const NewsMeta = styled.div`
  font-size: 12px;
  color: #ccc;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 10px;  /* Smaller font size on mobile */
  }
`;

export const TabsContainer = styled.div`
  display: flex;
  gap: ${theme.spacing()};
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