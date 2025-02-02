import React from 'react';
import { HeaderContainer, LogoSection, Logo, TitleSection, Title, Subtitle, CMSection, CMImage } from '../Header/Header.styles';
import logo from "../../assets/logo.png"; 
import cm from "../../assets/cm.png";

const Header = () => {
  return (
    <HeaderContainer>
      <LogoSection>
        <Logo src={logo} alt="Government of Karnataka Logo" />
        <TitleSection>
          <Title>Department of Information and Public Relations</Title>
          <Subtitle>Government of Karnataka</Subtitle>
        </TitleSection>
      </LogoSection>
      <CMSection>
        <CMImage src={cm} alt="CM Siddaramaiah" />
      </CMSection>
    </HeaderContainer>
  );
};

export default Header;