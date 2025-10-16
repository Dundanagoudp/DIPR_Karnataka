import styled from "styled-components";
import theme from "../../../theme/Theme";

export const Wrapper = styled.div`
  padding: ${theme.spacing(4)} ${theme.spacing(6)};
  background-color: ${theme.colors.bg};
`;

export const Title = styled.h1`
  font-size: ${theme.spacing(3)};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing(3)};
`;


export const GuidelineCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 20px;
  width: 280px;
  min-width: 250px;
  text-align: center;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin: 10px;
  flex: 1 1 280px;
`;

export const GuidelineTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 15px;
  color: #222;
`;

export const GuidelineImage = styled.img`
  width: 100%;
  height: auto;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 15px;
`;

export const GuidelineActions = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 15px;
`;

export const Button = styled.a`
  display: inline-block;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  background-color: #007bff;
  color: #fff;
  border: 1px solid #007bff;

  &:hover {
    background-color: #0056b3;
    border-color: #0056b3;
  }
`;


