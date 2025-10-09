import React from 'react'
import HeroNews from './modules/herosection/HeroNews'
import NewsSidebar from './modules/herosection/news-sidebar'
import FeaturedNewsSection from './modules/featured/featured-news'
import TabSection from './modules/tabsection/Tabsection'
import { PageLayout } from './Marchofkarnataka.styles'

export default function Marchofkarnataka() {
  return (
    <>
      <PageLayout>
        <HeroNews />
        <NewsSidebar />
      </PageLayout>
      <FeaturedNewsSection />
      <TabSection />
    </>
  )
}
