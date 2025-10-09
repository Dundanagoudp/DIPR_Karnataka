import React from 'react'
import {
  SocialShareContainer,
  ShareTitle,
  ShareButtons,
  ShareButton,
  ShareIcon,
  ShareText
} from './SocialShare.styles'

const SocialShare = () => {
  const shareUrl = window.location.href
  const shareTitle = "The land of Bisala, Raichur, is now adorned with lush greenery, beckoning nature lovers."

  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank')
  }

  const shareToTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`, '_blank')
  }

  const shareToLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank')
  }

  const shareToWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(shareTitle + ' ' + shareUrl)}`, '_blank')
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      alert('Link copied to clipboard!')
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  return (
    <SocialShareContainer>
      <ShareTitle>Share this article</ShareTitle>
      <ShareButtons>
        <ShareButton onClick={shareToFacebook} style={{ backgroundColor: '#1877F2' }}>
          <ShareIcon>📘</ShareIcon>
          <ShareText>Facebook</ShareText>
        </ShareButton>
        
        <ShareButton onClick={shareToTwitter} style={{ backgroundColor: '#1DA1F2' }}>
          <ShareIcon>🐦</ShareIcon>
          <ShareText>Twitter</ShareText>
        </ShareButton>
        
        <ShareButton onClick={shareToLinkedIn} style={{ backgroundColor: '#0077B5' }}>
          <ShareIcon>💼</ShareIcon>
          <ShareText>LinkedIn</ShareText>
        </ShareButton>
        
        <ShareButton onClick={shareToWhatsApp} style={{ backgroundColor: '#25D366' }}>
          <ShareIcon>💬</ShareIcon>
          <ShareText>WhatsApp</ShareText>
        </ShareButton>
        
        <ShareButton onClick={copyToClipboard} style={{ backgroundColor: '#6B7280' }}>
          <ShareIcon>📋</ShareIcon>
          <ShareText>Copy Link</ShareText>
        </ShareButton>
      </ShareButtons>
    </SocialShareContainer>
  )
}

export default SocialShare
