import styled from "styled-components"

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 28px;

  @media (max-width: 1024px) {
    gap: 24px;
  }

  @media (max-width: 768px) {
    gap: 20px;
    margin-top: 20px;
  }
`

export const Divider = styled.hr`
  height: 1px;
  border: none;
  background: #8C8C8C;
  margin: 25px 0 0;
  width: 100%;
`
