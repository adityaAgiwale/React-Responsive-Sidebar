import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModelOpen, setIsModelOpen] = useState(false);

  const modelOpen = () => {
    setIsModelOpen(true);
  };
  const modelClose = () => {
    setIsModelOpen(false);
  };

  const sidebarOpen = () => {
    setIsSidebarOpen(true);
  };
  const sidebarClose = () => {
    setIsSidebarOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isModelOpen,
        isSidebarOpen,
        modelOpen,
        modelClose,
        sidebarOpen,
        sidebarClose
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGloabalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
