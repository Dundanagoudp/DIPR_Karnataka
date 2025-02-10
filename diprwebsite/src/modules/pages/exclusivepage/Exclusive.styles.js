import styled from "styled-components";
import theme from "../../../theme/Theme"; 

export const FlexContainer = styled.div`
  display: flex;
  margin-left: 100px;
  margin-right: 40px;
  padding: 20px;
  gap: 60px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column; 
    margin-left: ${theme.spacing(4)};
    margin-right: ${theme.spacing(4)};
    gap: ${theme.spacing(4)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-left: ${theme.spacing(2)};
    margin-right: ${theme.spacing(2)};
    gap: ${theme.spacing(2)}; 
  }
`;

// Container for RelatedPosts
export const RelatedPostsContainer = styled.div`
  margin-left: 100px;
  margin-right: 100px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    margin-left: ${theme.spacing(4)};
    margin-right: ${theme.spacing(4)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-left: ${theme.spacing(2)};
    margin-right: ${theme.spacing(2)};
  }
`;

export const SecondFlexContainer = styled.div`
  display: flex;
  margin-left: 100px;
  padding: 20px;
  gap: 30px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column; // Stack components vertically
    margin-left: ${theme.spacing(4)};
    gap: ${theme.spacing(4)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-left: ${theme.spacing(2)};
    gap: ${theme.spacing(2)};
  }
`;