import styled from "styled-components";
import theme from "../../../../theme/Theme";

export const MagazineContainer = styled.div`
  width: 100%;
  max-width: ${theme.spacing(50)};
  margin: auto;
  padding: ${theme.spacing(2)};
  background: ${theme.colors.background};
  font-family: ${theme.fonts.body};

  @media (max-width: ${theme.breakpoints.tablet}) {
    max-width: 100%;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    max-width: 100%;
    padding: ${theme.spacing(1)};
    padding-right: ${theme.spacing(1)};
  }
`;

export const MagazineHeader = styled.h2`
  font-size: ${theme.spacing(3)};
  color: ${theme.colors.black};
  font-family: ${theme.fonts.heading};

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.spacing(3.5)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(3)};
  }
`;

export const MagazineTabContainer = styled.div`
  display: flex;
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: ${theme.colors.primary} ${theme.colors.light};

  &::-webkit-scrollbar {
    height: ${theme.spacing(0.5)};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.primary};
    border-radius: ${theme.spacing(0.25)};
  }

  &::-webkit-scrollbar-track {
    background-color: ${theme.colors.light};
  }

  border-bottom: ${theme.spacing(0.25)} solid ${theme.colors.info};
  margin-bottom: ${theme.spacing(2)};

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: ${theme.spacing(1)};
  }
`;

export const MagazineTab = styled.button`
  background: none;
  border: none;
  padding: ${theme.spacing(1)} ${theme.spacing(2)};
  cursor: pointer;
  font-size: ${theme.spacing(2)};
  font-weight: bold;
  color: ${({ active }) => (active ? theme.colors.primary : theme.colors.black)};
  border-bottom: ${({ active }) => (active ? `${theme.spacing(0.375)} solid ${theme.colors.primary}` : "none")};
  white-space: nowrap;

  &:hover {
    color: ${theme.colors.primary};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.75)};
    padding: ${theme.spacing(0.75)};
  }
`;

export const MagazineVideoTab = styled(MagazineTab)`
  color: ${({ active }) => (active ? theme.colors.secondary : theme.colors.black)};
  border-bottom: ${({ active }) => (active ? `${theme.spacing(0.375)} solid ${theme.colors.secondary}` : "none")};
`;

export const MagazineContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(2)};
`;

export const MagazineCard = styled.div`
  display: flex;
  align-items: center;
  padding: ${theme.spacing(1)};
  background: ${theme.colors.light};
  border-radius: ${theme.spacing(1)};
  box-shadow: 0px ${theme.spacing(0.25)} ${theme.spacing(0.625)} rgba(0, 0, 0, 0.1);

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const MagazineVideoCard = styled(MagazineCard)`
  background: ${theme.colors.lightGray};
  box-shadow: 0px ${theme.spacing(0.25)} ${theme.spacing(0.625)} rgba(0, 0, 0, 0.2);
`;

export const MagazineImage = styled.img`
  width: ${theme.spacing(10)};
  height: ${theme.spacing(8)};
  object-fit: cover;
  border-radius: ${theme.spacing(1)};
  margin-right: ${theme.spacing(2)};

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 100%;
    height: auto;
    margin-right: 0;
    margin-bottom: ${theme.spacing(1)};
  }
`;

export const MagazineVideoThumbnail = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: ${theme.spacing(1)};
  margin-right: ${theme.spacing(2)};

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 100%;
    height: auto;
    margin-right: 0;
    margin-bottom: ${theme.spacing(1)};
  }
`;

export const MagazineDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MagazineTitle = styled.h4`
  font-size: ${theme.spacing(2)};
  font-weight: bold;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing(1)};
  font-family: ${theme.fonts.body};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.5)};
  }
`;

export const MagazineMeta = styled.span`
  font-size: ${theme.spacing(1.8)};
  font-weight: bold;
  padding: ${theme.spacing(0.5)} ${theme.spacing(2)};
  margin-top: ${theme.spacing(2)};
  margin-right: ${theme.spacing(2)};
  color: ${theme.colors.icons};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.2)};
  }
`;

export const MagazineMeta1 = styled.span`
  font-size: ${theme.spacing(1.8)};
  font-weight: bold;
  color: ${theme.colors.icons};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.2)};
  }
`;

export const MagazineTrendingBadge = styled.span`
  font-size: ${theme.spacing(1.25)};
  color: ${theme.colors.background};
  background: ${theme.colors.error};
  padding: ${theme.spacing(0.25)} ${theme.spacing(0.75)};
  border-radius: ${theme.spacing(0.5)};
  font-weight: bold;
`;

export const MagazineVideoCard1 = styled.div`
  align-items: center;
  padding: ${theme.spacing(2)};
  background: ${theme.colors.light};
  border-radius: ${theme.spacing(1)};
  cursor: pointer;
  box-shadow: 0px ${theme.spacing(0.25)} ${theme.spacing(0.625)} rgba(0, 0, 0, 0.1);
`;

export const MagazineVideoDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(3)};
`;

export const MagazineVideoMeta = styled.span`
  font-size: ${theme.spacing(2)};
  font-weight: bold;
  margin-top: ${theme.spacing(1)};
  color: ${theme.colors.icons};
`;

export const MagazineVideoMetacat = styled.span`
  font-size: ${theme.spacing(2.4)};
  font-weight: bold;
  color: ${theme.colors.icons};
`;

export const MagazineVideoTitle = styled.h2`
  font-size: ${theme.spacing(3.5)};
  color: ${theme.colors.black};
  font-family: ${theme.fonts.heading};
  font-weight: bold;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(2)};
  }
`;