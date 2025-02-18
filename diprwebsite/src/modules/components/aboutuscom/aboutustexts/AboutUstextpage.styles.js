import styled from "styled-components";
import theme from "../../../../theme/Theme";

export const Container = styled.div`
  max-width: ${theme.spacing(150)};
  margin: 0 auto;
  padding: ${theme.spacing(0.5)};
  background-color: ${theme.colors.background};
  color: ${theme.colors.text};
`;

export const Title = styled.h1`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.spacing(3)};
  font-weight: bold;
  margin-bottom: ${theme.spacing(2)};
`;

export const Paragraph = styled.p`
  font-family: ${theme.fonts.body};
  font-size: ${theme.spacing(2)};
  line-height: 1.6;
  text-align: justify;
  margin-bottom: ${theme.spacing(1.5)};
  color: ${theme.colors.black};
`;
