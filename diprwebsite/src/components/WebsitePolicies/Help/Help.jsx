import React from "react";
import { Title, Content, Wrapper } from "./Help.styles";

const Help = () => {
  return (
    <Wrapper>
      <Title>Help</Title>
      <Content>
        <p>
          This is the help page where you can find answers to frequently asked
          questions.
        </p>
        <p>
          If you need further assistance, feel free to reach out to our support
          team.
        </p>
      </Content>
    </Wrapper>
  );
};

export default Help;
