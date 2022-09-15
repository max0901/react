import "./App.css";
import Page from "./pages/page";
import ContextProvider from "./reducer/userReducer";
function App() {
  return (
    <ContextProvider>
      <Page />
    </ContextProvider>
  );
}

export default App;
