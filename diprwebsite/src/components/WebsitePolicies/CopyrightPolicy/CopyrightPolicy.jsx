// 
import React from "react";
import { Title, Content, Wrapper } from "./CopyrightPolicy.styles";

const CopyrightPolicy = ({ onClose }) => {
  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <Wrapper
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Title
            style={{
              fontSize: "20px",
              fontWeight: "600",
              marginBottom: "15px",
              textAlign: "left",
            }}
          >
            Copyright Policy
          </Title>
          <Content
            style={{
              fontSize: "14px",
              lineHeight: "1.6",
              color: "#444",
              textAlign: "left",
            }}
          >
            <p>
              Material featured on this site may be reproduced free of charge in
              any format or media without requiring specific permission. This is
              subject to the material being reproduced accurately and not being
              used in a derogatory manner or in a misleading context. Where the
              material is being published or issued to others, the source must be
              prominently acknowledged. However, the permission to reproduce this
              material does not extend to any material on this site, which is
              explicitly identified as being the copyright of a third party.
              Authorisation to reproduce such material must be obtained from the
              copyright holders concerned.
            </p>
          </Content>
          <button style={{...closeButtonStyle , alignSelf: "flex-end"}} onClick={onClose}>
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

export default CopyrightPolicy;
