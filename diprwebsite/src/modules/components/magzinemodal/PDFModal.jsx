import { useState } from "react"
import { X, Download } from "react-feather"
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  ModalContent,
  PDFFrame,
  IconButton,
  DownloadButton,
  ButtonGroup,
  LoadingContainer,
  Spinner,
  SkeletonLoader,
  SkeletonHeader,
  SkeletonContent
} from "../magzinemodal/PDFModal.styles"

const PDFModal = ({ isOpen, onClose, pdfUrl, title }) => {
  const [loading, setLoading] = useState(true)

  if (!isOpen) return null

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>{title || "Magazine PDF"}</ModalTitle>
          <ButtonGroup>
            <DownloadButton href={pdfUrl} download target="_blank">
              <Download size={16} />
              Download
            </DownloadButton>
            <IconButton onClick={onClose} aria-label="Close">
              <X size={24} />
            </IconButton>
          </ButtonGroup>
        </ModalHeader>
        <ModalContent>
          {loading && (
            <SkeletonLoader>
              <SkeletonHeader />
              <SkeletonContent />
            </SkeletonLoader>
          )}
          <PDFFrame
            src={pdfUrl}
            title={title || "Magazine PDF"}
            onLoad={() => setLoading(false)}
            style={{ display: loading ? "none" : "block" }}
          />
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  )
}

export default PDFModal