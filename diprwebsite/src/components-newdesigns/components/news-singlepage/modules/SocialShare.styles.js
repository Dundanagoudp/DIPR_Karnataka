import styled from 'styled-components'
import theme from '../../../../theme/Theme'

export const SocialShareContainer = styled.div`
  margin: 32px 0;
  background: ${theme.colors.gray[100]};
`

export const ShareTitle = styled.h4`
  font-family: ${theme.fonts.heading};
  font-size: 1.125rem;
  font-weight: 600;
  color: ${theme.colors.text};
  margin: 0 0 16px 0;
  text-align: left;
`

export const ShareButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: flex-start;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`

export const ShareButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border: none;
  border-radius: ${theme.borderRadius.small};
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.small};
  font-weight: 600;
  cursor: pointer;
  transition: ${theme.transitions.fast};
  min-width: 120px;
  justify-content: center;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 100%;
  }
`

export const ShareIcon = styled.div`
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ShareText = styled.span`
  font-size: ${theme.fontSizes.small};
  font-weight: 600;
`
