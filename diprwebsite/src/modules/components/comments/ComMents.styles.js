import styled from "styled-components";

export const CommentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing(1)};
  width: 100%;
  align-items: center;
  margin-top: ${(props) => props.theme.spacing(2)};
`;

export const Comment = styled.div`
  display: flex;
  width: 100%;
  max-width: 90%;
  align-items: flex-start;
  padding: ${(props) => props.theme.spacing(2)};
  background-color: ${(props) => props.theme.colors.light};
  border-radius: ${(props) => props.theme.spacing(1)};


  @media (max-width: ${(props) => props.theme.breakpoints.tabletS}) {
    max-width: 100%;
    padding: ${(props) => props.theme.spacing(1)};
  }

 

  @media (max-width: ${(props) => props.theme.breakpoints.mobileM}) {
    max-width: 100%;
    padding: ${(props) => props.theme.spacing(0.8)};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobileS}) {
    max-width: 100%;
    padding: ${(props) => props.theme.spacing(0.5)};
  }
`;

export const ProfileImage = styled.img`
  width: ${(props) => props.theme.spacing(5)};
  height: ${(props) => props.theme.spacing(5)};
  border-radius: 50%;
`;

export const CommentContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const UserHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing(0.5)};
  color: ${(props) => props.theme.colors.text};
  font-weight: 600;
`;

export const Username = styled.span`
  font-size: ${(props) => props.theme.spacing(2)};
`;

export const VerifiedIcon = styled.span`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.spacing(1.75)};
`;

export const Time = styled.span`
  font-size: ${(props) => props.theme.spacing(1.75)};
  color: ${(props) => props.theme.colors.textgray};
  margin-left: auto;
`;

export const CommentText = styled.p`
  margin: ${(props) => props.theme.spacing(0.5)} 0;
  font-size: ${(props) => props.theme.spacing(1.75)};
  color: ${(props) => props.theme.colors.text};
`;

export const NestedComment = styled.div`
  background-color: ${(props) => props.theme.colors.lightgreen};
  padding: ${(props) => props.theme.spacing(1)};
  border-radius: ${(props) => props.theme.spacing(1)};
  margin-top: ${(props) => props.theme.spacing(0.5)};
  font-size: ${(props) => props.theme.spacing(1.75)};
`;

export const NestedUser = styled.span`
  font-weight: 600;
  color: ${(props) => props.theme.colors.primary};
`;

export const Actions = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing(1)};
  margin-top: ${(props) => props.theme.spacing(1)};
  color: ${(props) => props.theme.colors.icons};
`;

export const ActionIcon = styled.span`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing(0.5)};
  cursor: pointer;
  font-size: ${(props) => props.theme.spacing(1.75)};
`;
