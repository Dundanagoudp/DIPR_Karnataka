import styled from "styled-components";
import theme from "../../theme/Theme";

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  background: ${theme.colors.background};

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(2)};
  }
`;

export const RightSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 50%;

  @media (max-width: ${theme.breakpoints.mobile}) {
    max-width: 100%;
  }
    @media (max-width: ${theme.breakpoints.tablet}) {
      max-width: 100%;
    }
`;

export const LoginBox = styled.div`
  background: ${theme.colors.light};
  padding: ${theme.spacing(8)};
  border-radius: ${theme.spacing(1.5)};
  text-align: center;
  max-width: 50%;
  width: 100%;

  @media (max-width: ${theme.breakpoints.mobile}) {
    background: ${theme.colors.background};
    padding: ${theme.spacing(2)};
    max-width: 100%;
    margin-right: 0;

    h2 {
      font-size: 1.8rem;

    }
      h5 {
        font-size: 0.9rem;
      }
  }

  h2 {
    font-family: ${theme.fonts.heading};
    color: ${theme.colors.text};
    text-align: left;
    margin-bottom: ${theme.spacing(1)};
  }

  p {
    font-size: 1rem;
    color: ${theme.colors.text};
    font-family: ${theme.fonts.body};
    margin-bottom: ${theme.spacing(2)};
  }

  h5 {
    font-size: 0.9rem;
    text-align: left;
    color: ${theme.colors.sidebarBgColor};
    font-family: ${theme.fonts.display};
    margin-bottom: ${theme.spacing(2)};
  }

  label {
    display: block;
    text-align: left;
    font-size: 1rem;
    margin-bottom: ${theme.spacing(1)};
    color: ${theme.colors.text};
    font-family: ${theme.fonts.body};
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid ${theme.colors.button};
  width: 100%;
  background: ${theme.colors.light};
  padding: ${theme.spacing(1)} 0;
  margin-bottom: ${theme.spacing(2)};

  @media (max-width: ${theme.breakpoints.mobile}) {
    background: ${theme.colors.background};
  }
`;

export const CountryCode = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: ${theme.colors.text};
  margin-right: ${theme.spacing(0.5)};
`;

export const Input = styled.input`
  flex: 1;
  font-size: 1rem;
  color: ${theme.colors.text};
  border: none;
  outline: none;
  background: transparent;

  &::placeholder {
    color: ${theme.colors.textgray};
  }
`;

export const ErrorText = styled.p`
  color: ${theme.colors.error};
  font-size: 0.9rem;
  text-align: left;
  margin-top: -${theme.spacing(1.25)};
  margin-bottom: ${theme.spacing(2)};
`;

export const Button = styled.button`
  width: 100%;
  padding: ${theme.spacing(1.5)};
  background: ${theme.colors.primary};
  color: ${theme.colors.background};
  border: none;
  border-radius: ${theme.spacing(1)};
  font-size: 1rem;
  cursor: pointer;
  margin-top: ${theme.spacing(2)};

  &:hover {
    background: ${theme.colors.secondary};
  }

  &:disabled {
    background: ${theme.colors.textgray};
    cursor: not-allowed;
  }
`;

export const GuestButton = styled(Button)`
  background: ${theme.colors.background};
  color: ${theme.colors.text};
  border: 1px solid ${theme.colors.textgray};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing(1)};
  margin-top: ${theme.spacing(1)};

  &:hover {
    background: ${theme.colors.backgray};
  }
`;

export const Divider = styled.p`
  margin: ${theme.spacing(3)} 0;
  font-size: 1rem;
  color: ${theme.colors.textgray};
  text-align: center;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 40%;
    height: 1px;
    background: ${theme.colors.textgray};
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }
`;

export const SocialButtons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${theme.spacing(1)};

  button {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacing(1)};
    border: 1px solid ${theme.colors.textgray};
    background: ${theme.colors.backgray};
    border-radius: ${theme.spacing(1)};
    font-size: 1rem;
    cursor: pointer;
  margin-bottom: ${theme.spacing(3)};

    img {
      margin-right: ${theme.spacing(0.5)};
    }

    &:hover {
      background: ${theme.colors.lightgreen};
    }
  }
`;

export const LinkText = styled.span`
  color: ${theme.colors.primary};
  cursor: pointer;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;