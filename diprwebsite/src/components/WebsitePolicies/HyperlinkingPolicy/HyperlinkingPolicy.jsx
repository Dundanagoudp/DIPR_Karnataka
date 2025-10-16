import React,{useContext} from "react";
import styled, { keyframes } from "styled-components";
import { LanguageContext } from "../../../context/LanguageContext";
import { Title, Content, Wrapper } from "./HyperlinkingPolicy.styles";

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

const HyperlinkingPolicy = ({ onClose }) => {
  const { language } = useContext(LanguageContext);
  console.log("language", language);
  let hyperlinkingText = "";
  let modalTitle = "";
  let closeButtonText = "";

  if (language === "English") {
    hyperlinkingText = `
     We do not object to you linking directly to the information that is hosted on our site and no prior permission is required for the same. However, we would like you to inform us about any links provided to our site so that you can be informed of any changes or updations therein. Also, we do not permit our pages to be loaded into frames on your site. Our Department's pages must load into a newly opened browser window of the user.
    `;
    modalTitle = "Hyperlinking Policy";
    closeButtonText = "Close";
  } else if (language === "Hindi") {
    hyperlinkingText = `
    हम आपको हमारी साइट पर दी गई जानकारी से सीधे जोड़ने पर आपत्ति नहीं करते हैं और इसके लिए किसी पूर्व अनुमति की आवश्यकता नहीं है। हालाँकि, हम चाहेंगे कि आप हमें हमारी साइट पर प्रदान किए गए किसी भी लिंक के बारे में सूचित करें ताकि आपको उसमें किसी भी बदलाव या अद्यतन के बारे में सूचित किया जा सके। इसके अलावा, हम अपने पृष्ठों को आपकी साइट पर फ्रेम में लोड करने की अनुमति नहीं देते हैं। हमारे विभाग के पृष्ठों को उपयोगकर्ता की एक नई खोली गई ब्राउज़र विंडो में लोड होना चाहिए।
    `;
    modalTitle = "हाइपरलिंकिंग नीति";
    closeButtonText = "बंद करें";
  } else if (language === "Kannada") {
    hyperlinkingText = `
    ನಮ್ಮ ಸೈಟ್ನಲ್ಲಿ ಹೋಸ್ಟ್ ಮಾಡಲಾದ ಮಾಹಿತಿಗೆ ನೀವು ನೇರವಾಗಿ ಲಿಂಕ್ ಮಾಡುವುದನ್ನು ನಾವು ಆಕ್ಷೇಪಿಸುವುದಿಲ್ಲ ಮತ್ತು ಅದಕ್ಕೆ ಯಾವುದೇ ಪೂರ್ವಾನುಮತಿ ಅಗತ್ಯವಿಲ್ಲ. ಆದಾಗ್ಯೂ, ನಮ್ಮ ಸೈಟ್ಗೆ ಒದಗಿಸಲಾದ ಯಾವುದೇ ಲಿಂಕ್ಗಳ ಬಗ್ಗೆ ನೀವು ನಮಗೆ ತಿಳಿಸಬೇಕೆಂದು ನಾವು ಬಯಸುತ್ತೇವೆ, ಇದರಿಂದಾಗಿ ಅದರಲ್ಲಿ ಯಾವುದೇ ಬದಲಾವಣೆಗಳು ಅಥವಾ ನವೀಕರಣಗಳ ಬಗ್ಗೆ ನಿಮಗೆ ತಿಳಿಸಬಹುದು. ಅಲ್ಲದೆ, ನಮ್ಮ ಪುಟಗಳನ್ನು ನಿಮ್ಮ ಸೈಟ್ನ ಚೌಕಟ್ಟುಗಳಲ್ಲಿ ಲೋಡ್ ಮಾಡಲು ನಾವು ಅನುಮತಿಸುವುದಿಲ್ಲ. ನಮ್ಮ ಇಲಾಖೆಯ ಪುಟಗಳು ಬಳಕೆದಾರರ ಹೊಸದಾಗಿ ತೆರೆಯಲಾದ ಬ್ರೌಸರ್ ವಿಂಡೋಗೆ ಲೋಡ್ ಆಗಬೇಕು.
    `;
    modalTitle = "ಹೈಪರ್‌ಲಿಂಕಿಂಗ್ ನೀತಿ";
    closeButtonText = "ಮುಚ್ಚಿ";
  }
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalContent>
          <ModalTitle>{modalTitle}</ModalTitle>
          <ModalText>
            <p>
              {hyperlinkingText}
            </p>
          </ModalText>
          <CloseButton onClick={onClose}>{closeButtonText}</CloseButton>
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
};
export default HyperlinkingPolicy;
