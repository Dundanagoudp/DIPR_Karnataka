import React from "react";
import { Title, Content, Wrapper } from "./SecurityPolicy.styles";

const SecurityPolicy = ({ onClose }) => {
  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
    <Wrapper style={{display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      padding: "20px"}}>
      <Title style={{ fontSize: "28px", fontWeight: "600", marginBottom: "20px" }}>Security Policy</Title>
      <Content style={{ fontSize: "16px", lineHeight: "1.6", color: "#444", textAlign: "left" }}>
        <p>
         For site security purposes and to ensure that this service remains available to all users, this Government computer system employs commercial software programs to monitor network traffic to identify unauthorized attempts to upload or change information, or otherwise cause damage.
        </p>
        <p>
         Except for authorized law enforcement investigations, no other attempts are made to identify individual users or their usage habits. Raw data logs are used for no other purposes and are scheduled for regular deletion.
        </p>
        <p>
        Unauthorized attempts to upload information or change information on this service are strictly prohibited and may be punishable under the Indian IT Act (2000).
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


export default SecurityPolicy;
