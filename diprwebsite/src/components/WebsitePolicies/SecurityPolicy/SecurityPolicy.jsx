import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { Title, Content, Wrapper } from "./SecurityPolicy.styles";
import { LanguageContext } from "../../../context/LanguageContext";

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
  const { language } = useContext(LanguageContext);

  let securityText1 = "";
  let securityText2 = "";
  let securityText3 = "";
  let modalTitle = "";
  let closeButtonText = "";
  
  if (language === "English") {
    securityText1 = "For site security purposes and to ensure that this service remains available to all users, this Government computer system employs commercial software programs to monitor network traffic to identify unauthorized attempts to upload or change information, or otherwise cause damage.";
    securityText2 = "Except for authorized law enforcement investigations, no other attempts are made to identify individual users or their usage habits. Raw data logs are used for no other purposes and are scheduled for regular deletion.";
    securityText3 = "Unauthorized attempts to upload information or change information on this service are strictly prohibited and may be punishable under the Indian IT Act (2000).";
    modalTitle = "Security Policy";
    closeButtonText = "Close";
  } else if (language === "Hindi") {
    securityText1 = "साइट सुरक्षा उद्देश्यों के लिए और यह सुनिश्चित करने के लिए कि यह सेवा सभी उपयोगकर्ताओं के लिए उपलब्ध रहे, इस सरकारी कंप्यूटर सिस्टम में नेटवर्क ट्रैफिक की निगरानी करने के लिए व्यावसायिक सॉफ्टवेयर प्रोग्राम का उपयोग किया जाता है।";
    securityText2 = "अधिकृत कानून प्रवर्तन जांचों को छोड़कर, व्यक्तिगत उपयोगकर्ताओं या उनकी उपयोग आदतों की पहचान करने के लिए कोई अन्य प्रयास नहीं किए जाते हैं।";
    securityText3 = "इस सेवा पर जानकारी अपलोड करने या बदलने के अनधिकृत प्रयासों पर सख्त प्रतिबंध है और ये भारतीय आईटी अधिनियम (2000) के तहत दंडनीय हो सकते हैं।";
    modalTitle = "सुरक्षा नीति";
    closeButtonText = "बंद करें";
  } else if (language === "Kannada") {
    securityText1 = "ಸೈಟ್ ಭದ್ರತಾ ಉದ್ದೇಶಗಳಿಗಾಗಿ ಮತ್ತು ಈ ಸೇವೆಯು ಎಲ್ಲಾ ಬಳಕೆದಾರರಿಗೆ ಲಭ್ಯವಿರುವಂತೆ ಖಚಿತಪಡಿಸಲು, ಈ ಸರ್ಕಾರಿ ಕಂಪ್ಯೂಟರ್ ಸಿಸ್ಟಮ್ ಅನಧಿಕೃತ ಪ್ರಯತ್ನಗಳನ್ನು ಗುರುತಿಸಲು ನೆಟ್‌ವರ್ಕ್ ಟ್ರಾಫಿಕ್ ಅನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಲು ವಾಣಿಜ್ಯಿಕ ಸಾಫ್ಟ್‌ವೇರ್ ಪ್ರೋಗ್ರಾಮ್‌ಗಳನ್ನು ನಿಯೋಗಿಸುತ್ತದೆ.";
    securityText2 = "ಅಧಿಕೃತ ಕಾನೂನು ಎನ್‌ಫೋರ್ಸ್‌ಮೆಂಟ್ ತನಿಖೆಗಳನ್ನು ಹೊರತುಪಡಿಸಿ, ವೈಯಕ್ತಿಕ ಬಳಕೆದಾರರನ್ನು ಅಥವಾ ಅವರ ಬಳಕೆಯ ಅಭ್ಯಾಸಗಳನ್ನು ಗುರುತಿಸಲು ಯಾವುದೇ ಇತರ ಪ್ರಯತ್ನಗಳು ಮಾಡಲಾಗುವುದಿಲ್ಲ.";
    securityText3 = "ಈ ಸೇವೆಯಲ್ಲಿ ಮಾಹಿತಿಯನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಲು ಅಥವಾ ಬದಲಾಯಿಸಲು ಅನಧಿಕೃತ ಪ್ರಯತ್ನಗಳು ಸ್ಖಾಲವಾಗಿ ನಿಷೇಧಿಸಲಾಗಿದೆ ಮತ್ತು ಇದು ಭಾರತದ ಐಟಿ ಕಾನೂನ್ (2000) ಅಡಿಯಲ್ಲಿ ದಂಡನೀಯವಾಗಬಹುದು.";
    modalTitle = "ಭದ್ರತಾ ನೀತಿ";
    closeButtonText = "ಮುಚ್ಚಿ";
  }

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalContent>
          <ModalTitle>{modalTitle}</ModalTitle>
          <ModalText>
            <p>
              {securityText1}
            </p>
            <p>
              {securityText2}
            </p>
            <p>
              {securityText3}
            </p>
          </ModalText>
          <CloseButton onClick={onClose}>{closeButtonText}</CloseButton>
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default SecurityPolicy;
