import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import {
  ToolbarContainer,
  SearchContainer,
  SearchInput,
  SearchIcon,
  FontControls,
  Select,
} from "./ToolBar.styles";

const ToolBar = ({ onSearch, onLanguageChange }) => {
  const [fontSize, setFontSize] = useState(80);
  const [searchText, setSearchText] = useState("");

  const handleFontSizeChange = (change) => {
    let newSize = fontSize + change;
    if (newSize < 50) newSize = 50; // Min font size
    if (newSize > 200) newSize = 200; // Max font size
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}%`;
  };

  return (
    <ToolbarContainer>
      {/* Search Input */}
      <SearchContainer>
        <SearchIcon>
          <AiOutlineSearch />
        </SearchIcon>
        <SearchInput
          type="text"
          placeholder="Search for News"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            onSearch && onSearch(e.target.value);
          }}
        />
      </SearchContainer>

      {/* Font Size Controls */}
      <FontControls>
        <span>Font Size <b>Aa</b></span>
        <button onClick={() => handleFontSizeChange(-10)}> <b>-</b></button>
        <b><span>{fontSize}%</span></b>
        <button onClick={() => handleFontSizeChange(10)}> <b>+</b> </button>
        <button onClick={() => handleFontSizeChange(80 - fontSize)}>Reset</button>
      </FontControls>

      {/* Language Selector */}
      <Select onChange={(e) => onLanguageChange && onLanguageChange(e.target.value)}>
        <option value="en">English</option>
        <option value="es" disabled>Español</option>
        <option value="fr" disabled>Français</option>
        <option value="de" disabled>Deutsch</option>
      </Select>
    </ToolbarContainer>
  );
};

export default ToolBar;
