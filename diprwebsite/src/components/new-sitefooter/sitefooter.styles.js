import styled from "styled-components"

export const FooterWrapper = styled.footer`
  background: #ffffff;
  color: #0f172a; /* slate-900 */
  border-top: 1px solid #e5e7eb; /* gray-200 */
  width: 100%;
  font-family: var(--font-sans, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif);
`

export const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 16px;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr;
  gap: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`

export const Left = styled.div`
  display: grid;
  grid-template-columns: 96px 1fr;
  gap: 16px;
  align-items: start;

  @media (max-width: 640px) {
    grid-template-columns: 72px 1fr;
  }
`

export const Emblem = styled.img`
  width: 96px;
  height: auto;
  object-fit: contain;

  @media (max-width: 640px) {
    width: 72px;
  }
`

export const Note = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  color: #334155; /* slate-600 */
`

export const ColTitle = styled.h3`
  margin: 0 0 12px 0;
  font-size: 20px;
  line-height: 1.3;
  font-weight: 700;
  color: #111827; /* gray-900 */
`

export const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
`

export const LinkItem = styled.li``

export const LinkA = styled.a`
  font-size: 14px;
  color: #374151; /* gray-700 */
  text-decoration: none;
  transition: color 0.15s ease, text-decoration-color 0.15s ease;

  &:hover {
    color: #be123c; /* rose-700 as subtle accent */
    text-decoration: underline;
    text-decoration-color: #be123c;
  }
`

export const Meta = styled.div`
  display: grid;
  gap: 10px;
  font-size: 14px;
  color: #374151; /* gray-700 */
`

export const Divider = styled.hr`
  margin: 24px 0 0 0;
  border: none;
  border-top: 1px solid #e5e7eb;
`

export const BottomBar = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 14px 16px 28px;
  text-align: center;
  color: #6b7280; /* gray-500 */
  font-size: 13px;
`

export const SrOnly = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`
