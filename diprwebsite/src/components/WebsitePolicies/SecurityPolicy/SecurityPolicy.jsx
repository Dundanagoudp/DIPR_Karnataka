import React from "react";
import styled, { keyframes } from "styled-components";
import { Title, Content, Wrapper } from "./SecurityPolicy.styles";

// Animation keyframes
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease-out;
  cursor: pointer;
`;

const ModalContainer = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  width: 90%;
  max-width: 700px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  position: relative;
  animation: ${scaleIn} 0.3s ease-out;
  cursor: default;
  pointer-events: auto;

  @media (min-width: 768px) {
    padding: 32px;
  }
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`;

const ModalTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #333;
  text-align: left;

  @media (min-width: 768px) {
    font-size: 22px;
  }
`;

const ModalText = styled.div`
  font-size: 14px;
  line-height: 1.6;
  color: #444;
  text-align: left;
  margin-bottom: 20px;
`;

const CloseButton = styled.button`
  align-self: flex-end;
  margin-top: 20px;
  padding: 12px 24px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background-color: #555;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 2px solid #007bff;
    outline-offset: 2px;
  }
`;

const SecurityPolicy = ({ onClose }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalContent>
          <ModalTitle>Security Policy</ModalTitle>
          <ModalText>
            <p>
              For site security purposes and to ensure that this service remains available to all users, this Government computer system employs commercial software programs to monitor network traffic to identify unauthorized attempts to upload or change information, or otherwise cause damage.
            </p>
            <p>
              Except for authorized law enforcement investigations, no other attempts are made to identify individual users or their usage habits. Raw data logs are used for no other purposes and are scheduled for regular deletion.
            </p>
            <p>
              Unauthorized attempts to upload information or change information on this service are strictly prohibited and may be punishable under the Indian IT Act (2000).
            </p>
          </ModalText>
          <CloseButton onClick={onClose}>Close</CloseButton>
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default SecurityPolicy;
