import React from 'react';
import { Routes, Route, HashRouter } from "react-router-dom";
import i18n from './i18n';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";

function App() {
  return (
  <React.StrictMode>
    <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </React.StrictMode>
  );
}

export default App;