import { useContext, createContext } from "react";

export const AuthContext = createContext<AuthContextType>(
  {} as unknown as AuthContextType
);

export const useAuth = () => {
  return useContext(AuthContext);
};
