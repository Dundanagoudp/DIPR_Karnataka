import React from "react";
import { ClipLoader } from "react-spinners";
import { LoaderContainer } from "./ApiLoders.styles";

const Loader = () => {
  return (
    <LoaderContainer>
      <ClipLoader  color="#1E88E5" size={40} />
    </LoaderContainer>
  );
};

export default Loader;