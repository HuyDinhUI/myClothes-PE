import { createContext, useState } from "react";

export const SearchContext = createContext();
export const SearchProvider = ({ children }) => {
  const [Content, setContent] = useState("");
  return (
    <SearchContext.Provider
      value={{ Content, setContent }}
    >
        {children}
    </SearchContext.Provider>
  );
};