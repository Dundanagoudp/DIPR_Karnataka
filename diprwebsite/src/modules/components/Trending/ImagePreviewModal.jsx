import { useEffect } from "react";
import { FiX } from "react-icons/fi";
import { 
  ModalOverlay, 
  ModalContent, 
  CloseButton, 
  ModalImage, 
  ImageInfo 
} from "../Trending/ImagePreviewModal.styles";

const ImagePreviewModal = ({ imageUrl, title, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <ModalOverlay className="open" onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose} aria-label="Close modal">
          <FiX size={24} />
        </CloseButton>
        <ModalImage src={imageUrl} alt={title} />
        <ImageInfo>{title}</ImageInfo>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ImagePreviewModal;