import styled from 'styled-components'
import theme from '../../../../theme/Theme'

export const SocialShareContainer = styled.div`
  margin: 32px 0;
  padding: 24px;
  background: ${theme.colors.gray[100]};
  border-radius: ${theme.borderRadius.medium};
  border: 1px solid ${theme.colors.gray[200]};
`

export const ShareTitle = styled.h4`
  font-family: ${theme.fonts.heading};
  font-size: 1.125rem;
  font-weight: 600;
  color: ${theme.colors.text};
  margin: 0 0 16px 0;
  text-align: center;
`

export const ShareButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  
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

export const ShareIcon = styled.span`
  font-size: 1rem;
`

export const ShareText = styled.span`
  font-size: ${theme.fontSizes.small};
  font-weight: 600;
`
