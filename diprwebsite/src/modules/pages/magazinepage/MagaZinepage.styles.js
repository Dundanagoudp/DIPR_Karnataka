import styled from "styled-components";
import theme from "../../../theme/Theme"; 

// Flex container for the two components
export const FlexContainer = styled.div`
  display: flex;
//   justify-content: space-between;
  margin-left: ${theme.spacing(15)};
  margin-right: ${theme.spacing(8)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column; // Stack components vertically
    margin-left: ${theme.spacing(4)}; 
    margin-right: ${theme.spacing(4)};
    gap: ${theme.spacing(4)}; // Add gap between components
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-left: ${theme.spacing(2)}; // Reduce margins for mobile
    margin-right: ${theme.spacing(2)};
    gap: ${theme.spacing(2)}; // Reduce gap for mobile
  }
`;