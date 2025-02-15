import styled from "styled-components";
import theme from "../../../theme/Theme";

export const FlexContainer = styled.div`
  display: flex;
  margin-left: 100px;
  margin-right: 40px;
  padding: 20px;
  gap: 60px;

  @media (max-width: ${theme.breakpoints.desktop}) {
    margin-left: 80px;
    margin-right: 30px;
    gap: 40px;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    margin-left: ${theme.spacing(4)};
    margin-right: ${theme.spacing(4)};
    gap: ${theme.spacing(4)};
    padding: 10px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-left: ${theme.spacing(2)};
    margin-right: ${theme.spacing(2)};
    gap: ${theme.spacing(2)};
    padding: 5px;
  }

  display: flex;
  flex-wrap: wrap;
  margin-left: 100px;
  margin-right: 40px;
  padding: 20px;
  gap: 60px;
  overflow: hidden;
  position: relative; 


  /* Specific device adjustments */
  @media (max-width: 1024px) and (min-width: 768px) {
    margin-left: 60px;
    margin-right: 20px;
    gap: 30px;
  }

  @media (max-width: 820px) and (min-width: 768px) {
    margin-left: 40px;
    margin-right: 10px;
    gap: 20px;
  }

  @media (max-width: 540px) {
    margin-left: ${theme.spacing(2)};
    margin-right: ${theme.spacing(2)};
    gap: ${theme.spacing(2)};
  }

  @media (max-width: 280px) {
    margin-left: ${theme.spacing(1)};
    margin-right: ${theme.spacing(1)};
    gap: ${theme.spacing(1)};
  }
`;

export const RelatedPostsContainer = styled.div`
  margin-left: 100px;
  margin-right: 100px;

  @media (max-width: ${theme.breakpoints.desktop}) {
    margin-left: 80px;
    margin-right: 80px;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    margin-left: ${theme.spacing(4)};
    margin-right: ${theme.spacing(4)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-left: ${theme.spacing(2)};
    margin-right: ${theme.spacing(2)};
  }

  /* Specific device adjustments */
  @media (max-width: 1024px) and (min-width: 768px) {
    /* iPad Pro, iPad Air, Surface Pro 7 */
    margin-left: 60px;
    margin-right: 60px;
  }

  @media (max-width: 820px) and (min-width: 768px) {
    /* iPad Mini, Surface Duo */
    margin-left: 40px;
    margin-right: 40px;
  }

  @media (max-width: 540px) {
    /* Samsung Galaxy A51/71, Nest Hub */
    margin-left: ${theme.spacing(2)};
    margin-right: ${theme.spacing(2)};
  }

  @media (max-width: 280px) {
    /* Galaxy Z Fold 5 (folded) */
    margin-left: ${theme.spacing(1)};
    margin-right: ${theme.spacing(1)};
  }
`;

export const SecondFlexContainer = styled.div`
  display: flex;
  margin-left: 100px;
  padding: 20px;
  gap: 30px;

  @media (max-width: ${theme.breakpoints.desktop}) {
    margin-left: 80px;
    gap: 20px;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    margin-left: ${theme.spacing(4)};
    gap: ${theme.spacing(4)};
    padding: 10px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-left: ${theme.spacing(2)};
    gap: ${theme.spacing(2)};
    padding: 5px;
  }

  /* Specific device adjustments */
  @media (max-width: 1024px) and (min-width: 768px) {
    /* iPad Pro, iPad Air, Surface Pro 7 */
    margin-left: 60px;
    gap: 15px;
  }

  @media (max-width: 820px) and (min-width: 768px) {
    /* iPad Mini, Surface Duo */
    margin-left: 40px;
    gap: 10px;
  }

  @media (max-width: 540px) {
    /* Samsung Galaxy A51/71, Nest Hub */
    margin-left: ${theme.spacing(2)};
    gap: ${theme.spacing(2)};
  }

  @media (max-width: 280px) {
    /* Galaxy Z Fold 5 (folded) */
    margin-left: ${theme.spacing(1)};
    gap: ${theme.spacing(1)};
  }
`;