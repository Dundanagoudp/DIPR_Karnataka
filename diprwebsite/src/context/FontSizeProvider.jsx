import React, { createContext, useState } from "react";

export const FontSizeContext = createContext();

const FontSizeProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState(100);

  const changeFontSize = (amount) => {
    setFontSize((prevSize) => Math.max(50, Math.min(200, prevSize + amount)));
  };

  return (
    <FontSizeContext.Provider value={{ fontSize, changeFontSize }}>
      <div style={{ fontSize: `${fontSize}%` }}>
        {children}
      </div>
    </FontSizeContext.Provider>
  );
};

export default FontSizeProvider;
