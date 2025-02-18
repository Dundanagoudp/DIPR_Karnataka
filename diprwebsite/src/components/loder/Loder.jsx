import React from "react";
import { MoonLoader } from "react-spinners";
import { LoaderContainer } from "./Loder.styles";

const Loader = () => {
  return (
    <LoaderContainer>
      <MoonLoader color="#36d7b7" size={50} />
    </LoaderContainer>
  );
};

export default Loader;