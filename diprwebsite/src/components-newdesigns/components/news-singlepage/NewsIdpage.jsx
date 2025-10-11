import React from 'react'
import MainContent from './modules/MainContent'
import Sidebar from './modules/Sidebar'
import {
  NewsPageContainer,
  NewsPageWrapper,
  CommentsWrapper
} from './NewsIdpage.styles'
import CommentsSection from './modules/CommentsSection'

export default function NewsIdpage() {
  return (
    <main aria-label="News article main content">
      <NewsPageContainer>
        <NewsPageWrapper>
          <MainContent />
          <Sidebar />
        </NewsPageWrapper>
        <CommentsWrapper>
          <CommentsSection />
        </CommentsWrapper>
      </NewsPageContainer>
    </main>
  )
}
