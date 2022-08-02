import "./App.css";

import Index from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import MyBlog from "./pages/myblog";
import Join from "./pages/join";
import Chat from "./pages/chat";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/myblog" element={<MyBlog />}></Route>
        <Route path="/join" element={<Join />}></Route>
        <Route path="/chat" element={<Chat />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
