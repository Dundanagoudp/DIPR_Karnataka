import React, { useContext, useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ToolbarContainer,
  SearchContainer,
  SearchInput,
  SearchIcon,
  FontControls,
  Select,
  SuggestionsContainer,
  SuggestionItem,
} from "./ToolBar.styles";
import { FontSizeContext } from "../../context/FontSizeProvider";
import { SearchMagazineApi } from "../../services/searchapi/SearchApi";
import { LanguageContext } from "../../context/LanguageContext";

// Translation object for English, Hindi, and Kannada
const translations = {
  English: {
    searchPlaceholder: "Search for News",
    fontSizeLabel: "Font Size",
    resetLabel: "Reset",
  },
  Hindi: {
    searchPlaceholder: "समाचार खोजें",
    fontSizeLabel: "फ़ॉन्ट आकार",
    resetLabel: "रीसेट",
  },
  Kannada: {
    searchPlaceholder: "ಸುದ್ದಿ ಹುಡುಕಿ",
    fontSizeLabel: "ಫಾಂಟ್ ",
    resetLabel: "ಮರುಹೊಂದಿಸಿ",
  },
};

const ToolBar = ({ onSearch }) => {
  const { fontSize, changeFontSize } = useContext(FontSizeContext);
  const { language, setLanguage } = useContext(LanguageContext);
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  // Get translations for the current language
  const t = translations[language] || translations.English;

  // Debounce function to delay API calls
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func.apply(null, args);
      }, delay);
    };
  };

  // Function to handle search input changes
  const handleSearch = async (query) => {
    if (!query.trim()) {
      onSearch && onSearch([]);
      setSuggestions([]);
      return;
    }
    try {
      const response = await SearchMagazineApi(query);
      console.log("Search Results:", response.data);
      setSuggestions(response.data);
      onSearch && onSearch(response.data);
    } catch (error) {
      console.error("Search Error:", error);
      onSearch && onSearch([]);
      setSuggestions([]);
    }
  };

  const debouncedSearch = debounce(handleSearch, 300);

  // Update debouncedSearch whenever searchText changes
  useEffect(() => {
    debouncedSearch(searchText);
  }, [searchText, debouncedSearch]);

  // Function to handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setSearchText(suggestion.title);
    setSuggestions([]);

    // If there is only one suggestion, open the PDF directly
    if (suggestions.length === 1) {
      window.open(suggestion.magazinePdf, "_blank");
    } else {
      onSearch && onSearch([suggestion]);
      navigate(`/magazine/${suggestion._id}`);
    }
  };

  // Function to handle search icon click
  const handleSearchIconClick = () => {
    debouncedSearch(searchText);
  };

  // Function to handle language change
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value); t
  };

  return (
    <ToolbarContainer>
      {/* Search Input */}
      <SearchContainer>
        <SearchIcon onClick={handleSearchIconClick}>
          <AiOutlineSearch />
        </SearchIcon>
        <SearchInput
          type="text"
          placeholder={t.searchPlaceholder}
          value={searchText}
          onChange={(e) => {
            const query = e.target.value;
            setSearchText(query);
          }}
        />
        <AnimatePresence>
          {suggestions.length > 0 && (
            <SuggestionsContainer
              as={motion.div}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {suggestions.map((suggestion, index) => (
                <SuggestionItem
                  as={motion.div}
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  transition={{ duration: 0.1 }}
                >
                  {suggestion.title}
                </SuggestionItem>
              ))}
            </SuggestionsContainer>
          )}
        </AnimatePresence>
      </SearchContainer>

      {/* Font Size Controls */}
      <FontControls>
        <span>{t.fontSizeLabel} <b>Aa</b></span>
        <button onClick={() => changeFontSize(-5)}><b>-</b></button>
        <b><span>{fontSize}%</span></b>
        <button onClick={() => changeFontSize(5)}><b>+</b></button>
        <button onClick={() => changeFontSize(100 - fontSize)}>{t.resetLabel}</button>
      </FontControls>

      {/* Language Selector */}
      <Select onChange={handleLanguageChange} value={language}>
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
        <option value="Kannada">Kannada</option>
      </Select>
    </ToolbarContainer>
  );
};

export default ToolBar;