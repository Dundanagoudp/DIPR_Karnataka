import React from "react";
import { FaHeart, FaComment, FaRetweet } from "react-icons/fa";
import {
  CommentSection,
  Comment,
  ProfileImage,
  CommentContent,
  UserHeader,
  UserInfo,
  Username,
  VerifiedIcon,
  Time,
  CommentText,
  NestedComment,
  NestedUser,
  Actions,
  ActionIcon,
} from "../comments/ComMents.styles";

import profileImg from "../../../assets/post1.png";

const commentsData = [
  {
    id: 1,
    user: "tobi",
    verified: true,
    comment: "There are so many great little design touches in threads. Really Great",
    replies: 26,
    likes: 112,
    time: "7h",
    profileImg: profileImg,
    nested: {
      user: "h1brd",
      comment: "you can start with @rourkey and @brainsw but theres more folks",
    },
  },
  {
    id: 2,
    user: "jack",
    verified: true,
    comment: "We wanted flying cars, instead we got 7 Twitter clones.",
    replies: 26,
    likes: 112,
    time: "33m",
    profileImg: profileImg,
  },
];

const ComMents = () => {
  return (
    <CommentSection>
      {commentsData.map((comment) => (
        <Comment key={comment.id}>
          <ProfileImage src={comment.profileImg} alt={comment.user} />
          <CommentContent>
            <UserHeader>
              <UserInfo>
                <Username>{comment.user}</Username>
                {comment.verified && <VerifiedIcon>✔</VerifiedIcon>}
              </UserInfo>
              <Time>{comment.time}</Time>
            </UserHeader>
            <CommentText>{comment.comment}</CommentText>
            {comment.nested && (
              <NestedComment>
                <NestedUser>@{comment.nested.user}</NestedUser> {comment.nested.comment}
              </NestedComment>
            )}
            <Actions>
              <ActionIcon>
                <FaComment />
                {comment.replies}
              </ActionIcon>
              <ActionIcon>
                <FaRetweet />
              </ActionIcon>
              <ActionIcon>
                <FaHeart />
                {comment.likes}
              </ActionIcon>
            </Actions>
          </CommentContent>
        </Comment>
      ))}
    </CommentSection>
  );
};

export default ComMents;
