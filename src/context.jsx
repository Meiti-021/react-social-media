import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { myData } from "./database";
import { myInfo } from "./myInfo";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState(myData);
  const [myInfoData, setMyInfo] = useState(myInfo);
  return (
    <AppContext.Provider value={{ data, setData, myInfoData }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
