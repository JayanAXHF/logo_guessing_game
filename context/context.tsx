"use client";
import { createContext, useContext, useState } from "react";

const AppContext = createContext<any>("");

export const AppProvider = ({ children }: any) => {
  const [correctModalOpen, setCorrectModalOpen] = useState<boolean>(false);
  const [incorrectModalOpen, setIncorrectModalOpen] = useState<boolean>(false);
  const [softTrigger, setSoftTrigger] = useState<boolean>(false);
  return (
    <AppContext.Provider
      value={{
        correctModalOpen,
        incorrectModalOpen,
        setCorrectModalOpen,
        setIncorrectModalOpen,
        softTrigger,
        setSoftTrigger,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
