import styled from 'styled-components';

export const LanguageNavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 12px 40px;
  background-color: ${props => props.theme.colors.navbarBg || '#ffffff'};
  border-bottom: 1px solid ${props => props.theme.colors.gray?.[200] || '#e5e7eb'};
  width: 100%;
  box-sizing: border-box;
  gap: 32px;
  position: relative;

  @media (max-width: 768px) {
    padding: 12px 24px;
    gap: 24px;
  }

  @media (max-width: 480px) {
    padding: 10px 16px;
    gap: 16px;
    justify-content: space-between;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 18px;
  }

  @media (max-width: 480px) {
    gap: 14px;
  }
`;

export const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.gray?.[700] || '#374151'};
  text-decoration: none;
  transition: color ${props => props.theme.transitions?.fast || '0.2s ease'};
  
  &:hover {
    color: ${props => props.theme.colors.primary || '#3b82f6'};
  }

  svg {
    width: 22px;
    height: 22px;

    @media (max-width: 768px) {
      width: 21px;
      height: 21px;
    }

    @media (max-width: 480px) {
      width: 20px;
      height: 20px;
    }
  }
`;

export const LanguageSelector = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  
  button.language-button {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background-color: ${props => props.theme.colors.white || '#ffffff'};
    border: 1px solid ${props => props.theme.colors.gray?.[300] || '#d1d5db'};
    border-radius: ${props => props.theme.borderRadius?.medium || '6px'};
    color: ${props => props.theme.colors.gray?.[700] || '#374151'};
    font-size: ${props => props.theme.fontSizes?.medium || '14px'};
    font-family: ${props => props.theme.fonts?.body || 'Arial, sans-serif'};
    cursor: pointer;
    transition: all ${props => props.theme.transitions?.fast || '0.2s ease'};
    min-width: 160px;
    justify-content: space-between;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
    font-weight: 500;
    
    &:hover {
      background-color: ${props => props.theme.colors.white || '#ffffff'};
      border-color: ${props => props.theme.colors.primary || '#3b82f6'};
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
    }
    
    &:focus {
      outline: 2px solid ${props => props.theme.colors.primary || '#3b82f6'};
      outline-offset: 2px;
    }
    
    .arrow {
      font-size: 16px;
      color: ${props => props.theme.colors.gray?.[500] || '#6b7280'};
      transition: transform ${props => props.theme.transitions?.fast || '0.2s ease'};
      transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
    }

    @media (max-width: 768px) {
      min-width: 150px;
      padding: 8px 14px;
      font-size: 13px;
    }

    @media (max-width: 480px) {
      min-width: 140px;
      padding: 8px 12px;
      font-size: 13px;
      gap: 8px;
    }
  }
`;

export const LanguageDropdown = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  background-color: ${props => props.theme.colors.white || '#ffffff'};
  border: 1px solid ${props => props.theme.colors.gray?.[300] || '#d1d5db'};
  border-radius: ${props => props.theme.borderRadius?.medium || '6px'};
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15), 0 4px 10px rgba(0, 0, 0, 0.08);
  z-index: 1000;
  overflow: hidden;
  min-width: 180px;
  animation: dropdownSlide 0.2s ease-out;

  @keyframes dropdownSlide {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    min-width: 170px;
  }

  @media (max-width: 480px) {
    min-width: 160px;
    right: 0;
  }
  
  button {
    width: 100%;
    padding: 12px 16px;
    border: none;
    background-color: transparent;
    color: ${props => props.theme.colors.gray?.[700] || '#374151'};
    font-size: ${props => props.theme.fontSizes?.medium || '14px'};
    font-family: ${props => props.theme.fonts?.body || 'Arial, sans-serif'};
    text-align: left;
    cursor: pointer;
    transition: all ${props => props.theme.transitions?.fast || '0.2s ease'};
    border-radius: 0;
    min-width: auto;
    justify-content: flex-start;
    display: flex;
    align-items: center;
    font-weight: 400;
    border-bottom: 1px solid ${props => props.theme.colors.gray?.[100] || '#f3f4f6'};

    &:last-child {
      border-bottom: none;
    }
    
    &:hover {
      background-color: ${props => props.theme.colors.gray?.[50] || '#f9fafb'};
      color: ${props => props.theme.colors.primary || '#3b82f6'};
      padding-left: 20px;
    }
    
    &.active {
      background-color: ${props => props.theme.colors.primary || '#3b82f6'};
      color: ${props => props.theme.colors.white || '#ffffff'};
      font-weight: 500;
      
      &:hover {
        background-color: ${props => props.theme.colors.primary || '#3b82f6'};
        color: ${props => props.theme.colors.white || '#ffffff'};
        padding-left: 16px;
      }
    }
    
    &:focus {
      outline: 2px solid ${props => props.theme.colors.primary || '#3b82f6'};
      outline-offset: -2px;
    }

    @media (max-width: 768px) {
      padding: 11px 16px;
      font-size: 13px;
    }

    @media (max-width: 480px) {
      padding: 11px 14px;
      font-size: 13px;
    }
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  z-index: 999;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: color ${props => props.theme.transitions?.fast || '0.2s ease'};
  padding: 8px 12px;
  border-radius: ${props => props.theme.borderRadius?.medium || '6px'};
  flex-shrink: 0;
  
  &:hover {
    color: ${props => props.theme.colors.primary || '#3b82f6'};
    background-color: ${props => props.theme.colors.gray?.[50] || '#f9fafb'};
  }

  @media (max-width: 768px) {
    padding: 8px 10px;
    gap: 7px;
  }

  @media (max-width: 480px) {
    padding: 8px 10px;
    gap: 6px;
  }
`;

export const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;

  svg {
    width: 20px;
    height: 20px;

    @media (max-width: 768px) {
      width: 19px;
      height: 19px;
    }

    @media (max-width: 480px) {
      width: 18px;
      height: 18px;
    }
  }
`;

export const SearchText = styled.span`
  color: ${props => props.theme.colors.gray?.[600] || '#4b5563'};
  font-size: ${props => props.theme.fontSizes?.medium || '14px'};
  font-family: ${props => props.theme.fonts?.body || 'Arial, sans-serif'};
  transition: color ${props => props.theme.transitions?.fast || '0.2s ease'};
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }

  @media (max-width: 360px) {
    display: none;
  }
`;
