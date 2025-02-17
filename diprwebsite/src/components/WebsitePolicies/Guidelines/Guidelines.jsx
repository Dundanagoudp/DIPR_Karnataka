import React from "react";
import { Title, Content, Wrapper } from "./Guidelines.styles";

const Guidelines = () => {
  return (
    <Wrapper>
      <Title>Guidelines</Title>
      <Content>
        <p>
          This is the guidelines page where we outline the rules and best
          practices for using our website.
        </p>
        <p>
          Please read through these carefully to ensure compliance with our
          terms.
        </p>
      </Content>
    </Wrapper>
  );
};

export default Guidelines;
