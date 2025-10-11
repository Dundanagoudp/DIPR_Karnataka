import React from 'react'
import { PageLayout, FlexContainer } from './VarthaJanapadasection.styles'
import Varthahero from './modules/Varthahero'
import StateNews from './modules/StateNews'
import StateGovernmentWebsites from './modules/StateGovernmentWebsites'
import ArticlesNews from './modules/articlescrool/ArticlesNews'
import LongVideos from './modules/longvideos/LongVideos'
import GallerySection from './modules/gallery/GallerySection'
import ShortsCarousel from './modules/shortvideos/ShortVideosSection'


export default function VarthaJanapadasection() {
  return (
    <>
      <PageLayout>
        <Varthahero />
        <FlexContainer>
          <StateNews />
          <StateGovernmentWebsites />
        </FlexContainer>
        <ArticlesNews />
        <LongVideos />
        <ShortsCarousel />
        <GallerySection />
      </PageLayout>
    </>
  )
}
