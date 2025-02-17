import React from 'react';
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { ContactFormContainer, ContactItem, ContactIcon } from './ContactForm.styles';
 
const ContactForm = () => {
  return (
    <ContactFormContainer>
      <h2>Get In Touch With Us</h2>
      <p>
        For any inquiries or information, please reach out to us at the following address:
      </p>
      <div className="contact-info">
        <ContactItem>
          <ContactIcon as={FaMapMarkerAlt} />
          <div>
            <h4>Directorate of Information and Public Relations</h4>
            <p> Bhawan, Bagalkot, Karnataka, 587102</p>
          </div>
        </ContactItem>
        <ContactItem>
          <ContactIcon as={FaEnvelope} />
          <div>
            <h4>Mail</h4>
            <p>diprarunx@gmail.com</p>
          </div>
        </ContactItem>
        <ContactItem>
          <ContactIcon as={FaEnvelope} />
          <div>
            <h4>Mail</h4>
            <p>dipr_arun@rediffmail.com</p>
          </div>
        </ContactItem>
      </div>
    </ContactFormContainer>
  );
};
 
export default ContactForm;