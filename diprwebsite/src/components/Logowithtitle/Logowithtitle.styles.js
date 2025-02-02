import styled from "styled-components";
import theme from "../../theme/Theme";

export const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: ${theme.spacing(8)};
  // margin-right: ${theme.spacing(20)};


  h2 {
    font-family: ${theme.fonts.heading};
    color: ${theme.colors.text};
    font-size: 1.5rem;
    margin-bottom: ${theme.spacing(-1)};
    margin-top: ${theme.spacing(2)};
  }

  p {
    font-family: ${theme.fonts.body};
    color: ${theme.colors.black};
    font-size: 1rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
  display: none;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
  display: none;
  }
`;

export const Logo = styled.img`
  max-width: 180px;
`;