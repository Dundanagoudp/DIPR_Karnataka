import React from "react";
import { Title, Content,Wrapper } from "./HyperlinkingPolicy.styles";

const HyperlinkingPolicy = ({ onClose }) => {
  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
    <Wrapper style={{display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      padding: "20px"}}>
      <Title style={{ fontSize: "28px", fontWeight: "600", marginBottom: "20px" }}>Hyperlinking Policy</Title>
      <Content style={{ fontSize: "16px", lineHeight: "1.6", color: "#444", textAlign: "left" }}>
        <p>
          TWe do not object to you linking directly to the information that is hosted on our site and no prior permission is required for the same. However, we would like you to inform us about any links provided to our site so that you can be informed of any changes or updations therein. Also, we do not permit our pages to be loaded into frames on your site. Our Department’s pages must load into a newly opened browser window of the user.
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
export default HyperlinkingPolicy;
