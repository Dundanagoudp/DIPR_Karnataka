import React, { useState } from 'react';
import { Youtube, Facebook, Instagram, Linkedin, Search } from 'lucide-react';
import {
  LanguageNavContainer,
  SocialIcons,
  SocialIcon,
  LanguageSelector,
  LanguageDropdown,
  SearchContainer,
  SearchIcon,
  SearchText
} from './Language.styles';

const LanguageNavbar = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'kn', name: 'ಕನ್ನಡ' },
    { code: 'hi', name: 'हिन्दी' },
    { code: 'te', name: 'తెలుగు' },
    { code: 'ta', name: 'தமிழ்' }
  ];

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language.name);
    setIsLanguageOpen(false);
  };

  return (
    <LanguageNavContainer>
      <SocialIcons>
        <SocialIcon href="#" aria-label="YouTube">
          <Youtube size={20} />
        </SocialIcon>
        <SocialIcon href="#" aria-label="Facebook">
          <Facebook size={20} />
        </SocialIcon>
        <SocialIcon href="#" aria-label="Instagram">
          <Instagram size={20} />
        </SocialIcon>
        <SocialIcon href="#" aria-label="LinkedIn">
          <Linkedin size={20} />
        </SocialIcon>
      </SocialIcons>

      <LanguageSelector>
        <button 
          onClick={() => setIsLanguageOpen(!isLanguageOpen)}
          aria-label="Select language"
        >
          {selectedLanguage}
          <span>⌄</span>
        </button>
        {isLanguageOpen && (
          <LanguageDropdown>
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageSelect(lang)}
                className={selectedLanguage === lang.name ? 'active' : ''}
              >
                {lang.name}
              </button>
            ))}
          </LanguageDropdown>
        )}
      </LanguageSelector>

      <SearchContainer>
        <SearchIcon>
          <Search size={20} />
        </SearchIcon>
        <SearchText>Search</SearchText>
      </SearchContainer>
    </LanguageNavContainer>
  );
};

export default LanguageNavbar;
