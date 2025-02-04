import styled from "styled-components";
import theme from "../../../theme/Theme";

export const Container = styled.div`
  max-width: ${theme.spacing(100)};
  margin: auto;
`;

export const Title = styled.h1`
  font-size: ${theme.spacing(3)};
  color: ${theme.colors.black};
  font-family: ${theme.fonts.heading};
`;

export const TabsContainer = styled.div`
  display: flex;
  gap: ${theme.spacing(1.5)};
  margin-bottom: ${theme.spacing(2)};
`;

export const Tab = styled.button`
  background: none;
  border: none;
  font-size: ${theme.spacing(2)};
  cursor: pointer;
  color: ${(props) => (props.active ? theme.colors.primary : theme.colors.black)};
  border-bottom: ${(props) => (props.active ? `${theme.spacing(0.375)} solid ${theme.colors.primary}` : "none")};
  padding: ${theme.spacing(1)};
  font-weight: bold;
  font-family: ${theme.fonts.body};
`;

export const NewsCard = styled.div`
  background: ${theme.colors.light};
  border-radius: ${theme.spacing(1)};
  overflow: hidden;
  padding: ${theme.spacing(2)};
  box-shadow: 0px ${theme.spacing(0.25)} ${theme.spacing(1.25)} rgba(0, 0, 0, 0.1);
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
  font-size: ${theme.spacing(2.8)};
  color: ${theme.colors.icons};
  font-weight: bold;
  font-family: ${theme.fonts.accent};
`;

export const NewsTitle = styled.h2`
  font-size: ${theme.spacing(2.5)};
  color: ${theme.colors.black};
  font-family: ${theme.fonts.heading};
`;

export const ShareIcons = styled.div`
  display: flex;
  gap: ${theme.spacing(3)};
  font-size: ${theme.spacing(3.5)};
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
  border-radius: ${theme.spacing(1.875)};
  margin-top: ${theme.spacing(2.5)};
  border: ${theme.spacing(0.125)} solid ${theme.colors.info};
  padding: ${theme.spacing(0.7)};
  width: ${theme.spacing(30)};
  position: relative;
`;

export const CommentInput = styled.input`
  flex: 1;
  border: none;
  font-size: ${theme.spacing(1.75)};
  outline: none;
  max-width: 100%;
  background: transparent;
  padding-right: ${theme.spacing(4.375)};
  padding-left: ${theme.spacing(1.25)};
`;

export const CommentButton = styled.button`
  position: absolute;
  right: ${theme.spacing(1.25)};
  top: ${theme.spacing(0.8)};
  background: none;
  border: none;
  font-size: ${theme.spacing(2.375)};
  color: ${theme.colors.icons};
  cursor: pointer;
`;

export const NewsMeta = styled.div`
  display: flex;
  margin-top: ${theme.spacing(2.5)};
  font-size: ${theme.spacing(1.75)};
  color: ${theme.colors.black};
  font-family: ${theme.fonts.body};
  margin-top: ${theme.spacing(2.95)};
`;

export const TrendingTag = styled.span`
  background: ${theme.colors.error};
  color: ${theme.colors.background};
  font-size: ${theme.spacing(1.5)};
  font-weight: bold;
  
  margin-right: ${theme.spacing(3)};
  padding: ${theme.spacing(0.6)} ${theme.spacing(1)};
  border-radius: ${theme.spacing(0.625)};
  font-family: ${theme.fonts.monospace};
`;

export const OutlineDots = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: ${theme.spacing(55)};
  margin-top: ${theme.spacing(0.5)};
  font-size: ${theme.spacing(3)};
  color: ${theme.colors.black};
  font-family: ${theme.fonts.body};
`;

export const ReadMore = styled.a`
  color: ${theme.colors.primary};
  font-size: ${theme.spacing(1.75)};
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
  margin-top: ${theme.spacing(0.5)};
  &:hover {
    text-decoration: underline;
  }
`;

export const NewsText = styled.p`
  font-size: ${theme.spacing(2)};
  color: ${theme.colors.black};
  margin-top: ${theme.spacing(2.5)};
  font-family: ${theme.fonts.body};
`;
