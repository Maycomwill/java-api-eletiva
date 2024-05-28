import { ReactNode } from "react";
import { AuthContextProvider } from "../context/auth";

function ContextProvider({ children }: { children: ReactNode }) {
  return <AuthContextProvider>{children}</AuthContextProvider>;
}

export default ContextProvider;
