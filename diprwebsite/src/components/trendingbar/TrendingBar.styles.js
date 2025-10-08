import styled from "styled-components";

const theme = {
  colors: {
    primary: "#1E88E5",
    error: "#DD403C",
    info: "#DEDEDE",
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
  width: 94%;
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
  
  &::-webkit-scrollbar {
    height: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }
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
