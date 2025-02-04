import styled from "styled-components";
import theme from "../../../theme/Theme";

export const HomeContainer = styled.div`
  background-color: ${theme.colors.background};
  padding: ${theme.spacing(1)};
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: ${theme.spacing(0.8)}; /* Reduced gap */
  align-items: flex-start; /* Align elements properly */

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: ${theme.spacing(1)}; /* Slightly increase gap for mobile */
  }
`;

export const NewsSection = styled.div`
  flex: 1;
  max-width: 70%; 
  margin-left: ${theme.spacing(12)};
`;

export const MagazineSection = styled.div`
  flex: 1;
  max-width: 30%;
  margin-right: ${theme.spacing(12)};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    max-width: 100%;
    margin-left: 0;
  }
`;
