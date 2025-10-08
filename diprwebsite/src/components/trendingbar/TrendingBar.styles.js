import styled from "styled-components";

const theme = {
  colors: {
    primary: "#1E88E5",
    error: "#DD403C",
    info: "#D9D9D9",
    text: "#262524",
    white: "#ffffff",
  },
};

export const TrendingWrapper = styled.div`
  width: 100%;
  background-color: ${theme.colors.info};
  overflow: hidden;
`;

export const TrendingContainer = styled.div`
  width: 92%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  gap: 1rem;
`;

export const TrendingLabel = styled.div`
  background-color: ${theme.colors.error};
  color: ${theme.colors.white};
  padding: 0.5rem 1rem;
  font-weight: 600;
  font-size: 0.875rem;
  white-space: nowrap;
  flex-shrink: 0;
`;

export const TrendingContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  overflow-x: auto;
  flex: 1;
  
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`;

export const TrendingItem = styled.span`
  color: ${theme.colors.text};
  font-size: 0.875rem;
  white-space: nowrap;
`;

export const Divider = styled.span`
  color: ${theme.colors.text};
  margin: 0 0.5rem;
  opacity: 0.5;
`;
