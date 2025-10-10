import React, { useState } from 'react';
import { ImFolderDownload } from "react-icons/im";
import { IoChevronDownOutline } from "react-icons/io5";
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
  DownloadButton
} from './MarchKarnatakaGallery.styles';

// Import magazine images
import magazine1 from '/public/magzines/magzines.jpg';
import magazine2 from '/public/magzines/m2.jpg';
import magazine3 from '/public/magzines/m3.jpg';

const magazineData = [
  { id: 1, image: magazine1, title: 'Karnataka Budget 2024-25', edition: 'March 2025 Edition' },
  { id: 2, image: magazine2, title: 'Incredible Karnataka', edition: 'March 2025 Edition' },
  { id: 3, image: magazine3, title: 'ಸ್ವ್ಯಂಕಿಂಗ್ ಪ್ರಸಂಗ', edition: 'March 2025 Edition' },
  { id: 4, image: magazine1, title: 'Karnataka Budget 2024-25', edition: 'March 2025 Edition' },
  { id: 5, image: magazine2, title: 'Incredible Karnataka', edition: 'March 2025 Edition' },
  { id: 6, image: magazine3, title: 'ಸ್ವ್ಯಂಕಿಂಗ್ ಪ್ರಸಂಗ', edition: 'March 2025 Edition' },
  { id: 7, image: magazine1, title: 'Karnataka Budget 2024-25', edition: 'March 2025 Edition' },
  { id: 8, image: magazine2, title: 'Incredible Karnataka', edition: 'March 2025 Edition' },
  { id: 9, image: magazine3, title: 'ಸ್ವ್ಯಂಕಿಂಗ್ ಪ್ರಸಂಗ', edition: 'March 2025 Edition' },
  { id: 10, image: magazine1, title: 'Karnataka Budget 2024-25', edition: 'March 2025 Edition' },
  { id: 11, image: magazine2, title: 'Incredible Karnataka', edition: 'March 2025 Edition' },
  { id: 12, image: magazine3, title: 'ಸ್ವ್ಯಂಕಿಂಗ್ ಪ್ರಸಂಗ', edition: 'March 2025 Edition' },
];

export default function MarchKarnatakaGallery() {
  const [selectedYear, setSelectedYear] = useState('');

  const handleDownload = (magazineTitle) => {
    console.log(`Downloading: ${magazineTitle}`);
    // Add download logic here
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
    // Add filter logic here
  };

  return (
    <MagazineContainer>
      <SectionHeader>
        <TitleWrapper>
          <PageTitle>Latest March of Karnataka Magazines</PageTitle>
          {selectedYear && <SelectedYearText>{selectedYear}</SelectedYearText>}
        </TitleWrapper>
        <YearFilterWrapper>
          <YearFilter value={selectedYear} onChange={handleYearChange}>
            <option value="">Select year</option>
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </YearFilter>
          <YearFilterIcon>
            <IoChevronDownOutline />
          </YearFilterIcon>
        </YearFilterWrapper>
      </SectionHeader>
      
      <MagazineGrid>
        {magazineData.map((magazine) => (
          <MagazineCard key={magazine.id}>
            <MagazineImageWrapper>
              <MagazineImage src={magazine.image} alt={magazine.title} />
            </MagazineImageWrapper>
            
            <DownloadButton onClick={() => handleDownload(magazine.title)}>
              <ImFolderDownload />
              Download
            </DownloadButton>
          </MagazineCard>
        ))}
      </MagazineGrid>
    </MagazineContainer>
  );
}

