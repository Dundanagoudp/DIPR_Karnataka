import styled from "styled-components"

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  gap: 12px;
  
  background: #ffffff;
  color: #111827;
  padding-bottom: 20px;
  border-bottom: 1px solid #8C8C8C;
  padding: 10px;

  @media (max-width: 768px) {
    padding: 16px;
    gap: 10px;
  }
`

export const Thumb = styled.img`
  width: 90%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border: 1px solid #e5e7eb;

  @media (max-width: 1024px) {
    width: 95%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.35;
  margin: 0;
  color: #111827;

  @media (max-width: 1024px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    font-size: 15px;
    line-height: 1.4;
  }
`

export const Excerpt = styled.p`
  margin: 0;
  color: #6b7280;
  font-size: 14px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 13px;
    line-height: 1.5;
  }
`

export const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #6b7280;
  font-size: 12px;

  @media (max-width: 768px) {
    gap: 8px;
    font-size: 11px;
  }
`

export const Dot = styled.span`
  width: 4px;
  height: 4px;
  border-radius: 999px;
  background: #d1d5db;
`
