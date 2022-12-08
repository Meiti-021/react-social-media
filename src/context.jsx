import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { myData } from "./database";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState(myData);
  return (
    <AppContext.Provider value={{ data, setData }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
