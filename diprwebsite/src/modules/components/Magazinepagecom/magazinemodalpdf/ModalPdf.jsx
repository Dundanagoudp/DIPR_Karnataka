"use client"
import { useState } from "react"
import { FaDownload, FaTimes } from "react-icons/fa"
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
  Spinner
} from "../magazinemodalpdf/PdfModaldesign.styles"

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
              <FaDownload size={16} /> Download
            </DownloadButton>
            <IconButton onClick={onClose} aria-label="Close">
              <FaTimes size={20} />
            </IconButton>
          </ButtonGroup>
        </ModalHeader>
        <ModalContent>
          {loading && (
            <LoadingContainer>
              <Spinner />
            </LoadingContainer>
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