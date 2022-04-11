import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Links from "./Links";
import Page from "./Page";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Links />} />
        <Route path="/:username" element={<Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
