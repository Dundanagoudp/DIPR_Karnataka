import { useContext } from 'react';
import { Link } from 'react-router-dom';
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
import cm from '../../assets/karnatakacm.jpg';
import dcm from "../../assets/karnatakadcm.jpg"
import { FontSizeContext } from '../../context/FontSizeProvider';

const Header = () => {
  const { fontSize } = useContext(FontSizeContext);
  return (
    <HeaderContainer role="banner" aria-label="Site header">
      <LogoSection style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
        <Link to="/" aria-label="Go to homepage">
          <Logo src="/header/karntaka.png" alt="Karnataka State Emblem" />
        </Link>
        <TitleSection style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
        <Subtitle style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
          Karnataka Varthe
          </Subtitle>
          <Title style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
            Department of Information and Public Relations
          </Title>
          <Subtitle style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
            Government of Karnataka
          </Subtitle>
        </TitleSection>     
      </LogoSection>
      <CMSection>
        <CMImage src={cm} alt="Chief Minister Siddaramaiah" />
        <CMImage src={dcm} alt="Deputy Chief Minister D K Shivakumar" />
      </CMSection>
    </HeaderContainer>
  );
};

export default Header;
