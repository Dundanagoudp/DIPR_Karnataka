// ToolBar.js
import React, { useState, useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import {
  ToolbarContainer,
  SearchContainer,
  SearchInput,
  SearchIcon,
  FontControls,
  Select,
} from "./ToolBar.styles";
import { FontSizeContext } from "../../context/FontSizeProvider";

const ToolBar = ({ onSearch, onLanguageChange }) => {
  const { fontSize, changeFontSize } = useContext(FontSizeContext);
  const [searchText, setSearchText] = useState("");

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
