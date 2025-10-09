import styled from "styled-components"
import theme from "../../../../../theme/Theme"

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(3.5)};

  @media (max-width: ${theme.breakpoints.desktop}) {
    gap: ${theme.spacing(3)};
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    gap: ${theme.spacing(2.5)};
    margin-top: ${theme.spacing(2.5)};
  }
`

export const Divider = styled.hr`
  height: 1px;
  border: none;
  background: ${theme.colors.gray[400]};
  margin: ${theme.spacing(3.125)} 0 0;
  width: 100%;
`
