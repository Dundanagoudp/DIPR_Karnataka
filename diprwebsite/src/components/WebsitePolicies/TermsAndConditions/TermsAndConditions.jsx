import React from "react";
import { Title, Content, Wrapper } from "./TermsAndConditions.styles";

const TermsAndConditions = () => {
  return (
    <Wrapper>
      <Title>Terms & Conditions</Title>
      <Content>
        <p>
          This page outlines the terms and conditions for using our services.
          By using our website, you agree to the following terms:
        </p>
        <p>
          Additional information on subscription plans, usage policies, and
          termination procedures are included.
        </p>
      </Content>
    </Wrapper>
  );
};

export default TermsAndConditions;
