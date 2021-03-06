import React, { createContext, useCallback, useState, useContext } from "react";

import api from "../services/api";
import { v4 as uuidv4 } from "uuid";
import { useHistory } from "react-router-dom";

type User = {
  email: string;
  password: string;
};

interface AuthContextData {
  token: string;
  signIn: (user: User) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const history = useHistory();
  const [token, setToken] = useState<string>(() => {
    const token = localStorage.getItem("token") || "";

    return token;
  });

  const signIn = async (data: User) => {
    const token = await uuidv4();
    await api.post("/usuarios", {
      ...data,
      id: token,
    });

    localStorage.setItem("token", token);

    setToken(token);
  };

  const signOut = () => {
    localStorage.removeItem("token");

    setToken("");

    history.push("/");
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}
