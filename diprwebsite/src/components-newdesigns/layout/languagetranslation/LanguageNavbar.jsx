import React, { useState, useEffect, useRef } from 'react';
import { Youtube, Facebook, Instagram, Linkedin, Search, ChevronDown } from 'lucide-react';
import {
  LanguageNavContainer,
  SocialIcons,
  SocialIcon,
  LanguageSelector,
  LanguageDropdown,
  Overlay,
  SearchContainer,
  SearchIcon,
  SearchText
} from './Language.styles';

const LanguageNavbar = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'kn', name: 'Kannada' },
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'Hindi' }
  ];

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language.name);
    setIsLanguageOpen(false);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  const closeDropdown = () => {
    setIsLanguageOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsLanguageOpen(false);
      }
    };

    if (isLanguageOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLanguageOpen]);

  // Close dropdown on escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsLanguageOpen(false);
      }
    };

    if (isLanguageOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isLanguageOpen]);

  return (
    <LanguageNavContainer>
      <SocialIcons>
        <SocialIcon href="#" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
          <Youtube size={22} />
        </SocialIcon>
        <SocialIcon href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
          <Facebook size={22} />
        </SocialIcon>
        <SocialIcon href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
          <Instagram size={22} />
        </SocialIcon>
        <SocialIcon href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
          <Linkedin size={22} />
        </SocialIcon>
      </SocialIcons>

      <LanguageSelector ref={dropdownRef}>
        <button 
          className="language-button"
          onClick={toggleLanguageDropdown}
          aria-label="Select language"
          aria-expanded={isLanguageOpen}
          aria-haspopup="true"
        >
          Select language
          <ChevronDown size={16} className="arrow" />
        </button>
        {isLanguageOpen && (
          <>
            <Overlay onClick={closeDropdown} />
            <LanguageDropdown>
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageSelect(lang)}
                  className={selectedLanguage === lang.name ? 'active' : ''}
                  aria-label={`Select ${lang.name}`}
                >
                  {lang.name}
                </button>
              ))}
            </LanguageDropdown>
          </>
        )}
      </LanguageSelector>

      <SearchContainer aria-label="Search" role="button" tabIndex={0}>
        <SearchIcon>
          <Search size={20} />
        </SearchIcon>
        <SearchText>Search</SearchText>
      </SearchContainer>
    </LanguageNavContainer>
  );
};

export default LanguageNavbar;
