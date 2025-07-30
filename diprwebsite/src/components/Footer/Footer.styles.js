import styled from "styled-components"
import theme from "../../theme/Theme"

export const FooterContainer = styled.footer`
  background-color: ${theme.colors.Footerbg};
  color: ${theme.colors.white};
  font-family: ${theme.fonts.body};
  padding: 0;
  overflow: hidden;
  width: 100%;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(1)} 0;
  }
`

export const FooterSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing(1)};
  padding: ${theme.spacing(3)};
  width: 100%;
  box-sizing: border-box;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${theme.spacing(2)};
    padding: ${theme.spacing(2)};
  }
  
  @media (max-width: 1024px) and (min-width: 770px) {
    padding: ${theme.spacing(2.5)};
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(1.5)};
  }
`

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  max-width: 100%;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  gap: ${theme.spacing(2)};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: ${theme.spacing(3)};
  }
`

export const Section = styled.div`
  flex: 2;
  padding: 0 ${theme.spacing(3)};
  text-align: justify;
  border-right: 1px solid ${theme.colors.white};
  display: flex;
  flex-direction: column;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    border-right: none;
    padding: 0 ${theme.spacing(1)};
    margin-bottom: ${theme.spacing(2)};
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 ${theme.spacing(0.5)};
  }
  
  @media (max-width: 1024px) and (min-width: 770px) {
    padding: 0 ${theme.spacing(2)};
  }
`

export const VisitorsSection = styled(Section)`
  border-right: none;
`

export const Title = styled.h3`
  font-size: ${theme.spacing(2)};
  font-weight: bold;
  margin-bottom: ${theme.spacing(2)};
  background-color: ${theme.colors.Footerstrip};
  padding: ${theme.spacing(1.5)};
  border-radius: 0 13px 0 13px;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.75)};
    padding: ${theme.spacing(1)};
  }
  
  @media (max-width: 1024px) and (min-width: 770px) {
    font-size: ${theme.spacing(1.875)};
    padding: ${theme.spacing(1.25)};
  }
`

export const LogoSection = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${theme.spacing(1)};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    margin-top: ${theme.spacing(2)};
  }
`

export const Logo = styled.img`
  max-width: ${theme.spacing(25)};
  height: auto;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    max-width: ${theme.spacing(18)};
  }
  
  @media (max-width: 1024px) and (min-width: 770px) {
    max-width: ${theme.spacing(22)};
  }
`

export const Text = styled.p`
  font-size: ${theme.spacing(1.75)};
  margin: ${theme.spacing(1)} 0;
  display: flex;
  align-items: center;
  gap: ${theme.spacing(1)};
  line-height: 1.5;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.5)};
    margin: ${theme.spacing(0.75)} 0;
  }
  
  @media (max-width: 1024px) and (min-width: 770px) {
    font-size: ${theme.spacing(1.625)};
  }
`

export const LinksList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing(1.5)} ${theme.spacing(1)};
  color: ${theme.colors.white};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing(1)};
  }
  
  @media (max-width: 1024px) and (min-width: 770px) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing(1.25)};
  }
`

export const LinkItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(1)};
  font-size: ${theme.spacing(1.75)};
  color: ${theme.colors.white};
  transition: all ${theme.transitions.fast};
  
  a {
    text-decoration: underline;
    text-decoration-color: ${theme.colors.white};
    text-decoration-thickness: 1px;
    color: inherit;
    transition: all ${theme.transitions.fast};
    
    &:hover {
      text-decoration-thickness: 2px;
      opacity: 0.9;
    }
  }
  
  &:hover {
    cursor: pointer;
    transform: translateX(2px);
  }
  
  &:focus-visible {
    outline: 2px solid ${theme.colors.primary};
    outline-offset: 2px;
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.5)};
    gap: ${theme.spacing(0.75)};
  }
  
  @media (max-width: 1024px) and (min-width: 770px) {
    font-size: ${theme.spacing(1.625)};
  }
`

export const FooterStripContainer = styled.div`
  padding: ${theme.spacing(1.5)} 0;
  text-align: center;
  background-color: ${theme.colors.Footerstrip};
  width: 100%;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(1)} 0;
  }
`

export const FooterStrip = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${theme.spacing(2)};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 ${theme.spacing(1)};
  }
`

export const StripText = styled.p`
  margin: 0;
  font-size: ${theme.spacing(1.75)};
  color: ${theme.colors.white};
  line-height: 1.4;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.5)};
  }
  
  @media (max-width: 1024px) and (min-width: 770px) {
    font-size: ${theme.spacing(1.625)};
  }
`
