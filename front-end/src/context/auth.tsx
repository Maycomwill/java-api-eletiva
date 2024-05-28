import { createContext, ReactNode, useEffect, useState } from "react";
import { addDays, compareDesc } from "date-fns";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";

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
    const { data } = await axios.post("/api/user/login", {
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
    try {
      const { data } = await axios.post("/api/user", {
        email: formData.email,
        name: formData.name,
      });
      console.log(data);
      return toast.success("Usuário cadastrado com sucesso!")
    } catch (error) {
      if(error instanceof AxiosError){
        return toast.error(error.message)
      }
    }

  }

  return (
    <AuthContext.Provider value={{ auth, register, login }}>
      {children}
    </AuthContext.Provider>
  );
}
