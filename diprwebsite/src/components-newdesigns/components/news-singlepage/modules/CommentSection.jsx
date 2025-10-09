import React, { useState } from 'react'
import {
  CommentSectionContainer,
  CommentSectionTitle,
  CommentForm,
  CommentInput,
  CommentTextarea,
  CommentButton,
  CommentsList,
  CommentItem,
  CommentAuthor,
  CommentContent,
  CommentDate,
  CommentActions,
  CommentAction,
  CommentCount,
  CommentHeader
} from './CommentSection.styles'

const CommentSection = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Priya Sharma",
      content: "This is such an inspiring story! It's wonderful to see how community efforts can transform landscapes. Karnataka's environmental initiatives are truly commendable.",
      date: "March 10, 2024",
      likes: 12
    },
    {
      id: 2,
      author: "Rajesh Kumar",
      content: "The transformation of Raichur is remarkable. I visited the area last year and the difference is incredible. Great work by the local authorities and community!",
      date: "March 9, 2024",
      likes: 8
    }
  ])

  const [newComment, setNewComment] = useState({
    name: '',
    email: '',
    content: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newComment.name && newComment.content) {
      const comment = {
        id: comments.length + 1,
        author: newComment.name,
        content: newComment.content,
        date: new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        }),
        likes: 0
      }
      setComments([comment, ...comments])
      setNewComment({ name: '', email: '', content: '' })
    }
  }

  return (
    <CommentSectionContainer>
      <CommentHeader>
        <CommentSectionTitle>Comments ({comments.length})</CommentSectionTitle>
        <CommentCount>Join the conversation</CommentCount>
      </CommentHeader>
      
      <CommentForm onSubmit={handleSubmit}>
        <CommentInput
          type="text"
          placeholder="Your Name"
          value={newComment.name}
          onChange={(e) => setNewComment({...newComment, name: e.target.value})}
          required
        />
        <CommentInput
          type="email"
          placeholder="Your Email (optional)"
          value={newComment.email}
          onChange={(e) => setNewComment({...newComment, email: e.target.value})}
        />
        <CommentTextarea
          placeholder="Share your thoughts..."
          value={newComment.content}
          onChange={(e) => setNewComment({...newComment, content: e.target.value})}
          required
        />
        <CommentButton type="submit">Post Comment</CommentButton>
      </CommentForm>
      
      <CommentsList>
        {comments.map((comment) => (
          <CommentItem key={comment.id}>
            <CommentAuthor>{comment.author}</CommentAuthor>
            <CommentContent>{comment.content}</CommentContent>
            <CommentDate>{comment.date}</CommentDate>
            <CommentActions>
              <CommentAction>👍 {comment.likes}</CommentAction>
              <CommentAction>Reply</CommentAction>
            </CommentActions>
          </CommentItem>
        ))}
      </CommentsList>
    </CommentSectionContainer>
  )
}

export default CommentSection
