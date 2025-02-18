import React, { useContext } from "react";
import { FontSizeContext } from "./FontSizeProvider";

const SomeComponent = () => {
  const { fontSize, changeFontSize } = useContext(FontSizeContext);

  return (
    <div style={{ fontSize: `${fontSize}%` }}>
      <p>Current Font Size: {fontSize}%</p>
      <button onClick={() => changeFontSize(-10)}>Decrease Font Size</button>
      <button onClick={() => changeFontSize(10)}>Increase Font Size</button>
    </div>
  );
};

export default SomeComponent;
