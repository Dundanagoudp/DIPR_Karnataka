import styled from "styled-components";
import theme from "../../../../theme/Theme";
 
 
export const ContactFormContainer = styled.div`
  font-family: ${theme.fonts.body};
  margin: auto;
  max-width: 600px;
  padding: ${theme.spacing(4)};
  background-color: ${theme.colors.background};
  border-radius: 8px;
 
  h2 {
    font-size: 24px;
    color: ${theme.colors.primary};
  }
 
    h4 {
    color: ${theme.colors.primary};
  }
 
  p {
    font-size: 16px;
    color: ${theme.colors.text};
  }
 
  .contact-info {
    margin-top: ${theme.spacing(2)};
  }
`;
 
export const ContactItem = styled.div`
  display: flex;
  align-items: center;
 
  margin-bottom: ${theme.spacing(2)};
`;
 
export const ContactIcon = styled.i`
  font-size: 20px;
  margin-right: ${theme.spacing(2)};
  color: ${theme.colors.icons};
`;
 
export const ContactItemAddress = styled(ContactItem)`
  flex-direction: column;
  align-items: flex-start;
 
  ${ContactIcon} {
    margin-right: 0;
    margin-bottom: ${theme.spacing(1)};
  }
`;
 
export const ContactDetails = styled.div`
  p {
    margin: 0;
    font-size: 14px;
    color: ${theme.colors.textgray};
  }
`;