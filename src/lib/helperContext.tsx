// your context file (HelperContext.tsx)

import React, { createContext, useState, useContext, FC, ReactNode } from 'react';

type HelperContextProps = {
  token: string | undefined;
  setToken: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const HelperContext = createContext<HelperContextProps | undefined>(undefined);

export const HelperContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | undefined>(undefined);

  const helperContextValue: HelperContextProps = {
    token,
    setToken,
  };

  return (
    <HelperContext.Provider value={helperContextValue}>
      {children}
    </HelperContext.Provider>
  );
};

export const useHelperContext = () => {
  const context = useContext(HelperContext);
  if (!context) {
    throw new Error('useHelperContext must be used within a HelperContextProvider');
  }
  return context;
};