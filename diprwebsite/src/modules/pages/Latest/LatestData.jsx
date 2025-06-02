import React, { useEffect, useState } from "react";
import LatestNewsRecommended from "../../components/Latestnews/allrecommended/LatestRecommended";
// import Loader from "../../../components/loder/Loder"; 
import CategoryNews from "../../components/Latestnews/allrecommended/CategoryNews";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  
  @media (max-width: 768px) {
    padding: 15px;
  }
  
  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const LatestData = () => {
  // const [isLoading, setIsLoading] = useState(true); 

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false); 
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, []);

  // if (isLoading) {
  //   return <Loader />;
  // }

  return (
    <Container>
      <LatestNewsRecommended />
      <CategoryNews />
    </Container>
  );
};

export default LatestData;