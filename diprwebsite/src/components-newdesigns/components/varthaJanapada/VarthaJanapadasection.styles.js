import styled from "styled-components"
import theme from "../../../theme/Theme"

export const PageLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing(7.5)};
  max-width: 100%;
  padding-left: ${theme.spacing(10)};
  padding-right: ${theme.spacing(10)};
  padding-top: ${theme.spacing(2.5)};
  padding-bottom: ${theme.spacing(2.5)};
  background: ${theme.colors.background};

  @media (max-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing(5)};
    max-width: 95%;
    padding: ${theme.spacing(2)};
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing(2.5)};
    max-width: 100%;
    padding: ${theme.spacing(1.5)};
  }
`

export const FlexContainer = styled.div`
  display: flex;
  gap: ${theme.spacing(5)};
  align-items: flex-start;
  width: 100%;

  /* StateNews takes 70% */
  > :first-child {
    flex: 0 0 70%;
    max-width: 70%;
  }

  /* StateGovernmentWebsites takes 30% */
  > :last-child {
    flex: 0 0 30%;
    max-width: 29%;
  }

  @media (max-width: ${theme.breakpoints.desktop}) {
    gap: ${theme.spacing(3)};
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: ${theme.spacing(4)};
    
    > :first-child,
    > :last-child {
      flex: 1;
      max-width: 100%;
    }
  }
`