import React, { createContext, useState, FC, ReactNode, useContext } from 'react';

type HelperContextProps = {
  token: string | undefined;
  setToken: React.Dispatch<React.SetStateAction<string | undefined>>;
  setTokenLocalStorage: (token: string) => void;
  getTokenLocalStorage: () => string | null;
};

const HelperContext = createContext<HelperContextProps | undefined>(undefined);

export const HelperContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | undefined>(undefined);

  const setTokenLocalStorage = (token: string) => {
    localStorage.setItem('token', token);
    setToken(token);
  };

  const getTokenLocalStorage = () => {
    return localStorage.getItem('token');
  };

  const helperContextValue: HelperContextProps = {
    token,
    setToken,
    setTokenLocalStorage,
    getTokenLocalStorage,
  };

  return (
    <HelperContext.Provider value={helperContextValue}>
      {children}
    </HelperContext.Provider>
  );
};

export default HelperContext;


export const useHelperContext = () => {
  const context = useContext(HelperContext);
  if (!context) {
    throw new Error('useHelperContext must be used within a HelperContextProvider');
  }
  return context;
};