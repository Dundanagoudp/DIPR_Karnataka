import React from "react";
import styled, { keyframes } from "styled-components";
import { Title, Content, Wrapper } from "./Help.styles";

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
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalContent>
          <ModalTitle>Help</ModalTitle>
          <ModalText>
            <p>
              The information available as an attachment is in Portable Document
              Format (PDF). Though the website is tested in various environments
              and browsers but to view the information properly, the browser
              needs to have the required plug-ins or software. For example, the
              Adobe Acrobat Reader is required to see all the pdfs. In case the
              system does not have requisite software, it may be downloaded from
              internet. The table given below depicts the required plug-ins
              needed to view the information in various file formats. Required
              Plug-ins / Browsers
            </p>
            <HelpTable>
              <TableCaption>
                Help of Various File Formats :
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHeaderCell>
                    Document Type
                  </TableHeaderCell>
                  <TableHeaderCell>
                    Download
                  </TableHeaderCell>
                </TableRow>
              </TableHeader>
              <tbody>
                <tr>
                  <TableCell>
                    PDF content
                  </TableCell>
                  <TableCell>
                    <a href="#" target="_blank">
                      Adobe Acrobat Reader
                    </a>{" "}
                    (External website that opens in a new window)
                  </TableCell>
                </tr>

                <tr>
                  <TableCell>
                    Word files
                  </TableCell>
                  <TableCell>
                    <a href="#" target="_blank">
                      Word Viewer (in any version till 2003)
                    </a>{" "}
                    - External website that opens in a new window
                    <br />
                    <a href="#" target="_blank">
                      Microsoft Office Compatibility Pack for Word (for 2007
                      version)
                    </a>{" "}
                    - External website that opens in a new window
                  </TableCell>
                </tr>

                <tr>
                  <TableCell>
                    Excel files
                  </TableCell>
                  <TableCell>
                    <a href="#" target="_blank">
                      Excel Viewer 2003 (in any version till 2003)
                    </a>{" "}
                    - External website that opens in a new window
                    <br />
                    <a href="#" target="_blank">
                      Microsoft Office Compatibility Pack for Excel (for 2007
                      version)
                    </a>{" "}
                    - External website that opens in a new window
                  </TableCell>
                </tr>

                <tr>
                  <TableCell>
                    PowerPoint presentations
                  </TableCell>
                  <TableCell>
                    <a href="#" target="_blank">
                      PowerPoint Viewer 2003 (in any version till 2003)
                    </a>{" "}
                    - External website that opens in a new window
                    <br />
                    <a href="#" target="_blank">
                      Microsoft Office Compatibility Pack for PowerPoint (for
                      2007 version)
                    </a>{" "}
                    - External website that opens in a new window
                  </TableCell>
                </tr>

                <tr>
                  <TableCell>
                    Flash content
                  </TableCell>
                  <TableCell>
                    <a href="#" target="_blank">
                      Adobe Flash Player
                    </a>{" "}
                    (External website that opens in a new window)
                  </TableCell>
                </tr>

                <tr>
                  <TableCell>
                    Audio Files
                  </TableCell>
                  <TableCell>
                    <a href="#" target="_blank">
                      Windows Media Player
                    </a>{" "}
                    (External website that opens in a new window)
                  </TableCell>
                </tr>
              </tbody>
            </HelpTable>
          </ModalText>
          <CloseButton onClick={onClose}>Close</CloseButton>
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
};
export default Help;
