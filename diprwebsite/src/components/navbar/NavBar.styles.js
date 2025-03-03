import styled, { keyframes } from "styled-components";
import theme from "../../theme/Theme";

const scrollAnimation = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-20%); } /* Moves halfway to make loop seamless */
`;

export const NavContainer = styled.nav`
  background-color: ${theme.colors.error}; 
  padding: ${theme.spacing(0.8)} 0;
  overflow: hidden;
  white-space: nowrap;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1000; 

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(0.5)} 0;
  }
    @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing(0.5)} 0;
  }
`;

export const NewsWrapper = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
`;

export const NewsTicker = styled.div`
  display: flex;
  gap: ${theme.spacing(2)};
  animation: ${scrollAnimation} 20s linear infinite; /* Slower animation */
  min-width: 200%;
`;

export const NewsItem = styled.span`
  color: ${theme.colors.background};
  font-family: ${theme.fonts.heading};
  font-weight: bold;
  
  padding: 0 ${theme.spacing(2)};
  white-space: nowrap;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 ${theme.spacing(1)};
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 0 ${theme.spacing(1)};
  }


`;