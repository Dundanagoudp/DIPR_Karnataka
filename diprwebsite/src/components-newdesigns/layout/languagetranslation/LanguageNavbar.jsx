import React, { useState, useEffect, useRef, useContext } from 'react';
import { Youtube, Facebook, Instagram, Linkedin, Search, ChevronDown } from 'lucide-react';
import { LanguageContext } from '../../../context/LanguageContext';
import SearchModal from '../searchsection/SearchModal';
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
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { language, setLanguage, currentMagazineType } = useContext(LanguageContext);
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'kn', name: 'Kannada' },
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'Hindi' }
  ];

  // Get translated Search text
  const getSearchText = () => {
    const searchTranslations = {
      English: "Search",
      Kannada: "ಹುಡುಕಿ",
      Hindi: "खोजें"
    };
    return searchTranslations[language] || "Search";
  };

  const handleLanguageSelect = (selectedLang) => {
    // If on a magazine page, update that magazine's language
    // Otherwise, update global language
    setLanguage(selectedLang.name, currentMagazineType);
    setIsLanguageOpen(false);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  const closeDropdown = () => {
    setIsLanguageOpen(false);
  };

  const openSearchModal = () => {
    setIsSearchOpen(true);
  };

  const closeSearchModal = () => {
    setIsSearchOpen(false);
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
      <SocialIcons aria-label="Social media links">
        <SocialIcon href="#" aria-label="Visit our YouTube channel" target="_blank" rel="noopener noreferrer">
          <Youtube size={22} aria-hidden="true" />
        </SocialIcon>
        <SocialIcon href="#" aria-label="Visit our Facebook page" target="_blank" rel="noopener noreferrer">
          <Facebook size={22} aria-hidden="true" />
        </SocialIcon>
        <SocialIcon href="#" aria-label="Visit our Instagram page" target="_blank" rel="noopener noreferrer">
          <Instagram size={22} aria-hidden="true" />
        </SocialIcon>
        <SocialIcon href="#" aria-label="Visit our LinkedIn page" target="_blank" rel="noopener noreferrer">
          <Linkedin size={22} aria-hidden="true" />
        </SocialIcon>
      </SocialIcons>

      <LanguageSelector ref={dropdownRef}>
        <button 
          className={`language-button ${language === "Kannada" || language === "Hindi" ? "kannada-text" : ""}`}
          onClick={toggleLanguageDropdown}
          aria-label={`Current language: ${language}. Click to change`}
          aria-expanded={isLanguageOpen}
          aria-haspopup="true"
        >
          {language}
          <ChevronDown size={16} className="arrow" aria-hidden="true" />
        </button>
        {isLanguageOpen && (
          <>
            <Overlay onClick={closeDropdown} aria-hidden="true" />
            <LanguageDropdown role="menu">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageSelect(lang)}
                  className={`${language === lang.name ? 'active' : ''} ${lang.name === "Kannada" || lang.name === "Hindi" ? 'kannada-text' : ''}`}
                  role="menuitem"
                  aria-label={`Select ${lang.name}`}
                >
                  {lang.name}
                </button>
              ))}
            </LanguageDropdown>
          </>
        )}
      </LanguageSelector>

      <SearchContainer 
        aria-label="Search" 
        role="button" 
        tabIndex={0}
        onClick={openSearchModal}
        onKeyPress={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            openSearchModal();
          }
        }}
      >
        <SearchIcon>
          <Search size={20} />
        </SearchIcon>
        <SearchText className={language === "Kannada" || language === "Hindi" ? "kannada-text" : ""}>
          {getSearchText()}
        </SearchText>
      </SearchContainer>

      <SearchModal isOpen={isSearchOpen} onClose={closeSearchModal} />
    </LanguageNavContainer>
  );
};

export default LanguageNavbar;
