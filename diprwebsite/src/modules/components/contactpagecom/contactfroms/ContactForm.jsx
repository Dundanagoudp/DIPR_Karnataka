import React, { useContext } from 'react';
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { ContactFormContainer, ContactItem, ContactIcon } from './ContactForm.styles';
import { FontSizeContext } from '../../../../context/FontSizeProvider';
 
const ContactForm = () => {

  const { fontSize } = useContext(FontSizeContext);
  return (
    <ContactFormContainer >
      <h2 style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>Get In Touch With Us</h2>
      <p style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
        For any inquiries or information, please reach out to us at the following address:
      </p>
      <div  className="contact-info">
        <ContactItem style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
          <ContactIcon  style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined} as={FaMapMarkerAlt} />
          <div style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
            <h4>Directorate of Information and Public Relations</h4>
            <p> Bhawan, Bagalkot, Karnataka, 587102</p>
          </div>
        </ContactItem>
        <ContactItem>
          <ContactIcon  as={FaEnvelope} />
          <div>
            <h4 >Mail</h4>
            <p>diprarunx@gmail.com</p>
          </div>
        </ContactItem>
        <ContactItem>
          <ContactIcon style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined} as={FaEnvelope} />
          <div style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
            <h4>Mail</h4>
            <p>dipr_arun@rediffmail.com</p>
          </div>
        </ContactItem>
      </div>
    </ContactFormContainer>
  );
};
 
export default ContactForm;