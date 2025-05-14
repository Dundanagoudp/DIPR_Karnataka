"use client"

import { useContext, useState, useEffect, useCallback } from "react"
import { AiOutlineSearch } from "react-icons/ai"
import { useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import {
  ToolbarContainer,
  SearchContainer,
  SearchInput,
  SearchIcon,
  FontControls,
  Select,
  SuggestionsContainer,
  SuggestionItem,
  SuggestionContent,
  SuggestionTitle,
  SuggestionDate,
  ResultCount,
  NoResults,
  LoadingIndicator,
} from "./ToolBar.styles"
import { FontSizeContext } from "../../context/FontSizeProvider"
import { SearchMagazineApi } from "../../services/searchapi/SearchApi"
import { LanguageContext } from "../../context/LanguageContext"
import PDFModal from "../ToolBar/Searchmodal"

const translations = {
  English: {
    searchPlaceholder: "Search for News",
    fontSizeLabel: "Font Size",
    resetLabel: "Reset",
    noResults: "No results found",
    resultsCount: "results found",
    searching: "Searching...",
    viewPdf: "View PDF",
  },
  Hindi: {
    searchPlaceholder: "समाचार खोजें",
    fontSizeLabel: "फ़ॉन्ट आकार",
    resetLabel: "रीसेट",
    noResults: "कोई परिणाम नहीं मिला",
    resultsCount: "परिणाम मिले",
    searching: "खोज रहा है...",
    viewPdf: "पीडीएफ देखें",
  },
  Kannada: {
    searchPlaceholder: "ಸುದ್ದಿ ಹುಡುಕಿ",
    fontSizeLabel: "ಫಾಂಟ್",
    resetLabel: "ಮರುಹೊಂದಿಸಿ",
    noResults: "ಯಾವುದೇ ಫಲಿತಾಂಶಗಳು ಕಂಡುಬಂದಿಲ್ಲ",
    resultsCount: "ಫಲಿತಾಂಶಗಳು ಕಂಡುಬಂದಿವೆ",
    searching: "ಹುಡುಕುತ್ತಿದೆ...",
    viewPdf: "PDF ನೋಡಿ",
  },
}

const ToolBar = ({ onSearch }) => {
  const { fontSize, changeFontSize } = useContext(FontSizeContext)
  const { language, setLanguage } = useContext(LanguageContext)
  const [searchText, setSearchText] = useState("")
  const [suggestions, setSuggestions] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const navigate = useNavigate()
  const t = translations[language] || translations.English

  // PDF Modal state
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedPdf, setSelectedPdf] = useState("")
  const [selectedTitle, setSelectedTitle] = useState("")

  const debounce = (func, delay) => {
    let timeoutId
    return (...args) => {
      if (timeoutId) clearTimeout(timeoutId)
      timeoutId = setTimeout(() => func.apply(null, args), delay)
    }
  }

  const handleSearch = useCallback(
    async (query) => {
      if (!query.trim()) {
        onSearch?.([])
        setSuggestions([])
        setShowSuggestions(false)
        return
      }

      setIsSearching(true)
      setShowSuggestions(true)
      try {
        const response = await SearchMagazineApi(query)
        // Sort results by date (newest first)
        const sortedResults = Array.isArray(response.data)
          ? [...response.data].sort(
              (a, b) => new Date(b.createdTime || b.date || 0) - new Date(a.createdTime || a.date || 0),
            )
          : []

        setSuggestions(sortedResults)
        onSearch?.(sortedResults)
      } catch (error) {
        console.error("Search Error:", error)
        onSearch?.([])
        setSuggestions([])
      } finally {
        setIsSearching(false)
      }
    },
    [onSearch],
  )

  const debouncedSearch = useCallback(debounce(handleSearch, 300), [handleSearch])

  useEffect(() => {
    debouncedSearch(searchText)
  }, [searchText, debouncedSearch])

  const handleSuggestionClick = (suggestion) => {
    // Open the specific PDF in modal
    openPdfModal(suggestion.magazinePdf, suggestion.title)
  }

  // Function to open PDF modal
  const openPdfModal = (pdfUrl, title) => {
    setSelectedPdf(pdfUrl)
    setSelectedTitle(title)
    setModalOpen(true)
    // Hide suggestions after selection
    setShowSuggestions(false)
  }

  // Function to close PDF modal
  const closePdfModal = () => {
    setModalOpen(false)
  }

  const handleSearchIconClick = () => debouncedSearch(searchText)
  const handleLanguageChange = (e) => setLanguage(e.target.value)

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return ""
    const date = new Date(dateString)
    if (isNaN(date.getTime())) return ""
    return date.toLocaleDateString()
  }

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showSuggestions && !event.target.closest(".search-container")) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [showSuggestions])

  return (
    <>
      <ToolbarContainer>
        <SearchContainer className="search-container">
          <SearchIcon onClick={handleSearchIconClick}>
            <AiOutlineSearch />
          </SearchIcon>
          <SearchInput
            type="text"
            placeholder={t.searchPlaceholder}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={() => {
              if (searchText.trim() && suggestions.length > 0) {
                setShowSuggestions(true)
              }
            }}
          />
          <AnimatePresence>
            {showSuggestions && searchText.trim() && (
              <SuggestionsContainer
                as={motion.div}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {isSearching ? (
                  <LoadingIndicator>{t.searching}</LoadingIndicator>
                ) : suggestions.length > 0 ? (
                  <>
                    <ResultCount>
                      {suggestions.length} {t.resultsCount}
                    </ResultCount>
                    {suggestions.map((suggestion, index) => (
                      <SuggestionItem
                        as={motion.div}
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                        whileHover={{ backgroundColor: "rgba(0,0,0,0.05)" }}
                        transition={{ duration: 0.1 }}
                      >
                        <SuggestionContent>
                          <SuggestionTitle>{suggestion.title}</SuggestionTitle>
                          <SuggestionDate>{formatDate(suggestion.createdTime || suggestion.date)}</SuggestionDate>
                        </SuggestionContent>
                      </SuggestionItem>
                    ))}
                  </>
                ) : (
                  <NoResults>{t.noResults}</NoResults>
                )}
              </SuggestionsContainer>
            )}
          </AnimatePresence>
        </SearchContainer>
        <FontControls>
          <span>
            {t.fontSizeLabel} <b>Aa</b>
          </span>
          <button onClick={() => changeFontSize(-5)}>
            <b>-</b>
          </button>
          <b>
            <span>{fontSize}%</span>
          </b>
          <button onClick={() => changeFontSize(5)}>
            <b>+</b>
          </button>
          <button onClick={() => changeFontSize(100 - fontSize)}>{t.resetLabel}</button>
        </FontControls>
        <Select onChange={handleLanguageChange} value={language}>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Kannada">Kannada</option>
        </Select>
      </ToolbarContainer>

      {/* PDF Modal */}
      <PDFModal isOpen={modalOpen} onClose={closePdfModal} pdfUrl={selectedPdf} title={selectedTitle} />
    </>
  )
}

export default ToolBar
