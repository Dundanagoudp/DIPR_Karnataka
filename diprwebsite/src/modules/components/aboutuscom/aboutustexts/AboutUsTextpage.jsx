import React, { useContext } from "react";
import { Container, Title, Paragraph } from "../aboutustexts/AboutUstextpage.styles";
import { FontSizeContext } from "../../../../context/FontSizeProvider";
import { LanguageContext } from "../../../../context/LanguageContext"; // Import LanguageContext

// Translation object for English, Hindi, and Kannada
const translations = {
  English: {
    title: "Lorem ipsum odor amet, consectetur adipiscing elit.",
    paragraph1:
      "Interdum faucibus integer ultrices sed mollis id. Praesent malesuada turpis sodales at litora tempor. Nostra himenaeos cubilia condimentum mauris dolor facilisi. Dictumst netus ac potenti hendrerit id netus maximus enim etiam? Erat hac nostra nunc ultricies odio natoque. Pretium sed vivamus primis placerat sit amet. Himenaeos cras eu felis phasellus a vivamus ultrices pulvinar. Maecenas tempor vitae erat diam torquent varius.",
    paragraph2:
      "Faucibus ullamcorper nullam posuere vulputate aliquet iaculis. Praesent interdum eu phasellus ante vitae ullamcorper habitant cursus cras. Nullam non neque consequat cras et fusce parturient fringilla molestie adipiscing iaculis felis efficitur torquent finibus? Curae dis ipsum imperdiet sem pretium. Nec taciti orci vel commodo consectetuer id vulputate interdum.",
    paragraph3:
      "Turpis velit efficitur magna ex ligula iaculis sed enim. Consequat id eros justo molestie lectus penatibus. Sem potenti cursus odio senectus varius curae. Potenti ullamcorper auctor nulla egestas etiam eget nullam turpis ac. Vehicula nisi urna tempor maximus est pharetra sagittis. Aptent convallis hac parturient accumsan, arcu aptent venenatis. Scelerisque ultrices et velit per nisi maecenas.",
  },
  Hindi: {
    title: "लोरम इप्सम ओडोर अमेट, कंसेक्टेटुर एडिपिसिंग एलिट।",
    paragraph1:
      "इंटरडम फॉसिबस इंटेजर अल्ट्रिसेस सेड मोलिस आईडी। प्रेसेंट मेल्सुअडा टर्पिस सोडालेस एट लिटोरा टेम्पोर। नोस्ट्रा हिमेनाओस क्यूबिलिया कंडिमेंटम मौरिस डोलोर फेसिलिसी। डिक्टम्स्ट नेटस एक पोटेंटी हेंडररिट आईडी नेटस मैक्सिमस एनिम एटियम? एरट हेक नोस्ट्रा नंक अल्ट्रिसेस ओडियो नाटोक। प्रेटियम सेड विवामस प्रिमिस प्लेसरैट सिट एमेट। हिमेनाओस क्रस यू फेलिस फासेलस ए विवामस अल्ट्रिसेस पुल्विनर। मेसेनस टेम्पोर विता एरट डायम टोरक्वेंट वेरियस।",
    paragraph2:
      "फॉसिबस उल्लामकोर्पर नुल्लम पोसुएरे वल्पुटेट अलिकेट इकुलिस। प्रेसेंट इंटरडम यू फासेलस एंटे विता उल्लामकोर्पर हेबिटेंट कर्सस क्रस। नुल्लम नॉन नेक कंसक्वेट क्रस एट फुस्के पार्टुरिएंट फ्रिंगिला मोलेस्टी एडिपिसिंग इकुलिस फेलिस एफिसिटुर टोरक्वेंट फिनिबस? कुरा डिस इप्सम इम्पेरडिएट सेम प्रेटियम। नेक टेसिटी ओर्की वेल कमोडो कंसेक्टेटुर आईडी वल्पुटेट इंटरडम।",
    paragraph3:
      "टर्पिस वेलिट एफिसिटुर मैग्ना एक्स लिगुला इकुलिस सेड एनिम। कंसक्वेट आईडी एरोस जस्टो मोलेस्टी लेक्टस पेनाटिबस। सेम पोटेंटी कर्सस ओडियो सेनेक्टस वेरियस कुरा। पोटेंटी उल्लामकोर्पर ऑक्टर नुल्ला एगेस्टस एटियम एगेट नुल्लम टर्पिस एक। वेहिकुला निसी उर्ना टेम्पोर मैक्सिमस एस्ट फेरेट्रा सगिटिस। एप्टेंट कंवलिस हेक पार्टुरिएंट एकम्सन, आर्कु एप्टेंट वेनेनेटिस। स्केलेरिस्क अल्ट्रिसेस एट वेलिट पेर निसी मेसेनस।",
  },
  Kannada: {
    title: "ಲೊರೆಮ್ ಇಪ್ಸಮ್ ಒಡೊರ್ ಅಮೆಟ್, ಕನ್ಸೆಕ್ಟೆಟುರ್ ಅಡಿಪಿಸ್ಸಿಂಗ್ ಎಲಿಟ್.",
    paragraph1:
      "ಇಂಟರ್ಡಮ್ ಫಾಸಿಬಸ್ ಇಂಟೆಜರ್ ಅಲ್ಟ್ರಿಸೆಸ್ ಸೆಡ್ ಮೊಲಿಸ್ ಐಡಿ. ಪ್ರೆಸೆಂಟ್ ಮೆಲ್ಸುಅಡಾ ಟರ್ಪಿಸ್ ಸೊಡಾಲೆಸ್ ಎಟ್ ಲಿಟೊರಾ ಟೆಂಪೊರ್. ನೊಸ್ಟ್ರಾ ಹಿಮೆನಾಓಸ್ ಕ್ಯುಬಿಲಿಯಾ ಕಂಡಿಮೆಂಟಮ್ ಮೌರಿಸ್ ಡೊಲೊರ್ ಫೆಸಿಲಿಸಿ. ಡಿಕ್ಟಮ್ಸ್ಟ್ ನೆಟಸ್ ಏಕ್ ಪೊಟೆಂಟಿ ಹೆಂಡ್ರೆರಿಟ್ ಐಡಿ ನೆಟಸ್ ಮ್ಯಾಕ್ಸಿಮಸ್ ಎನಿಮ್ ಎಟಿಯಮ್? ಎರಟ್ ಹೆಕ್ ನೊಸ್ಟ್ರಾ ನಂಕ್ ಅಲ್ಟ್ರಿಸೆಸ್ ಒಡಿಯೊ ನಾಟೊಕ್. ಪ್ರೆಟಿಯಮ್ ಸೆಡ್ ವಿವಾಮಸ್ ಪ್ರಿಮಿಸ್ ಪ್ಲೆಸರೈಟ್ ಸಿಟ್ ಎಮೆಟ್. ಹಿಮೆನಾಓಸ್ ಕ್ರಸ್ ಯು ಫೆಲಿಸ್ ಫಾಸೆಲಸ್ ಎ ವಿವಾಮಸ್ ಅಲ್ಟ್ರಿಸೆಸ್ ಪುಲ್ವಿನರ್. ಮೆಸೆನಸ್ ಟೆಂಪೊರ್ ವಿತಾ ಎರಟ್ ಡಿಯಾಮ್ ಟೊರ್ಕ್ವೆಂಟ್ ವೆರಿಯಸ್.",
    paragraph2:
      "ಫಾಸಿಬಸ್ ಉಲ್ಲಾಮ್ಕೊರ್ಪರ್ ನುಲ್ಲಮ್ ಪೊಸುಎರೆ ವಲ್ಪುಟೆಟ್ ಅಲಿಕೆಟ್ ಇಕುಲಿಸ್. ಪ್ರೆಸೆಂಟ್ ಇಂಟರ್ಡಮ್ ಯು ಫಾಸೆಲಸ್ ಎಂಟೆ ವಿತಾ ಉಲ್ಲಾಮ್ಕೊರ್ಪರ್ ಹೆಬಿಟೆಂಟ್ ಕರ್ಸಸ್ ಕ್ರಸ್. ನುಲ್ಲಮ್ ನೊನ್ ನೆಕ್ ಕನ್ಸಕ್ವೆಟ್ ಕ್ರಸ್ ಎಟ್ ಫುಸ್ಕೆ ಪಾರ್ಟುರಿಯೆಂಟ್ ಫ್ರಿಂಗಿಲಾ ಮೊಲೆಸ್ಟಿ ಅಡಿಪಿಸ್ಸಿಂಗ್ ಇಕುಲಿಸ್ ಫೆಲಿಸ್ ಎಫಿಸಿಟುರ್ ಟೊರ್ಕ್ವೆಂಟ್ ಫಿನಿಬಸ್? ಕುರಾ ಡಿಸ್ ಇಪ್ಸಮ್ ಇಂಪೆರಡಿಯೆಟ್ ಸೆಮ್ ಪ್ರೆಟಿಯಮ್. ನೆಕ್ ಟೆಸಿಟಿ ಒರ್ಕಿ ವೆಲ್ ಕಮೊಡೊ ಕನ್ಸೆಕ್ಟೆಟುರ್ ಐಡಿ ವಲ್ಪುಟೆಟ್ ಇಂಟರ್ಡಮ್.",
    paragraph3:
      "ಟರ್ಪಿಸ್ ವೆಲಿಟ್ ಎಫಿಸಿಟುರ್ ಮ್ಯಾಗ್ನಾ ಎಕ್ಸ್ ಲಿಗುಲಾ ಇಕುಲಿಸ್ ಸೆಡ್ ಎನಿಮ್. ಕನ್ಸಕ್ವೆಟ್ ಐಡಿ ಎರೊಸ್ ಜಸ್ಟೊ ಮೊಲೆಸ್ಟಿ ಲೆಕ್ಟಸ್ ಪೆನಾಟಿಬಸ್. ಸೆಮ್ ಪೊಟೆಂಟಿ ಕರ್ಸಸ್ ಒಡಿಯೊ ಸೆನೆಕ್ಟಸ್ ವೆರಿಯಸ್ ಕುರಾ. ಪೊಟೆಂಟಿ ಉಲ್ಲಾಮ್ಕೊರ್ಪರ್ ಔಕ್ಟರ್ ನುಲ್ಲಾ ಎಗೆಸ್ಟಸ್ ಎಟಿಯಮ್ ಎಗೆಟ್ ನುಲ್ಲಮ್ ಟರ್ಪಿಸ್ ಏಕ್. ವೆಹಿಕುಲಾ ನಿಸಿ ಉರ್ನಾ ಟೆಂಪೊರ್ ಮ್ಯಾಕ್ಸಿಮಸ್ ಎಸ್ಟ್ ಫೆರೆಟ್ರಾ ಸಗಿಟಿಸ್. ಆಪ್ಟೆಂಟ್ ಕನ್ವಲಿಸ್ ಹೆಕ್ ಪಾರ್ಟುರಿಯೆಂಟ್ ಅಕ್ಮ್ಸನ್, ಆರ್ಕು ಆಪ್ಟೆಂಟ್ ವೆನೆನಾಟಿಸ್. ಸ್ಕೆಲೆರಿಸ್ಕ್ ಅಲ್ಟ್ರಿಸೆಸ್ ಎಟ್ ವೆಲಿಟ್ ಪೆರ್ ನಿಸಿ ಮೆಸೆನಸ್.",
  },
};

const AboutUsText = () => {
  const { fontSize = 100 } = useContext(FontSizeContext);
  const { language } = useContext(LanguageContext); // Get the current language

  // Get translations for the current language
  const t = translations[language] || translations.English;

  return (
    <Container>
      {/* Apply fontSize only if it's explicitly set, otherwise use theme's default */}
      <Title style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
        {t.title}
      </Title>
      <Paragraph style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
        {t.paragraph1}
      </Paragraph>
      <Paragraph style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
        {t.paragraph2}
      </Paragraph>
      <Paragraph style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
        {t.paragraph3}
      </Paragraph>
    </Container>
  );
};

export default AboutUsText;