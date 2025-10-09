import React from 'react'
import MainContent from './modules/MainContent'
import Sidebar from './modules/Sidebar'
import {
  NewsPageContainer,
  NewsPageWrapper
} from './NewsIdpage.styles'

export default function NewsIdpage() {
  return (
    <NewsPageContainer>
      <NewsPageWrapper>
        <MainContent />
        <Sidebar />
      </NewsPageWrapper>
    </NewsPageContainer>
  )
}
