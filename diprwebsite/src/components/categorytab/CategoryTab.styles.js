import styled from "styled-components";
import theme from "../../theme/Theme";

export const TabContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${theme.colors.primary};
  padding-left: ${theme.spacing(4)};
  overflow-x: auto;
  margin: 0 auto;
  padding-right: ${theme.spacing(0.5)};
  width: auto;
  max-width: 100%;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(0.5)};
  }
`;

export const TabsWrapper = styled.div`
  display: flex;
  gap: ${theme.spacing(1)};
  flex-wrap: nowrap;
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;
  max-width: 100%;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TabItem = styled.div`
  padding: ${theme.spacing(2)} ${theme.spacing(2.5)};
  cursor: pointer;
  font-family: ${theme.fonts.heading};
  font-size: 16px;
  font-weight: bold;
  white-space: nowrap;
  color: ${(props) => (props.active ? theme.colors.primary : theme.colors.background)};
  background-color: ${(props) => (props.active ? theme.colors.background : "transparent")};
  border-radius: ${(props) => (props.active ? "20px 20px 0 0" : theme.spacing(1))};
  transition: all 0.3s ease-in-out;
  scroll-snap-align: start;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${theme.colors.light};
    color: ${theme.colors.primary};
  }

  ${(props) =>
    props.active &&
    `&::after {
      content: "";
   
      bottom: -18px;
      left: 10%;
      transform: translateX(-32%);
      height: 20px;
      border-radius: 50px 50px 0 0;
      background-color: ${theme.colors.primary};
      border-radius: 0 0 50px 50px;
    }`}
`;

export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-left: auto;
  object-fit: cover;
`;