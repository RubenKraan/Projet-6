import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import KasaLocation from "./pages/KasaLocation.js";
import Page404 from "./pages/Page404";
import { DataDone } from "./components/DataContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const App = () => {
  let basename = "/";
  if (window.location.hostname ==="http://localhost:3001/") {//change apres deploiment sur github
  }
  return (
    <BrowserRouter basename={basename}>
      <DataDone>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/location/:id" element={<KasaLocation />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </DataDone>
    </BrowserRouter>
  );
};

export default App;

