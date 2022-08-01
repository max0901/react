import "./App.css";
import AddForm from "./page/addForm";
import Contents from "./page/contents";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Contents />}></Route>
        <Route path="/add" element={<AddForm />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
