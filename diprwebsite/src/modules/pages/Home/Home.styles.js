import styled from "styled-components";
import theme from "../../../theme/Theme";

export const HomeContainer = styled.div`

  display: flex;
  flex-direction: column;
  padding: ${(props) => props.theme.spacing(2)};
`;

export const NewsContainer = styled.div`

  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-l
  gap: ${(props) => props.theme.spacing(3)};
  margin-top: ${(props) => props.theme.spacing(3)};
  
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: ${(props) => props.theme.spacing(2)};
  }
  
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    flex-direction: row;
    gap: ${(props) => props.theme.spacing(4)};
  }
`;
