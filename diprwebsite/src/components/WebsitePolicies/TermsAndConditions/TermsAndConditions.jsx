import React from "react";
import styled, { keyframes } from "styled-components";
import { Title, Content, Wrapper } from "./TermsAndConditions.styles";

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
  max-height: 80vh;
  overflow-y: auto;

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
  max-height: 400px;
  overflow-y: auto;
  padding-right: 10px;
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

const TermsAndConditions = ({ onClose }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalContent>
          <ModalTitle>Terms & Conditions</ModalTitle>
          <ModalText>
            <p>
              1) This website is designed, developed and maintained by Government Of Karnataka, Government of India.
            </p>

            <p>
              2) Though all efforts have been made to ensure the accuracy and currency of the content on this website,
              the same should not be construed as a statement of law or used for any legal purposes. In case of any
              ambiguity or doubts, users are advised to verify/check with the Department(s) and/or other source(s),
              and to obtain appropriate professional advice.
            </p>

            <p>
              3) Under no circumstances will this Department be liable for any expense, loss or damage including,
              without limitation, indirect or consequential loss or damage, or any expense, loss or damage whatsoever
              arising from use, or loss of use, of data, arising out of or in connection with the use of this website.
            </p>

            <p>
              4) These terms and conditions shall be governed by and construed in accordance with the Indian Laws.
              Any dispute arising under these terms and conditions shall be subject to the jurisdiction of the courts of India.
            </p>

            <p>
              5) The information posted on this website could include hypertext links or pointers to information created
              and maintained by non-Government/private organisations. Government Of Karnataka is providing these links
              and pointers solely for your information and convenience. When you select a link to an outside website,
              you are leaving the Government of Karnataka website and are subject to the privacy and security policies
              of the owners/sponsors of the outside website.
            </p>

            <p>
              6) (Name of Department) does not guarantee the availability of such linked pages at all times.
            </p>

            <p>
              7) (Name of Department) cannot authorise the use of copyrighted materials contained in linked websites.
              Users are advised to request such authorisation from the owner of the linked website.
            </p>

            <p>
              8) (Name of Department) does not guarantee that linked websites comply with Indian Government Web Guidelines.
            </p>
          </ModalText>
          <CloseButton onClick={onClose}>Close</CloseButton>
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
};
export default TermsAndConditions;
