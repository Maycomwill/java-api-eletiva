import { createContext, ReactNode, useEffect, useState } from "react";
import api from "../lib/axios";
import { addDays, compareDesc } from "date-fns";

export interface AuthContextProps {
  auth: boolean;
  login: (formData: { email: string; name: string }) => void;
  register: (formData: { email: string; name: string }) => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthContextProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    verifyLogin();
  }, []);
  const [auth, setAuth] = useState(false);
  function verifyLogin() {
    const stringToken = localStorage.getItem("java-token");
    if (stringToken) {
      const token = JSON.parse(stringToken);
      const date = new Date();
      const compare = compareDesc(token.exp, date);
      console.log(compare);

      if (compare === -1) {
        setAuth(true);
        return;
      }

      return setAuth(false);
    }
  }
  async function login(formData: { email: string; name: string }) {
    const date = new Date();
    const { data } = await api.post("/user/login", {
      email: formData.email,
      name: formData.name,
    });

    const newDate = addDays(date, 1);

    const dados = {
      id: data.id,
      name: data.name,
      email: data.email,
      exp: newDate,
    };

    localStorage.setItem("java-token", JSON.stringify(dados));
    setAuth(true);
  }
  async function register(formData: { email: string; name: string }) {
    const { data } = await api.post("/user", {
      email: formData.email,
      name: formData.name,
    });
    console.log(data);

    // const token = await localStorage.setItem("java-token", )
  }

  return (
    <AuthContext.Provider value={{ auth, register, login }}>
      {children}
    </AuthContext.Provider>
  );
}
