import styled from "styled-components";
import theme from "../../theme/Theme";

export const ToolbarContainer = styled.div`
  display: flex;
  align-items: center;
  background: ${theme.colors.white};
  padding: ${theme.spacing(1)} ${theme.spacing(2)};
  border-radius: 8px;
  gap: ${theme.spacing(2)};
  max-width: 100%;
  margin: 0 auto;

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: ${theme.spacing(1)};
    padding: ${theme.spacing(1)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: ${theme.spacing(1.5)};
    padding: ${theme.spacing(2)};
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background: ${theme.colors.light};
  padding: ${theme.spacing(0.75)};
  margin-left: ${theme.spacing(13)};
  border-radius: 8px;
  width: 100%;
  max-width: 520px;
  border: 1px solid ${theme.colors.info};

  @media (max-width: ${theme.breakpoints.desktop}) {
    max-width: 100%;
    margin-left: 0;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 100%;
    margin-left: 0;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(0.5)};
  }
`;

export const SearchIcon = styled.div`
  color: ${theme.colors.textgray};
  font-size: 18px;
  margin-right: ${theme.spacing(1)};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 16px;
    margin-right: ${theme.spacing(0.5)};
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 14px;
  background: transparent;
  color: ${theme.colors.text};

  &::placeholder {
    color: ${theme.colors.textgray};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 12px;
  }
`;

export const FontControls = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(1)};
  background: ${theme.colors.bggrey};
  padding: ${theme.spacing(1)};
  border-radius: 8px;
  width: 100%;
  max-width: 310px;

  span {
    font-size: 14px;
    color: ${theme.colors.text};
  }

  button {
    padding: ${theme.spacing(0.5)} ${theme.spacing(1)};
    border: 1px solid ${theme.colors.info};
    background: ${theme.colors.white};
    cursor: pointer;
    border-radius: 4px;
    font-family: ${theme.fonts.body};
    color: ${theme.colors.text};

    &:hover {
      background: ${theme.colors.backgray};
    }
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 100%;
    max-width: 100%;
    justify-content: center;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    span {
      font-size: 12px;
    }

    button {
      padding: ${theme.spacing(0.25)} ${theme.spacing(0.75)};
      font-size: 12px;
    }
  }
`;

export const Select = styled.select`
  padding: ${theme.spacing(0.75)} ${theme.spacing(1.5)};
  border-radius: 5px;
  border: 1px solid ${theme.colors.info};
  font-size: 14px;
  cursor: pointer;
  width: 100%;
  max-width: 380px;
  font-family: ${theme.fonts.body};
  background: ${theme.colors.light};
  color: ${theme.colors.text};

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    max-width: 100%;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 12px;
    padding: ${theme.spacing(0.5)};
  }
`;