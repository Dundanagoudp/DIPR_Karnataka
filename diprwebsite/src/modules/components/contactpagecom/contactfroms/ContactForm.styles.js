import styled from "styled-components";
import theme from "../../../../theme/Theme";

export const ContactContainer = styled.div`
  background-color: ${theme.colors.background};
  padding: ${theme.spacing(4)};
  border-radius: 8px;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(2)};
  }
`;
export const ContactTitle = styled.h2`
  font-size: ${theme.spacing(3)};
  color: ${theme.colors.text};
  font-family: ${theme.fonts.heading};
  margin-bottom: ${theme.spacing(3)};
  text-align: center;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(2.5)};
  }
`;

export const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(2)};
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(1)};
`;

export const ContactLabel = styled.span`
  font-size: ${theme.spacing(2)};
  color: ${theme.colors.textgray};
  font-family: ${theme.fonts.body};
  font-weight: bold;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.75)};
  }
`;

export const ContactValue = styled.span`
  font-size: ${theme.spacing(1.75)};
  color: ${theme.colors.text};
  font-family: ${theme.fonts.body};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.5)};
  }
`;

export const ContactInput = styled.input`
  width: 100%;
  padding: ${theme.spacing(1.5)};
  font-size: ${theme.spacing(1.75)};
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: ${theme.spacing(1)};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.5)};
  }
`;

export const ContactButton = styled.button`
  background-color:${theme.colors.primary};
  color: ${theme.colors.background};
  padding: ${theme.spacing(2)};
  font-size: ${theme.spacing(2)};
  border: none;
  margin-top: ${theme.spacing(2)};
  border-radius: ${theme.spacing(1)};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;