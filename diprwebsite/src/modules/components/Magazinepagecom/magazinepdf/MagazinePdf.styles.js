// import styled from "styled-components";
// import theme from "../../../../theme/Theme";

// export const Container = styled.div`
//   margin: auto;
//   max-width: 1200px;
//   padding: ${theme.spacing(3)};
//   background: ${theme.colors.background};
//   font-family: ${theme.fonts.body};
//   border-radius: 12px;

//   @media (max-width: ${theme.breakpoints.tablet}) {
//     max-width: 100%;
//     padding: ${theme.spacing(2)};
//   }

//   @media (max-width: ${theme.breakpoints.mobile}) {
//     max-width: 100%;
//     padding: ${theme.spacing(1)};
//     margin: 0;
//   }
// `;

// export const Header = styled.h2`
//   font-size: ${theme.spacing(3.5)};
//   color: ${theme.colors.black};
//   font-family: ${theme.fonts.heading};
//   text-align: left;
//   margin-bottom: ${theme.spacing(4)};
//   letter-spacing: 1px;

//   @media (max-width: ${theme.breakpoints.tablet}) {
//     font-size: ${theme.spacing(3.5)};
//   }

//   @media (max-width: ${theme.breakpoints.mobile}) {
//     font-size: ${theme.spacing(3)};
//   }
// `;

// export const Content = styled.div`
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   gap: ${theme.spacing(4)};
//   margin-right: ${theme.spacing(4)};

//   @media (max-width: ${theme.breakpoints.tablet}) {
//     grid-template-columns: repeat(2, 1fr);
//     gap: ${theme.spacing(3)};
//   }

//   @media (max-width: ${theme.breakpoints.mobile}) {
//     grid-template-columns: repeat(2, 1fr); 
//     gap: ${theme.spacing(2)};
//     margin-right: 0;
//     padding: 0.5rem;
//   }
// `;

// export const MagazineCard = styled.div`
//   padding: ${theme.spacing(1)};
//   background: ${theme.colors.light};
//   border-radius: 8px;
//   cursor: pointer;
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
//   transition: transform 0.2s ease, box-shadow 0.2s ease;
//   display: flex;
//   flex-direction: column;
//   height: 100%; /* Ensure all cards have the same height */

//   @media (max-width: ${theme.breakpoints.mobile}) {
//     max-width: 100%;
//     padding: ${theme.spacing(1)};
//   }
// `;

// export const MagazineThumbnail = styled.img`
//   width: 100%;
//   height: 200px; /* Fixed height for all images */
//   object-fit: cover; /* Ensure the image covers the entire container */
//   border-radius: 8px;
//   margin-bottom: ${theme.spacing(1.5)};
// `;

// export const MagazineDetails = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: ${theme.spacing(0.5)};
//   flex-grow: 1; /* Ensure details take up remaining space */
// `;

// export const MagazineMeta = styled.span`
//   font-size: ${theme.spacing(1.95)};
//   font-weight: bold;
//   margin-top: ${theme.spacing(1)};
//   color: ${theme.colors.secondary};
// `;

// export const MagazineMetacat = styled.span`
//   font-size: ${theme.spacing(2)};
//   font-weight: bold;
//   display: flex;
//   align-items: center;
//   color: ${theme.colors.text};
//   gap: ${theme.spacing(1)};

//   @media (max-width: ${theme.breakpoints.mobile}) {
//     font-size: ${theme.spacing(1.5)};
//   }
// `;

// export const Title = styled.h4`
//   font-size: ${theme.spacing(2.2)};
//   font-weight: 600;
//   color: ${theme.colors.textDark};
//   margin-bottom: ${theme.spacing(1)};
//   font-family: ${theme.fonts.body};
//   line-height: 1.4;

//   @media (max-width: ${theme.breakpoints.mobile}) {
//     font-size: ${theme.spacing(1.8)};
//     margin-bottom: ${theme.spacing(0.5)};
//     line-height: 1.2;
//   }
// `;

// export const NewsMeta = styled.div`
//   display: flex;
//   margin-top: ${theme.spacing(2)};
//   font-size: ${theme.spacing(1.8)};
//   color: ${theme.colors.textLight};
//   font-family: ${theme.fonts.body};
//   gap: ${theme.spacing(1)};

//   @media (max-width: ${theme.breakpoints.mobile}) {
//     font-size: ${theme.spacing(1.7)};
//   }
// `;

// export const BookmarkIconWrapper = styled.div`
//   cursor: pointer;
//   margin-left: auto;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: ${({ isBookmarked }) =>
//     isBookmarked ? theme.colors.primary : theme.colors.textLight};
//   transition: color 0.2s ease;

//   &:hover {
//     color: ${theme.colors.primary};
//   }
// `;

// export const ReadMoreButton = styled.button`
//   background-color: ${theme.colors.primary};
//   color: ${theme.colors.white};
//   border: none;
//   border-radius: 20px;
//   padding: ${theme.spacing(0.6)} ${theme.spacing(1.2)};
//   font-size: ${theme.spacing(1.4)};
//   font-weight: 600;
//   margin-top: ${theme.spacing(1.5)};
//   width: 50%;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   gap: ${theme.spacing(0.6)};
//   transition: background-color 0.2s ease;

//   &:hover {
//     background-color: ${theme.colors.primaryDark};
//   }

//   @media (max-width: ${theme.breakpoints.mobile}) {
//     font-size: ${theme.spacing(1.2)};
//     padding: ${theme.spacing(0.5)} ${theme.spacing(1)};
//   }
// `;

// export const ReadMoreIcon = styled.span`
//   font-size: ${theme.spacing(1.6)};
// `;

import styled from "styled-components";
import theme from "../../../../theme/Theme";
 
export const Container = styled.div`
  margin: auto;
  max-width: 1200px;
  padding: ${theme.spacing(3)};
  background: ${theme.colors.background};
  font-family: ${theme.fonts.body};
  border-radius: 12px;
 
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(2)};
  }
`;
 
export const Header = styled.h2`
  font-size: ${theme.spacing(4)};
  color: ${theme.colors.black};
  font-family: ${theme.fonts.heading};
  text-align: left;
  margin-bottom: ${theme.spacing(3)};
 
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(3)};
  }
`;
 
export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${theme.spacing(3)};
 
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
 
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
 
export const MagazineCard = styled.div`
  padding: ${theme.spacing(2)};
  background: ${theme.colors.light};
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  display: flex;
  flex-direction: column;
 
`;
 
export const MagazineThumbnail = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;
 
export const MagazineDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(1)};
`;
 
export const NewsMeta = styled.div`
  display: flex;
  font-size: ${theme.spacing(1.8)};
  color: ${theme.colors.textLight};
  gap: ${theme.spacing(1)};
 
  @media (max-width: 768px) {
    font-size: ${theme.spacing(1.5)};
  }
`;
 
export const Title = styled.h4`
  font-size: ${theme.spacing(2.5)};
  font-weight: 600;
  color: ${theme.colors.textDark};
 
  @media (max-width: 768px) {
    font-size: ${theme.spacing(2)};
  }
`;
 
export const MagazineMetacat = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(1)};
`;
 
export const BookmarkIconWrapper = styled.div`
  cursor: pointer;
  color: ${({ isBookmarked }) => (isBookmarked ? theme.colors.primary : theme.colors.textLight)};
  transition: color 0.2s ease;
 
  &:hover {
    color: ${theme.colors.primary};
  }
`;
 
export const ReadMoreButton = styled.button`
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: none;
  padding: ${theme.spacing(1)};
  border-radius: 20px;
  font-size: ${theme.spacing(1.5)};
  display: flex;
  align-items: center;
  gap: ${theme.spacing(0.5)};
  cursor: pointer;
 
  &:hover {
    background: ${theme.colors.primaryDark};
  }
`;
 
export const ReadMoreIcon = styled.span`
  font-size: ${theme.spacing(1.8)};
`;

