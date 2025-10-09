import styled from "styled-components"
import theme from "../../../../theme/Theme"

export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  background: ${theme.colors.background};
  padding: ${theme.spacing(2)} ${theme.spacing(1.5)};

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing(4)} ${theme.spacing(3)};
  }
  
  @media (min-width: ${theme.breakpoints.desktop}) {
    padding: ${theme.spacing(5)} ${theme.spacing(4)};
  }
`

export const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing(2)};

  @media (min-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing(3)};
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: ${theme.spacing(3.5)};
  }
`

export const FeaturedCard = styled.article`
  background: ${theme.colors.background};
  overflow: hidden;
  transition: ${theme.transitions.fast};
  grid-column: 1 / -1;

  &:hover {
    transform: translateY(-4px);
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    grid-column: 1 / 2;
  }
`

export const FeaturedImage = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: ${theme.colors.gray[100]};

  @media (min-width: ${theme.breakpoints.tablet}) {
    width: 95%;
    aspect-ratio: 4 / 3;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    width: 90%;
    aspect-ratio: 4 / 5;
  }
`

export const FeaturedContent = styled.div`
  padding: ${theme.spacing(1.5)};

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing(2.5)};
  }
  
  @media (min-width: ${theme.breakpoints.desktop}) {
    padding: ${theme.spacing(3)};
  }
`

export const FeaturedMeta = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(1)};
  margin-bottom: ${theme.spacing(1.5)};
  flex-wrap: wrap;
`

export const FeaturedTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.text};
  line-height: 1.3;
  margin-bottom: ${theme.spacing(1)};

  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: 1.75rem;
    margin-bottom: ${theme.spacing(1.5)};
  }
  
  @media (min-width: ${theme.breakpoints.desktop}) {
    font-size: 2rem;
  }
`

export const FeaturedExcerpt = styled.p`
  font-size: ${theme.fontSizes.small};
  font-family: ${theme.fonts.body};
  line-height: 1.5;
  color: ${theme.colors.lightText};
  margin: 0;

  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.medium};
    line-height: 1.6;
  }
`

export const NewsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(1.5)};

  @media (min-width: ${theme.breakpoints.tablet}) {
    gap: ${theme.spacing(2)};
  }
`

export const ColumnHeader = styled.h3`
  font-size: ${theme.fontSizes.medium};
  font-weight: 700;
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.text};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: ${theme.spacing(0.5)};

  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.large};
    margin-bottom: 0;
  }
`

export const NewsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(1.5)};

  @media (min-width: ${theme.breakpoints.tablet}) {
    gap: ${theme.spacing(2)};
  }
`

export const NewsItem = styled.article`
  background: ${theme.colors.background};
  padding: ${theme.spacing(1.5)};
  transition: ${theme.transitions.fast};
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
  }

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing(2)};
  }

  p {
    font-size: ${theme.fontSizes.small};
    font-family: ${theme.fonts.body};
    line-height: 1.4;
    color: ${theme.colors.lightText};
    margin: ${theme.spacing(0.5)} 0 0 0;

    @media (min-width: ${theme.breakpoints.tablet}) {
      font-size: ${theme.fontSizes.medium};
      line-height: 1.5;
      margin: ${theme.spacing(0.75)} 0 0 0;
    }
  }
`

export const NewsItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(0.5)};

  @media (min-width: ${theme.breakpoints.tablet}) {
    gap: ${theme.spacing(0.75)};
  }
`

export const NewsTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.text};
  line-height: 1.3;
  margin: 0;

  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: 1.1rem;
    line-height: 1.4;
  }
`

export const NewsDate = styled.span`
  font-size: ${theme.fontSizes.small};
  font-family: ${theme.fonts.body};
  color: ${theme.colors.primary};
  font-weight: 600;
`

export const NewsAuthor = styled.span`
  font-size: ${theme.fontSizes.small};
  font-family: ${theme.fonts.body};
  color: ${theme.colors.textgray};
  position: relative;
  padding-left: ${theme.spacing(1)};

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: ${theme.colors.textgray};
  }
`

export const PopularItem = styled.article`
  display: flex;
  gap: ${theme.spacing(1)};
  background: ${theme.colors.background};
  padding: ${theme.spacing(1)};
  transition: ${theme.transitions.fast};
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
  }

  @media (min-width: ${theme.breakpoints.tablet}) {
    gap: ${theme.spacing(1.5)};
    padding: ${theme.spacing(1.25)};
  }
`

export const PopularThumbnail = styled.div`
  position: relative;
  width: 70px;
  height: 70px;
  flex-shrink: 0;
  overflow: hidden;
  background: ${theme.colors.gray[100]};

  @media (min-width: ${theme.breakpoints.tablet}) {
    width: 90px;
    height: 90px;
  }
`

export const PopularContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(0.5)};
  justify-content: center;

  @media (min-width: ${theme.breakpoints.tablet}) {
    gap: ${theme.spacing(0.75)};
  }
`

export const PopularTitle = styled.h5`
  font-size: 0.85rem;
  font-weight: 600;
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.text};
  line-height: 1.3;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: 0.95rem;
    line-height: 1.4;
    -webkit-line-clamp: 3;
  }
`

export const PopularDate = styled.span`
  font-size: ${theme.fontSizes.small};
  font-family: ${theme.fonts.body};
  color: ${theme.colors.primary};
  font-weight: 600;
`

const styles = {
  Container,
  GridLayout,
  FeaturedCard,
  FeaturedImage,
  FeaturedContent,
  FeaturedMeta,
  FeaturedTitle,
  FeaturedExcerpt,
  NewsColumn,
  ColumnHeader,
  NewsList,
  NewsItem,
  NewsItemContent,
  NewsTitle,
  NewsDate,
  NewsAuthor,
  PopularItem,
  PopularThumbnail,
  PopularContent,
  PopularTitle,
  PopularDate,
}

export { styles }
export default styles
