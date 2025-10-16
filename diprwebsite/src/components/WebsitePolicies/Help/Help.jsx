import React from "react";
import { Title, Content, Wrapper } from "./Help.styles";

const Help = ({ onClose }) => {
  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <Wrapper
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <Title
            style={{
              fontSize: "28px",
              fontWeight: "600",
              marginBottom: "20px",
            }}
          >
            Help
          </Title>
          <Content
            style={{
              fontSize: "16px",
              lineHeight: "1.6",
              color: "#444",
              textAlign: "left",
              maxHeight: "700px",
              overflowY: "auto",
              paddingRight: "10px",
              marginBottom: "10px"
            }}
          >
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
            <table style={{width: "100%", borderCollapse: "collapse", fontSize: "15px", textAlign: "left"}}>
              <caption style={{fontWeight: "bold", marginBottom: "10px", textAlign: "left"}}>
                Help of Various File Formats :
              </caption>
              <thead>
                <tr style={{backgroundColor: "#f2f2f2"}}>
                  <th style={{border: "1px solid #ccc", padding: "8px"}}>
                    Document Type
                  </th>
                  <th style={{border: "1px solid #ccc", padding: "8px"}}>
                    Download
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{border: "1px solid #ccc", padding: "8px"}}>
                    PDF content
                  </td>
                  <td style={{border: "1px solid #ccc", padding: "8px"}}>
                
                    <a href="#" target="_blank">
                      Adobe Acrobat Reader
                    </a>{" "}
                    (External website that opens in a new window)
                  </td>
                </tr>

                <tr>
                  <td style={{border: "1px solid #ccc", padding: "8px"}}>
                    Word files
                  </td>
                  <td style={{border: "1px solid #ccc", padding: "8px"}}>
                
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
                  </td>
                </tr>

                <tr>
                    <td style={{border: "1px solid #ccc", padding: "8px"}}>
                    Excel files
                  </td>
                  <td style={{border: "1px solid #ccc", padding: "8px"}}>
              
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
                  </td>
                </tr>

                <tr>
                  <td style={{border: "1px solid #ccc", padding: "8px"}}>
                    PowerPoint presentations
                  </td>
                  <td style={{border: "1px solid #ccc", padding: "8px"}}>
                
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
                  </td>
                </tr>

                <tr>
                  <td style={{border: "1px solid #ccc", padding: "8px"}}>
                    Flash content
                  </td>
                  <td style={{border: "1px solid #ccc", padding: "8px"}}>
             
                    <a href="#" target="_blank">
                      Adobe Flash Player
                    </a>{" "}
                    (External website that opens in a new window)
                  </td>
                </tr>

                <tr>
                  <td style={{border: "1px solid #ccc", padding: "8px"}}>
                    Audio Files
                  </td>
                  <td style={{border: "1px solid #ccc", padding: "8px"}}>
         
                    <a href="#" target="_blank">
                      Windows Media Player
                    </a>{" "}
                    (External website that opens in a new window)
                  </td>
                </tr>
              </tbody>
            </table>
          </Content>
        </Wrapper>
        <button style={closeButtonStyle} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};
// Inline Styles (no CSS file or Tailwind)
const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalStyle = {
  background: "#fff",
  borderRadius: "10px",
  padding: "20px",
  width: "90%",
  maxWidth: "700px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
  position: "relative",
};

const closeButtonStyle = {
  marginTop: "20px",
  padding: "12px 24px",
  backgroundColor: "#333",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
};

export default Help;
