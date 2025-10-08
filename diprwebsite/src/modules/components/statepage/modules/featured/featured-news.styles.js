"use client"
import styled from "styled-components"

export const Section = styled.section`
  width: 100%;
  padding: 24px 16px;
  background: var(--background, #ffffff);
  color: var(--foreground, #0a0a0a);

  @media (min-width: 1024px) {
    padding: 48px 32px;
  }
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: 90%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: 1fr 1fr; /* tablet: image+content, sidebar */
    gap: 24px;
    max-width: 95%;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr; /* left image, main text, right list */
    gap: 32px;
  }
`

export const LeftImageWrap = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: #ffffff;
  border-radius: 0;
  margin-bottom: 16px;
  padding-bottom: 16px;
  box-sizing: border-box;

  @media (min-width: 768px) and (max-width: 1023px) {
    aspect-ratio: 16 / 9;
    margin-bottom: 12px;
    padding-bottom: 12px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
  }
`

export const MainContent = styled.article`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 8px 4px;
  border-bottom: 1px solid #8C8C8C;

  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 8px 8px;
    gap: 14px;
  }

  @media (min-width: 1024px) {
    padding: 8px 0;
    gap: 16px;
  }

  h2 {
    font-size: 1.25rem;
    line-height: 1.25;
    font-weight: 700;
    letter-spacing: -0.01em;

    @media (min-width: 768px) and (max-width: 1023px) {
      font-size: 1.5rem;
    }

    @media (min-width: 1024px) {
      font-size: 2rem;
    }
  }

  p {
    color: var(--muted-foreground, #6b7280);
    line-height: 1.65;
    max-width: 60ch;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;

    @media (max-width: 767px) {
      max-width: 100%;
      -webkit-line-clamp: 3;
    }
  }
`

export const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;

  @media (max-width: 767px) {
    gap: 8px;
  }
`

export const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  height: 26px;
  padding: 0 10px;
  background: var(--primary, #2563eb);
  color: var(--primary-foreground, #ffffff);
  font-size: 12px;
  font-weight: 600;

  @media (max-width: 767px) {
    height: 24px;
    padding: 0 8px;
    font-size: 11px;
  }
`

export const DateText = styled.time`
  font-size: 12px;
  color: var(--primary, #2563eb);

  @media (max-width: 767px) {
    font-size: 11px;
  }
`

export const Sidebar = styled.aside`
  display: grid;
  grid-template-rows: auto auto;
  gap: 20px;
  border-bottom: 1px solid #8C8C8C;

  @media (min-width: 768px) and (max-width: 1023px) {
    gap: 16px;
  }

  @media (max-width: 767px) {
    gap: 16px;
    margin-top: 16px;
  }
`

export const SideCard = styled.article`
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 14px;
  align-items: start;
  padding-bottom: 18px;
  border-bottom: 1px solid var(--border, #e5e7eb);

  @media (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: 100px 1fr;
    gap: 12px;
    padding-bottom: 16px;
  }

  @media (max-width: 767px) {
    grid-template-columns: 80px 1fr;
    gap: 10px;
    padding-bottom: 14px;
  }

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  .thumb {
    width: 100%;
    aspect-ratio: 4 / 3;
    overflow: hidden;
    background: #e5e7eb;
    border-radius: 0;
    border-bottom: 1px solid #6b7280;

    @media (max-width: 767px) {
      aspect-ratio: 3 / 2;
    }
  }

  .thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
  }

  h3 {
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.3;
    margin: 6px 0 4px;

    @media (max-width: 767px) {
      font-size: 0.9rem;
      margin: 4px 0 3px;
    }
  }

  p {
    font-size: 0.95rem;
    color: var(--muted-foreground, #6b7280);
    line-height: 1.6;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;

    @media (max-width: 767px) {
      font-size: 0.85rem;
      -webkit-line-clamp: 2;
    }
  }
`
