import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Error from "./pages/error/Error";
import Work from "./pages/work/Work";
import Scrolltop from "./components/scrolltop/Scrolltop";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Scrolltop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/travaux/:id" element={<Work />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
