import React from "react";
import { Title, Wrapper,
  GuidelineCard,
  GuidelineTitle,
  GuidelineImage,
  GuidelineActions,
  Button,  } from "./Guidelines.styles";

const Guidelines = () => {
  const cards = [
    {
      title: "G.I.G.W Guidelines",
      img: "/guidelines/GIGW.jpg",
      download: "/guidelines/guidelinepdf/https___karnataka.gov.in_frontend_opt1_pdfs_gigw-guidelines-pages.pdf",
      view: "/guidelines/guidelinepdf/https___karnataka.gov.in_frontend_opt1_pdfs_gigw-guidelines-pages.pdf",
      downloadFileName: "GIGW-Guidelines.pdf"
    },
    {
      title: "Kannada Development Authority Recommendations",
      img: "/guidelines/kannada_abhivrudhi_pradikar.jpg",
      download: "/guidelines/guidelinepdf/https___karnataka.gov.in_frontend_opt1_pdfs_ಕರ್ನಾಟಕ ಸರ್ಕಾರದ ಜಾಲತಾಣದಲ್ಲಿ ಕನ್ನಡ ಬಳಕೆ.pdf",
      view: "/guidelines/guidelinepdf/https___karnataka.gov.in_frontend_opt1_pdfs_ಕರ್ನಾಟಕ ಸರ್ಕಾರದ ಜಾಲತಾಣದಲ್ಲಿ ಕನ್ನಡ ಬಳಕೆ.pdf",
      downloadFileName: "Kannada-Development-Authority-Recommendations.pdf"
    },
    {
      title: "Accessibility Guidelines",
      img: "/guidelines/accesibility1.jpg",
      download: "/guidelines/guidelinepdf/https___karnataka.gov.in_frontend_opt1_pdfs_accesibility_guidelines-converted.pdf",
      view: "/guidelines/guidelinepdf/https___karnataka.gov.in_frontend_opt1_pdfs_accesibility_guidelines-converted.pdf",
      downloadFileName: "Accessibility-Guidelines.pdf"
    },
  ];
  return (
    <Wrapper style={{display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      padding: "40px 20px"}}>
      <Title style={{ fontSize: "28px", fontWeight: "600", marginBottom: "20px" }}>Guidelines</Title>
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        flexWrap: "wrap",
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        {cards.map((card, idx) => (
          <GuidelineCard key={idx}>
            <GuidelineTitle>{card.title}</GuidelineTitle>
            <GuidelineImage src={card.img} alt={card.title} />
            <GuidelineActions>
              <Button
                href={card.download}
                download={card.downloadFileName}
                target="_blank"
              >
                Download
              </Button>
              <Button
                href={card.view}
                target="_blank"
              >
                View
              </Button>
            </GuidelineActions>
          </GuidelineCard>
        ))}
      </div>
    </Wrapper>
  );
};
export default Guidelines;