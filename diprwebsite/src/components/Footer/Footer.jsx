import React from "react";
import { FaCopyright, FaLink, FaShieldAlt, FaEye, FaQuestionCircle, FaClock, FaUsers, FaCodeBranch } from "react-icons/fa";
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
  FooterSection
  
} from "./Footer.styles";
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <FooterContent>
          <LogoSection>
            <Logo src={logo} alt="Government Logo" />
          </LogoSection>

          <Section>
            <Title>Disclaimer :</Title>
            <Text>
              Please note that this page also provides links to the websites / web pages of Govt. Ministries/Departments/Organisations.
              The content of these websites are owned by the respective organisations and they may be contacted for any further information or suggestion.
            </Text>
          </Section>

          <Section>
            <Title>Website Policies</Title>
            {/* <LinksList>
              <LinkItem><IoIosArrowDroprightCircle  /> Copyright Policy</LinkItem>
              <LinkItem><IoIosArrowDroprightCircle  /> Hyperlinking Policy</LinkItem>
              <LinkItem><IoIosArrowDroprightCircle  /> Security Policy</LinkItem>
              <LinkItem><IoIosArrowDroprightCircle  /> Guidelines</LinkItem>
              <LinkItem><IoIosArrowDroprightCircle  /> Terms & Conditions</LinkItem>
              <LinkItem><IoIosArrowDroprightCircle  /> Privacy Policy</LinkItem>
              <LinkItem><IoIosArrowDroprightCircle  /> Help</LinkItem>
            </LinksList> */}
            <LinksList>
              <LinkItem><IoIosArrowDroprightCircle /> <Link to="/copyright-policy">Copyright Policy</Link></LinkItem>
              <LinkItem><IoIosArrowDroprightCircle /> <Link to="/hyperlinking-policy">Hyperlinking Policy</Link></LinkItem>
              <LinkItem><IoIosArrowDroprightCircle /> <Link to="/security-policy">Security Policy</Link></LinkItem>
              <LinkItem><IoIosArrowDroprightCircle /> <Link to="/guidelines">Guidelines</Link></LinkItem>
              <LinkItem><IoIosArrowDroprightCircle /> <Link to="/terms-and-conditions">Terms & Conditions</Link></LinkItem>
              <LinkItem><IoIosArrowDroprightCircle /> <Link to="/privacy-policy">Privacy Policy</Link></LinkItem>
              <LinkItem><IoIosArrowDroprightCircle /> <Link to="/help">Help</Link></LinkItem>
            </LinksList>
          </Section>

          <VisitorsSection>
            <Title>Visitors</Title>
            <Text><FaClock /> Last Updated: 18-01-2025 11:33 AM</Text>
            <Text><FaUsers /> Visitors Counter: 212444</Text>
            <Text><FaCodeBranch /> Version: C64/KBN 1.3</Text>
          </VisitorsSection>
        </FooterContent>
      </FooterSection>

      <FooterStripContainer>
        <FooterStrip>
          <StripText>
            Designed, Developed and Hosted by: Center for e-Governance - Web Portal, Government of Karnataka © 2025, All Rights Reserved.
            <br/>
          </StripText>
        </FooterStrip>
      </FooterStripContainer>
    </FooterContainer>
  );
};

export default Footer;