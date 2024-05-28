import ContextProvider from "./hooks";
import AppRoutes from "./routes/app.routes";

function App() {
  return (
    <ContextProvider>
      <AppRoutes />
    </ContextProvider>
  );
}

export default App;
