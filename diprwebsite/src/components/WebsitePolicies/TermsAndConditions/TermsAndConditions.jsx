import React from "react";
import { Title, Content, Wrapper } from "./TermsAndConditions.styles";

const TermsAndConditions = ({ onClose }) => {
  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
    <Wrapper style={{display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      padding: "20px"}}>
      <Title style={{ fontSize: "28px", fontWeight: "600", marginBottom: "20px" }}>Terms & Conditions</Title>
      <Content style={{
        fontSize: "16px",
        lineHeight: "1.6",
        color: "#444",
        textAlign: "left",
        maxHeight: "400px",
        overflowY: "auto",
        paddingRight: "10px",
        marginBottom: "10px"
      }}>
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
      </Content>
      <button style={closeButtonStyle} onClick={onClose}>
        Close
      </button>
    </Wrapper>
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
export default TermsAndConditions;
