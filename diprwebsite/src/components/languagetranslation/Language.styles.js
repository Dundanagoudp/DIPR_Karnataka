import styled from 'styled-components';

export const LanguageNavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 12px 24px;
  background-color: ${props => props.theme.colors.navbarBg};
  border-bottom: 1px solid ${props => props.theme.colors.gray[200]};
  width: 100%;
  box-sizing: border-box;
  gap: 24px;
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.gray[600]};
  text-decoration: none;
  transition: color ${props => props.theme.transitions.fast};
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;


export const LanguageSelector = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  
  button {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background-color: ${props => props.theme.colors.white};
    border: 1px solid ${props => props.theme.colors.gray[300]};
    border-radius: ${props => props.theme.borderRadius.medium};
    color: ${props => props.theme.colors.gray[500]};
    font-size: ${props => props.theme.fontSizes.medium};
    font-family: ${props => props.theme.fonts.body};
    cursor: pointer;
    transition: all ${props => props.theme.transitions.fast};
    min-width: 160px;
    justify-content: space-between;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    
    &:hover {
      background-color: ${props => props.theme.colors.white};
      border-color: ${props => props.theme.colors.primary};
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }
    
    &:focus {
      outline: 2px solid ${props => props.theme.colors.primary};
      outline-offset: 2px;
    }
    
    span {
      font-size: 12px;
      color: ${props => props.theme.colors.primary};
      transition: transform ${props => props.theme.transitions.fast};
    }
  }
`;

export const LanguageDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.gray[300]};
  border-radius: ${props => props.theme.borderRadius.medium};
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  margin-top: 8px;
  overflow: hidden;
  
  button {
    width: 100%;
    padding: 12px 16px;
    border: none;
    background-color: transparent;
    color: ${props => props.theme.colors.gray[700]};
    font-size: ${props => props.theme.fontSizes.medium};
    font-family: ${props => props.theme.fonts.body};
    text-align: left;
    cursor: pointer;
    transition: background-color ${props => props.theme.transitions.fast};
    border-radius: 0;
    min-width: auto;
    justify-content: flex-start;
    
    &:hover {
      background-color: ${props => props.theme.colors.light};
      color: ${props => props.theme.colors.primary};
    }
    
    &.active {
      background-color: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.white};
      
      &:hover {
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.white};
      }
    }
    
    &:focus {
      outline: 2px solid ${props => props.theme.colors.primary};
      outline-offset: -2px;
    }
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: color ${props => props.theme.transitions.fast};
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

export const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
`;

export const SearchText = styled.span`
  color: ${props => props.theme.colors.gray[500]};
  font-size: ${props => props.theme.fontSizes.medium};
  font-family: ${props => props.theme.fonts.body};
  transition: color ${props => props.theme.transitions.fast};
`;
