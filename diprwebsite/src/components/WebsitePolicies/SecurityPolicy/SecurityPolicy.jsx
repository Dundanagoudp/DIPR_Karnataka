import React from "react";
import { Title, Content, Wrapper } from "./SecurityPolicy.styles";

const SecurityPolicy = () => {
  return (
    <Wrapper>
      <Title>Security Policy</Title>
      <Content>
        <p>
          This is the security policy page where we provide information about
          the security measures in place to protect user data.
        </p>
        <p>
          Further details on encryption, data storage, and protection against
          cyber threats can be found here.
        </p>
      </Content>
    </Wrapper>
  );
};

export default SecurityPolicy;
