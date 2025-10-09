import styled from 'styled-components';
import theme from '../../theme/Theme';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  padding-left: ${theme.spacing(10)};
  padding-right: ${theme.spacing(6)};
  background: ${theme.colors.background};

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing(2)} ${theme.spacing(3)};
    width: 100%;
    gap: ${theme.spacing(2)};
    flex-direction: column;
    text-align: center;
    align-items: center;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(1.5)} ${theme.spacing(2)};
    flex-direction: column;
    text-align: center;
    gap: ${theme.spacing(1.5)};
    align-items: center;
  }
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(2)};
  flex: 1;
  min-width: 300px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    min-width: auto;
    gap: ${theme.spacing(1)};
    flex-direction: column;
    width: 100%;
    max-width: 100%;
    align-items: center;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    min-width: auto;
    flex-direction: column;
    gap: ${theme.spacing(1)};
    width: 100%;
    max-width: 100%;
    align-items: center;
  }
`;

export const Logo = styled.img`
  max-width: ${theme.spacing(9)};
  height: auto;
  flex-shrink: 0;

  @media (max-width: ${theme.breakpoints.tablet}) {
    max-width: ${theme.spacing(6)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    max-width: ${theme.spacing(5)};
  }
`;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;

  @media (max-width: ${theme.breakpoints.tablet}) {
    align-items: center;
    text-align: center;
    flex: none;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    align-items: center;
    text-align: center;
    flex: none;
  }
`;

export const Title = styled.h3`
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.text};
  font-size: 1.4rem;
  margin: 0;
  line-height: 1.3;
  word-wrap: break-word;
  overflow-wrap: break-word;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 1.1rem;
    line-height: 1.25;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.95rem;
    text-align: center;
    line-height: 1.2;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

export const Subtitle = styled.h2`
  font-family: ${theme.fonts.body};
  color: ${theme.colors.black};
  font-size: 1rem;
  font-weight: normal;
  margin: 0;
  line-height: 1.3;
  word-wrap: break-word;
  overflow-wrap: break-word;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 0.8rem;
    line-height: 1.25;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.75rem;
    text-align: center;
    line-height: 1.2;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

export const CMSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  min-width: 300px;
  gap: ${theme.spacing(1)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    min-width: auto;
    justify-content: center;
    width: 100%;
    max-width: 100%;
    margin-top: 0;
    gap: ${theme.spacing(0.5)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    min-width: auto;
    justify-content: center;
    width: 100%;
    max-width: 100%;
    margin-top: 0;
    gap: ${theme.spacing(0.5)};
  }
`;

export const CMImage = styled.img`
  max-width: ${theme.spacing(35)};
  height: 100px;
  object-fit: cover;
  padding: ${theme.spacing(1.8)};
  flex-shrink: 0;

  @media (max-width: ${theme.breakpoints.tablet}) {
    max-width: ${theme.spacing(20)};
    height: 60px;
    padding: ${theme.spacing(0.5)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    max-width: ${theme.spacing(18)};
    height: 50px;
    padding: ${theme.spacing(0.25)};
  }

  @media (max-width: 480px) {
    max-width: ${theme.spacing(16)};
    height: 45px;
    padding: ${theme.spacing(0.25)};
  }
`;