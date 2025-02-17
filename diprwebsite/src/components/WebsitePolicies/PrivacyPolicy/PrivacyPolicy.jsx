import React from "react";
import { Title, Content, Wrapper } from "./PrivacyPolicy.styles";

const PrivacyPolicy = () => {
  return (
    <Wrapper>
      <Title>Privacy Policy</Title>
      <Content>
        <p>
          This privacy policy explains how we collect, use, and protect your
          personal data.
        </p>
        <p>
          We are committed to ensuring your privacy is protected. We encourage
          you to read through the entire policy.
        </p>
      </Content>
    </Wrapper>
  );
};

export default PrivacyPolicy;
