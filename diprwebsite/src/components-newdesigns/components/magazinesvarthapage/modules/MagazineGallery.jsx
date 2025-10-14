import React, { useState, useEffect, useContext } from 'react';
import { ImFolderDownload } from "react-icons/im";
import { IoChevronDownOutline } from "react-icons/io5";
import { getMagazines } from '../../../../services/magazineApi/magazineService';
import { LanguageContext } from '../../../../context/LanguageContext';
import {
  MagazineContainer,
  SectionHeader,
  TitleWrapper,
  PageTitle,
  SelectedYearText,
  YearFilterWrapper,
  YearFilterIcon,
  YearFilter,
  MagazineGrid,
  MagazineCard,
  MagazineImageWrapper,
  MagazineImage,
  DownloadButton,
  ShimmerWrapper,
  ShimmerCard,
  ShimmerImageBox,
  ShimmerButton,
  ShimmerTitle,
  ShimmerFilter
} from './MagazineGallery.styles';

// Translations
const translations = {
  Kannada: {
    title: "ಇತ್ತೀಚಿನ ವಾರ್ತಾ ಜನಪದ ನಿಯತಕಾಲಿಕೆಗಳು",
    edition: "ಆವೃತ್ತಿ",
    selectYear: "ವರ್ಷ ಆಯ್ಕೆಮಾಡಿ",
    download: "ಡೌನ್‌ಲೋಡ್",
    loading: "ಲೋಡ್ ಆಗುತ್ತಿದೆ...",
    noMagazines: "ಯಾವುದೇ ನಿಯತಕಾಲಿಕೆಗಳು ಲಭ್ಯವಿಲ್ಲ"
  },
  English: {
    title: "Latest Vartha Janapada Magazines",
    edition: "Edition",
    selectYear: "Select year",
    download: "Download",
    loading: "Loading magazines...",
    noMagazines: "No magazines available"
  },
  Hindi: {
    title: "नवीनतम वार्ता जनपद पत्रिकाएँ",
    edition: "संस्करण",
    selectYear: "वर्ष चुनें",
    download: "डाउनलोड",
    loading: "लोड हो रहा है...",
    noMagazines: "कोई पत्रिकाएँ उपलब्ध नहीं"
  }
};

// Month order for sorting
const monthOrder = {
  'January': 1,
  'February': 2,
  'March': 3,
  'April': 4,
  'May': 5,
  'June': 6,
  'July': 7,
  'August': 8,
  'September': 9,
  'October': 10,
  'November': 11,
  'December': 12
};

export default function MagazineGallery() {
  const [magazines, setMagazines] = useState([]);
  const [filteredMagazines, setFilteredMagazines] = useState([]);
  const [selectedYear, setSelectedYear] = useState('');
  const [availableYears, setAvailableYears] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setPageLanguage, language } = useContext(LanguageContext);
  
  // Get translations based on current language
  const t = translations[language] || translations.English;

  useEffect(() => {
    // Set page language to magazine type on mount
    setPageLanguage('magazine');

    return () => {
      // Reset to global language on unmount
      setPageLanguage(null);
    };
  }, [setPageLanguage]);

  useEffect(() => {
    fetchMagazines();
  }, []);

  const fetchMagazines = async () => {
    try {
      setLoading(true);
      const response = await getMagazines();
      
      if (response && response.data) {
        // Get all unique edition numbers and sort them to find the latest
        const editions = [...new Set(response.data.map(mag => mag.editionNumber))].sort((a, b) => b - a);
        const latestEdition = editions[0];
        
        // Filter magazines to get only the latest edition
        const latestEditionMagazines = response.data.filter(
          mag => mag.editionNumber === latestEdition && mag.status === 'approved'
        );
        
        // Sort by month (January to December)
        const sortedMagazines = latestEditionMagazines.sort((a, b) => {
          const monthA = monthOrder[a.publishedMonth] || 0;
          const monthB = monthOrder[b.publishedMonth] || 0;
          return monthA - monthB;
        });
        
        // Take only first 12 magazines (one per month)
        const twelveMonthMagazines = sortedMagazines.slice(0, 12);
        
        setMagazines(response.data);
        setFilteredMagazines(twelveMonthMagazines);
        
        // Set selected year to latest edition
        setSelectedYear(latestEdition);
        
        // Get all available years for filter dropdown
        setAvailableYears(editions);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching magazines:', error);
      setLoading(false);
    }
  };

  const handleDownload = (magazinePdf, title) => {
    if (magazinePdf) {
      window.open(magazinePdf, '_blank');
    } else {
      console.log(`No PDF available for: ${title}`);
    }
  };

  const handleYearChange = (e) => {
    const year = e.target.value;
    setSelectedYear(year);
    
    if (year) {
      // Filter magazines by selected year and get only approved ones
      const yearMagazines = magazines.filter(
        mag => mag.editionNumber === year && mag.status === 'approved'
      );
      
      // Sort by month (January to December)
      const sortedMagazines = yearMagazines.sort((a, b) => {
        const monthA = monthOrder[a.publishedMonth] || 0;
        const monthB = monthOrder[b.publishedMonth] || 0;
        return monthA - monthB;
      });
      
      // Take only first 12 magazines (one per month)
      const twelveMonthMagazines = sortedMagazines.slice(0, 12);
      
      setFilteredMagazines(twelveMonthMagazines);
    }
  };

  if (loading) {
    return (
      <ShimmerWrapper>
        <MagazineContainer aria-labelledby="magazine-gallery-heading">
          <SectionHeader>
            <TitleWrapper>
              <ShimmerTitle aria-label={t.loading} />
            </TitleWrapper>
            <YearFilterWrapper>
              <ShimmerFilter />
            </YearFilterWrapper>
          </SectionHeader>
          
          <MagazineGrid>
            {[...Array(12)].map((_, index) => (
              <ShimmerCard key={index}>
                <ShimmerImageBox />
                <ShimmerButton />
              </ShimmerCard>
            ))}
          </MagazineGrid>
        </MagazineContainer>
      </ShimmerWrapper>
    );
  }

  return (
    <MagazineContainer aria-labelledby="magazine-gallery-heading">
      <SectionHeader>
        <TitleWrapper>
          <PageTitle id="magazine-gallery-heading">{t.title}</PageTitle>
          {selectedYear && <SelectedYearText aria-live="polite">{selectedYear}</SelectedYearText>}
        </TitleWrapper>
        <YearFilterWrapper>
          <YearFilter value={selectedYear} onChange={handleYearChange} aria-label={t.selectYear}>
            <option value="">{t.selectYear}</option>
            {availableYears.map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </YearFilter>
          <YearFilterIcon aria-hidden="true">
            <IoChevronDownOutline />
          </YearFilterIcon>
        </YearFilterWrapper>
      </SectionHeader>
      
      <MagazineGrid role="list" aria-label="Magazine collection">
        {filteredMagazines.length > 0 ? (
          filteredMagazines.map((magazine) => (
            <MagazineCard key={magazine._id} role="listitem">
              <MagazineImageWrapper>
                <MagazineImage 
                  src={magazine.magazineThumbnail} 
                  alt={magazine.title || `${magazine.publishedMonth} ${magazine.publishedYear} ${t.edition}`} 
                  loading="lazy" 
                />
              </MagazineImageWrapper>
              
              <DownloadButton 
                onClick={() => handleDownload(magazine.magazinePdf, magazine.title)} 
                aria-label={`${t.download} ${magazine.publishedMonth} ${magazine.publishedYear}`}
              >
                <ImFolderDownload aria-hidden="true" />
                {t.download}
              </DownloadButton>
            </MagazineCard>
          ))
        ) : (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px' }}>
            {t.noMagazines}
          </div>
        )}
      </MagazineGrid>
    </MagazineContainer>
  );
}

