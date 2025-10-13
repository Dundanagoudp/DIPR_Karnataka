import React from 'react'
import NewsSidebar from './modules/herosection/news-sidebar'
import FeaturedNewsSection from './modules/featured/featured-news'
import TabSection from './modules/tabsection/Tabsection'
import { PageLayout } from './Marchofkarnataka.styles'
import MarchNewsHero from './modules/herosection/HeroNews'

export default function Marchofkarnataka() {
  return (
    <main aria-label="March of Karnataka main content">
      <PageLayout>
        <MarchNewsHero />
        <NewsSidebar />
      </PageLayout>
      <FeaturedNewsSection />
      <TabSection />
    </main>
  )
}
