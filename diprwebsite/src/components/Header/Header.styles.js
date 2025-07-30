import styled from 'styled-components';
import theme from '../../theme/Theme';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  align-items: center;
  background-color: ${theme.colors.background};
  padding: ${theme.spacing(0)} ${theme.spacing(4)};
   width: 95%;
  margin: 0 auto;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing(2)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(1)};
  }
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(2)};

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: ${theme.spacing(1)};
  }
`;

export const Logo = styled.img`
  max-width: ${theme.spacing(9)};
  height: auto;

  @media (max-width: ${theme.breakpoints.tablet}) {
    max-width: ${theme.spacing(8)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    max-width: ${theme.spacing(6)};
  }
`;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.text};
  font-size: 1.4rem;
  margin: 0;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 1.2rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

export const Subtitle = styled.h2`
  font-family: ${theme.fonts.body};
  color: ${theme.colors.black};
  font-size: 1rem;
  font-weight: normal;
  margin: 0;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 0.9rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.8rem;
  }
`;

export const CMSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;

  @media (max-width: ${theme.breakpoints.mobile}) {
    justify-content: center;
  }
`;

export const CMImage = styled.img`
  max-width: ${theme.spacing(25)};
  height: auto;
  object-fit: cover;
  padding: ${theme.spacing(1.8)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    max-width: ${theme.spacing(20)};
    padding: ${theme.spacing(1)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    max-width: ${theme.spacing(15)};
    padding: ${theme.spacing(0.5)};
  }
`;