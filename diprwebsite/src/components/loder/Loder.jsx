import React from "react";
import { MoonLoader } from "react-spinners";
import { LoaderContainer } from "./Loder.styles";

const Loader = () => {
  return (
    <LoaderContainer>
      <MoonLoader color="#1E88E5" size={40} />
    </LoaderContainer>
  );
};

export default Loader;