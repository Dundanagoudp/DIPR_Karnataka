import React from 'react'
import { PageLayout, FlexContainer } from './VarthaJanapadasection.styles'
import Varthahero from './modules/Varthahero'
import StateNews from './modules/StateNews'
import StateGovernmentWebsites from './modules/StateGovernmentWebsites'
import ArticlesNews from './modules/articlescrool/ArticlesNews'
import LongVideos from './modules/longvideos/LongVideos'

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
      </PageLayout>
    </>
  )
}
