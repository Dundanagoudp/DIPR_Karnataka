import styled from "styled-components";
import theme from "../../../../theme/Theme";

export const MagzineDataContainer = styled.div`
  max-width: 1200px;
  padding: 0 ${theme.spacing(10)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding:  ${theme.spacing(1)}; 
    max-width: 100%;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding:  ${theme.spacing(1.9)}; 
  }
`;

export const MagzineDataNewsCardWrapper = styled.div`
  border-radius: ${theme.spacing(1)};
  overflow: hidden;
  padding: ${theme.spacing(2)};
  margin-bottom: ${theme.spacing(2)};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing(1.9)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(1.5)};
    max-width: 100%;
  }
`;

export const MagzineDataNewsImageWrapper = styled.div`
  img {
    width: 100%;
    height: 50vh;
    margin-bottom: ${theme.spacing(2)};
    object-fit: cover;
  
    @media (max-width: ${theme.breakpoints.tablet}) {
      height: 40vh;
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
      height: 30vh;
    }
  }
`;

export const MagzineDataNewsContentWrapper = styled.div`
  padding: ${theme.spacing(2)};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(1.5)};
  }
`;

export const MagzineDataNewsHeaderWrapper = styled.div`
  font-size: ${theme.spacing(2.8)};
  color: ${theme.colors.icons};
  font-weight: bold;
  font-family: ${theme.fonts.accent};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(2.2)};
  }
`;

export const MagzineDataNewsTitleWrapper = styled.h2`
  font-size: ${theme.spacing(2.5)};
  color: ${theme.colors.black};
  font-family: ${theme.fonts.heading};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(2)};
  }
`;

export const MagzineDataShareIconsWrapper = styled.div`
  display: flex;
  margin-top: ${theme.spacing()};
  gap: ${theme.spacing(3)};
  font-size: ${theme.spacing(3.5)};
  margin: ${theme.spacing(1)} 0;
  color: ${theme.colors.icons};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(2.5)};
    gap: ${theme.spacing(2)};
  }
`;

export const MagzineDataTrendingTagWrapper = styled.span`
  background: ${theme.colors.error};
  color: ${theme.colors.background};
  font-size: ${theme.spacing(1.5)};
  font-weight: bold;
  margin-right: ${theme.spacing(3)};
  padding: ${theme.spacing(0.6)} ${theme.spacing(1)};
  border-radius: ${theme.spacing(0.625)};
  font-family: ${theme.fonts.monospace};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.25)};
    margin-right: ${theme.spacing(2)};
  }
`;

export const MagzineDataNewsMetaWrapper = styled.div`
  display: flex;
  margin-top: ${theme.spacing(2.5)};
  font-size: ${theme.spacing(1.75)};
  color: ${theme.colors.black};
  font-family: ${theme.fonts.body};
  margin-top: ${theme.spacing(2.95)};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.5)};
  }
`;

export const MagzineDataNewsTextWrapper = styled.p`
  font-size: ${theme.spacing(2.1)};
  color: ${theme.colors.black};
  line-height: 1.3;
  margin-top: ${theme.spacing(2.8)};
  font-family: ${theme.fonts.body};
  column-count: 2;
  column-gap: ${theme.spacing(4)}; 
  text-align: justify;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.75)};
    column-count: 1; /* Switch to single column on smaller screens */
  }
`;

export const MagzineDataIconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-left: auto;

  svg {
    font-size: 22px;
    margin-top: 15px;
    color: ${({ theme }) => theme.colors.black};
    cursor: pointer;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;