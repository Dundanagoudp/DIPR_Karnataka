import React from 'react'
import {
  CommentsContainer,
  ContentWrapper,
  CommentsSection,
  FormSection,
  CommentsTitle,
  CommentItem,
  CommentAuthor,
  CommentText,
  ViewAllLink,
  PlusIcon,
  CommentForm,
  CommentInput,
  CommentTextarea,
  SubmitButton
} from './CommentsSection.styles'

const CommentsSectionComponent = () => {
  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      
      <ContentWrapper>
        <CommentsSection>
          {/* Comment 1 */}
          <CommentItem>
            <CommentAuthor>Amanda Roose</CommentAuthor>
            <CommentText>
              I couldn't agree more with this article. Slow living has been a game-changer for me, and it's helped me prioritize the things that truly matter in life. From meditation to sustainable living practices, I've found that embracing a slower, more intentional lifestyle has brought me greater happiness and fulfillment.
            </CommentText>
          </CommentItem>
          
          {/* Comment 2 */}
          <CommentItem>
            <CommentAuthor>Gilbert Akins</CommentAuthor>
            <CommentText>
              This article really resonated with me. It's so easy to get caught up in the fast-paced, consumerist culture we live in, but slow living offers a refreshing alternative. I love the emphasis on mindfulness, sustainable living, and creating a life that's in line with our values. Definitely going to try incorporating more slow living practices into my own life!
            </CommentText>
          </CommentItem>
          
          {/* View all comments link */}
          <ViewAllLink href="#">
            <PlusIcon>+</PlusIcon> View all comments
          </ViewAllLink>
        </CommentsSection>
        
        <FormSection>
          {/* Comment form */}
          <CommentForm>
            <CommentInput 
              type="text" 
              placeholder="Your name" 
            />
            <CommentInput 
              type="email" 
              placeholder="Your email address" 
            />
            <CommentTextarea 
              placeholder="Write your review" 
            />
            <SubmitButton>
              SUBMIT
            </SubmitButton>
          </CommentForm>
        </FormSection>
      </ContentWrapper>
    </CommentsContainer>
  )
}

export default CommentsSectionComponent
