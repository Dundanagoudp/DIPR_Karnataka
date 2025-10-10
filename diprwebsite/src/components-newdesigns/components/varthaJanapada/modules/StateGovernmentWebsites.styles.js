import styled from "styled-components"
import theme from "../../../../theme/Theme"

// ========================================
// GOVERNMENT WEBSITES SIDEBAR
// ========================================
export const SidebarCard = styled.aside`
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.medium};
  overflow: hidden;
  
  width: 100%;

  @media (max-width: ${theme.breakpoints.desktop}) {
    width: 100%;
  }
`

export const SidebarHeader = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: clamp(16px, 2vw, 18px);
  font-weight: 600;
  color: ${theme.colors.gray[800]};
  margin: 0;
  text-align: center;
  padding: ${theme.spacing1(4)};
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.06);
  position: relative;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing1(3)};
    font-size: clamp(15px, 1.8vw, 17px);
  }
`

export const SidebarList = styled.ul`
  list-style: none;
  margin: 0;
  padding: ${theme.spacing1(2)};
  display: flex;
  
  flex-direction: column;

  @media (max-width: ${theme.breakpoints.desktop}) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: ${theme.spacing1(2)};
    padding: ${theme.spacing1(3)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

export const SidebarItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${theme.spacing1(3)};
  padding: ${theme.spacing1(3)};
  cursor: pointer;
  transition: ${theme.transitions.fast};
  border-bottom: 1px solid ${theme.colors.gray[300]};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: ${theme.colors.gray[100]};
    transform: translateX(4px);
  }

  @media (max-width: ${theme.breakpoints.desktop}) {
    &:hover {
      transform: none;
    }
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: ${theme.spacing1(2)};
    padding: ${theme.spacing1(2)};
  }
`

export const Avatar = styled.div`
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  border-radius: ${theme.borderRadius.circle};
  background-image: url(${props => props.$src || '/state/sidebar.jpg'});
  background-size: cover;
  background-position: center;
  border: 2px solid ${theme.colors.gray[300]};

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 42px;
    height: 42px;
  }
`

export const ItemLabel = styled.span`
  font-family: ${theme.fonts.body};
  font-size: 14px;
  font-weight: 500;
  color: ${theme.colors.text};
  line-height: 1.4;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 13px;
  }
`

