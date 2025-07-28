import styled from "styled-components"
import theme from "../../theme/Theme"

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
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background: ${theme.colors.light};
  padding: ${theme.spacing(0.75)};
  border-radius: 8px;
  width: 100%;
  border: 1px solid ${theme.colors.info};
  position: relative;
  @media (max-width: ${theme.breakpoints.desktop}) {
    max-width: 100%;
  }
  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 100%;
  }
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(0.5)};
  }
`

export const SearchIcon = styled.div`
  color: ${theme.colors.textgray};
  font-size: 18px;
  margin-right: ${theme.spacing(1)};
  cursor: pointer;
  /* Focus style for keyboard navigation */
  &:focus-visible {
    outline: 2px solid ${theme.colors.primary};
    outline-offset: 2px;
    border-radius: 4px;
  }
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 16px;
    margin-right: ${theme.spacing(0.5)};
  }
`

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
  /* Focus style for keyboard navigation */
  &:focus-visible {

  }
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 12px;
  }
`

export const SuggestionsContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.info};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  margin-top: ${theme.spacing(0.5)};
  max-height: 350px;
  overflow-y: auto;
`

export const ResultCount = styled.div`
  padding: ${theme.spacing(0.75)} ${theme.spacing(1)};
  font-size: 12px;
  color: ${theme.colors.textgray};
  border-bottom: 1px solid ${theme.colors.light};
  background: ${theme.colors.bggrey};
`

export const LoadingIndicator = styled.div`
  padding: ${theme.spacing(1.5)};
  font-size: 14px;
  color: ${theme.colors.textgray};
  text-align: center;
`

export const NoResults = styled.div`
  padding: ${theme.spacing(1.5)};
  font-size: 14px;
  color: ${theme.colors.textgray};
  text-align: center;
`

export const SuggestionItem = styled.div`
  padding: ${theme.spacing(1.5)};
  font-size: 14px;
  color: ${theme.colors.text};
  cursor: pointer;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${theme.colors.light};
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background: ${theme.colors.light};
  }
  /* Focus style for keyboard navigation */
  &:focus-visible {
    outline: 2px solid ${theme.colors.primary};
    outline-offset: -2px; /* Inset outline */
    background: ${theme.colors.light}; /* Keep hover background on focus */
  }
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 12px;
    padding: ${theme.spacing(1)};
  }
`

export const SuggestionContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
`

export const SuggestionTitle = styled.div`
  font-weight: 500;
  margin-bottom: 4px;
`

export const SuggestionDate = styled.div`
  font-size: 12px;
  color: ${theme.colors.textgray};
`

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
    /* Focus style for keyboard navigation */
    &:focus-visible {
      outline: 2px solid ${theme.colors.primary};
      outline-offset: 2px;
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
`

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
  /* Focus style for keyboard navigation */
  &:focus-visible {
    outline: 2px solid ${theme.colors.primary};
    outline-offset: 2px;
  }
  @media (max-width: ${theme.breakpoints.tablet}) {
    max-width: 100%;
  }
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 12px;
    padding: ${theme.spacing(0.5)};
  }
`
