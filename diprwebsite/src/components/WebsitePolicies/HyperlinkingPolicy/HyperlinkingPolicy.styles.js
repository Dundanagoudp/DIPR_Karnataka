import styled from "styled-components";
import theme from "../../../theme/Theme";

export const Wrapper = styled.div`
  padding: ${theme.spacing(4)} ${theme.spacing(6)};
  background-color: ${theme.colors.bg};
`;

export const Title = styled.h1`
  font-size: ${theme.spacing(3)};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing(3)};
`;

export const Content = styled.div`
  font-size: ${theme.spacing(1.75)};
  line-height: 1.5;
  color: ${theme.colors.text};
  margin-top: ${theme.spacing(2)};
`;