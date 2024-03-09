import { createContext, useContext, ReactNode, useState } from "react";

type OauthContextType = {
  idToken: string | null;
  setToken: (token: string | null) => void;
};

const OauthContext = createContext<OauthContextType | undefined>(undefined);

export const OauthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [idToken, setIdToken] = useState<string | null>(null);

  const setToken = (token: string | null) => {
    setIdToken(token);
  };

  return <OauthContext.Provider value={{ idToken, setToken }}>{children}</OauthContext.Provider>;
};

export const useOauth = () => {
  const context = useContext(OauthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
