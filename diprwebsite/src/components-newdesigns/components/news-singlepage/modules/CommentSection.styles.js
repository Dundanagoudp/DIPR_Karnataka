import styled from 'styled-components'
import theme from '../../../../theme/Theme'

export const CommentSectionContainer = styled.div`
  margin-top: 48px;
  padding-top: 32px;
  border-top: 2px solid ${theme.colors.gray[200]};
`

export const CommentHeader = styled.div`
  margin-bottom: 24px;
`

export const CommentSectionTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 600;
  color: ${theme.colors.text};
  margin: 0 0 8px 0;
`

export const CommentCount = styled.p`
  font-size: ${theme.fontSizes.medium};
  color: ${theme.colors.gray[600]};
  margin: 0;
`

export const CommentForm = styled.form`
  background: ${theme.colors.gray[100]};
  padding: 24px;
  border-radius: ${theme.borderRadius.medium};
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const CommentInput = styled.input`
  padding: 12px 16px;
  border: 1px solid ${theme.colors.gray[300]};
  border-radius: ${theme.borderRadius.small};
  font-size: ${theme.fontSizes.medium};
  font-family: ${theme.fonts.body};
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(30, 136, 229, 0.2);
  }
`

export const CommentTextarea = styled.textarea`
  padding: 12px 16px;
  border: 1px solid ${theme.colors.gray[300]};
  border-radius: ${theme.borderRadius.small};
  font-size: ${theme.fontSizes.medium};
  font-family: ${theme.fonts.body};
  min-height: 120px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(30, 136, 229, 0.2);
  }
`

export const CommentButton = styled.button`
  padding: 12px 24px;
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: none;
  border-radius: ${theme.borderRadius.small};
  font-size: ${theme.fontSizes.medium};
  font-weight: 600;
  cursor: pointer;
  transition: ${theme.transitions.fast};
  align-self: flex-start;
  
  &:hover {
    background: ${theme.colors.Footerbg};
    transform: translateY(-1px);
  }
`

export const CommentsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const CommentItem = styled.div`
  background: ${theme.colors.white};
  padding: 20px;
  border-radius: ${theme.borderRadius.medium};
  border: 1px solid ${theme.colors.gray[200]};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`

export const CommentAuthor = styled.h4`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.medium};
  font-weight: 600;
  color: ${theme.colors.primary};
  margin: 0 0 8px 0;
`

export const CommentContent = styled.p`
  font-size: ${theme.fontSizes.medium};
  color: ${theme.colors.text};
  line-height: 1.6;
  margin: 0 0 12px 0;
`

export const CommentDate = styled.span`
  font-size: ${theme.fontSizes.small};
  color: ${theme.colors.gray[600]};
  margin-bottom: 12px;
  display: block;
`

export const CommentActions = styled.div`
  display: flex;
  gap: 16px;
  padding-top: 12px;
  border-top: 1px solid ${theme.colors.gray[200]};
`

export const CommentAction = styled.button`
  background: none;
  border: none;
  color: ${theme.colors.gray[600]};
  font-size: ${theme.fontSizes.small};
  cursor: pointer;
  transition: ${theme.transitions.fast};
  
  &:hover {
    color: ${theme.colors.primary};
  }
`
