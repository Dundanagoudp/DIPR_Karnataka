import styled from "styled-components"
import theme from "../../../theme/Theme"

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: ${theme.spacing(2)};
`

export const ModalContainer = styled.div`
  background-color: white;
  border-radius: ${theme.spacing(1)};
  width: 90%;
  height: 90%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0 ${theme.spacing(1)} ${theme.spacing(3)} rgba(0, 0, 0, 0.3);
`

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing(1.5)};
  border-bottom: 1px solid #eee;
`

export const ModalTitle = styled.h3`
  margin: 0;
  font-size: ${theme.spacing(2.25)};
  color: ${theme.colors.black};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.75)};
  }
`

export const ModalContent = styled.div`
  flex: 1;
  overflow: hidden;
`

export const PDFFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing(0.75)};
  border-radius: 50%;
  color: ${theme.colors.black};
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`

export const DownloadButton = styled.a`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(0.5)};
  padding: ${theme.spacing(0.75)} ${theme.spacing(1.5)};
  background-color: ${theme.colors.button};
  color: ${theme.colors.white};
  text-decoration: none;
  border-radius: ${theme.spacing(0.5)};
  font-size: ${theme.spacing(1.5)};
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${theme.colors.primary};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.25)};
    padding: ${theme.spacing(0.5)} ${theme.spacing(1)};
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${theme.spacing(1)};
  align-items: center;
`