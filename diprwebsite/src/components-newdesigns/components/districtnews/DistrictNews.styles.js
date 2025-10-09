import styled from "styled-components"

export const PageLayout = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 60px;
  max-width: 90%;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 40px;
    max-width: 95%;
    padding: 16px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    max-width: 100%;
    padding: 12px;
  }
`

