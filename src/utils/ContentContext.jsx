import { createContext, useState } from "react";

export const ContentContext = createContext();
export const ContentProvider = ({ children }) => {
  const [Content, setContent] = useState("Info");
  return (
    <ContentContext.Provider
      value={{ Content, setContent }}
    >
        {children}
    </ContentContext.Provider>
  );
};
