import styled from "styled-components";
import theme from "../../../theme/Theme";

export const Container = styled.div`
  max-width: 800px;
  margin: auto;
  padding: ${theme.spacing(2)};
`;

export const TabsContainer = styled.div`
  display: flex;
  gap: ${theme.spacing(1.5)};
  margin-bottom: ${theme.spacing(2)};
`;

export const Tab = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  color: ${(props) => (props.active ? theme.colors.primary : theme.colors.textgray)};
  border-bottom: ${(props) => (props.active ? `3px solid ${theme.colors.primary}` : "none")};
  padding: ${theme.spacing(1)};
  font-weight: bold;
  font-family: ${theme.fonts.body};
`;

export const NewsCard = styled.div`
  background: ${theme.colors.light};
  border-radius: 8px;
  overflow: hidden;
  padding: ${theme.spacing(2)};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: ${theme.spacing(2)};
`;

export const NewsImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const NewsContent = styled.div`
  padding: ${theme.spacing(2)};
`;

export const NewsHeader = styled.div`
  font-size: 14px;
  color: ${theme.colors.icons};
  font-weight: bold;
  font-family: ${theme.fonts.accent};
`;

export const NewsTitle = styled.h2`
  font-size: 20px;
  color: ${theme.colors.black};
  font-family: ${theme.fonts.heading};
`;

export const ShareIcons = styled.div`
  display: flex;
  gap: ${theme.spacing(3)};
  font-size: 28px;
  margin: ${theme.spacing(1)} 0;
  color: ${theme.colors.icons};
`;

export const CommentSection = styled.div`
  margin-top: ${theme.spacing(1)};
`;

export const CommentInputWrapper = styled.div`
  display: flex;
  align-items: center;
  background: ${theme.colors.background};
  border-radius: 15px;
  border: 1px solid ${theme.colors.info};
  padding: ${theme.spacing(0.8)};  /* Reduced padding for a more compact input */
  width: 90%; /* Adjusted width for smaller input */
  position: relative;
`;

export const CommentInput = styled.input`
  flex: 1;
  border: none;
  font-size: 14px;
  outline: none;
  max-width: 20%;
  background: transparent;
  padding-right: 35px;
  padding-left: 10px;
`;

export const CommentButton = styled.button`
  position: absolute;
  right: 10px;
  background: none;
  border: none;
  font-size: 18px; /* Smaller icon size */
  color: ${theme.colors.primary};
  cursor: pointer;
`;

export const NewsMeta = styled.div`
  display: flex;
  margin-top: ${theme.spacing(2)};
  font-size: 14px;
  color: ${theme.colors.black};
`;

export const TrendingTag = styled.span`
  background: ${theme.colors.error};
  color: ${theme.colors.background};
  font-size: 12px;
  font-weight: bold;
  margin-right: ${theme.spacing(3)};
  padding: ${theme.spacing(0.6)} ${theme.spacing(1)};
  border-radius: 5px;
  font-family: ${theme.fonts.monospace};
`;

export const ReadMore = styled.a`
  color: ${theme.colors.primary};
  font-size: 14px;
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
  margin-top: ${theme.spacing(1)};
  &:hover {
    text-decoration: underline;
  }
`;
