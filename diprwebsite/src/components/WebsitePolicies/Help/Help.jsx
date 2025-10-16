import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { Title, Content, Wrapper } from "./Help.styles";
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
  max-height: 700px;
  overflow-y: auto;
  padding-right: 10px;
`;

const HelpTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 15px;
  text-align: left;
  margin-top: 16px;
`;

const TableCaption = styled.caption`
  font-weight: bold;
  margin-bottom: 10px;
  text-align: left;
`;

const TableHeader = styled.thead``;

const TableRow = styled.tr``;

const TableHeaderCell = styled.th`
  border: 1px solid #ccc;
  padding: 8px;
  background-color: #f2f2f2;
`;

const TableCell = styled.td`
  border: 1px solid #ccc;
  padding: 8px;
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

const Help = ({ onClose }) => {
  const { language } = useContext(LanguageContext);

  // Translation variables
  let modalTitle = "";
  let closeButtonText = "";
  let mainContent = "";
  let tableCaption = "";
  let documentTypeHeader = "";
  let downloadHeader = "";
  let tableData = [];

  if (language === "English") {
    modalTitle = "Help";
    closeButtonText = "Close";
    mainContent = "The information available as an attachment is in Portable Document Format (PDF). Though the website is tested in various environments and browsers but to view the information properly, the browser needs to have the required plug-ins or software. For example, the Adobe Acrobat Reader is required to see all the pdfs. In case the system does not have requisite software, it may be downloaded from internet. The table given below depicts the required plug-ins needed to view the information in various file formats. Required Plug-ins / Browsers";
    tableCaption = "Help of Various File Formats :";
    documentTypeHeader = "Document Type";
    downloadHeader = "Download";
    tableData = [
      { documentType: "PDF content", download: "Adobe Acrobat Reader (External website that opens in a new window)" },
      { documentType: "Word files", download: "Word Viewer (in any version till 2003) - External website that opens in a new window<br />Microsoft Office Compatibility Pack for Word (for 2007 version) - External website that opens in a new window" },
      { documentType: "Excel files", download: "Excel Viewer 2003 (in any version till 2003) - External website that opens in a new window<br />Microsoft Office Compatibility Pack for Excel (for 2007 version) - External website that opens in a new window" },
      { documentType: "PowerPoint presentations", download: "PowerPoint Viewer 2003 (in any version till 2003) - External website that opens in a new window<br />Microsoft Office Compatibility Pack for PowerPoint (for 2007 version) - External website that opens in a new window" },
      { documentType: "Flash content", download: "Adobe Flash Player (External website that opens in a new window)" },
      { documentType: "Audio Files", download: "Windows Media Player (External website that opens in a new window)" }
    ];
  } else if (language === "Hindi") {
    modalTitle = "मदद";
    closeButtonText = "बंद करें";
    mainContent = "अनुलग्नक के रूप में उपलब्ध जानकारी पोर्टेबल डॉक्यूमेंट फॉर्मेट (PDF) में है। हालांकि वेबसाइट को विभिन्न वातावरणों और ब्राउज़रों में परीक्षण किया गया है लेकिन जानकारी को ठीक से देखने के लिए, ब्राउज़र में आवश्यक प्लग-इन या सॉफ्टवेयर होना चाहिए। उदाहरण के लिए, सभी PDF देखने के लिए Adobe Acrobat Reader की आवश्यकता है। यदि सिस्टम में आवश्यक सॉफ्टवेयर नहीं है, तो इसे इंटरनेट से डाउनलोड किया जा सकता है। नीचे दी गई तालिका विभिन्न फ़ाइल स्वरूपों में जानकारी देखने के लिए आवश्यक प्लग-इन्स को दर्शाती है। आवश्यक प्लग-इन्स / ब्राउज़र";
    tableCaption = "विभिन्न फ़ाइल स्वरूपों की मदद :";
    documentTypeHeader = "दस्तावेज़ प्रकार";
    downloadHeader = "डाउनलोड";
    tableData = [
      { documentType: "PDF सामग्री", download: "Adobe Acrobat Reader (बाहरी वेबसाइट जो नए विंडो में खुलती है)" },
      { documentType: "वर्ड फ़ाइलें", download: "वर्ड व्यूअर (2003 तक किसी भी संस्करण में) - बाहरी वेबसाइट जो नए विंडो में खुलती है<br />वर्ड के लिए Microsoft Office Compatibility Pack (2007 संस्करण के लिए) - बाहरी वेबसाइट जो नए विंडो में खुलती है" },
      { documentType: "एक्सेल फ़ाइलें", download: "एक्सेल व्यूअर 2003 (2003 तक किसी भी संस्करण में) - बाहरी वेबसाइट जो नए विंडो में खुलती है<br />एक्सेल के लिए Microsoft Office Compatibility Pack (2007 संस्करण के लिए) - बाहरी वेबसाइट जो नए विंडो में खुलती है" },
      { documentType: "पावरपॉइंट प्रस्तुतियाँ", download: "पावरपॉइंट व्यूअर 2003 (2003 तक किसी भी संस्करण में) - बाहरी वेबसाइट जो नए विंडो में खुलती है<br />पावरपॉइंट के लिए Microsoft Office Compatibility Pack (2007 संस्करण के लिए) - बाहरी वेबसाइट जो नए विंडो में खुलती है" },
      { documentType: "फ्लैश सामग्री", download: "Adobe Flash Player (बाहरी वेबसाइट जो नए विंडो में खुलती है)" },
      { documentType: "ऑडियो फ़ाइलें", download: "Windows Media Player (बाहरी वेबसाइट जो नए विंडो में खुलती है)" }
    ];
  } else if (language === "Kannada") {
    modalTitle = "ಸಹಾಯ";
    closeButtonText = "ಮುಚ್ಚಿ";
    mainContent = "ಲಗತ್ತವಾಗಿ ಲಭ್ಯವಿರುವ ಮಾಹಿತಿಯು ಪೋರ್ಟೆಬಲ್ ಡಾಕ್ಯುಮೆಂಟ್ ಫಾರ್ಮ್ಯಾಟ್ (PDF) ನಲ್ಲಿದೆ. ವೆಬ್‌ಸೈಟ್ ಅನ್ನು ವಿವಿಧ ಪರಿಸರಗಳು ಮತ್ತು ಬ್ರೌಸರ್‌ಗಳಲ್ಲಿ ಪರೀಕ್ಷಿಸಲಾಗಿದ್ದರೂ ಮಾಹಿತಿಯನ್ನು ಸರಿಯಾಗಿ ನೋಡಲು, ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಅಗತ್ಯ ಪ್ಲಗ್-ಇನ್‌ಗಳು ಅಥವಾ ಸಾಫ್ಟ್‌ವೇರ್ ಇರಬೇಕು. ಉದಾಹರಣೆಗೆ, ಎಲ್ಲಾ PDF ಗಳನ್ನು ನೋಡಲು Adobe Acrobat Reader ಅಗತ್ಯವಿದೆ. ಸಿಸ್ಟಮ್‌ನಲ್ಲಿ ಅಗತ್ಯ ಸಾಫ್ಟ್‌ವೇರ್ ಇಲ್ಲದಿದ್ದರೆ, ಅದನ್ನು ಇಂಟರ್ನೆಟ್‌ನಿಂದ ಡೌನ್‌ಲೋಡ್ ಮಾಡಬಹುದು. ಕೆಳಗಿನ ಕೋಷ್ಟಕವು ವಿವಿಧ ಫೈಲ್ ಸ್ವರೂಪಗಳಲ್ಲಿ ಮಾಹಿತಿಯನ್ನು ನೋಡಲು ಅಗತ್ಯವಿರುವ ಪ್ಲಗ್-ಇನ್‌ಗಳನ್ನು ತೋರಿಸುತ್ತದೆ. ಅಗತ್ಯ ಪ್ಲಗ್-ಇನ್‌ಗಳು / ಬ್ರೌಸರ್‌ಗಳು";
    tableCaption = "ವಿವಿಧ ಫೈಲ್ ಸ್ವರೂಪಗಳ ಸಹಾಯ :";
    documentTypeHeader = "ದಾಖಲೆಯ ಪ್ರಕಾರ";
    downloadHeader = "ಡೌನ್‌ಲೋಡ್";
    tableData = [
      { documentType: "PDF ವಿಷಯ", download: "Adobe Acrobat Reader (ಹೊಸ ವಿಂಡೋದಲ್ಲಿ ತೆರೆಯುವ ಬಾಹ್ಯ ವೆಬ್‌ಸೈಟ್)" },
      { documentType: "ವರ್ಡ್ ಫೈಲ್‌ಗಳು", download: "ವರ್ಡ್ ವ್ಯೂಯರ್ (2003 ರವರೆಗಿನ ಯಾವುದೇ ಆವೃತ್ತಿಯಲ್ಲಿ) - ಹೊಸ ವಿಂಡೋದಲ್ಲಿ ತೆರೆಯುವ ಬಾಹ್ಯ ವೆಬ್‌ಸೈಟ್<br />ವರ್ಡ್‌ಗಾಗಿ Microsoft Office Compatibility Pack (2007 ಆವೃತ್ತಿಗಾಗಿ) - ಹೊಸ ವಿಂಡೋದಲ್ಲಿ ತೆರೆಯುವ ಬಾಹ್ಯ ವೆಬ್‌ಸೈಟ್" },
      { documentType: "ಎಕ್ಸೆಲ್ ಫೈಲ್‌ಗಳು", download: "ಎಕ್ಸೆಲ್ ವ್ಯೂಯರ್ 2003 (2003 ರವರೆಗಿನ ಯಾವುದೇ ಆವೃತ್ತಿಯಲ್ಲಿ) - ಹೊಸ ವಿಂಡೋದಲ್ಲಿ ತೆರೆಯುವ ಬಾಹ್ಯ ವೆಬ್‌ಸೈಟ್<br />ಎಕ್ಸೆಲ್‌ಗಾಗಿ Microsoft Office Compatibility Pack (2007 ಆವೃತ್ತಿಗಾಗಿ) - ಹೊಸ ವಿಂಡೋದಲ್ಲಿ ತೆರೆಯುವ ಬಾಹ್ಯ ವೆಬ್‌ಸೈಟ್" },
      { documentType: "ಪವರ್‌ಪಾಯಿಂಟ್ ಪ್ರಸ್ತುತಿಗಳು", download: "ಪವರ್‌ಪಾಯಿಂಟ್ ವ್ಯೂಯರ್ 2003 (2003 ರವರೆಗಿನ ಯಾವುದೇ ಆವೃತ್ತಿಯಲ್ಲಿ) - ಹೊಸ ವಿಂಡೋದಲ್ಲಿ ತೆರೆಯುವ ಬಾಹ್ಯ ವೆಬ್‌ಸೈಟ್<br />ಪವರ್‌ಪಾಯಿಂಟ್‌ಗಾಗಿ Microsoft Office Compatibility Pack (2007 ಆವೃತ್ತಿಗಾಗಿ) - ಹೊಸ ವಿಂಡೋದಲ್ಲಿ ತೆರೆಯುವ ಬಾಹ್ಯ ವೆಬ್‌ಸೈಟ್" },
      { documentType: "ಫ್ಲ್ಯಾಶ್ ವಿಷಯ", download: "Adobe Flash Player (ಹೊಸ ವಿಂಡೋದಲ್ಲಿ ತೆರೆಯುವ ಬಾಹ್ಯ ವೆಬ್‌ಸೈಟ್)" },
      { documentType: "ಆಡಿಯೋ ಫೈಲ್‌ಗಳು", download: "Windows Media Player (ಹೊಸ ವಿಂಡೋದಲ್ಲಿ ತೆರೆಯುವ ಬಾಹ್ಯ ವೆಬ್‌ಸೈಟ್)" }
    ];
  }

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalContent>
          <ModalTitle>{modalTitle}</ModalTitle>
          <ModalText>
            <p>
              {mainContent}
            </p>
            <HelpTable>
              <TableCaption>
                {tableCaption}
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHeaderCell>
                    {documentTypeHeader}
                  </TableHeaderCell>
                  <TableHeaderCell>
                    {downloadHeader}
                  </TableHeaderCell>
                </TableRow>
              </TableHeader>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index}>
                    <TableCell>
                      {row.documentType}
                    </TableCell>
                    <TableCell dangerouslySetInnerHTML={{ __html: row.download }}>
                    </TableCell>
                  </tr>
                ))}
              </tbody>
            </HelpTable>
          </ModalText>
          <CloseButton onClick={onClose}>{closeButtonText}</CloseButton>
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
};
export default Help;
