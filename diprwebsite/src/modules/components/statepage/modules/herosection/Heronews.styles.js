
import styled from "styled-components"

export const HeroWrap = styled.section`
  position: relative;
  width: 100%;
  background: #ffffff;
  padding: 0 20px;
  border-bottom: 1px solid #8C8C8C;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`

export const HeroMedia = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #e5e7eb;
  overflow: hidden;
  z-index: 1;
  

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    z-index: 1;
  }
`

export const OverlayCard = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 40px;
  width: min(80%, 800px);
  background: #ffffff;
  padding: 60px 24px 50px 24px;
  min-height: 300px;
  z-index: 10;

  @media (max-width: 1024px) {
    width: min(80%, 600px);
    padding: 50px 20px 40px 20px;
    min-height: 280px;
  }

  @media (max-width: 768px) {
    position: relative;
    transform: none;
    left: auto;
    bottom: auto;
    width: 100%;
    margin: 0;
    padding: 20px 16px;
    min-height: auto;
    background: #ffffff;
    border-top: 1px solid #8C8C8C;
  }
`

export const Title = styled.h2`
  font-size: 22px;
  font-weight: 800;
  text-transform: uppercase;
  color: #111827;
  letter-spacing: 0.3px;
  margin: 0 0 12px 0;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    text-align: left;
    margin-bottom: 8px;
  }
`

export const Excerpt = styled.p`
  font-size: 14px;
  color: #6b7280;
  margin: 0;
  text-align: center;

  @media (max-width: 768px) {
    text-align: left;
    font-size: 13px;
    margin-bottom: 16px;
  }
`

export const BottomBar = styled.div`
  position: absolute;
  left: 24px;
  right: 24px;
  bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    position: relative;
    left: auto;
    right: auto;
    bottom: auto;
    margin-top: 16px;
    padding: 0;
  }
`

export const Dots = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const Dot = styled.button`
  width: 36px;
  height: 2px;
  border: none;
  background: ${(p) => (p.$active ? "#111827" : "#d1d5db")};
  border-radius: 1px;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid #1e73e8;
    outline-offset: 2px;
  }
`

export const Arrows = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const ArrowBtn = styled.button`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  color: #111827;
  display: grid;
  place-items: center;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background: #f3f4f6;
  }

  &:focus-visible {
    outline: 2px solid #1e73e8;
    outline-offset: 2px;
  }

  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
    font-size: 14px;
  }
`

export const RightDivider = styled.div`
  position: absolute;
  right: -25px;
  top: 10px;
  bottom: 20px;
  width: 0.5px;
  background: #8C8C8C;
  z-index: 5;

  @media (max-width: 1024px) {
    display: none;
  }
`