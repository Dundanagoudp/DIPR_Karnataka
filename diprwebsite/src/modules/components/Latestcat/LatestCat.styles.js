import styled from "styled-components";
import theme from "../../../theme/Theme";

export const Container = styled.div`
  margin: auto;
  max-width: 1200px;
  margin-top: ${theme.spacing(5)};
  padding: 0 ${theme.spacing(5)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding:  ${theme.spacing(1)}; 
    max-width: 100%;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding:  ${theme.spacing(1.9)}; 
  }


`;

export const NewsCardWrapper = styled.div`
  background: ${theme.colors.light};
  border-radius: ${theme.spacing(1)};
  overflow: hidden;
  padding: ${theme.spacing(2)};
  // box-shadow: 0px ${theme.spacing(0.25)} ${theme.spacing(1.25)} rgba(0, 0, 0, 0.1);
  margin-bottom: ${theme.spacing(2)};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing(1.9)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(1.5)};
    max-width: 100%;
  }
`;

export const NewsImageWrapper = styled.div`
  img {
    width: 100%;
    border-radius: ${theme.spacing(1)};
    hight: auto;
    object-fit: cover;
  
    @media (max-width: ${theme.breakpoints.tablet}) {
      height: 40vh;
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
      height: 30vh;
    }
  }
`;

export const NewsContentWrapper = styled.div`
  padding: ${theme.spacing(2)};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(1.5)};
  }
`;

export const NewsHeaderWrapper = styled.div`
  font-size: ${theme.spacing(2.8)};
  color: ${theme.colors.icons};
  font-weight: bold;
  font-family: ${theme.fonts.accent};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(2.2)};
  }
`;

export const NewsTitleWrapper = styled.h2`
  font-size: ${theme.spacing(2.5)};
  color: ${theme.colors.black};
  font-family: ${theme.fonts.heading};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(2)};
  }
`;

export const ShareIconsWrapper = styled.div`
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

export const CommentSectionWrapper = styled.div`
  margin-top: ${theme.spacing(1)};
`;

export const CommentInputWrapper = styled.div`
  display: flex;
  align-items: center;
  background: ${theme.colors.background};
  border-radius: ${theme.spacing(1.875)};
  margin-top: ${theme.spacing(2.5)};
  border: ${theme.spacing(0.125)} solid ${theme.colors.info};
  padding: ${theme.spacing(0.7)};
  width: ${theme.spacing(30)};
  position: relative;

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

export const CommentInputField = styled.input`
  flex: 1;
  border: none;
  font-size: ${theme.spacing(1.75)};
  outline: none;
  max-width: 100%;
  background: transparent;
  padding-right: ${theme.spacing(4.375)};
  padding-left: ${theme.spacing(1.25)};
`;

export const CommentButtonWrapper = styled.button`
  position: absolute;
  right: ${theme.spacing(1.25)};
  top: ${theme.spacing(0.8)};
  background: none;
  border: none;
  font-size: ${theme.spacing(2.375)};
  color: ${theme.colors.icons};
  cursor: pointer;
`;

export const NewsMetaWrapper = styled.div`
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

export const TrendingTagWrapper = styled.span`
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

export const NewsTextWrapper = styled.p`
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

export const IconWrapper = styled.div`
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
