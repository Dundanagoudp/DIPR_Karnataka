import styled from 'styled-components';
import theme from '../../theme/Theme';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.colors.background};
  padding: ${theme.spacing(2)} ${theme.spacing(4)};
  border-bottom: 2px solid ${theme.colors.primary};

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing(2)};
    flex-direction: column;
    text-align: center;
  }
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(2)};

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

export const Logo = styled.img`
  width: 100%;
  max-width: ${theme.spacing(10)}; // 10 * base spacing unit (80px)
  height: auto;

  @media (max-width: ${theme.breakpoints.mobile}) {
    max-width: ${theme.spacing(8)}; // 8 * base spacing unit (64px)
  }
`;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.text};
  font-size: 1.5rem; // You can replace this with a dynamic value if added to theme.fontSizes
  margin: 0;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.25rem; // Adjust as needed
  }
`;

export const Subtitle = styled.h2`
  font-family: ${theme.fonts.body};
  color: ${theme.colors.textgray};
  font-size: 1rem; // You can replace this with a dynamic value if added to theme.fontSizes
  margin: 0;
`;

export const CMSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(2)};
  text-align: right;

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const CMImage = styled.img`
  max-width: 30%; 
  position: relative;
  object-fit: cover;
  position: relative;
  display: flex;
  align-items: left;
  justify-content: center;

  @media (max-width: ${theme.breakpoints.tablet}) {
    max-width: ${theme.spacing(8)}; 
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    max-width: ${theme.spacing(6)}; 
  }
`;