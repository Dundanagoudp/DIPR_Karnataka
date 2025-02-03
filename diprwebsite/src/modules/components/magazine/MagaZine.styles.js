import styled from "styled-components";
import theme from "../../../theme/Theme";

export const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: auto;
  padding: ${theme.spacing(2)};
  background: ${theme.colors.background};
  font-family: ${theme.fonts.body};
`;

export const TabContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  border-bottom: 2px solid ${theme.colors.info};
  margin-bottom: ${theme.spacing(2)};
`;

export const Tab = styled.button`
  background: none;
  border: none;
  padding: ${theme.spacing(1)} ${theme.spacing(2)};
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: ${({ active }) => (active ? theme.colors.primary : theme.colors.textgray)};
  border-bottom: ${({ active }) => (active ? `3px solid ${theme.colors.primary}` : "none")};

  &:hover {
    color: ${theme.colors.primary};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(2)};
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  padding: ${theme.spacing(1)};
  background: ${theme.colors.light};
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: ${theme.spacing(2)};
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h4`
  font-size: 16px;
  font-weight: bold;
  color: ${theme.colors.text};
  margin-bottom: 4px;
`;

export const Meta = styled.span`
  font-size: 12px;
  color: ${theme.colors.textgray};
`;

export const TrendingBadge = styled.span`
  font-size: 10px;
  color: white;
  background: ${theme.colors.error};
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: bold;
`;
