import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Box } from "@mui/material";

import MainPage from "./components/Pages/Main/Main";
import Header from "./components/Parts/Header/Header.jsx";
import Footer from "./components/Parts/Footer/Footer.jsx";
import Portfolio from "./components/Pages/Portfolio/Portfolio";
import Contacts from "./components/Pages/Contact/Contact";
import { useEffect } from "react";

function App() {

  useEffect(() => {
     document.body.style = " background-image: url('/images/back.webp'); background-size: 100% 100%;  background-repeat: no-repeat;";
  }, [])
  return (
    <Router>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} /> 
            <Route path="/portfolio" element={<Portfolio />} /> 
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
          <Footer />
    </Router>
  );
}

export default App;
