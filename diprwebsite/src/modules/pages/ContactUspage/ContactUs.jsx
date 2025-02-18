import React, { useEffect, useState } from "react";
import ContactForm from "../../components/contactpagecom/contactfroms/ContactForm";
import Loader from "../../../components/loder/Loder"; // Import the Loader component

const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(true); 
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <ContactForm />
    </div>
  );
};

export default ContactUs;