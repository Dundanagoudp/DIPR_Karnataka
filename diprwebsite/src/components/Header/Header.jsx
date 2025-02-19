import React, { useContext } from 'react';
import {
  HeaderContainer,
  LogoSection,
  Logo,
  TitleSection,
  Title,
  Subtitle,
  CMSection,
  CMImage,
} from './Header.styles';
import logo from '../../assets/logo.png';
import cm from '../../assets/cm.png';
import { FontSizeContext } from '../../context/FontSizeProvider';

const Header = () => {
  const { fontSize } = useContext(FontSizeContext);
  return (
    <HeaderContainer style={{ fontSize: `${fontSize}%` }}>
      <LogoSection style={{ fontSize: `${fontSize}%` }}>
        <Logo src={logo} alt="Government of Karnataka Logo" />
        <TitleSection style={{ fontSize: `${fontSize}%` }}>
          <Title style={{ fontSize: `${fontSize}%` }}>Department of Information and Public Relations</Title>
          <Subtitle style={{ fontSize: `${fontSize}%` }}>Government of Karnataka</Subtitle>
        </TitleSection>
      </LogoSection>
      <CMSection>
        <CMImage src={cm} alt="CM Siddaramaiah" />
      </CMSection>
    </HeaderContainer>
  );
};

export default Header;