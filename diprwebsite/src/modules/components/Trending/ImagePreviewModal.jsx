import { useEffect, useState } from "react";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { 
  ModalOverlay, 
  ModalContent, 
  CloseButton, 
  ModalImage, 
  ImageInfo,
  NavigationArrow
} from "./ImagePreviewModal.styles";

const ImagePreviewModal = ({ images, initialIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex || 0);
  
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    
    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <ModalOverlay className="open" onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose} aria-label="Close modal">
          <FiX size={24} />
        </CloseButton>
        
        <ModalImage 
          src={images[currentIndex].imageUrl} 
          alt={images[currentIndex].title} 
        />
        
        <ImageInfo>{images[currentIndex].title}</ImageInfo>
        
        {/* Left Navigation Arrow */}
        <NavigationArrow 
          position="left" 
          onClick={prevSlide}
          aria-label="Previous image"
        >
          <FiChevronLeft size={24} />
        </NavigationArrow>
        
        {/* Right Navigation Arrow */}
        <NavigationArrow 
          position="right" 
          onClick={nextSlide}
          aria-label="Next image"
        >
          <FiChevronRight size={24} />
        </NavigationArrow>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ImagePreviewModal;
