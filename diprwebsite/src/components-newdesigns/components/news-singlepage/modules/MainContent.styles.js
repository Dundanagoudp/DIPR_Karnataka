import styled from 'styled-components'
import theme from '../../../../theme/Theme'

export const MainContentContainer = styled.div`
  flex: 2;
  padding: 24px;
  max-width: 100%;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    margin-right: 0;
    max-width: 100%;
    padding: 16px;
  }
`

export const DateTag = styled.div`
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: 6px 12px;
  border-radius: ${theme.borderRadius.small};
  font-size: ${theme.fontSizes.small};
  font-weight: 500;
  display: inline-block;
  margin-bottom: 16px;
`

export const LocationTag = styled.div`
  color: ${theme.colors.primary};
  font-size: ${theme.fontSizes.small};
  font-weight: 600;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

export const ArticleTitle = styled.h1`
  font-family: ${theme.fonts.heading};
  font-size: 2.5rem;
  font-weight: 700;
  color: ${theme.colors.text};
  line-height: 1.2;
  margin-bottom: 16px;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 2rem;
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.75rem;
  }
`

export const AuthorCard = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 32px;
  padding: 16px;
  background: ${theme.colors.gray[100]};
  border-radius: ${theme.borderRadius.medium};
`

export const AuthorImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
`

export const AuthorInfo = styled.div`
  flex: 1;
`

export const AuthorName = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.large};
  font-weight: 600;
  color: ${theme.colors.text};
  margin: 0 0 8px 0;
`

export const ArticleMeta = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`

export const MetaItem = styled.span`
  font-size: ${theme.fontSizes.small};
  color: ${theme.colors.gray[600]};
  display: flex;
  align-items: center;
`

export const HeroImage = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  border-radius: ${theme.borderRadius.medium};
  overflow: hidden;
  margin-bottom: 32px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
`

export const ImageCaption = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: ${theme.colors.white};
  padding: 24px 20px 16px;
  font-size: ${theme.fontSizes.medium};
  font-weight: 500;
`

export const ArticleContent = styled.div`
  line-height: 1.8;
  color: ${theme.colors.text};
  font-family: ${theme.fonts.body};
`

export const ArticleParagraph = styled.p`
  font-size: ${theme.fontSizes.large};
  margin-bottom: 24px;
  text-align: justify;
  
  &:first-child {
    font-size: 1.125rem;
    font-weight: 500;
  }
`

export const QuoteBlock = styled.blockquote`
  background: ${theme.colors.light};
  border-left: 4px solid ${theme.colors.primary};
  padding: 24px;
  margin: 32px 0;
  border-radius: ${theme.borderRadius.medium};
  position: relative;
  
  &::before {
    content: '"';
    font-size: 4rem;
    color: ${theme.colors.primary};
    position: absolute;
    top: -10px;
    left: 16px;
    font-family: serif;
  }
  
  &::after {
    content: '"';
    font-size: 4rem;
    color: ${theme.colors.primary};
    position: absolute;
    bottom: -20px;
    right: 16px;
    font-family: serif;
  }
`

export const QuoteText = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${theme.colors.text};
  margin: 0;
  font-style: italic;
  padding-left: 20px;
`

export const InlineAd = styled.div`
  margin: 32px 0;
  padding: 20px;
  background: ${theme.colors.gray[100]};
  border-radius: ${theme.borderRadius.medium};
  border: 1px solid ${theme.colors.gray[200]};
`

export const AdContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const AdImage = styled.div`
  width: 100%;
  height: 120px;
  border-radius: ${theme.borderRadius.small};
  overflow: hidden;
`

export const ArticleTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 40px 0;
  padding-top: 24px;
  border-top: 1px solid ${theme.colors.gray[200]};
`

export const Tag = styled.span`
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: 6px 12px;
  border-radius: ${theme.borderRadius.small};
  font-size: ${theme.fontSizes.small};
  font-weight: 500;
  text-transform: lowercase;
  
  &:hover {
    background: ${theme.colors.Footerbg};
    cursor: pointer;
  }
`

