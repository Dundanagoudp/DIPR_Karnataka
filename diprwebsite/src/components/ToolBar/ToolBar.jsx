import React, { useState, useContext, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
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

const ToolBar = ({ onSearch, onLanguageChange }) => {
  const { fontSize, changeFontSize } = useContext(FontSizeContext);
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

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
      // If the query is empty, reset the search results and suggestions
      onSearch && onSearch([]);
      setSuggestions([]);
      return;
    }

    try {
      const response = await SearchMagazineApi(query); // Call the API
      console.log("Search Results:", response.data); // Log the results
      setSuggestions(response.data); // Set suggestions
      onSearch && onSearch(response.data); // Pass the results to the parent component
    } catch (error) {
      console.error("Search Error:", error); // Log any errors
      onSearch && onSearch([]); // Reset search results in case of error
      setSuggestions([]); // Reset suggestions in case of error
    }
  };

  // Debounced version of handleSearch
  const debouncedSearch = debounce(handleSearch, 300);

  // Update debouncedSearch whenever searchText changes
  useEffect(() => {
    debouncedSearch(searchText);
  }, [searchText, debouncedSearch]);

  // Function to handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setSearchText(suggestion.title); // Set the search text to the clicked suggestion
    setSuggestions([]); // Clear suggestions

    // If there is only one suggestion, open the PDF directly
    if (suggestions.length === 1) {
      window.open(suggestion.magazinePdf, "_blank"); // Open PDF in a new tab
    } else {
      onSearch && onSearch([suggestion]); // Pass the clicked suggestion to the parent component
      navigate(`/magazine/${suggestion._id}`); // Navigate to the magazine detail page
    }
  };

  // Function to handle search icon click
  const handleSearchIconClick = () => {
    debouncedSearch(searchText);
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
          placeholder="Search for News"
          value={searchText}
          onChange={(e) => {
            const query = e.target.value;
            setSearchText(query);
          }}
        />
        {suggestions.length > 0 && (
          <SuggestionsContainer>
            {suggestions.map((suggestion, index) => (
              <SuggestionItem key={index} onClick={() => handleSuggestionClick(suggestion)}>
                {suggestion.title}
              </SuggestionItem>
            ))}
          </SuggestionsContainer>
        )}
      </SearchContainer>

      {/* Font Size Controls */}
      <FontControls>
        <span>Font Size <b>Aa</b></span>
        <button onClick={() => changeFontSize(-10)}><b>-</b></button>
        <b><span>{fontSize}%</span></b>
        <button onClick={() => changeFontSize(10)}><b>+</b></button>
        <button onClick={() => changeFontSize(100 - fontSize)}>Reset</button>
      </FontControls>

      {/* Language Selector */}
      <Select onChange={(e) => onLanguageChange && onLanguageChange(e.target.value)}>
        <option value="en">English</option>
        <option value="es" disabled>Kannada</option>
        <option value="fr" disabled>Hindi</option>
        <option value="de" disabled>Deutsch</option>
      </Select>
    </ToolbarContainer>
  );
};

export default ToolBar;



