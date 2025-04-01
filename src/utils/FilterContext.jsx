import { createContext, useState } from "react";

export const FilterContext = createContext();
export const FilterProvider = ({ children }) => {
  const [Content, setContent] = useState("");
  const [Cate, setCate] = useState([]);
  return (
    <FilterContext.Provider
      value={{ Content, setContent,Cate, setCate}}
    >
        {children}
    </FilterContext.Provider>
  );
};


