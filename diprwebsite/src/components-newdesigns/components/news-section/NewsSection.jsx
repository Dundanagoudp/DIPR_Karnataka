import React from 'react'
import { PageLayout } from './NewsSection.styles'
import Banner from './modules/BannerNews'
import NewsArticles from './modules/NewsArticles'

export default function NewsSection() {
  return (
    <>
      <PageLayout>
        <Banner />
        <NewsArticles />
      </PageLayout>
    </>
  )
}
