import React, { useState } from "react";
import {
  ContactContainer,
  ContactTitle,
  ContactDetails,
  ContactInfo,
  ContactLabel,
  ContactInput,
  ContactButton,
} from "../contactfroms/ContactForm.styles";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    contactNo: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await contact(formData);
      if (!response.ok) {
        throw new Error("Failed to submit form");
      }
      alert("Form submitted successfully!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <ContactContainer>
      <ContactTitle>Contact Us</ContactTitle>
      <form onSubmit={handleSubmit}>
        <ContactDetails>
          <ContactInfo>
            <ContactLabel>Contact No</ContactLabel>
            <ContactInput
              type="text"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
              required
            />
          </ContactInfo>
          <ContactInfo>
            <ContactLabel>Email</ContactLabel>
            <ContactInput
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </ContactInfo>
          <ContactInfo>
            <ContactLabel>Address</ContactLabel>
            <ContactInput
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </ContactInfo>
        </ContactDetails>
        <ContactButton type="submit">Submit</ContactButton>
      </form>
    </ContactContainer>
  );
};

export default ContactForm;
