import { useContext, useState, useEffect, useCallback, useRef } from "react"
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
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1)
  const navigate = useNavigate()
  const t = translations[language] || translations.English
  const searchInputRef = useRef(null)
  const suggestionsRef = useRef(null)

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
        setSelectedSuggestionIndex(-1)
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
        setSelectedSuggestionIndex(-1)
        onSearch?.(sortedResults)
      } catch (error) {
        console.error("Search Error:", error)
        onSearch?.([])
        setSuggestions([])
        setSelectedSuggestionIndex(-1)
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
    setSelectedSuggestionIndex(-1)
  }

  // Function to close PDF modal
  const closePdfModal = () => {
    setModalOpen(false)
  }

  const handleSearchIconClick = () => debouncedSearch(searchText)

  const handleLanguageChange = (e) => setLanguage(e.target.value)

  // Handle keyboard navigation for suggestions
  const handleKeyDown = (e) => {
    if (!showSuggestions || suggestions.length === 0) return

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault()
        setSelectedSuggestionIndex((prev) => {
          const newIndex = prev === suggestions.length - 1 ? 0 : prev + 1
          // Scroll the item into view
          if (suggestionsRef.current) {
            const item = suggestionsRef.current.children[newIndex + 1] // +1 to account for ResultCount div
            item?.scrollIntoView({ behavior: "smooth", block: "nearest" })
          }
          return newIndex
        })
        break
      case "ArrowUp":
        e.preventDefault()
        setSelectedSuggestionIndex((prev) => {
          const newIndex = prev === 0 ? suggestions.length - 1 : prev - 1
          // Scroll the item into view
          if (suggestionsRef.current) {
            const item = suggestionsRef.current.children[newIndex + 1] // +1 to account for ResultCount div
            item?.scrollIntoView({ behavior: "smooth", block: "nearest" })
          }
          return newIndex
        })
        break
      case "Enter":
        e.preventDefault()
        if (selectedSuggestionIndex >= 0 && selectedSuggestionIndex < suggestions.length) {
          handleSuggestionClick(suggestions[selectedSuggestionIndex])
        }
        break
      case "Escape":
        setShowSuggestions(false)
        setSelectedSuggestionIndex(-1)
        searchInputRef.current?.blur()
        break
    }
  }

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
        setSelectedSuggestionIndex(-1)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [showSuggestions])

  return (
    <>
      <ToolbarContainer role="toolbar" aria-label="Website tools">
        <SearchContainer className="search-container">
          <SearchIcon
            onClick={handleSearchIconClick}
            aria-label="Search"
            tabIndex="0"
            role="button"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault()
                handleSearchIconClick()
              }
            }}
          >
            <AiOutlineSearch aria-hidden="true" />
          </SearchIcon>
          <SearchInput
            ref={searchInputRef}
            type="text"
            placeholder={t.searchPlaceholder}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={() => {
              if (searchText.trim() && suggestions.length > 0) {
                setShowSuggestions(true)
              }
            }}
            onKeyDown={handleKeyDown}
            aria-label={t.searchPlaceholder}
            aria-expanded={showSuggestions}
            aria-controls="search-suggestions"
            aria-activedescendant={selectedSuggestionIndex >= 0 ? `suggestion-${selectedSuggestionIndex}` : undefined}
            role="combobox"
            aria-autocomplete="list"
          />
          <AnimatePresence>
            {showSuggestions && searchText.trim() && (
              <SuggestionsContainer
                ref={suggestionsRef}
                as={motion.div}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                id="search-suggestions"
                role="listbox"
                aria-label="Search suggestions"
              >
                {isSearching ? (
                  <LoadingIndicator aria-live="polite">{t.searching}</LoadingIndicator>
                ) : suggestions.length > 0 ? (
                  <>
                    <ResultCount>
                      {suggestions.length} {t.resultsCount}
                    </ResultCount>
                    {suggestions.map((suggestion, index) => (
                      <SuggestionItem
                        as={motion.div}
                        key={index}
                        id={`suggestion-${index}`}
                        onClick={() => handleSuggestionClick(suggestion)}
                        whileHover={{ backgroundColor: "rgba(0,0,0,0.05)" }}
                        transition={{ duration: 0.1 }}
                        role="option"
                        aria-selected={index === selectedSuggestionIndex}
                        tabIndex="0"
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault()
                            handleSuggestionClick(suggestion)
                          }
                        }}
                      >
                        <SuggestionContent>
                          <SuggestionTitle>{suggestion.title}</SuggestionTitle>
                          <SuggestionDate>{formatDate(suggestion.createdTime || suggestion.date)}</SuggestionDate>
                        </SuggestionContent>
                      </SuggestionItem>
                    ))}
                  </>
                ) : (
                  <NoResults role="status" aria-live="polite">
                    {t.noResults}
                  </NoResults>
                )}
              </SuggestionsContainer>
            )}
          </AnimatePresence>
        </SearchContainer>
        <FontControls role="group" aria-label="Font size controls">
          <span>
            {t.fontSizeLabel} <b aria-hidden="true">Aa</b>
          </span>
          <button onClick={() => changeFontSize(-5)} aria-label="Decrease font size">
            <b aria-hidden="true">-</b>
          </button>
          <b>
            <span aria-live="polite">{fontSize}%</span>
          </b>
          <button onClick={() => changeFontSize(5)} aria-label="Increase font size">
            <b aria-hidden="true">+</b>
          </button>
          <button onClick={() => changeFontSize(100 - fontSize)} aria-label="Reset font size to default">
            {t.resetLabel}
          </button>
        </FontControls>
        <Select onChange={handleLanguageChange} value={language} aria-label="Select language">
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Kannada">Kannada</option>
        </Select>
      </ToolbarContainer>
      <PDFModal isOpen={modalOpen} onClose={closePdfModal} pdfUrl={selectedPdf} title={selectedTitle} />
    </>
  )
}

export default ToolBar
