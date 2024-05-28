import { Toaster } from "sonner";
import ContextProvider from "./hooks";
import AppRoutes from "./routes/app.routes";

function App() {
  return (
    <ContextProvider>
      <AppRoutes />
      <Toaster richColors />
    </ContextProvider>
  );
}

export default App;
