import styled from 'styled-components';
import theme from '../../theme/Theme';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.colors.background};
  padding: ${theme.spacing(0)} ${theme.spacing(4)};
  width: 95%;
  margin: 0 auto;
  flex-wrap: wrap;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing(2)};
    width: 100%;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(1)};
    flex-direction: column;
    text-align: center;
    gap: ${theme.spacing(2)};
  }
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(2)};
  flex: 1;
  min-width: 300px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    min-width: 250px;
    gap: ${theme.spacing(1.5)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    min-width: auto;
    flex-direction: column;
    gap: ${theme.spacing(1)};
    width: 100%;
  }
`;

export const Logo = styled.img`
  max-width: ${theme.spacing(9)};
  height: auto;

  @media (max-width: ${theme.breakpoints.tablet}) {
    max-width: ${theme.spacing(7)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    max-width: ${theme.spacing(6)};
  }
`;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${theme.breakpoints.mobile}) {
    align-items: center;
  }
`;

export const Title = styled.h3`
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.text};
  font-size: 1.4rem;
  margin: 0;
  line-height: 1.2;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 1.2rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.1rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const Subtitle = styled.h2`
  font-family: ${theme.fonts.body};
  color: ${theme.colors.black};
  font-size: 1rem;
  font-weight: normal;
  margin: 0;
  line-height: 1.2;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 0.9rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.85rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const CMSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  min-width: 300px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    min-width: 250px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    min-width: auto;
    justify-content: center;
    width: 100%;
    margin-top: ${theme.spacing(1)};
  }
`;

export const CMImage = styled.img`
  max-width: ${theme.spacing(35)};
  height: 100px;
  object-fit: cover;
  padding: ${theme.spacing(1.8)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    max-width: ${theme.spacing(30)};
    height: 80px;
    padding: ${theme.spacing(1)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    max-width: ${theme.spacing(30)};
    height: 70px;
    padding: ${theme.spacing(0.5)};
  }

  @media (max-width: 480px) {
    max-width: ${theme.spacing(25)};
    height: 60px;
  }
`;