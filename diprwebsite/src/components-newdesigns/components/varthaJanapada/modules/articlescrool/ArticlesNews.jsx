import { useState, useEffect } from 'react'
import {
  ArticlesSection,
  Container,
  SectionHeader,
  Title,
  CarouselWrapper,
  NavButton,
  ArticlesGrid,
  ArticleCard,
  ArticleImageWrapper,
  ArticleImage,
  ImageOverlay,
  ArticleNumber,
  ArticleContent,
  ArticleTitle,
  ArticleDate,
  PaginationDots,
  Dot,
} from './ArticlesNews.styles'

const defaultArticles = [
  {
    id: 1,
    title: 'Yadgir District Tourist Places',
    date: 'June 19, 2025 06:00pm',
    image: '/state/state.jpg',
    number: '01',
  },
  {
    id: 2,
    title: 'Yadgir District Tourist Places',
    date: 'June 19, 2025 06:00pm',
    image: '/state/2ndimage.jpg',
    number: '02',
  },
  {
    id: 3,
    title: 'Yadgir District Tourist Places',
    date: 'June 19, 2025 06:00pm',
    image: '/state/2ndsection.jpg',
    number: '03',
  },
  {
    id: 4,
    title: 'Yadgir District Tourist Places',
    date: 'June 19, 2025 06:00pm',
    image: '/state/rightside.jpg',
    number: '04',
  },
]

export default function ArticlesNews({ articles = defaultArticles }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  // Get items per page based on screen size
  const getItemsPerPage = () => {
    if (typeof window === 'undefined') return 3
    const width = window.innerWidth
    if (width <= 768) return 1 // Mobile
    if (width <= 1024) return 2 // Tablet
    return 3 // Desktop
  }

  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage())

  // Update items per page on window resize
  useEffect(() => {
    const handleResize = () => {
      const newItemsPerPage = getItemsPerPage()
      setItemsPerPage(newItemsPerPage)
      // Reset to first page if current index is out of bounds
      setCurrentIndex(prev => Math.min(prev, Math.max(0, articles.length - newItemsPerPage)))
    }
    
    handleResize() // Set initial value
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [articles.length])

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(articles.length - itemsPerPage, prev + 1))
  }

  const visibleArticles = articles.slice(currentIndex, currentIndex + itemsPerPage)
  const canGoPrevious = currentIndex > 0
  const canGoNext = currentIndex < articles.length - itemsPerPage

  return (
    <ArticlesSection>
      <Container>
        {/* Section Header */}
        <SectionHeader>
          <Title>Articles</Title>
        </SectionHeader>

        {/* Articles Carousel */}
        <CarouselWrapper>
          {/* Previous Button */}
          <NavButton
            onClick={handlePrevious}
            disabled={!canGoPrevious}
            position="left"
            aria-label="Previous articles"
          >
            &#10094;
          </NavButton>

          {/* Articles Grid */}
          <ArticlesGrid>
            {visibleArticles.map((article) => (
              <ArticleCard key={article.id}>
                <ArticleImageWrapper>
                  <ArticleImage src={article.image} alt={article.title} />
                  <ImageOverlay />
                  <ArticleNumber>{article.number}</ArticleNumber>
                </ArticleImageWrapper>
                <ArticleContent>
                  <ArticleTitle>{article.title}</ArticleTitle>
                  <ArticleDate>{article.date}</ArticleDate>
                </ArticleContent>
              </ArticleCard>
            ))}
          </ArticlesGrid>

          {/* Next Button */}
          <NavButton
            onClick={handleNext}
            disabled={!canGoNext}
            position="right"
            aria-label="Next articles"
          >
            &#10095;
          </NavButton>
        </CarouselWrapper>

        {/* Pagination Dots */}
        {/* <PaginationDots>
          {Array.from({ length: articles.length - itemsPerPage + 1 }).map((_, index) => (
            <Dot
              key={index}
              onClick={() => setCurrentIndex(index)}
              $active={currentIndex === index}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </PaginationDots> */}
      </Container>
    </ArticlesSection>
  )
}

