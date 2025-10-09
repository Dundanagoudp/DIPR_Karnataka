import styled from 'styled-components'
import theme from '../../../theme/Theme'

export const NewsPageContainer = styled.div`
  min-height: 100vh;
  background: ${theme.colors.background};
  padding: 24px 0;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 16px 0;
  }
`

export const NewsPageWrapper = styled.div`
  max-width: 90%;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  gap: 24px;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    padding: 0 16px;
    gap: 16px;
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 12px;
  }
`
