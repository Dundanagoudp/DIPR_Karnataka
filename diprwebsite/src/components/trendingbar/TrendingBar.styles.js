import styled from "styled-components";
import theme from "../../theme/Theme";

export const TrendingWrapper = styled.div`
  width: 100%;
  background-color: #D9D9D9;
  overflow: hidden;
`;

export const TrendingContainer = styled.div`
  width: 92%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: ${theme.spacing(1)} ${theme.spacing(1.25)};
  gap: ${theme.spacing(1.25)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 95%;
    padding: ${theme.spacing(1)} ${theme.spacing(1)};
    gap: ${theme.spacing(1)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 100%;
    padding: ${theme.spacing(1)} ${theme.spacing(1)};
    gap: ${theme.spacing(1)};
  }
`;

export const TrendingLabel = styled.div`
  background-color: ${theme.colors.error};
  color: ${theme.colors.white};
  padding: ${theme.spacing(0.75)} ${theme.spacing(1.5)};
  font-weight: 600;
  font-size: ${theme.fontSizes.medium};
  font-family: ${theme.fonts.body};
  white-space: nowrap;
  flex-shrink: 0;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing(0.75)} ${theme.spacing(1.25)};
    font-size: ${theme.fontSizes.medium};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(0.75)} ${theme.spacing(1)};
    font-size: ${theme.fontSizes.small};
  }
`;

export const TrendingContent = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(1.5)};
  overflow-x: auto;
  flex: 1;
  
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

  @media (max-width: ${theme.breakpoints.tablet}) {
    gap: ${theme.spacing(1.25)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: ${theme.spacing(1)};
  }
`;

export const TrendingItem = styled.span`
  color: ${theme.colors.text};
  font-size: ${theme.fontSizes.medium};
  font-family: ${theme.fonts.body};
  white-space: nowrap;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.medium};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fontSizes.small};
  }
`;

export const Divider = styled.span`
  color: ${theme.colors.text};
  margin: 0 ${theme.spacing(0.75)};
  opacity: 0.5;

  @media (max-width: ${theme.breakpoints.tablet}) {
    margin: 0 ${theme.spacing(0.625)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin: 0 ${theme.spacing(0.5)};
  }
`;
