import React, { useContext } from "react";
import { FaClock, FaUsers, FaCodeBranch } from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import {
  FooterContainer,
  FooterContent,
  LogoSection,
  Logo,
  Section,
  VisitorsSection,
  Title,
  Text,
  LinksList,
  LinkItem,
  FooterStripContainer,
  FooterStrip,
  StripText,
  FooterSection,
} from "./Footer.styles";
import logo from '../../assets/logo.png';
import { FontSizeContext } from "../../context/FontSizeProvider";

const Footer = () => {
  const { fontSize } = useContext(FontSizeContext); 

  return (
    <FooterContainer style={{ fontSize: `${fontSize}%` }}> 
      <FooterSection>
        <FooterContent style={{ fontSize: `${fontSize}%` }}>
          <LogoSection>
            <Logo src={logo} alt="Government Logo" />
          </LogoSection>

          <Section style={{ fontSize: `${fontSize}%` }}>
            <Title style={{ fontSize: `${fontSize}%` }}>Disclaimer :</Title>
            <Text style={{ fontSize: `${fontSize}%` }}>
              Please note that this page also provides links to the websites / web pages of Govt. Ministries/Departments/Organisations.
              The content of these websites are owned by the respective organisations and they may be contacted for any further information or suggestion.
            </Text>
          </Section>

          <Section style={{ fontSize: `${fontSize}%` }}>
  <Title style={{ fontSize: `${fontSize}%` }}>Website Policies</Title>
  <LinksList style={{ fontSize: `${fontSize}%` }}>
    <LinkItem style={{ fontSize: `${fontSize}%` }}>
      <IoIosArrowDroprightCircle /> 
      <Link style={{ color: 'inherit', fontSize: `${fontSize}%` }} to="/copyright-policy">Copyright Policy</Link>
    </LinkItem>
    <LinkItem style={{ fontSize: `${fontSize}%` }}>
      <IoIosArrowDroprightCircle /> 
      <Link style={{ color: 'inherit', fontSize: `${fontSize}%` }} to="/hyperlinking-policy">Hyperlinking Policy</Link>
    </LinkItem>
    <LinkItem style={{ fontSize: `${fontSize}%` }}>
      <IoIosArrowDroprightCircle /> 
      <Link style={{ color: 'inherit', fontSize: `${fontSize}%` }} to="/security-policy">Security Policy</Link>
    </LinkItem>
    <LinkItem style={{ fontSize: `${fontSize}%` }}>
      <IoIosArrowDroprightCircle /> 
      <Link style={{ color: 'inherit', fontSize: `${fontSize}%` }} to="/guidelines">Guidelines</Link>
    </LinkItem>
    <LinkItem style={{ fontSize: `${fontSize}%` }}>
      <IoIosArrowDroprightCircle /> 
      <Link style={{ color: 'inherit', fontSize: `${fontSize}%` }} to="/terms-and-conditions">Terms & Conditions</Link>
    </LinkItem>
    <LinkItem style={{ fontSize: `${fontSize}%` }}>
      <IoIosArrowDroprightCircle /> 
      <Link style={{ color: 'inherit', fontSize: `${fontSize}%` }} to="/privacy-policy">Privacy Policy</Link>
    </LinkItem>
    <LinkItem style={{ fontSize: `${fontSize}%` }}>
      <IoIosArrowDroprightCircle /> 
      <Link style={{ color: 'inherit', fontSize: `${fontSize}%` }} to="/help">Help</Link>
    </LinkItem>
  </LinksList>
</Section>

          <VisitorsSection style={{ fontSize: `${fontSize}%` }}>
            <Title style={{ fontSize: `${fontSize}%` }}>Visitors</Title>
            <Text style={{ fontSize: `${fontSize}%` }}><FaClock /> Last Updated: 18-01-2025 11:33 AM</Text>
            <Text style={{ fontSize: `${fontSize}%` }}><FaUsers /> Visitors Counter: 212444</Text>
            <Text style={{ fontSize: `${fontSize}%` }}><FaCodeBranch /> Version: C64/KBN 1.3</Text>
          </VisitorsSection>
        </FooterContent>
      </FooterSection>

      <FooterStripContainer style={{ fontSize: `${fontSize}%` }}>
        <FooterStrip>
          <StripText style={{ fontSize: `${fontSize}%` }}>
            Designed, Developed and Hosted by: Center for e-Governance - Web Portal, Government of Karnataka © 2025, All Rights Reserved.
            <br />
          </StripText>
        </FooterStrip>
      </FooterStripContainer>
    </FooterContainer>
  );
};

export default Footer;